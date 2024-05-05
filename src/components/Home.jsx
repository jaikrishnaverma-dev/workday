import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./Home/Navbar";
import { Box, Button, Container, Modal } from "@mui/material";
import JobCards from "./Home/JobCards";
import { useDispatch, useSelector } from "react-redux";
import About from "./common/About";
import { fetchJobs } from "../features/mainSlice";
import { filter_callbacks } from "../utils/tools";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  maxWidth: 650,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  overflowY: "scroll",
  borderRadius: 5,
  p: 4,
};

const Home = () => {
  const {
    mainSlice: { jobs, loading, totalCount },
    filterSlice,
  } = useSelector((data) => data);
  const [triggerdReq, setTriggredReq] = useState(0);
  const [state, setstate] = useState({
    limit: 10,
    offset: 0,
  });
  const [modal, setModal] = React.useState({
    open: false,
    job: {},
  });
  const triggerElement = useRef(null);
  const dispatch = useDispatch();

  //to open modal for perticular job
  const handleOpen = (job) => setModal({ open: true, job: job });

  // to close modal
  const handleClose = () => setModal({ open: false, job: {} });

  //load more call with increment in offset
  const loadMore = () => {
    setstate((prev) => {
      const offset = jobs.length ? prev.offset + 10 : 0;
      dispatch(
        fetchJobs({
          limit: 10,
          offset,
        })
      );
      return { limit: 10, offset };
    });
  };

  // trigger with intersection and make api call
  useEffect(() => {
    if (triggerdReq !== 0 && (jobs.length == 0 || !loading)) {
      loadMore();
    }
  }, [triggerdReq]);

  /**
   * logic to trigger infinity api call when user reach to end of cards list for infinity scroll
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTriggredReq((prev) => !prev);
        }
      },
      { threshold: 0.3 }
    );

    if (triggerElement.current) {
      observer.observe(triggerElement.current);
    }

    return () => {
      if (triggerElement.current) {
        observer.unobserve(triggerElement.current);
      }
    };
  }, [triggerElement]);

  /**
   * if filter available then we have to apply that on our data by this logic
   * used useMemo Hook to prevent unnecessary re-rending
   */
  const filterdJobList = useMemo(() => {
    return jobs.filter((item) => {
      let flag = [];
      Object.entries(filterSlice).forEach(([key, filter], i) => {
        if (filter?.key && filter.value.length) {
          flag.push(false);
          const data = filter.value.find((check) =>
            filter_callbacks[filter.key](item, check.val)
          );
          flag[flag.length - 1] = data ? true : false;
        }
      });
      return flag.findIndex((el) => el == false) == -1;
    });
  }, [jobs, filterSlice]);

  return (
    <>
      <Container maxWidth="lg" sx={{ padding: "30px 0px" }}>
        <Navbar />
        <div>
          <div className="cards-wrapper">
            {filterdJobList.map((job) => (
              <JobCards
                key={job?.jdUid}
                job={job}
                handleShowMore={handleOpen}
              />
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <span
              style={{ position: "absolute", top: "50%" }}
              ref={triggerElement}
            ></span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
              marginBottom: "15px",
            }}
          >
            {totalCount === jobs.length && totalCount !== 0 ? (
              <>NO MORE DATA AVAILABLE</>
            ) : (
              <>
                {filterdJobList.length ? (
                  <Button
                    sx={{ color: "black" }}
                    variant="text"
                    onClick={loadMore}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Please Wait..."}
                  </Button>
                ) : (
                  <> {loading ? "Loading..." : "No Search Found!"}</>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
      <Modal
        open={modal.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {Object.keys(modal.job).length > 0 ? <About job={modal.job} /> : "NA"}
        </Box>
      </Modal>
    </>
  );
};

export default Home;

import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./Navbar";
import { Box, Button, Container, Modal } from "@mui/material";
import JobCards from "./JobCards";
import { useDispatch, useSelector } from "react-redux";
import About from "./About";
import RefreshIcon from "@mui/icons-material/Refresh";
import { fetchJobs } from "../redux/mainSlice";
import { noRef } from "../utilities/tools";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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
  const triggerElement = useRef(null);
  const [triggerdReq, setTriggredReq] = useState(0);
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    limit: 10,
    offset: 0,
  });
  const [modal, setModal] = React.useState({
    open: false,
    job: {},
  });
  const handleOpen = (job) => setModal({ open: true, job: job });
  const handleClose = () => setModal({ open: false, job: {} });
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
  // const fetchdata = async () => {
  //   dispatch(
  //     fetchJobs({
  //       limit: state.limit,
  //       offset: state.offset,
  //     })
  //   );
  // };
  useEffect(() => {
    if (triggerdReq !== 0 && (jobs.length == 0 || !loading)) {
      loadMore();
    }
  }, [triggerdReq]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTriggredReq((prev) => !prev);
        }
      },
      { threshold: 1 }
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

  const filterdJobList = useMemo(() => {
    return jobs.filter((item) => {
      let flag = [];
      Object.entries(filterSlice).forEach(([key, filter], i) => {
        if (filter?.key && filter.value.length) {
          flag.push(false);
          const data = filter.value.find((check) =>
            filter.filter_callback(item, check.val)
          );
          flag[flag.length - 1] = data ? true : false;
        }
      });
      return flag.findIndex((el) => el == false) == -1;
    });
  }, [jobs, filterSlice]);

  return (
    <Container maxWidth="lg" sx={{ padding: "30px 0px" }}>
      <Navbar />
      <div>
        <div className="cards-wrapper">
          {filterdJobList.map((job) => (
            <JobCards key={job?.jdUid} job={job} handleShowMore={handleOpen} />
          ))}
        </div>
        <div
          ref={triggerElement}
          className="w-100"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            marginBottom: "15px",
          }}
        >
          {totalCount == jobs.length && totalCount !== 0 ? (
            <>NO MORE DATA AVAILABLE</>
          ) : (
            <>
              {filterdJobList.length ? (
                <Button
                  sx={{ color: "black" }}
                  variant="text"
                  onClick={loadMore}
                  disabled={loading}
                  // startIcon={loading ? "" : <RefreshIcon />}
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
    </Container>
  );
};

export default Home;

import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Box, Button, Container, Modal } from "@mui/material";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import About from "./About";
import RefreshIcon from "@mui/icons-material/Refresh";
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
  const [modal, setModal] = React.useState({
    open: false,
    job: {},
  });

  const handleOpen = (job) => {
    setModal({ open: true, job: job });
  };
  const handleClose = () => setModal({ open: false, job: {} });

  const { jobs, loading } = useSelector((data) => data.mainSlice);

  return (
    <Container maxWidth="lg">
      <Navbar />
      <div>
        <div className="cards-wrapper">
          {jobs.map((job) => (
            <JobCards key={job?.jdUid} job={job} handleShowMore={handleOpen} />
          ))}
        </div>
        <div
          className="w-100"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            marginBottom: "10px",
          }}
        >
          <Button
            variant="text"
            loading={true}
            startIcon={loading ? "" : <RefreshIcon />}
          >
            {loading ? "Loading..." : "Load more"}
          </Button>
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

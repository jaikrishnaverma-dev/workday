import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Container, Grid } from "@mui/material";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import mainSlice from "../redux/mainSlice";
const Home = () => {
  const { jobs, loading } = useSelector((data) => {
    console.log({ data });
    return data.mainSlice;
  });
  useEffect(() => {
    console.log({ jobs });
  }, [jobs]);

  return (
    <Container maxWidth="xl">
      <Navbar />
      <div style={{marginTop:"30px"}}>
        {loading ? (
          <>Loading...</>
        ) : (
          <Grid container spacing={2}>
            {jobs.map((el) => (
              <Grid xs={12} md={4}>
                <JobCards />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </Container>
  );
};

export default Home;

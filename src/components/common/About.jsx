import React from "react";

const About = ({ job }) => {
  return (
    <div className="w-100 about">
      <h5 className="about_heading">About Company</h5>
      <p className="about_description">{job?.jobDetailsFromCompany}</p>
    </div>
  );
};

export default About;

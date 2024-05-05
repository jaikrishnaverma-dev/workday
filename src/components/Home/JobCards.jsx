import * as React from "react";
import About from "../common/About";

export default function JobCards({ job, handleShowMore }) {

  return (
    <div className="card">
      <div>
        <div className="card_timing">
          <span>⏳ Posted 2 days ago</span>
        </div>
        <div className="w-100 card_company">
          <div className="card_company_logo">
            <img height={"100%"} src={job?.logoUrl} alt="" />
          </div>
          <div className="card_company_details">
            <h3>{job?.companyName}</h3>
            <h2 className="card_jobrole">{job?.jobRole}</h2>
            <p className="card_joblocation">{job?.location}</p>
          </div>
        </div>
        <p className="card_salary">
          Estimated Salary: ₹{job?.minJdSalary} - {job?.maxJdSalary} LPA{" "}
          {job?.salaryCurrencyCode ? "(" + job.salaryCurrencyCode + ")" : ""}
        </p>
        <div className="card_about_wrapper">
          <About job={job} />
          <div className="show_more">
            <button onClick={() => handleShowMore(job)}>Show more</button>
          </div>
        </div>
        {job?.minExp && (
          <div className="card_experience">
            <h5>Minimum Experience</h5>
            <h2>{job?.minExp} Years </h2>
          </div>
        )}
        {job?.maxExp && (
          <div className="card_experience">
            <h5>Maximum Experience</h5>
            <h2>{job?.maxExp} Years</h2>
          </div>
        )}
      </div>
      <div className="card_actions">
        <a className="btn card_apply w-100" target="_blank" href={job?.jdLink}>
          ⚡ <span className="link-underline">Easy Apply</span>
        </a>
        <a
          className="btn card_referral w-100"
          href="mailto:jaikrishnaverma@gmail.com?subject=Regarding%20Frontend"
        >
          <div className="circle">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback css-13y7ul3"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="PersonIcon"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </div>
          Ask For Referral
        </a>
      </div>
    </div>
  );
}

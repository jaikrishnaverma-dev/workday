import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import FixedTags from "./selections/Roles";
import { tempOptions } from "../utilities/temp";
import { postReq } from "../utilities/tools";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../redux/mainSlice";

const Navbar = () => {
  const dispatch =useDispatch()
  const [value, setValue] = React.useState([]);

 const fetchdata= async ()=>{
  dispatch(fetchJobs({
    "limit": 10,
    "offset": 0
   }))
  }
  useEffect(()=>{
    fetchdata()
  },[])

  return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "start",
          flexWrap: "wrap",
        }}
      >
        {[2, 3, 4, 67, 7, 8].map((el, i) => (
          <div style={{ minWidth: "200px" }}>
            <FixedTags
              label={"Jai"}
              placeholder={"tempOptions"}
              options={tempOptions}
              value={value}
              setValue={setValue}
            />
          </div>
        ))}
      </div>

  );
};

export default Navbar;

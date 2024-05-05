import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import FixedTags from "./selections/Roles";
import { tempOptions } from "../utilities/temp";
import { postReq } from "../utilities/tools";

const Navbar = () => {
  const [value, setValue] = React.useState([]);

 const fetchdata= async ()=>{
     const data = await postReq("https://api.weekday.technology/adhoc/getSampleJdJSON");
     if(data.success){
      const{totalCount,jdList}= data

     }
console.log({data});
  }
  useEffect(()=>{
    fetchdata()
  },[])
  
  return (
    <div style={{ margin: 50 }}>
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
    </div>
  );
};

export default Navbar;

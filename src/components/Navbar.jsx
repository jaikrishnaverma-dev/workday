import React, { useState } from "react";
import { tempOptions } from "../utilities/temp";
import { useDispatch, useSelector } from "react-redux";
import { initialFilterState, noRef, toTitle } from "../utilities/tools";
import SelectionFilter from "./selections/SelectionFilter";
import { setFilter } from "../redux/filterSlice";

const Navbar = () => {
  const {  filterSlice } = useSelector((data) => data);
  const dispatch=useDispatch()
  const applyFilter = (key, newval) => {
    dispatch(setFilter({key,value:newval}))
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexWrap: "wrap",
      }}
    >
      {Object.entries(filterSlice).map(([key, val]) => (
        <div style={{ minWidth: "190px" }} key={key}>
          <SelectionFilter
            label={toTitle(key)}
            placeholder={toTitle(key)}
            options={val.options}
            value={val.value}
            setValue={(newval) => applyFilter(key, newval)}
          />
        </div>
      ))}
    </div>
  );
};

export default Navbar;

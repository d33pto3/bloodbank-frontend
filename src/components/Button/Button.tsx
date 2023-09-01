import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ name, classes }: any) => {
  return <div className={`${classes}`}>{name}</div>;
};

export default CustomButton;

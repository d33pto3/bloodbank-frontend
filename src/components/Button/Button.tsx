import React from "react";
import { Button } from "@mui/material";

interface ICustomButton {
  name: string;
  classes?: string;
  onClickFn?: React.MouseEventHandler<HTMLButtonElement> | any;
}

const CustomButton = ({ name, classes, onClickFn }: ICustomButton) => {
  return (
    <div className={`${classes}`} onClick={onClickFn}>
      {name}
    </div>
  );
};

export default CustomButton;

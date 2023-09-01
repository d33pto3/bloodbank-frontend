import React from "react";

interface ILabel {
  title: string;
  classes?: string;
}

const Label = (props: ILabel) => {
  const { title, classes } = props;
  return <div className={`${classes}`}>{title}</div>;
};

export default Label;

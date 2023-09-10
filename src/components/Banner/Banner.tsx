import React from "react";
import Label from "../Label/Label";

const Banner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center w-[80%] min-h-[200px] bg-white rounded-[18px] mt-[25px]">
        <Label title="Banner" classes="py-10 my-10 text-[20px]" />
      </div>
    </div>
  );
};

export default Banner;

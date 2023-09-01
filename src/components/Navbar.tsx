import React from "react";
import Label from "./Label/Label";
import CustomButton from "./Button/Button";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-8 bg-gray-400">
      <div className="flex justify-start w-[55%]">
        <Label title="BloodBank" classes="text-[32px] text-[green] p-4" />
        <div className="flex justify-between gap-10 ml-8 py-6 px-2">
          <Label title="Home" classes="text-[#000] text-[20px]" />
          <Label title="Donate Blood" classes="text-[#000] text-[20px]" />
          <Label title="About Us" classes="text-[#000] text-[20px]" />
          <Label title="Help" classes="text-[#000] text-[20px]" />
        </div>
      </div>
      <div className="flex w-[25%] justify-end gap-4">
        <CustomButton
          name="Login"
          classes="text-[20px] text-black border-2 border-gray-200 bg-green-400 rounded-md px-4 py-1 shadow-md"
        />
        <CustomButton
          name="Signup"
          classes="text-[20px] text-black border-2 border-gray-200 bg-red-400 rounded-md px-4 py-1 mr-4"
        />
      </div>
    </div>
  );
};

export default Navbar;

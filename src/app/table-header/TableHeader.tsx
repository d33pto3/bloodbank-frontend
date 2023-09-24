import Button from "@/components/Button/Button";
import React from "react";

const TableHeader = () => {
  return (
    <div className="flex flex-row-reverse gap-[26px] mb-[17px]">
      <Button
        name="Plasma Donor"
        classes="py-[7px] px-[60px] bg-white text-[32px] border border-[black] rounded-[12px] cursor-pointer"
      />
      <Button
        name="Donor"
        classes="py-[7px] px-[60px] bg-primary text-[32px] border border-primary rounded-[12px] cursor-pointer text-white font-semibold"
      />
    </div>
  );
};

export default TableHeader;

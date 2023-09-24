import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const HeaderTable = () => {
  return (
    <TableHead>
      <TableRow className="bg-black">
        <TableCell className="text-white text-[16px] font-bold ml-4">
          Name
        </TableCell>
        <TableCell align="center" className="text-white text-[16px] font-bold">
          Blood Group
        </TableCell>
        <TableCell align="center" className="text-white text-[16px] font-bold">
          Area
        </TableCell>
        <TableCell align="center" className="text-white text-[16px] font-bold">
          Last Donated
        </TableCell>
        <TableCell align="center" className="text-white text-[16px] font-bold">
          Contacts
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default HeaderTable;

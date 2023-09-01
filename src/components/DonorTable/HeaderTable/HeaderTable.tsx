import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const HeaderTable = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="right">Name</TableCell>
        <TableCell align="right">Blood Group</TableCell>
        <TableCell align="right">Area</TableCell>
        <TableCell align="right">Last Donated</TableCell>
        <TableCell align="right">Contacts</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default HeaderTable;

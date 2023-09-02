import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const HeaderTable = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">Name</TableCell>
        <TableCell align="center">Blood Group</TableCell>
        <TableCell align="center">Area</TableCell>
        <TableCell align="center">Last Donated</TableCell>
        <TableCell align="center">Contacts</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default HeaderTable;

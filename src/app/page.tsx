"use client";
import HeaderTable from "@/components/DonorTable/HeaderTable/HeaderTable";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  blood_type: string;
  last_donated: string;
  area: string;

  // ... other properties
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const result = await axios({
        method: "get",
        url: "http://localhost:8001/api/users",
      });
      console.log(result?.data);
      setUsers(result.data?.users);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full">
      <h1 className="text-[red] text-2xl">Donor List</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <HeaderTable />
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user?.name}
                </TableCell>
                <TableCell align="right">{user?.blood_type}</TableCell>
                <TableCell align="right">{user?.last_donated}</TableCell>
                <TableCell align="right">{user?.area}</TableCell>
                <TableCell align="right">90 days ago</TableCell>
                <TableCell align="right">01777777</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

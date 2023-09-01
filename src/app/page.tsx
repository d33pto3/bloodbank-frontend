"use client";
import Banner from "@/components/Banner/Banner";
import HeaderTable from "@/components/DonorTable/HeaderTable/HeaderTable";
import Label from "@/components/Label/Label";
import {
  Checkbox,
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

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

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
    <div className="flex-col">
      <Banner />
      <div className="flex justify-center items-center">
        <div className="w-[20%]">
          <div>
            <Label title="Blood Group" classes="text-green-600" />
            <div className="grid grid-cols-2">
              {bloodGroups.map((bg, index) => (
                <div key={index}>
                  <Checkbox />
                  <span>{bg}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mr-4">
            <Label title="Area" />
            <hr />
            <div className="flex mt-4">
              <Label title="Zilla:" classes="text-green-600 p-2 text-[20px]" />
              <select placeholder="Select Zilla" className="p-2 ml-4">
                <option>Dhaka</option>
                <option>Barishal</option>
                <option>Rajshahi</option>
                <option>Khulna</option>
              </select>
            </div>
            <div className="flex mt-4">
              <Label
                title="Upazilla/Thana:"
                classes="text-green-600 p-2 text-[20px]"
              />
              <select placeholder="Select Upazilla/Thana" className="p-2 ml-4">
                <option>Dhaka</option>
                <option>Barishal</option>
                <option>Rajshahi</option>
                <option>Khulna</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-[60%]">
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
      </div>
    </div>
  );
}

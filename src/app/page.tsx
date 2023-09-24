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
  TableRow,
} from "@mui/material";
import { IUser } from "./interfaces/User";
import { useEffect, useState } from "react";
import { getUsersApi } from "@/api/usersApi";
import TableHeader from "./table-header/TableHeader";
import { useRouter } from "next/navigation";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function Home() {
  const router = useRouter();

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const users: IUser[] = await getUsersApi();
      setUsers(users);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={`flex-col`}>
      <Banner />
      <div className="flex justify-center items-center">
        <div className="w-[20%]">
          <div className="px-5 py-3 bg-white mr-[25px] rounded-[18px] mt-[100px]">
            <Label
              title="Blood Group"
              classes="text-green-600 text-center px-[26px] px-[8px] text-[30px] bg-primary rounded-[12px] text-white font-semibold tracking-wide"
            />
            <div className="max-w-[200px] grid grid-cols-2 mt-2">
              {bloodGroups.map((bg, index) => (
                <div key={index}>
                  <Checkbox />
                  <span>{bg}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 py-3 bg-white mr-[25px] rounded-[18px] mt-[35px]">
            <Label
              title="Area"
              classes="text-green-600 text-center px-[26px] px-[8px] text-[30px] bg-primary rounded-[12px] text-white font-semibold tracking-wide"
            />
            <div className="flex mt-4 p-1">
              <Label title="District:" classes="text-[16px]" />
              <select
                placeholder="oeu"
                className="ml-4 flex-grow bg-[#D9D9D9] text-[#AAAAAA] rounded-md"
              >
                <option disabled selected>
                  Select District
                </option>
                <option className="text-black">Dhaka</option>
                <option className="text-black">Barishal</option>
                <option className="text-black">Rajshahi</option>
                <option className="text-black">Khulna</option>
              </select>
            </div>
            <div className="flex mt-4 p-1">
              <Label title="Upazilla:" classes="text-[16px]" />
              <select className="ml-4 flex-grow bg-[#D9D9D9] text-[#AAAAAA] rounded-md">
                <option disabled selected>
                  Select Upazilla
                </option>
                <option className="text-black">Dhaka</option>
                <option className="text-black">Barishal</option>
                <option className="text-black">Rajshahi</option>
                <option className="text-black">Khulna</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-[60%]">
          <TableHeader />
          <div className="rounded">
            <TableContainer
              component={Paper}
              sx={{
                marginBottom: 6,
              }}
            >
              <Table
                sx={{
                  minWidth: 650,
                  paddingX: "4px",
                  borderRadius: "18px",
                }}
                aria-label="simple table"
              >
                <HeaderTable />
                <TableBody
                  sx={{
                    borderRadius: "10px",
                  }}
                >
                  {users.map((user) => (
                    <TableRow
                      key={user.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        onClick={() => router.push(`userDashboard/${user?.id}`)}
                      >
                        {user?.name}
                      </TableCell>
                      <TableCell align="center" className="text-red">
                        {user?.blood_type}
                      </TableCell>
                      <TableCell align="center">
                        {user?.district ?? "N/A"}
                      </TableCell>
                      <TableCell align="center">
                        {user?.last_donated ?? 0} days ago
                      </TableCell>
                      <TableCell align="center">
                        {user?.phoneNo ?? "N/A"}
                      </TableCell>
                      {/* <TableCell align="right">01777777</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

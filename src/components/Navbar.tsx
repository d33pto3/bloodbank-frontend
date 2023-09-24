"use client";

import React, { useEffect, useState } from "react";
import Label from "./Label/Label";
import CustomButton from "./Button/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/app/contexts/AuthContexts";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IconContext } from "react-icons";

const Navbar = () => {
  const router = useRouter();
  const { user, isAuthenticated, login: loginAuth } = useAuth();
  const authenticated = isAuthenticated();

  useEffect(() => {
    const token = localStorage.getItem("bloodToken");
    const user: any = localStorage.getItem("user");
    if (token) {
      loginAuth(user);
    }
  }, [loginAuth]);

  return (
    <div className="sticky font-poppins top-0 z-50 bg-white bg-opacity-100">
      <div className="flex justify-center border-b-[1px] border-black border-opacity-30 shadow-md items-center gap-8 p-3">
        <div className="flex justify-start w-[55%]">
          <div
            className="h-[62px] w-44 relative ml-4 cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              src="/logo.png"
              alt="bloodbank logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex justify-between gap-10 ml-8 py-6 px-2">
            <Label title="Home" classes="text-[#000] text-[20px]" />
            <Label title="Donate Blood" classes="text-[#000] text-[20px]" />
            <Label title="About Us" classes="text-[#000] text-[20px]" />
            <Label title="Help" classes="text-[#000] text-[20px]" />
          </div>
        </div>
        <div className="flex w-[25%] justify-end gap-4">
          {!authenticated ? (
            <>
              <CustomButton
                name="Login"
                classes="text-[20px] text-black px-4 py-1 mr-4 cursor-pointer border-[1px] border-[#000] rounded-md"
                onClickFn={() => router.push("/login")}
              />
              <CustomButton
                name="Signup"
                classes="text-[20px] text-black border-[1px] border-[#000] rounded-md px-4 py-1 shadow-sm bg-primary cursor-pointer text-white"
                onClickFn={() => router.push("/signup")}
              />
            </>
          ) : (
            <>
              <IconContext.Provider
                value={{
                  // color: "blue",
                  style: { height: "32px", width: "32px" },
                }}
              >
                <button>
                  <FaRegMessage />
                </button>
              </IconContext.Provider>

              <IconContext.Provider
                value={{
                  // color: "blue",
                  style: { height: "38px", width: "38px" },
                }}
              >
                <button className="mb-1 ml-[8px]">
                  <IoMdNotifications />
                </button>
              </IconContext.Provider>

              <button className="border-[1px] border-black rounded-full overflow-hidden w-[50px] h-[50px] ml-[8px] relative">
                <Image
                  alt="bloodbank image navbar"
                  src="/logo.png"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

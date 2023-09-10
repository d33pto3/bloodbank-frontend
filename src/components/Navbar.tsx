"use client";

import React from "react";
import Label from "./Label/Label";
import CustomButton from "./Button/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/app/contexts/AuthContexts";

const Navbar = () => {
  const router = useRouter();
  // const { user, login, logout, isAuthenticated } = useAuth();

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
          <CustomButton
            name="Login"
            classes="text-[20px] text-black px-4 py-1 mr-4 cursor-pointer hover:text-primary"
            onClickFn={() => router.push("/login")}
          />
          <CustomButton
            name="Signup"
            classes="text-[20px] text-black border-2 border-[#000] rounded-md px-4 py-1 shadow-sm hover:bg-primary cursor-pointer hover:text-white hover:border-black"
            onClickFn={() => router.push("/signup")}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

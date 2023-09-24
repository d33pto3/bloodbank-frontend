import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center bg">
      <div className="border-[1px] border-[#000] rounded-[18px] my-[40px] px-[80px] bg-white shadow-md">
        <form className="text-left my-[55px] mt-[50px] text-[20px]">
          <div className="mb-[25px]">
            <label htmlFor="username" className="block">
              User Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-[100%] rounded-[10px] bg-[#D9D9D9] pl-[25px] pr-[180px] py-[22px] mt-[5px]"
            />
          </div>
          <div className="mb-[25px]">
            <label htmlFor="username" className="block">
              Blood Group
            </label>
            {/* <input
              type="text"
              placeholder="BG+ve"
              className="w-[100%] rounded-[10px] bg-[#D9D9D9] pl-[28px] pr-[262px] py-[22px] mt-[5px]"
            /> */}
            <select
              placeholder="BG+ve"
              className="w-[100%] rounded-[10px] bg-[#D9D9D9] pl-[25px] pr-[180px] py-[22px] mt-[5px]"
            >
              <option>A+</option>
              <option>A+</option>
            </select>
          </div>
          <div className="mb-[25px] flex">
            <div className="w-[50%] mr-8">
              <label htmlFor="District" className="block">
                District
              </label>
              <select className="w-[100%] rounded-[10px] bg-[#D9D9D9] pl-[25px] pr-[180px] py-[22px] mt-[5px]">
                <option>Dhaka</option>
                <option>Rangpur</option>
              </select>
            </div>
            <div className="w-[50%]">
              <label htmlFor="Thana" className="block">
                Thana
              </label>
              <select className="w-[100%] rounded-[10px] bg-[#D9D9D9] pl-[25px] pr-[180px] py-[22px] mt-[5px]">
                <option>Dhaka</option>
                <option>Rangpur</option>
              </select>
            </div>
          </div>

          <div className="mb-[25px]">
            <label htmlFor="password" className="block">
              Email
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              className="w-[100%] rounded-[10px] bg-[#D9D9D9] pl-[25px] pr-[180px] py-[22px] mt-[5px]"
            />
          </div>

          <div className="mb-[25px]">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-[100%] rounded-[10px] bg-[#D9D9D9] pl-[25px] pr-[180px] py-[22px] mt-[5px]"
            />
          </div>
          <div className="mb-[25px]">
            <label htmlFor="password" className="block">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-[100%] rounded-[10px] bg-[#D9D9D9] pl-[25px] pr-[180px] py-[22px] mt-[5px]"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white rounded px-[120px] py-[10px] bg-[#34A853]"
          >
            Submit
          </button>
          <div className="mt-[10px] flex justify-between items-center text-[18px]">
            <div>
              <input type="checkbox" className="mr-[4px] cursor-pointer" />
              <span>Already have an account?</span>
            </div>
            <span className="text-primary font-poppins cursor-pointer px-2">
              Sign In
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

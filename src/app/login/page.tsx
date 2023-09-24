"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { loginApi } from "@/api/loginApi";
import { useAuth } from "../contexts/AuthContexts";

const Login = () => {
  const router = useRouter();
  const { login: loginAuth, user } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);

  console.log(user);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      console.log("goto home", router);
      router.push("/");
    }
    setLoading(false);
  }, []);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const { email, password } = data;
    handleLogin({ email, password });
  };

  const handleLogin = async ({ email, password }: any) => {
    try {
      const res: any = await loginApi({ email, password });
      const { user, bloodToken } = res;
      if (res) {
        loginAuth(user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("bloodToken", bloodToken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <>loading...</>
      ) : (
        <>
          <div className="flex justify-center">
            <div className="border-[1px] border-[#000] rounded-[18px] my-[40px] px-[80px] bg-white shadow-md">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-left my-[55px] mt-[50px] text-[20px]"
              >
                <div className="mb-[25px]">
                  <label htmlFor="password" className="block">
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="user@example.com"
                    className="w-[100%] rounded-[10px] bg-[#D9D9D9] pl-[25px] pr-[180px] py-[22px] mt-[5px]"
                  />
                </div>

                <div className="mb-[30px]">
                  <label htmlFor="password" className="block">
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="********"
                    className="w-[100%] rounded-[10px] bg-[#D9D9D9] pl-[25px] pr-[200px] py-[22px] mt-[5px]"
                  />
                </div>

                <div className="mt-[35px] mb-[80px] flex justify-between items-center text-[18px]">
                  <div>
                    <input
                      type="checkbox"
                      className="mr-[4px] cursor-pointer"
                    />
                    <span>Remember me</span>
                  </div>
                  <span className="text-primary font-poppins cursor-pointer px-2">
                    Forgot password?
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full text-white rounded px-[120px] py-[10px] bg-[#34A853]"
                >
                  Login
                </button>

                <div className="mt-[15px] mb-[90px] flex justify-center items-center gap-4 text-[18px]">
                  <span>{`Don't have an account`}</span>
                  <span
                    className="text-primary font-poppins cursor-pointer px-2"
                    onClick={() => router.push("/")}
                  >
                    Sign Up
                  </span>
                </div>

                <div className="flex items-center mb-[10px]">
                  <hr className="flex-grow border-t border-black" />
                  <div className="mx-2 text-black">Or</div>
                  <hr className="flex-grow border-t border-black" />
                </div>

                <div className="flex justify-center border-[1px] border-black rounded-[10px] py-[10px] px-[65] mt-[28px]">
                  <span className="mt-1 mr-[9px]">
                    <FcGoogle />
                  </span>
                  <span className="text-[20px]">Continue With Google</span>
                </div>
                <div className="flex justify-center border-[1px] border-black rounded-[10px] py-[16px] px-[65] mt-[28px]">
                  <span className="mr-[9px]">
                    <FaFacebookSquare />
                  </span>
                  <span className="text-[14px]">Continue With Facebook</span>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;

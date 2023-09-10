import apiCall from "./axiosApi";

export const loginApi = async ({ email, password }: any) => {
  try {
    const loginResult: any = await apiCall("/api/login", "POST", {
      email,
      password,
    });
    return loginResult;
  } catch (err) {
    console.log(err);
  }
};

import { IUser } from "@/app/interfaces/User";
import apiCall from "./axiosApi";

export const getUsersApi = async () => {
  try {
    const result: any = await apiCall("/api/users");
    return result?.users;
  } catch (err) {
    console.log(err);
  }
};

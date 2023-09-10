import axios, { AxiosResponse, AxiosError } from "axios";

// Function to make API calls with a base URL
const apiCall = async <T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data?: any
): Promise<T> => {
  try {
    // Define your base URL here or fetch it from environment variables
    const baseURL = "http://localhost:8001";

    const response: AxiosResponse<T> = await axios({
      method,
      url: `${baseURL}${endpoint}`,
      data,
    });

    return response?.data;
  } catch (error) {
    // Handle errors here
    throw error as AxiosError;
  }
};

export default apiCall;

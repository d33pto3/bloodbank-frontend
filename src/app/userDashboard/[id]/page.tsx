import useAuth from "@/utils/auth";
import React from "react";

const Dashboard = ({ id }: any) => {
  // useAuth();

  return (
    <div>
      <h1>Welcome to user dashboard of {id}</h1>
    </div>
  );
};

export default Dashboard;

"use client";
import React, { useEffect, useState } from "react";
import DashboardCss from "./page.module.css";
import useSWR from "swr";
import Users from "./users/page";
import Login from "./(auth)/login/page";
import Register from "./(auth)/register/page";
import Link from "next/link";
import Settings from "./settings/page";
import PrivacyPolicies from "./privacyPolicies/privacyPolicies";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading;
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts",
  //   fetcher
  // );

  // console.log(data);

  // Statically click function
  // // const [selectedTab, setSelectedTab] = useState("dashboard");

  // // const renderContent = () => {
  // //   switch (selectedTab) {
  // //     case "dashboard":
  // //       return <h1>Dashboard Content</h1>;
  // //     case "register":
  // //       return <Register />;
  // //     case "settings":
  // //       return <Settings />;
  // //     case "privacyPolicies":
  // //       return <PrivacyPolicies />;
  // //     // Add more cases for additional sidebar items
  // //     default:
  // //       return null; // Handle cases not covered above
  // //   }
  // };

  const [selectedTab, setSelectedTab] = useState("dashboard"); // Initialize with the default tab

  const renderContent = () => {
    switch (selectedTab) {
      case "dashboard":
        return <h1>Dashboard Content</h1>;
      case "register":
        return <Register />;
      case "login":
        return <Login />;
      case "settings":
        return <Settings />;
      case "privacyPolicies":
        return <PrivacyPolicies />;
      default:
        return null; // Handle cases not covered above
    }
  };

  return (
    <div className={DashboardCss.dashboard_full_div}>
      <div className="grid grid-cols-12 gap-5 ">
        <div className="col-span-2 grid justify-center items-center h-full">
          <button onClick={() => setSelectedTab("register")}>Register</button>
          <br />
          <button onClick={() => setSelectedTab("login")}>Login</button>
          <br />
          <button onClick={() => setSelectedTab("settings")}>Settings</button>
          <br />
          <button onClick={() => setSelectedTab("privacyPolicies")}>
            Privacy Policies
          </button>
        </div>

        <div className="col-span-10">
          {" "}
          <h1>{renderContent()}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

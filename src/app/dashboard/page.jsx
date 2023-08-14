"use client";
import React, { useEffect, useState } from "react";
import DashboardCss from "./page.module.css";
import useSWR from "swr";
import Users from "./users/page";
import Login from "./(auth)/login/page";
import Register from "./(auth)/register/page";

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

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  console.log(data);

  return (
    <div className={DashboardCss.dashboard_full_div}>
      {/* <Users /> */}
      <Login />
      <Register />
    </div>
  );
};

export default Dashboard;

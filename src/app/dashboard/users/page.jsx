"use client";
import React, { useEffect, useState } from "react";
import UserCss from "./page.module.css";
import axios from "axios";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/user").then((res) => {
      console.log("res", res.data);
      setAllUsers(res.data.all_users);
    });
  }, []);
  return (
    <div className={UserCss.all_users_blog}>
      {allUsers.map((UserItem, i) => {
        return (
          <div>
            <p>{UserItem.name}</p>
            <p>{UserItem.designation}</p>
            <p>{UserItem.address}</p>
            {/* <Image
                src={item.imageUrl}
                alt="blog-iamge"
                width={200}
                height={200}
              /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Users;

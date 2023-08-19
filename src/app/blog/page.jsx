"use client";
import React, { useEffect, useState } from "react";

import BlogCss from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { Inter, Roboto, Poppins } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "force-cache",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const Blog = () => {
  // const data = await getData();

  // const [showFullContent1, setShowFullContent1] = useState(false);
  // const [showFullContent2, setShowFullContent2] = useState(false);
  // const [showFullContent3, setShowFullContent3] = useState(false);

  // const toggleContent1 = () => {
  //   setShowFullContent1(!showFullContent1);
  // };
  // const toggleContent2 = () => {
  //   setShowFullContent2(!showFullContent2);
  // };
  // const toggleContent3 = () => {
  //   setShowFullContent3(!showFullContent3);
  // };

  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/post").then((res) => {
      console.log("res", res.data);
      setAllPosts(res.data.all_posts);
    });
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleSeeMoreClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="w-3/5 -mx-10 mt-10 md:scroll-py-0 md:w-4/5 md:mx-auto md:mt-10 md:overflow-hidden ">
      <h1 className={BlogCss.blogs_tag}>All Blogs</h1>
      <div className="md:items-center md:justify-center md:flex-col md:flex-auto">
        {allPosts.map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div className={BlogCss}>
              <div>
                <h2 className={BlogCss.single_blog_tag}>{item.title}</h2>
                <h5>{item.desc}</h5>
                {/* <Image
                src={item.imgUrl}
                alt="blog-image"
                width={300}
                height={200}
              /> */}
                {isExpanded && (
                  <h6 className={BlogCss.single_blog_para}>{item.para}</h6>
                )}
                <p
                  onClick={() => handleSeeMoreClick(index)}
                  className={BlogCss.see_more_button}
                >
                  {isExpanded ? "See Less" : "See More"}
                </p>
                {/* <Image
                src={item.imgUrlSec}
                alt="js-image"
                width={400}
                height={200}
              /> */}

                {/* <Image
                src={item.imgUrlThird}
                alt="js-image"
                width={400}
                height={200}
              /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

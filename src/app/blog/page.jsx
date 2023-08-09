import React from "react";
import BlogCss from "./page.module.css";
import Link from "next/link";
const Blog = () => {
  return (
    <div className={BlogCss.mainContainer}>
      <Link href="/testId" className={BlogCss.Container}>
        <div className="">Hello</div>
      </Link>
    </div>
  );
};

export default Blog;

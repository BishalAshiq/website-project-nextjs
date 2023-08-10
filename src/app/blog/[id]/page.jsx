import React from "react";
import BlogIdCss from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPage = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={BlogIdCss.container}>
      <div className={BlogIdCss.top}>
        <div className={BlogIdCss.info}>
          <h1 className={BlogIdCss.title}>{data.title}</h1>
          <p className={BlogIdCss.desc}>{data.desc}</p>
          <div className={BlogIdCss.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={BlogIdCss.avatar}
            />
            <span className={BlogIdCss.username}>{data.username}</span>
          </div>
        </div>
        <div className={BlogIdCss.imageContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={BlogIdCss.image}
          />
        </div>
      </div>
      <div className={BlogIdCss.content}>
        <p className={BlogIdCss.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPage;

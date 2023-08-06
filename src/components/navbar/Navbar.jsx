"use client";
import NavbarCss from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={NavbarCss.container}>
      <Link href="/" className={NavbarCss.logo}>
        <Image
          src="/p-1.png" // Path to your image file in the public directory
          alt="Portfolio Logo"
          width={200} // Set the desired width
          height={50} // Set the desired height
        />
      </Link>

      <div className={NavbarCss.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={NavbarCss.link}>
            {link.title}
          </Link>
        ))}
        <button
          className={NavbarCss.logout}
          onClick={() => {
            console.log("Log out ");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

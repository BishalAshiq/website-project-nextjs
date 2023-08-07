import React from "react";
import ContactCss from "./page.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={ContactCss.container}>
      <h1 className={ContactCss.title}>Let's Keep in Touch</h1>
      <div className={ContactCss.content}>
        <div className={ContactCss.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={ContactCss.image}
          />
        </div>
        <form className={ContactCss.form}>
          <input type="text" placeholder="name" className={ContactCss.input} />
          <input type="text" placeholder="email" className={ContactCss.input} />
          <textarea
            className={ContactCss.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          {/* <button url="#"  /> */}
          <button text="Send" className={ContactCss.contact_submit_button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

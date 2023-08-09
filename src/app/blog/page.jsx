"use client";
import React, { useState } from "react";
import BlogCss from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { Inter, Roboto, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Blog = () => {
  const [showFullContent1, setShowFullContent1] = useState(false);
  const [showFullContent2, setShowFullContent2] = useState(false);
  const [showFullContent3, setShowFullContent3] = useState(false);

  const toggleContent1 = () => {
    setShowFullContent1(!showFullContent1);
  };
  const toggleContent2 = () => {
    setShowFullContent2(!showFullContent2);
  };
  const toggleContent3 = () => {
    setShowFullContent3(!showFullContent3);
  };

  return (
    <div className={BlogCss.container}>
      <div className={BlogCss.all_blog_div}>
        <h1 className={BlogCss.title}>All Blogs</h1>
        <div className={BlogCss.single_div}>
          <h4>Java Script</h4>
          <Image
            className={BlogCss.image}
            src="/blog-js.jpg"
            width={400}
            height={100}
          />
          {showFullContent1 && (
            <p
              className={`${BlogCss.blog_des} ${
                showFullContent1 ? BlogCss.showFull : ""
              }`}
            >
              <strong>Closures:</strong> Closure is a combination of a function
              that stays together with references to its surrounding state like
              lexical environment. Basically, a closure gives you access to an
              outer function scope from an inner function. In Js, closures are
              created every time a function is created at functions creation
              time. Running this code has exactly the same effect as the
              previous example of the init() function above. What’s different
              (and interesting) is that the displayName() inner function is
              returned from the outer function before being executed. At first
              glance, it might seem unintuitive that this code still works. In
              some programming languages, the local variables within a function
              exist for just the duration of that function’s execution. Once
              make fun() finishes executing, you might expect that the name
              variable would no longer be accessible. However, because the code
              still works as expected, this is obviously not the case in
              JavaScript.The reason is that functions in JavaScript form
              closures. A closure is the combination of a function and the
              lexical environment within which that function was declared. This
              environment consists of any local variables that were in-scope at
              the time the closure was created. In this case, myFunc is a
              reference to the instance of the function displayName that is
              created when makeFunc is run. The instance of displayName
              maintains a reference to its lexical environment, within which the
              variable name exists. For this reason, when myFunc is invoked, the
              variable name remains available for use, and “Mozilla” is passed
              to alert.
            </p>
          )}
          <h3>Lexical Scoping:</h3>
          <Image
            className={BlogCss.image}
            src="/blog-js-2.jpg"
            width={400}
            height={200}
          />
          {showFullContent1 && (
            <p>
              init() creates a local variable called name and a function called
              displayName(). The displayName() function is an inner function
              that is defined inside init() and is available only within the
              body of the init() function. Note that the displayName() function
              has no local variables of its own. However, since inner functions
              have access to the variables of outer functions, displayName() can
              access the variable name declared in the parent function, init().
              Prototypical inheritance: Javascript is a prototypical-based OOP
              language. After Es6 coming javascript allowed to functioning
              prototyping inheritance. Basically, It’s a data field shared,
              copied to other pages, and state of data values. This sharing
              option makes it easy that come from prototyping which is in ES6.
              Javascript is the most common of the prototype-capable languages
              and its capabilities are relatively unique. When used
              appropriately, prototypical inheritance in javascript is a
              powerful tool that can save hours of coding. Today, we want to get
              you acquainted with prototypical inheritance in Javascript to get
              you up to date with the ES6 capabilities.
            </p>
          )}
          <br />

          <button className={BlogCss.seeMoreButton} onClick={toggleContent1}>
            {showFullContent1 ? "See Less" : "See More"}
          </button>
        </div>
        <div className={BlogCss.single_div}>
          <h4>Advantages of using React:-</h4>
          <Image
            className={BlogCss.image}
            src="/blog-js.jpg"
            width={400}
            height={100}
          />
          {showFullContent2 && (
            <p
              className={`${BlogCss.blog_des} ${
                showFullContent2 ? BlogCss.showFull : ""
              }`}
            >
              <strong>Gentle learning curve:</strong> React has a gentle
              learning curve when compared to frameworks like Angular. Anyone
              with little knowledge of JavaScript can start building web
              applications using React.
              <strong>Reusable Components:</strong> React uses component-based
              architecture for developing applications. components are
              independent and reusable bits of code. These components can be
              shared across various applications having similar functionality.
              The re-use of components increases the pace of development.
              <strong>Friendly SEO:</strong> React allows developers to develop
              engaging user interfaces that can be easily navigated in various
              search engines. It also has server-side rendering, which boosts
              the SEO of an app.
              <strong>Using Virtual DOM Improve Efficiency:</strong> React uses
              DOM to render the view. As the name suggests, virtual DOM is a
              virtual representation of the real Dom. Each time the data changes
              in react app, a new virtual DOM gets created. creating a virtual
              DOM is much faster than rendering the UI inside the browser.
              Therefore, with the use of virtual DOM, the efficiency of the app
              improves.
              <strong>About JSX:-</strong> JSX full meaning is JavaScript XML.
              It allows us to write HTML inside JavaScript and place them in the
              DOM without using functions like appendChild() or createElement().
            </p>
          )}
          <h3>Lexical Scoping:</h3>
          <Image
            className={BlogCss.image}
            src="/blog-js-2.jpg"
            width={400}
            height={200}
          />
          {showFullContent2 && (
            <p>
              init() creates a local variable called name and a function called
              displayName(). The displayName() function is an inner function
              that is defined inside init() and is available only within the
              body of the init() function. Note that the displayName() function
              has no local variables of its own. However, since inner functions
              have access to the variables of outer functions, displayName() can
              access the variable name declared in the parent function, init().
              Prototypical inheritance: Javascript is a prototypical-based OOP
              language. After Es6 coming javascript allowed to functioning
              prototyping inheritance. Basically, It’s a data field shared,
              copied to other pages, and state of data values. This sharing
              option makes it easy that come from prototyping which is in ES6.
              Javascript is the most common of the prototype-capable languages
              and its capabilities are relatively unique. When used
              appropriately, prototypical inheritance in javascript is a
              powerful tool that can save hours of coding. Today, we want to get
              you acquainted with prototypical inheritance in Javascript to get
              you up to date with the ES6 capabilities.
            </p>
          )}
          <br />

          <button className={BlogCss.seeMoreButton} onClick={toggleContent2}>
            {showFullContent2 ? "See Less" : "See More"}
          </button>
        </div>
        <div className={BlogCss.single_div}>
          <h4>Java Script</h4>
          <Image
            className={BlogCss.image}
            src="/blog-js.jpg"
            width={400}
            height={100}
          />
          {showFullContent3 && (
            <p
              className={`${BlogCss.blog_des} ${
                showFullContent3 ? BlogCss.showFull : ""
              }`}
            >
              <strong>Closures:</strong> Closure is a combination of a function
              that stays together with references to its surrounding state like
              lexical environment. Basically, a closure gives you access to an
              outer function scope from an inner function. In Js, closures are
              created every time a function is created at functions creation
              time. Running this code has exactly the same effect as the
              previous example of the init() function above. What’s different
              (and interesting) is that the displayName() inner function is
              returned from the outer function before being executed. At first
              glance, it might seem unintuitive that this code still works. In
              some programming languages, the local variables within a function
              exist for just the duration of that function’s execution. Once
              make fun() finishes executing, you might expect that the name
              variable would no longer be accessible. However, because the code
              still works as expected, this is obviously not the case in
              JavaScript.The reason is that functions in JavaScript form
              closures. A closure is the combination of a function and the
              lexical environment within which that function was declared. This
              environment consists of any local variables that were in-scope at
              the time the closure was created. In this case, myFunc is a
              reference to the instance of the function displayName that is
              created when makeFunc is run. The instance of displayName
              maintains a reference to its lexical environment, within which the
              variable name exists. For this reason, when myFunc is invoked, the
              variable name remains available for use, and “Mozilla” is passed
              to alert.
            </p>
          )}
          <h3>Lexical Scoping:</h3>
          <Image
            className={BlogCss.image}
            src="/blog-js-2.jpg"
            width={400}
            height={200}
          />
          {showFullContent3 && (
            <p>
              init() creates a local variable called name and a function called
              displayName(). The displayName() function is an inner function
              that is defined inside init() and is available only within the
              body of the init() function. Note that the displayName() function
              has no local variables of its own. However, since inner functions
              have access to the variables of outer functions, displayName() can
              access the variable name declared in the parent function, init().
              Prototypical inheritance: Javascript is a prototypical-based OOP
              language. After Es6 coming javascript allowed to functioning
              prototyping inheritance. Basically, It’s a data field shared,
              copied to other pages, and state of data values. This sharing
              option makes it easy that come from prototyping which is in ES6.
              Javascript is the most common of the prototype-capable languages
              and its capabilities are relatively unique. When used
              appropriately, prototypical inheritance in javascript is a
              powerful tool that can save hours of coding. Today, we want to get
              you acquainted with prototypical inheritance in Javascript to get
              you up to date with the ES6 capabilities.
            </p>
          )}
          <br />

          <button className={BlogCss.seeMoreButton} onClick={toggleContent3}>
            {showFullContent3 ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

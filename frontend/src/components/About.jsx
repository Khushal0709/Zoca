import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Zoca is a vibrant and cozy restaurant known for its eclectic 
            blend of modern and traditional cuisine. Nestled in the heart
             of the city, it offers a welcoming ambiance with rustic decor
              and warm lighting that create a perfect setting for both 
              casual dining and special occasions. The menu at Zoca is
               a culinary journey that showcases a variety of fresh, locally 
               sourced ingredients, transforming them into dishes that are
                both innovative and comforting. From the aromatic spices of 
                their signature dishes to the refreshing cocktails crafted
                 by expert mixologists, Zoca promises an unforgettable dining 
                 experience that delights the senses and leaves guests eager 
                 to return.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

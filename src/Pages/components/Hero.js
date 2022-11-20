import React from "react";
import heroImg from "../../assets/section 1/heroSection.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const data = [
    {
      heading1: "Unlimited movies, TV ",
      heading2: "shows and more. ",
      line2: "Watch anywhere. Cancel anytime.",
      line3:
        "Ready to watch? Enter your email to create or restart your membership.",
    },
  ];
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "fixed",
        }}
      >
        <div className="herocontent">
          {data.map((item) => {
            return (
              <>
                <h1>{item.heading1}</h1>
                <h1>{item.heading2}</h1>
                <h2>{item.line2}</h2>
                <h3>{item.line3}</h3>
              </>
            );
          })}
          <form action="">
            <input type="text" placeholder="Email address" />
            <Link to="/" className="started">
              Get Started
            </Link>
          </form>
        </div>
      </div>
      <div className="gradient-color"></div>
    </>
  );
};

export default Hero;

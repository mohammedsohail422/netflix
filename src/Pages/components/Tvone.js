import React from "react";
import tvOne from "../../assets/section2/tv.png";
import tvVideo from "../../assets/section2/tv.mp4";

const Tvone = ({ dynamic }) => {
  return (
    <>
      <section className="tv-one">
        <div className="left">
          <h2>{dynamic.heading}</h2>
          <h3>{dynamic.subHeading}</h3>
        </div>
        <div className="right">
          <div className="tv-img">
            {/* <img src={tvOne} alt="" /> */}
            <img src={dynamic.imag} salt="" style={{ width: dynamic.width }} />
          </div>
          <div className={`video ${dynamic.cls} `}>
            <video src={tvVideo} autoPlay loop muted></video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tvone;

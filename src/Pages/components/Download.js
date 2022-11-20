import React from "react";
import mobile from "../../assets/section4/image.jpg";
import stranger from "../../assets/section4/boxshot.png";
import progress from "../../assets/section4/downloadProgress.gif";

const Download = () => {
  return (
    <>
      <div className="download">
        <div className="download-left">
          <div className="mobile">
            <img src={mobile} alt="" />
          </div>
          <div className="progress-container">
            <div className="stranger">
              <img src={stranger} alt="" />
            </div>
            <div>
              <h4>Stranger Things</h4>
              <p>Downloading...</p>
            </div>
            <div className="progress">
              <img src={progress} alt="progress..." />
            </div>
          </div>
        </div>
        <div className="download-right">
          <h2>Download your shows to watch offline.</h2>
          <h3>
            Save your favourites easily and always have something to watch.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Download;

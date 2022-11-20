import React from "react";
import childrenPic from "../../assets/section6/children.png";

const ChildrenProfile = () => {
  return (
    <>
      <div className="children-profile">
        <div className="child-left">
          <div style={{ width: "100%" }}>
            <img src={childrenPic} alt="" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="child-right head">
          <h2>Create profiles for children.</h2>
          <h3>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </h3>
        </div>
      </div>
    </>
  );
};

export default ChildrenProfile;

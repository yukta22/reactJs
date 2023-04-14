import React from "react";
import Image from "./Image";
import Personal from "./Personal";
import Collage from "./Collage";

const StudentIdCard = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <div className="main">
        <div className="personal">
          <Image i={props.data} />
        </div>
        <div className="personal2">
          <Personal p={props.data.Personal} />
        </div>
      </div>
      <br />
      {children}
      <div className="collage">
        <Collage c={props.data.Collage} />
      </div>
      <button
        type="button"
        style={{
          background: "#0099ff",
          padding: "5px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Delete me
      </button>
    </div>
  );
};

export default StudentIdCard;

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
    </div>
  );
};

export default StudentIdCard;

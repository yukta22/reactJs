import React from "react";
import Image from "./Image";
import Personal from "./Personal";
import Collage from "./Collage";
import { useState } from "react";

const StudentIdCard = ({ data, deleteStudent }) => {
  const [showdetails, setShowdata] = useState(true);

  return (
    <div className="container">
      <div className="main">
        <div className="personal">
          <Image i={data} />
        </div>
        {showdetails && (
          <div className="personal2">
            <Personal p={data.Personal} />
          </div>
        )}
      </div>
      <br />
      {showdetails ? (
        <div className="collage">
          <Collage c={data.Collage} />
        </div>
      ) : null}
      <button
        className="button"
        type="button"
        onClick={() => deleteStudent(data.Personal.Id)}
      >
        Delete
      </button>
      <button className="showbutton" onClick={() => setShowdata(!showdetails)}>
        {showdetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default StudentIdCard;

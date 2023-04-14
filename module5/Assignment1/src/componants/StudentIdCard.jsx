import React from "react";
import Image from "./Image";
import Personal from "./Personal";
import Collage from "./Collage";

const StudentIdCard = ({ data, deleteStudent }) => {
  console.log(data);
  return (
    <div className="container">
      <div className="main">
        <div className="personal">
          <Image i={data} />
        </div>
        <div className="personal2">
          <Personal p={data.Personal} />
        </div>
      </div>
      <br />
      <div className="collage">
        <Collage c={data.Collage} />
      </div>
      <button
        className="button"
        type="button"
        onClick={() => deleteStudent(data.Personal.Id)}
      >
        Delete
      </button>
    </div>
  );
};

export default StudentIdCard;

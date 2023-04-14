import React from "react";

const Collage = (props) => {
  return (
    <article className="person">
      <div>
        <p>
          Collage Name: <span>{props.c.collegeName}</span>
        </p>
        <p>
          Collage Address: <span>{props.c.collegeAddress}</span>
        </p>
        <p>
          Collage Logo: <span>{props.c.collegeLogo}</span>
        </p>
      </div>
    </article>
  );
};

export default Collage;

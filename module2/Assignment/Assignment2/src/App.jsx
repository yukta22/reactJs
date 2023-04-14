import React from "react";
import StudentIdCard from "./componants/StudentIdCard";

const App = () => {
  const data = [
    {
      img: "https://randomuser.me/api/portraits/thumb/men/61.jpg",
      Personal: {
        Id: 1,
        firstName: "John",
        lastName: "doe",
        DOB: "22-01-01",
      },
      Collage: {
        collegeName: "abc",
        collegeAddress: "123 Main Street",
        collegeLogo: "logo",
      },
    },
    {
      img: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
      Personal: {
        Id: 2,
        firstName: "John1",
        lastName: "doe1",
        DOB: "22-01-01",
      },
      Collage: {
        collegeName: "abc1",
        collegeAddress: "1231 Main Street",
        collegeLogo: "logo",
      },
    },
    {
      img: "https://randomuser.me/api/portraits/thumb/men/60.jpg",
      Personal: {
        Id: 3,
        firstName: "John2",
        lastName: "doe2",
        DOB: "22-01-01",
      },
      Collage: {
        collegeName: "abc2",
        collegeAddress: "1232 Main Street",
        collegeLogo: "logo",
      },
    },
    {
      img: "https://randomuser.me/api/portraits/thumb/men/36.jpg",
      Personal: {
        Id: 4,
        firstName: "John3",
        lastName: "doe3",
        DOB: "22-01-01",
      },
      Collage: {
        collegeName: "abc3",
        collegeAddress: "1233 Main Street",
        collegeLogo: "logo",
      },
    },
    {
      img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      Personal: {
        Id: 5,
        firstName: "John5",
        lastName: "doe5",
        DOB: "22-01-01",
      },
      Collage: {
        collegeName: "abc3",
        collegeAddress: "1233 Main Street",
        collegeLogo: "logo",
      },
    },
  ];

  return (
    <div className="app">
      {data.map((e) => {
        return (
          <StudentIdCard data={e} key={e.Id}>
            <p>
              Student Details:
              <span>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                beatae.{" "}
              </span>
            </p>
          </StudentIdCard>
        );
      })}
    </div>
  );
};

export default App;

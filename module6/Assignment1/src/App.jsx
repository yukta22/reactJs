import React, { useState } from "react";
import StudentIdCard from "./componants/StudentIdCard";

const App = () => {
  const [data, setData] = useState([
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
  ]);

  const deleteStudent = (id) => {
    const updatedStudent = data.filter((item) => item.Personal.Id !== id);
    setData(updatedStudent);
  };

  return (
    <div className="app">
      <div></div>

      {data.map((e) => {
        return (
          <StudentIdCard key={e.Id} data={e} deleteStudent={deleteStudent} />
        );
      })}
    </div>
  );
};

export default App;

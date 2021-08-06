import React from "react";

const compStyle = {
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

const ComponentB = ({ countA, countB, countC, countD }) => {
  return (
    <div style={compStyle}>
      <h1>{countA}</h1>
      <h1>{countB}</h1>
      <h1>{countC}</h1>
      <h1>{countD}</h1>
    </div>
  );
};

export default ComponentB;

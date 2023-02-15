import React from "react";

const Country = ({ country }) => {
  const { name, flags, area, population } = country;
  return (
    <div
      style={{
        border: "1px solid purple",
        margin: "10px",
        borderRadius: "15px",
      }}
    >
      <h1>Name: {name}</h1>
      <img style={{ width: "150px" }} src={flags.svg} alt="" />
      <p>Area: {area} </p>
      <p>Population: {population} </p>
    </div>
  );
};

export default Country;

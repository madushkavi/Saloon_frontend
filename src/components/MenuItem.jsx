import React from "react";
import { Link } from "react-router-dom";

// Define the removeSpaces function
function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}

function MenuItem({ image, name }) {
  const urlName = removeSpaces(name);

  return (
    <div className="menuItem">
      <Link to={`/${urlName}`}>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1>{name}</h1>
      </Link>
    </div>
  );
}

export default MenuItem;


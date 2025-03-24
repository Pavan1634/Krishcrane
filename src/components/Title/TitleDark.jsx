import React from "react";
import "./Title.css";
const TitleDark = ({ subTitle, title }) => {
  return (
    <div className="title-dark">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default TitleDark;

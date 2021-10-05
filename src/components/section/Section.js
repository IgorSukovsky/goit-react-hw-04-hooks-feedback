import React from "react";
import PropTypes from "prop-types";
import style from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      {children}
    </div>
  );
};

Section.Prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;

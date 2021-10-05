import React from "react";
import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, result }) => {
  return (
    <ul className={style.list}>
      <li className={style.text}>Good:{good}</li>
      <li className={style.text}>Neutral:{neutral}</li>
      <li className={style.text}>Bad:{bad}</li>
      <li className={style.text}>Total:{total}</li>
      <li className={style.text}>Result:{result}%</li>
    </ul>
  );
};

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  result: PropTypes.number.isRequired,
};

export default Statistics;

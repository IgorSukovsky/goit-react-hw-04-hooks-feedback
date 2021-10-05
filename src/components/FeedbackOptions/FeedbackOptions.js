import React from "react";
import PropTypes from "prop-types";
import style from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <div className={style.boxBtn}>
      {options.map((name, index) => (
        <button
          key={index}
          className={style.button}
          type="button"
          onClick={() => onFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

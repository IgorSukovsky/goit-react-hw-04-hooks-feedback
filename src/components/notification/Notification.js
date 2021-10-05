import React from "react";
import PropTypes from "prop-types";
import style from "./Notification.module.css";

const Notification = ({ message }) => {
  return <h3 className={style.title}>{message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

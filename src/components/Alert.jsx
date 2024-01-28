import React from "react";
import "./Alert.css";

const Alert = ({ message, type }) => {
  const className = `alert alert-${type}`;

  return <div className={className}>{message}</div>;
};

export default Alert;

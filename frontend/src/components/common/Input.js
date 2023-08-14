// Input.js
import React from "react";
import classes from "./Input.module.css";

const Input = ({ type, name, value, placeholder, options, onChange }) => {
  if (type === "select") { // select tag
    return (
      <fieldset className={classes["fieldset"]}>
        <legend>{name}</legend>
        <select
          className={classes["input"]}
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </fieldset>
    );
  }

  return (
    <fieldset className={classes["fieldset"]}>
      <legend>{name}</legend>
      <input
        type={type}
        className={classes["input"]}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default Input;

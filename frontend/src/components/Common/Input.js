// css
import classes from "./Input.module.css";

const Input = ({ type, name, value, placeholder, onChange }) => {
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

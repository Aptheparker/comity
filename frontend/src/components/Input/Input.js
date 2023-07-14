// css
import "./Input.css";

const Input = ({type, name, value, placeholder, onChange}) => {

  return (
    <input
      type={type}
      className="input"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;

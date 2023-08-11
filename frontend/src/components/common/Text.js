import classes from "./Text.module.css";

const Text = ({
  text,
  className,
}) => {

  return (
    <div className={`${classes.text} ${className}`}>
      {text}
    </div>
  );
};

export default Text;

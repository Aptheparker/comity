// css
import classes from "./RightLayout.module.css";

const RightLayout = ({children}) => {
  return <div className={classes["right-layout"]}>
    {children}
  </div>;
};

export default RightLayout;

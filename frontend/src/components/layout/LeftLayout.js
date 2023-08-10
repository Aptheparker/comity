// images
import ComitLogo from "../../assets/images/comit_logo.png";
import Text from '../common/Text';
// css
import classes from "./LeftLayout.module.css";

const LeftLayout = ({Title1, Title2, children}) => {
  return (
    <div className={classes["left-layout"]}>
      <div className={classes["comit-logo"]}>
        <img src={ComitLogo} alt="comit-logo" />
      </div>
      <Text className={classes['title']} text={Title1} />
      <Text className={classes['subtitle']} text={Title2}/>
      {children}
    </div>
  );
};

export default LeftLayout;

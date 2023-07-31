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
      <Text text={Title1} color={'#603EBB'} fontSize={64} marginTop={100} marginLeft={50}/>
      <Text text={Title2} color={'white'} fontSize={64} marginLeft={50}/>
      {children}
    </div>
  );
};

export default LeftLayout;

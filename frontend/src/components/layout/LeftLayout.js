// images
import ComitLogo from "../../assets/images/comit_logo.png";
import Title from '../common/Text';
// css
import classes from "./LeftLayout.module.css";

const LeftLayout = ({Title1, Title2}) => {
  return (
    <div className={classes["left-layout"]}>
      <div className={classes["comit-logo"]}>
        <img src={ComitLogo} alt="comit-logo" />
      </div>
      <Title text={Title1} color={'#603EBB'} fontSize={64} marginTop={100} marginLeft={50}/>
      <Title text={Title2} color={'white'} fontSize={64} marginLeft={50}/>
    </div>
  );
};

export default LeftLayout;

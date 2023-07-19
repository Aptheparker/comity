// components
import ComitLogoImage from '../../assets/images/comit_logo.png'

// css
import classes from './LoginHeader.module.css';

const NavigationBar = () => {

  return (
    <div className={classes['navigation-bar']}>
      <img src={ComitLogoImage} alt="comit_logo" className={classes['comit-logo']}/>
    </div>
  )
}

export default NavigationBar;
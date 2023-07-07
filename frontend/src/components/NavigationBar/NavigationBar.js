// components
import ComitLogoImage from '../../assets/images/comit_logo.png'

// css
import styles from './NavigationBar.module.css';

const NavigationBar = () => {

  return (
    <div className={styles['navigation-bar']}>
      <img src={ComitLogoImage} alt="comit_logo" className={styles['comit-logo']}/>
    </div>
  )
}

export default NavigationBar;
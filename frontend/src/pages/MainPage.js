// imports


// components
import MainHeader from "../components/Layout/MainHeader";
import MainNavigationBar from "../components/Layout/MainNavigationBar";

// css
import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
      <div className={classes['main-page']}>
        <MainNavigationBar/>
        <MainHeader/>
      </div>
  );
}

export default MainPage;

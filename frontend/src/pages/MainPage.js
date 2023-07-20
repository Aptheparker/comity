// imports

// components
import MainHeader from "../components/Layout/MainHeader";
import MainNavigationBar from "../components/Layout/MainNavigationBar";

// css
import "./MainPage.css";

const MainPage = () => {
  return (
      <div className="main-page">
        <MainNavigationBar></MainNavigationBar>
        <MainHeader></MainHeader>
      </div>
  );
}

export default MainPage;

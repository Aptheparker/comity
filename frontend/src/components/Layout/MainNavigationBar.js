import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from "react";

// mui icons
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const MainNavigationBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Sidebar
      className="app"
      collapsed={!isSidebarOpen}
      backgroundColor="rgb(60, 60, 60)"
      style={{
        color: "white",
        filter: "drop-shadow(0px 20px 4px #000)",
        position: "fixed",
        zIndex: "1",
        height: "100vh",
      }}
    >
      <Menu>
        <MenuItem
          className="menu1"
          icon={<MenuRoundedIcon />}
          onClick={toggleSidebar}
          style={{ marginBottom: "50px" }}
        >
          <h2> Comity</h2>
        </MenuItem>
        <SubMenu label="Study Groups" icon={<MenuBookIcon />}>
          <MenuItem
            icon={<LibraryBooksIcon />}
            style={{ backgroundColor: "#3C3C3C" }}
          >
            {" "}
            All Groups{" "}
          </MenuItem>
          <MenuItem
            icon={<FolderSpecialIcon />}
            style={{ backgroundColor: "#3C3C3C" }}
          >
            My Groups
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default MainNavigationBar;

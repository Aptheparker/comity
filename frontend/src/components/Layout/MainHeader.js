import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-dark"
      style={{
        position: "fixed",
        width: "100%",
        left: "80px",
        filter: "drop-shadow(0px 0px 4px #000)",
      }}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        <Navbar.Collapse id="navbarScroll" style={{ justifyContent: "space-evenly" }}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className={`me-2 ${classes.searchBar}`}
              aria-label="Search"
            />
            <Button className="btn btn-light" size="sm">
              Search
            </Button>
          </Form>
          <Nav
            className="ml-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              className="text-light d-flex align-items-center"
            >
              <AccountCircleIcon style={{ marginRight: "8px" }} />
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;

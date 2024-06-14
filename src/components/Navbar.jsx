import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Logos from "../pages/img/logo-senai.png"
import "./navbar.css";

function Header() {
  return (
    <div className="header-nav">
      <Navbar id="header-nav-header" expand="lg" className="bg-body-tertiary">
        <img className="logo-senai" src={Logos}/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/cadastro">Cadastro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

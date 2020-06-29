import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Image from "react-bootstrap/NavDropdown"

function Header() {

  const navStyle = {
    backgroundColor: "#0b56a2"
  }

  const imgStyle = {
    maxHeight: "80px",
    maxWidth: "100%"
  }

    return(
  <Navbar style={navStyle} variant="dark" expand="xl">
    <Navbar.Brand href="#home" className="mr-auto ml-auto" style={{maxWidth: "80%"}}>
      <img 
        src="/fyya-banner.png"
        style={imgStyle}
        className="mr-auto ml-auto"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto ml-auto">
        <Nav.Link href="#home">ACTUALITÉS</Nav.Link>
        <Nav.Link href="#link">ADHÉRER</Nav.Link>
        <NavDropdown bg="primary" variant="dark" title="RESSOURCES" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="ARCHIVES" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">À PROPOS</Nav.Link>
        <Nav.Link href="#link">CONTACT</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}

export default Header

// ACTUALITÉS ADHÉRER RESSOURCES ARCHIVES À PROPOS CONTACT
// Association Française de Yoyo©
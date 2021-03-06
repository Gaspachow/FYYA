import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"
import Link from "next/link"

function Header() {

  const navStyle = {
    backgroundColor: "#0b56a2",
  }

  const imgStyle = {
    maxHeight: "80px",
    maxWidth: "100%"
  }

  const navItem = {
    paddingRight: "25px"
  }

  const navDropItem = {
    paddingRight: "12px"
  }

    return(
  <Navbar style={navStyle} variant="dark" expand="lg">
    <Navbar.Brand href="/" className="mr-auto ml-auto" style={{maxWidth: "80%"}}>
      <img 
        src="/fyya-banner.png"
        style={imgStyle}
        className="mr-auto ml-auto"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link style={navItem} href="/adherer">ADHÉRER</Nav.Link>
        <NavDropdown style={navDropItem} bg="primary" variant="dark" title="RESSOURCES" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Apprendre le yoyo</NavDropdown.Item>
          <NavDropdown.Item href="/boutiques">Boutiques en ligne</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">À l’étranger</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown style={navDropItem} title="ARCHIVES" id="basic-nav-dropdown2">
          <NavDropdown.Item href="#action/4.1">Championnats précédents</NavDropdown.Item>
          <NavDropdown.Item href="#action/4.2">Assemblées générales</NavDropdown.Item>
          <NavDropdown.Item href="#action/4.3">Packs FYYA</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link style={navItem} href="#link2">À PROPOS</Nav.Link>
        <Nav.Link style={navItem} href="#link3">CONTACT</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}

function Footer() {

  const footStyle = {
    backgroundColor: "#0b56a2",
    color: "#AAA",
    height: "60px"
  }

  const socialStyle = {
      padding: "10px",
      textAlign: "center",
      textDecoration: "none",
      margin: "5px 2px",
      borderRadius: "50%",
      fontSize: "30px",
      color: "white"
    }

  return(
    <Navbar style={footStyle}>
      <Navbar.Brand href="/">
          <img 
          src="/Icone-FYYA.png"
          style={{maxHeight: "50px"}}
          />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-start">
        <Navbar.Text style={{color: "#AAA", fontSize: "min(2vw, 0.875em)"}}>
        © 2020 Association Française de Yoyo. All rights reserved. | <Link href="mentions-legales"><a style={{color: "#AAA"}}>Mentions légales</a></Link>
        </Navbar.Text>
        <a href="https://www.facebook.com/franceyoyoassociation/" style={socialStyle} className="view overlay zoom ml-auto fa fa-facebook"></a>
        <a href="https://www.youtube.com/channel/UCHBBzg5p5zuAMe9vD01fX8w/featured" style={socialStyle} className="view overlay zoom fa fa-youtube"></a>
        <a href="https://vimeo.com/user19541937" style={socialStyle} className="view overlay zoom fa fa-vimeo"></a>
      </Navbar.Collapse>
    </Navbar>
  )
}


function Layout({children}) {
  return(
    <>
    <div style={{minHeight: "calc(100vh - 60px)"}}>
      <Header/>
      {children}
    </div>
      <Footer/>
    </>
  )
}


export default Layout
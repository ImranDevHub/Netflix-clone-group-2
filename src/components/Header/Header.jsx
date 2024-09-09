import logo from '../../assets/img/logo.png';
// import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import userProfile from '../../assets/img/user.png';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './header.css';

function Header() {
  return (
    <>
      <header>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="netflix logo" className="nav__logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              className="offcanvas__bg offcanvas-start text-center fs-3"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="nav__item">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    TvShows
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    Movies
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    Latest
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    MyList
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    Browse by Language
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="nav__item">
                    {/* <SearchIcon className="icon" /> */}Q
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    {/* <NotificationsNoneIcon className="icon" /> */}Q
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    <img
                      src={userProfile}
                      className="user"
                      alt="user Profile"
                    />
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;

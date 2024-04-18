import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiHome } from "react-icons/bi";
import { BsCalendar4Event } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { GiHelp } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import logo from './logo.svg';
import Signin from '../Modals/Signin';

function AppNavbar(){
    return(
        <>
            <Navbar sticky="top" expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand className="nav-brand" href="/"><img src= {logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle  className='toggler' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto coll">
                            <Nav.Link href="/"><BiHome /> Home</Nav.Link>
                            <Nav.Link href="/events">< BsCalendar2Date /> Events</Nav.Link>
                            <Nav.Link href="/workshops"><GrWorkshop /> Workshops</Nav.Link>
                            <Nav.Link href="/clubs"><BsCalendar4Event /> Clubs</Nav.Link>
                            <Nav.Link href="about"><GiHelp /> About</Nav.Link>
                        </Nav>
                        <div className= "sub">
                                <Signin />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
}

export default AppNavbar;
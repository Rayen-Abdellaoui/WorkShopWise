import './Footer.css';
import Nav from 'react-bootstrap/Nav';
import { BiHome } from "react-icons/bi";
import { BsCalendar4Event } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { GiHelp } from "react-icons/gi";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="parag-container">
            <p>Looking for a partner to build your brand or design your product solution?</p>
            <button className='footer-button'>Let's GO <GrFormNext /></button>
          </div>
          <div className='links-container'>
            <Nav.Link href="/"><BiHome /> Home</Nav.Link>
            <Nav.Link href="/events"><BsCalendar4Event /> Events</Nav.Link>
            <Nav.Link href="/workshops"><GrWorkshop /> Workshops</Nav.Link>
            <Nav.Link href="/clubs"><RiContactsLine /> Clubs</Nav.Link>
            <Nav.Link href="about"><GiHelp /> About</Nav.Link>
          </div>
          <div className="socio-container">
            <p className='communication'><AiOutlinePhone /> (+216) 92665489</p>
            <p className='communication'><AiOutlineMail /> workshopwise@insat.ucar.tn</p>
            <div className='socio-buttons'>
              <a className='facebook' href="https://www.facebook.com/insat.rnu.tn"><button className='socio-butt'><FaFacebookF /></button></a>
              <a className='inst' href="https://www.instagram.com/insat.tunisie/"><button className='socio-butt'><BsInstagram /></button></a>
              <a className='twitter' href="https://twitter.com/home"><button className='socio-butt'><BsTwitterX /></button></a>
              <a className='linkedin' href="https://www.linkedin.com/"><button className='socio-butt'><AiOutlineLinkedin /></button></a>
            </div>
          </div>
        </div>
        <hr />
        <p className='copyright'>© Copyright WorkShopWise All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Footer;
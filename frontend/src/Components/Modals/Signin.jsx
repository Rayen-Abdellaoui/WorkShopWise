import { MdEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import logo from '../Navbar/logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillPhone } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { useState } from 'react';
import axios from 'axios';
import  { useNavigate } from "react-router-dom";
import  './Modal.css';

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';

 function Signin() {
  const [toggleOneModal, setToggleOneModal] = useState(false);
  const [toggleTwoModal, setToggleTwoModal] = useState(false);
  const [firstname,setFirstname] = useState();
  const [lastname,setLastname] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [password,setPassword] = useState();
  const [login_email,setLoginemail] = useState();
  const [login_password,setLoginpassword] = useState();
  const navigate = useNavigate();

    const handleSignin = async (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5555/sign-in',{firstname,lastname,email,phone,password})
        .then(result => {
            console.log(result);
            setToggleOneModal(!toggleOneModal)
            navigate("/");
        })
        .catch(err => console.log(err));
    }

    const handleLogin = async (e) =>{
      e.preventDefault()
      axios.post('http://localhost:5555/login',{login_email,login_password})
      .then(result => {
          console.log(result);
          setToggleTwoModal(!toggleOneModal)
          navigate("/");
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <MDBBtn onClick={() => setToggleOneModal(!toggleOneModal)}>Join Us</MDBBtn>

      <MDBModal  open={toggleOneModal} onClose={() => setToggleOneModal(false)} tabIndex='-1'>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <div className='d-flex flex-row mt-2'>
                  <Navbar.Brand className="nav-brand"><img src= {logo} alt="logo" /></Navbar.Brand>
                </div>
              </MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody className=" d-flex flex-column align-items-center">
              <p style={{fontSize:"2.5rem",fontFamily:"Fira Sans",color:"#18122B"}}>Join our family</p>
              <form onSubmit={handleSignin} className="d-flex flex-column align-items-center">
                <div className="d-flex flex-row align-items-center ">
                  <RiAccountCircleFill style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
                  <div className="form-outline flex-fill mb-0">
                    <input onChange={(e) => setFirstname(e.target.value)} type="text" name="firstname" id="firstname"  className="login-input" placeholder="First Name" required  />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center ">
                  <RiAccountCircleFill style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
                  <div className="form-outline flex-fill mb-0">
                    <input onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" id="lastname"  className="login-input" placeholder="Last Name" required  />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center ">
                  <MdEmail style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
                  <div className="form-outline flex-fill mb-0">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email"  className="login-input" placeholder="Email" required  />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center ">
                  <AiFillPhone style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
                  <div className="form-outline flex-fill mb-0">
                    <input onChange={(e) => setPhone(e.target.value)} type="tel" name="phone_number" id="phone_number"  className="login-input" placeholder="Phone Number" required  />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center ">
                <HiLockClosed style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
                  <div className="form-outline flex-fill mb-0">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="login-input" placeholder="Password" required />
                  </div>
                </div>
                <button type="submit" className="sign-btn">Sign In</button>
              </form>
              <p>You already have an account ? <button style={{backgroundColor:"#f0eeed",  color:"black",fontSize:"1rem",width:"fit-content"}}
                onClick={() => {
                  setToggleOneModal(!toggleOneModal);
                  setTimeout(() => {
                    setToggleTwoModal(!toggleTwoModal);
                  }, 200);
                }}
              >
              Login
              </button></p>
              
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal open={toggleTwoModal} onClose={() => setToggleTwoModal(false)} tabIndex='-1'>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <div className='d-flex flex-row mt-2'>
                  <Navbar.Brand className="nav-brand"><img src= {logo} alt="logo" /></Navbar.Brand>
                </div>
              </MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody className=" d-flex flex-column align-items-center">
              <p style={{fontSize:"2.5rem",fontFamily:"Fira Sans",color:"black"}}>Welcome Back</p>
              <form onSubmit={handleLogin} className="d-flex flex-column align-items-center">

                <div className="d-flex flex-row align-items-center ">
                    <MdEmail style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" name="login_email" id="email"  className="login-input" placeholder="Email" required  />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center ">
                  <HiLockClosed style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name="login_password" id="password" className="login-input" placeholder="Password" required />
                    </div>
                </div>
                <button type="submit" className="sign-btn">Login</button>
                </form>
                <p>Create a new account ?<button style={{backgroundColor:"#f0eeed",  color:"black",fontSize:"1rem",width:"fit-content"}}
                onClick={() => {
                  setToggleTwoModal(!toggleTwoModal);
                  setTimeout(() => {
                    setToggleOneModal(!toggleOneModal);
                  }, 200);
                }}
              >
              Sign Up
              </button></p>

            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}


/*function Signin(props){
    const [firstname,setFirstname] = useState();
    const [lastname,setLastname] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5555/sign-in',{firstname,lastname,email,phone,password})
        .then(result => {
            console.log(result);
            navigate("/");
        })
        .catch(err => console.log(err));
    }
    return(
        <>
      <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          <div className='d-flex flex-row mt-2'>
            <Navbar.Brand className="nav-brand"><img src= {logo} alt="logo" /></Navbar.Brand>
          </div>
        </Modal.Title>
      </Modal.Header>
      <ModalBody className=" d-flex flex-column align-items-center">
        <p style={{fontSize:"2.5rem",fontFamily:"Fira Sans",color:"#18122B"}}>Join our family</p>
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <div className="d-flex flex-row align-items-center ">
            <RiAccountCircleFill style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
            <div className="form-outline flex-fill mb-0">
              <input onChange={(e) => setFirstname(e.target.value)} type="text" name="firstname" id="firstname"  className="login-input" placeholder="First Name" required  />
            </div>
          </div>

        <div className="d-flex flex-row align-items-center ">
            <RiAccountCircleFill style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
            <div className="form-outline flex-fill mb-0">
              <input onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" id="lastname"  className="login-input" placeholder="Last Name" required  />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center ">
            <MdEmail style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
            <div className="form-outline flex-fill mb-0">
              <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email"  className="login-input" placeholder="Email" required  />
            </div>
          </div>
          <div className="d-flex flex-row align-items-center ">
            <AiFillPhone style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
            <div className="form-outline flex-fill mb-0">
              <input onChange={(e) => setPhone(e.target.value)} type="tel" name="phone_number" id="phone_number"  className="login-input" placeholder="Phone Number" required  />
            </div>
          </div>
          <div className="d-flex flex-row align-items-center ">
           <HiLockClosed style={{margin:"5px",fontSize:"1.7rem",color:"#a08ae8"}} />
            <div className="form-outline flex-fill mb-0">
              <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="login-input" placeholder="Password" required />
            </div>
          </div>
          <button type="submit" className="sign-btn">Sign In</button>
        </form>
      </ModalBody>
    </Modal>
        </>
    );
}*/

export default Signin;
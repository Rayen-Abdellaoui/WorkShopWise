import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow
} from 'mdb-react-ui-kit';
import photo from './WorkShop.jpg';
import  './WorkShop_Card.css';

import { FaSignal } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";


function WorkShop_Card(props) {
    
  return (
    <MDBCard className='Work_Card'>
      <MDBCardImage src={photo} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardText className='card-content'>
          <h2>{props.club}</h2>
          <p>{props.date}</p>
          <h1>{props.title}</h1>
          <p>
            <span style={{fontSize : "1.2rem",fontWeight : "bold"}}>20 participants</span> <br />
            <FaSignal /> Level: {props.level} <br />
            <FaRegFlag /> {props.lang} <br />
            <FaVideo /> {props.duration} Hours session
          </p>
          <button className='card-button'>View WorkShop</button>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

export default WorkShop_Card;
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow
} from 'mdb-react-ui-kit';
import  './WorkShop_Card.css';
import { FaRegFlag } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";



function WorkShop_Card(props) {

  return (
    <MDBCard className='Work_Card'>
      <MDBCardImage src={`/src/Components/WorkShop%20Card//uploads/${props.image}`}  position='top' alt='WorkShop img' width={400} height={210} />
      <MDBCardBody>
        <MDBCardText className='card-content'>
          <h2>{props.club}</h2>
          <p>{props.date}</p>
          <h1>{props.title}</h1>
          <p>
            <span style={{fontSize : "1.2rem",fontWeight : "bold"}}>{props.participants} participants</span> <br />
            <FaSchool /> Class: {props.class} <br />
            <FaRegFlag /> {props.lang} <br />
            <FaVideo /> {props.duration} Hours session
          </p>
          <a href={`/workshop/${props.id}`}><button className='card-button'>View WorkShop</button></a>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

export default WorkShop_Card;
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import '/src/Components/WorkShop Card/WorkShop_Card.css';
import { FaSignal } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


function WorkShop(){
  const [workshop, setWorkshop] = useState([]);
  const workshopId  = useParams();

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/api/workshop/${workshopId.id}`);
        setWorkshop(response.data);
      } catch (err) {
        console.error('Error fetching workshops', err);
      }
    };

    fetchWorkshops();
  }, []);
  return(
        <>
          <div className='bg-image'>
            <img src={`/src/Components/WorkShop%20Card//uploads/${workshop.image}`} className='img-fluid' style={{width : "100%",maxHeight : "1000px" }} alt='Sample' />
            <div className='mask d-flex justify-content-center align-items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <div className='d-flex justify-content-around align-items-center h-100 ' style={{width : "70%"}}>
                <p className='text-white mb-0'>
                  <span style={{
                    fontSize : "3.5rem",
                    fontFamily : "Rubik",
                    fontWeight : "500"
                  }}>{workshop.title} </span><br />
                  <span style={{
                    fontSize : "2.3rem",
                    fontFamily : "Roboto Condensed",
                    fontWeight : "400"
                  }}>Training Offered by :</span> <br />
                  <span style={{
                    fontSize : "2rem",
                    fontFamily : "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
                  }}><img src={`/src/Components/WorkShop%20Card//uploads/${workshop.club + ".png"}`}  style={{width : "40px",height : "40px",borderRadius:"10px" }} alt='Sample' />  {workshop.club} </span><br />
                  <span style={{
                    fontSize : "2rem",
                    fontFamily : "Roboto Condensed",
                    fontWeight : "400"}}> Presented By : </span> <br />
                    <span style={{
                      fontSize : "2rem",
                      fontFamily : "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
                    }}><CgProfile/> {workshop.trainers}</span>
                    

                </p>
                <MDBCard style={{width : "40%", height : "fit-content",backgroundColor : "#cdc7c3"}}>
                  <MDBCardImage src={`/src/Components/WorkShop%20Card//uploads/${workshop.image}`} position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardText  className="card-content flex-wrap">
                    <p style={{
                        fontSize : "1.3rem",
                        color : "black"
                      }}>{workshop.date}</p>
                      <p style={{
                        fontSize : "1.3rem",
                        color : "black"
                      }}>
                        <span style={{fontSize : "1.2rem",fontWeight : "bold",color : "black"}}>{workshop.participants} participants</span> <br />
                        <FaSignal /> Level: {workshop.level} <br />
                        <FaRegFlag /> {workshop.lang} <br />
                        <FaVideo /> {workshop.duration} Hours session
                      </p>
                      <MDBBtn className="card-button">Participate</MDBBtn>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </div>
        </>
    );
}

export default WorkShop;
import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit'; 
const tester2 = ({ imageSrc, cardTitle, cardParagraph, buttonText, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);


  const handleCardClick = (event) => {
    event.stopPropagation(); 
    onClick && onClick(); 
  };

  return (
    <MDBRow
      style={{ paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px', paddingLeft: '20px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    > 

      {isHovered && (
        <MDBCol md='6' style={{ order: 1, width: "30%" }}>
          <MDBCard className="d-flex flex-column " alignment='center' style={{ backgroundColor: "rgba(160, 138, 232, 0.4)", height: "100%" }}>
            <MDBCardBody style={{paddingTop:"30%"}} onClick={handleCardClick}> 
              <MDBCardTitle style={{color:"black",fontSize:"32px"}}>{cardTitle}</MDBCardTitle>
              <MDBCardText>{cardParagraph}</MDBCardText>
              <MDBBtn href="#" onClick={onClick}>
                {buttonText}
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      )}

      <MDBCol md='6' style={{ order: 2, width: isHovered ? '70%' : '100%', transition: 'width 0.1s' }}> {/* Order: 2 initially */}
        <img src={imageSrc} style={{ width: "100%", height: "480px" }} alt="" />
      </MDBCol>
    </MDBRow>
  );
};

export default tester2;
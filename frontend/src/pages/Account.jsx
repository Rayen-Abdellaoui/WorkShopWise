import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody,MDBCardText,MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial,} from 'react-awesome-button';
import './Account.css'

function Account() {
  return (
    <>
        <MDBContainer className="py-5 h-100" style={{ width:'100%',height:'1000px' }}>
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="!6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                <MDBRow className="g-0">
                  <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ backgroundColor: "#18122B", borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                    <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                    <MDBCardText>Web Designer</MDBCardText>
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Account Details</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <form>
                        <MDBRow className="pt-1" >
                          <MDBCol size="6" className="mb-3">
                                <FloatingLabel controlId="floatingInput" label="Name"  >
                                    <Form.Control type="name" placeholder="Name" />
                                </FloatingLabel>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                          <FloatingLabel controlId="floatingInput" label="Surname"  >
                                    <Form.Control type="Surname" placeholder="Surname" />
                                </FloatingLabel>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="pt-1" style={{  }}>
                          <MDBCol size="6" className="mb-3">
                          <FloatingLabel controlId="floatingInput" label="Fillière"  >
                                    <Form.Control type="Fillière" placeholder="Fillière" />
                                </FloatingLabel>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3" style={{  }}>
                          <FloatingLabel controlId="floatingInput" label="Phone"  >
                                    <Form.Control type="Phone" placeholder="Phone" />
                                </FloatingLabel>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                          <FloatingLabel controlId="floatingInput" label="Password"  >
                                    <Form.Control type="Password" placeholder="Password" />
                                </FloatingLabel>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                          <FloatingLabel controlId="floatingInput" label="Confirm Password"  >
                                    <Form.Control type="Confirm Password" placeholder="Confirm Password" />
                                </FloatingLabel>
                          </MDBCol>
                        </MDBRow>
                        <button style={{ marginLeft:'34%' }} className="btn primary raised">Primary Button</button>
                      </form>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
   
    </>
  );
}

export default Account;
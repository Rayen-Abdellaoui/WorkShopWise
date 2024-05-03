import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

function Account(){
    return(
        <>
            <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol lg="6" className="mb-4 mb-lg-0">
                    <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                    <MDBRow className="g-0">
                        <MDBCol md="4" className="gradient-custom text-center text-white"
                        style={{ backgroundColor : "#18122B",borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                        <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                        <MDBCardText>Web Designer</MDBCardText>
                        </MDBCol>
                        <MDBCol md="8">
                        <MDBCardBody className="p-4">
                            <MDBTypography tag="h6">Account Details</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                            <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Email</MDBTypography>
                                <MDBCardText className="text-muted">info@example.com</MDBCardText>
                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Phone</MDBTypography>
                                <MDBCardText className="text-muted">123 456 789</MDBCardText>
                            </MDBCol>
                            </MDBRow>

                            <MDBTypography tag="h6">Change Profile</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                            <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">First Name</MDBTypography>
                                <input onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" id="lastname"  className="login-input" placeholder="Last Name" required  />                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Last Name</MDBTypography>
                                <input onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" id="lastname"  className="login-input" placeholder="Last Name" required  />                            </MDBCol>
                            </MDBRow>
                            <MDBRow className="pt-1">
                            <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Phone</MDBTypography>
                                <input onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" id="lastname"  className="login-input" placeholder="Last Name" required  />                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Password</MDBTypography>
                                <input onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" id="lastname"  className="login-input" placeholder="Last Name" required  />                            </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            </section>

        </>
    );
}

export default Account;
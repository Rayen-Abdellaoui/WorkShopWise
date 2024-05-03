import { MDBBtn } from 'mdb-react-ui-kit';

const butncomp = () => {
  const myStyle = {
    padding: '5px',
    margin: '5px',
    width: '250px',
    height: '100px',
    borderRadius: '30px',
    backgroundColor: '#a08ae8',
    color: 'white',
    border: 'none',
    fontSize: '1.5rem',
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontWeight: 'bold',
    transition: '0.5s',
  };

  return (
    <MDBBtn  style={myStyle}>SEE EVENTS</MDBBtn>
  );
};

export default butncomp;
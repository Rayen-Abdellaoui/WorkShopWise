import axios from "axios";
import {MDBBtn} from 'mdb-react-ui-kit';
import  './Modal.css';

function Logout(){
    const handleLogout =  (e) =>{
        e.preventDefault()
        axios.get('http://localhost:5555/logout',{ withCredentials: true })
        .then(result => {
              console.log(result);
              window.location.reload();
            }
        )
        .catch(err => console.log(err));
    }
    return(
        
        <>
        <div className= "sub">
            <MDBBtn onClick={handleLogout}>Log Out</MDBBtn>
        </div>


        </>
    );
}

export default Logout;
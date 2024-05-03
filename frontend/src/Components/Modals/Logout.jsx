import axios from "axios";

function Logout(){
    const handleLogout =  (e) =>{
        e.preventDefault()
        axios.get('http://localhost:5555/logout')
        .then(result => {
              console.log(result);
            }
        )
        .catch(err => console.log(err));
    }
    return(
        
        <>
        <button onClick={handleLogout}>Log Out</button>

        </>
    );
}

export default Logout;
import MyWorkshopCard from "../Components/MyWorkShopCard/MyWorkShopCard";
import { MDBContainer } from 'mdb-react-ui-kit';
import { MDBRow } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from 'axios';


function MyWorkshop(){
    const [workshops, setWorkshops] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        const fetchWorkshops = async () => {
            setisLoading(true);
        try {
            const response = await axios.get('http://localhost:5555/api/myworkshop',{ withCredentials: true });
            setWorkshops(response.data);
            console.log(response);
        } catch (err) {
            console.error('Error fetching workshops', err);
        }
        finally{
            setisLoading(false);
        }
        };

        fetchWorkshops();
    }, []);

    if(isLoading){
        return(
            <>
            <div>Is loo</div>
            </>
        );
    }
    return(
        <>
            <MDBContainer className="d-flex  align-items-center ">
                <div className="d-flex align-items-center justify-items-center " style={{
                                    flexWrap : "wrap",
                                    width:"fit-content"
                                    }} >
                   {workshops.map((workshop) =>(
                        <MDBRow key={workshop._id}>
                          <MyWorkshopCard 
                            title={workshop.title} 
                            duration={workshop.duration}
                            club={workshop.club}
                            date={workshop.date}
                            class={workshop.class}
                            image={workshop.image}
                            id={workshop._id}
                          />
                        </MDBRow>
                    ))}
                </div>                
                </MDBContainer>
        </>
    );
}

export default MyWorkshop;
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import im1 from './im1.png';
import im2 from './im2.jpeg';
import im3 from './im3.jpeg';
import Card from './card';
import Tester from './test11'
import Tester2 from'./tester2'


function gridLay(){
    return(
    <>
    <Tester 
    imageSrc={im1}
    cardTitle="MANY LIFE CHANGING WORKSHOPS AWAIT"
    cardParagraph="Take a look at our collection of workshops, finding a workshop has never been easier thanks to our customizable search engine,less time searching more time learning"
    buttonText="get started!"
    />
    <Tester2
    imageSrc={im2}
    cardTitle="SET UP YOUR WORKSHOPS"
    cardParagraph="Try setting a workshop for your club with our simple interface, simply customize the basic settings for the workshop and leave the rest to us "
    buttonText="get started!"
    />
     <Tester 
    imageSrc={im3}
    cardTitle="LEARN MORE ABOUT OUR CLUBS"
    cardParagraph="Many wonderful clubs call INSAT their home, each with their own wonderful charm and amazing members.Each club dedicates itself to a specific field offering a unique experience to any potential workshop participant"
    buttonText="get started!"
    />





    </>
    

    
    
  );
}

export default gridLay;
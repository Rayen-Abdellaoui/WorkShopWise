import { useState } from 'react';
import axios from 'axios';
import { MDBContainer } from 'mdb-react-ui-kit';





export default function Admin() {
  const [workshop_img ,setWorkshopimg] = useState("");
  const [allImage, setAllImage] = useState();



  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("workshop_img", workshop_img);

    const result = await axios.post(
      "http://localhost:5555/api/workshop-img",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    getImage();
  };

  const getImage = async () => {
    const result = await axios.get("http://localhost:5555/get-image");
    console.log(result);
    setAllImage(result.data.data);
  }
  

  return (
    <MDBContainer >
      <form onSubmit={submitImage}>
        <input onChange={(e) => setWorkshopimg(e.target.files[0])} type="file" name="workshop_img" id="workshop_img" />
        <button type='submit'>aaaaa</button>
      </form>
      {allImage
        ? allImage.map( data => (
           (<img
            key={data._id}
            src={`src/Components/WorkShop Card/uploads/${data.workshop_img}`}
            height={200}
            width={400}
            alt='img'
          />)
        ))
        : (<></>) }
    </MDBContainer>


   
  );
}
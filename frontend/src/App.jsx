import { Routes,Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import About from "./pages/About";
import Clubs from "./pages/Clubs";
import WorkShops from "./pages/WorkShops";
import Account from "./pages/Account";
import AppNavbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Admin from './pages/Admin';
import WorkShop from "./WorkShops/WorkShop.jsx";
import MyWorkshop from "./pages/MyWorkShop.jsx";
import { useEffect,useState } from "react";
import axios from 'axios';



function App() {
  const [user,setUser] = useState();
  const [role,setRole] = useState();

  useEffect(() => {
    const fetchData = async () => {
      axios.get('http://localhost:5555/api/username', { withCredentials: true })
      .then(result => {
        if(result.status == 200){
          setUser(result.data.username);
          setRole(result.data.role);
        }
        else{
          setUser();
          setRole();
        }
        console.log(result);
      });
    };
    fetchData();
  }, []); 

  return (
    <>
      <ToastContainer />
      <AppNavbar user={user} role={role} />
      < Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact-us"  element={<Clubs />} />
        <Route path="/workshops/1"  element={<WorkShops />} />
        <Route path="/account"  element={<Account />} />
        <Route path="/admin"  element={<Admin />} />
        <Route path="/workshop/:id"  element={<WorkShop />} />
        <Route path="/myworkshop"  element={<MyWorkshop />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

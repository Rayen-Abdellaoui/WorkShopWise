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


function App() {

  return (
    <>
      <ToastContainer />
      <AppNavbar />
      < Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/clubs"  element={<Clubs />} />
        <Route path="/workshops/1"  element={<WorkShops />} />
        <Route path="/account"  element={<Account />} />
        <Route path="/account"  element={<Account />} />
        <Route path="/admin"  element={<Admin />} />
        <Route path="/workshop/:id"  element={<WorkShop />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

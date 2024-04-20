import { Routes,Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Clubs from "./pages/Clubs";
import WorkShop from "./pages/WorkShops";
import Account from "./pages/Account";
import AppNavbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HVid from "./Components/homepagecomponents/homeVid";
import GridLay from "./Components/homepagecomponents/gridLay";

function App() {

  return (
    <>
      <AppNavbar />
      <HVid />
      <GridLay />
      < Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/clubs"  element={<Clubs />} />
        <Route path="/workshops"  element={<WorkShop />} />
        <Route path="/account"  element={<Account />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

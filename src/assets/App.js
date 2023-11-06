import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppoinmentForm from "./pages/AppoinmentForm";
import Haircut from "./components/Haircut";
import Threading from "./components/Threading";
import Facial from "./components/Facial";
import BridalPackages from "./components/BridalPackages";
import Others from "./components/Others";
import NailTreatment from "./components/NailTreatment";
import Bronze from "./bridal/Bronze";
import Diamond from "./bridal/Diamond";
import Gold from "./bridal/Gold";
import Platinum from "./bridal/Platinum";
import Silver from "./bridal/Silver";
import VIPPackages from "./bridal/VIPPackages";
import VVIPPackages from "./bridal/VVIPPackages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./admin/Adminmain";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/"  element={<Home/>}></Route>
          <Route exact path="/about"  element={<About/>}></Route>
          <Route exact path="/services"  element={<Services/>}></Route>
          <Route exact path="/contact"  element={<Contact/>}></Route>
          <Route exact path="/appointment" element={<AppoinmentForm/>}></Route>
          <Route exact path="/haircut"  element={<Haircut/>}></Route>
          <Route exact path="/threading"  element={<Threading/>}></Route>
          <Route exact path="/bridalpackages"  element={<BridalPackages/>}></Route>
          <Route exact path="/others"  element={<Others/>}></Route>
          <Route exact path="/nailtreatment"  element={<NailTreatment/>}></Route>
          <Route exact path="/facial"  element={<Facial/>}></Route>
          <Route exact path="/bronze"  element={<Bronze/>}></Route>
          <Route exact path="/diamond"  element={<Diamond/>}></Route>
          <Route exact path="/gold"  element={<Gold/>}></Route>
          <Route exact path="/platinum"  element={<Platinum/>}></Route>
          <Route exact path="/silver"  element={<Silver/>}></Route>
          <Route exact path="/vippackages"  element={<VIPPackages/>}></Route>
          <Route exact path="/vvippackages"  element={<VVIPPackages/>}></Route>
          <Route exact path="/admin"  element={<Admin/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

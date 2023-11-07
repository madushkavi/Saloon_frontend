import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginSignup from "./pages/LoginSignup";
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
import Profile from "./pages/Profile";
import EditProfile from "./components/EditProfile";
import Adminmain from "./admin/Adminmain";

import ReactDOM from "react-dom";

import Appointment from "./admin/pagez/Appointment";
import AdService from "./admin/pagez/AdService";
import Calenderview from "./admin/pagez/Calenderview";
import CustomerDetail from "./admin/pagez/CustomerDetail";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById("root"));

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
          <Route exact path="/loginsignup"  element={<LoginSignup/>}></Route>
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
          <Route exact path="/profile"  element={<Profile/>}></Route>
          <Route exact path="/editprofile"  element={<EditProfile/>}></Route>
          <Route exact path="/admin"  element={<Adminmain/>}></Route>

          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/loginsignup" element={<LoginSignup />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/appointment" element={<AppoinmentForm />}></Route>
          <Route exact path="/haircut" element={<Haircut />}></Route>
          <Route exact path="/threading" element={<Threading />}></Route>
          <Route
            exact
            path="/bridalpackages"
            element={<BridalPackages />}
          ></Route>
          <Route exact path="/others" element={<Others />}></Route>
          <Route
            exact
            path="/nailtreatment"
            element={<NailTreatment />}
          ></Route>
          <Route exact path="/facial" element={<Facial />}></Route>
          <Route exact path="/bronze" element={<Bronze />}></Route>
          <Route exact path="/diamond" element={<Diamond />}></Route>
          <Route exact path="/gold" element={<Gold />}></Route>
          <Route exact path="/platinum" element={<Platinum />}></Route>
          <Route exact path="/silver" element={<Silver />}></Route>
          <Route exact path="/vippackages" element={<VIPPackages />}></Route>
          <Route exact path="/vvippackages" element={<VVIPPackages />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/editprofile" element={<EditProfile />}></Route>
          <Route exact path="/admin" element={<Adminmain />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <>
                <Routes>
                  <Route path="/" element={<Adminmain />} />
                  <Route path="/adservice" element={<AdService />} />

                  <Route path="/adappointment" element={<Appointment />} />

                  <Route path="/adcalender" element={<Calenderview />} />

                  <Route path="/customer_list" element={<CustomerDetail />} />
                </Routes>
              </>
            }
          />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
  
}

export default App;

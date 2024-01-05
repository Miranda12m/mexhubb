// Bootstrap Comp
import React from "react";
import { Route, HashRouter as Router, Routes, Navigate, useNavigate } from "react-router-dom";

//
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import "./App.css"

// English
import Navbar from "./en/components/navbar";
import Footer from "./en/components/Footer";
import HomeScreen from "./en/screens/HomeScreen";
import ContactScreen from "./en/screens/ContactScreen";
import ServicesScreen from "./en/screens/ServicesScreen"
import LegalScreen from "./en/screens/services/LegalScreen"; 
import EventsScreen from "./en/screens/services/EventsScreen";
import SpecializedScreen from "./en/screens/services/SpecializedScreen";
import ToursScreen from "./en/screens/services/ToursScreen";
import HousingScreen from "./en/screens/services/HousingScreen";
import TermsScreen from "./en/screens/termsandconditions";
import PrivacyScreen from "./en/screens/privacypolicy";
import Wapp from './en/components/wapp'
//French

//Deutsch

//Espanol


const ScrollToTop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Mover la ventana a la parte superior cuando la ruta cambia
    window.scrollTo(0, 0);
  }, [navigate]);

  return null;
};

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Navbar height={10}  data-aos-easing='ease' data-aos-duration='400' data-aos-delay='0'></Navbar>
      <main style={{backgroundColor:'#edecea'}}>
        
        <Routes>
          
        <Route
            path="/"
            element={<Navigate to="/en/home" replace />}
          />
          {/*English*/}
          <Route path="/en/home" element={<HomeScreen />} />
          <Route path="/en/contact" element={<ContactScreen />} />
          <Route path="/en/services" element={<ServicesScreen />} />
          <Route path="/en/legal" element={<LegalScreen />} />
          <Route path="/en/events" element={<EventsScreen />} />
          <Route path="/en/specialized" element={<SpecializedScreen /> } />
          <Route path="/en/tours" element={<ToursScreen />} />
          <Route path="/en/housing" element={<HousingScreen />} />
          <Route path='/en/terms-and-conditions' element={<TermsScreen />} />
          <Route path='/en/privacy-policy' element={<PrivacyScreen />} />
         {/*French*/}
          
         {/*Detusch*/}

         {/*Espanol*/}

        </Routes>
        <ScrollToTop />

      </main>
      <Footer />
      <Wapp />
    </Router>
  );
}

export default App;

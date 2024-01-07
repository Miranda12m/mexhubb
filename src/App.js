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
import NavbarES from "./es/components/navbar";
import FooterES from "./es/components/Footer";
import HomeScreenES from "./es/screens/HomeScreen";
import ContactScreenES from "./es/screens/ContactScreen";
import ServicesScreenES from "./es/screens/ServicesScreen"
import LegalScreenES from "./es/screens/services/LegalScreen"; 
import EventsScreenES from "./es/screens/services/EventsScreen";
import SpecializedScreenES from "./es/screens/services/SpecializedScreen";
import ToursScreenES from "./es/screens/services/ToursScreen";
import HousingScreenES from "./es/screens/services/HousingScreen";
import TermsScreenES from "./es/screens/termsandconditions";
import PrivacyScreenES from "./es/screens/privacypolicy";
import WappEs from './en/components/wapp'

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
         <Route path="/es/home" element={<HomeScreenES />} />
          <Route path="/es/contact" element={<ContactScreenES />} />
          <Route path="/es/services" element={<ServicesScreenES />} />
          <Route path="/es/legal" element={<LegalScreenES />} />
          <Route path="/es/events" element={<EventsScreenES />} />
          <Route path="/es/specialized" element={<SpecializedScreenES /> } />
          <Route path="/es/tours" element={<ToursScreenES />} />
          <Route path="/es/housing" element={<HousingScreenES />} />
          <Route path='/es/terms-and-conditions' element={<TermsScreenES />} />
          <Route path='/es/privacy-policy' element={<PrivacyScreenES />} />

        </Routes>
        <ScrollToTop />

      </main>
      <Footer />
      <Wapp />
    </Router>
  );
}

export default App;

// Bootstrap Comp
import React from "react";
import { Container } from "react-bootstrap";
import { Route, HashRouter as Router, Routes, Navigate } from "react-router-dom";
//
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
//
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import ServicesScreen from "./screens/ServicesScreen"
import LegalScreen from "./screens/services/LegalScreen"; 
import EventsScreen from "./screens/services/EventsScreen";
import SpecializedScreen from "./screens/services/SpecializedScreen";
import ToursScreen from "./screens/services/ToursScreen";
import HousingScreen from "./screens/services/HousingScreen";
import TermsScreen from "./screens/termsandconditions";
import PrivacyScreen from "./screens/privacypolicy";
//
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css"
import Wapp from './components/wapp'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Navbar height={10}  data-aos-easing='ease' data-aos-duration='400' data-aos-delay='0'></Navbar>
      <main style={{backgroundColor:'#edecea'}}>
        {/*Esta*/}
        <Routes>
        <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/legal" element={<LegalScreen />} />
          <Route path="/events" element={<EventsScreen />} />
          <Route path="/specialized" element={<SpecializedScreen /> } />
          <Route path="/tours" element={<ToursScreen />} />
          <Route path="/housing" element={<HousingScreen />} />
          <Route path='/terms-and-conditions' element={<TermsScreen />} />
          <Route path='/privacy-policy' element={<PrivacyScreen />} />
         
        </Routes>

      </main>
      <Footer />
      <Wapp />
    </Router>
  );
}

export default App;

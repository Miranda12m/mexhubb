// Bootstrap Comp
import React from "react";
import { Route, HashRouter as Router, Routes, Navigate, useNavigate } from "react-router-dom";

//
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
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
import NavbarFR from "./fr/components/navbar";
import FooterFR from "./fr/components/Footer";
import HomeScreenFR from "./fr/screens/HomeScreen";
import ContactScreenFR from "./fr/screens/ContactScreen";
import ServicesScreenFR from "./fr/screens/ServicesScreen"
import LegalScreenFR from "./fr/screens/services/LegalScreen";
import EventsScreenFR from "./fr/screens/services/EventsScreen";
import SpecializedScreenFR from "./fr/screens/services/SpecializedScreen";
import ToursScreenFR from "./fr/screens/services/ToursScreen";
import HousingScreenFR from "./fr/screens/services/HousingScreen";
import TermsScreenFR from "./fr/screens/termsandconditions";
import PrivacyScreenFR from "./fr/screens/privacypolicy";
import WappFR from './fr/components/wapp'

//Deutsch
import NavbarDE from "./de/components/navbar";
import FooterDE from "./de/components/Footer";
import HomeScreenDE from "./de/screens/HomeScreen";
import ContactScreenDE from "./de/screens/ContactScreen";
import ServicesScreenDE from "./de/screens/ServicesScreen"
import LegalScreenDE from "./de/screens/services/LegalScreen";
import EventsScreenDE from "./de/screens/services/EventsScreen";
import SpecializedScreenDE from "./de/screens/services/SpecializedScreen";
import ToursScreenDE from "./de/screens/services/ToursScreen";
import HousingScreenDE from "./de/screens/services/HousingScreen";
import TermsScreenDE from "./de/screens/termsandconditions";
import PrivacyScreenDE from "./de/screens/privacypolicy";
import WappDE from './de/components/wapp'

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
      <Navbar height={10} data-aos-easing='ease' data-aos-duration='400' data-aos-delay='0'></Navbar>
      <main style={{ backgroundColor: '#edecea' }}>

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
          <Route path="/en/specialized" element={<SpecializedScreen />} />
          <Route path="/en/tours" element={<ToursScreen />} />
          <Route path="/en/housing" element={<HousingScreen />} />
          <Route path='/en/terms-and-conditions' element={<TermsScreen />} />
          <Route path='/en/privacy-policy' element={<PrivacyScreen />} />
          {/*French*/}
          <Route path="/fr/home" element={<HomeScreenFR />} />
          <Route path="/fr/contact" element={<ContactScreenFR />} />
          <Route path="/fr/services" element={<ServicesScreenFR />} />
          <Route path="/fr/legal" element={<LegalScreenFR />} />
          <Route path="/fr/events" element={<EventsScreenFR />} />
          <Route path="/fr/specialized" element={<SpecializedScreenFR />} />
          <Route path="/fr/tours" element={<ToursScreenFR />} />
          <Route path="/fr/housing" element={<HousingScreenFR />} />
          <Route path='/fr/terms-and-conditions' element={<TermsScreenFR />} />
          <Route path='/fr/privacy-policy' element={<PrivacyScreenFR />} />

          {/*Detusch*/}
          <Route path="/de/home" element={<HomeScreenDE />} />
          <Route path="/de/contact" element={<ContactScreenDE />} />
          <Route path="/de/services" element={<ServicesScreenDE />} />
          <Route path="/de/legal" element={<LegalScreenDE />} />
          <Route path="/de/events" element={<EventsScreenDE />} />
          <Route path="/de/specialized" element={<SpecializedScreenDE />} />
          <Route path="/de/tours" element={<ToursScreenDE />} />
          <Route path="/de/housing" element={<HousingScreenDE />} />
          <Route path='/de/terms-and-conditions' element={<TermsScreenDE />} />
          <Route path='/de/privacy-policy' element={<PrivacyScreenDE />} />

          {/*Espanol*/}
          <Route path="/es/home" element={<HomeScreenES />} />
          <Route path="/es/contact" element={<ContactScreenES />} />
          <Route path="/es/services" element={<ServicesScreenES />} />
          <Route path="/es/legal" element={<LegalScreenES />} />
          <Route path="/es/events" element={<EventsScreenES />} />
          <Route path="/es/specialized" element={<SpecializedScreenES />} />
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

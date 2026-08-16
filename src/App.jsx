import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Body from "./Pages/Body";
import Eventsdetail from "./Pages/Eventsdetail";
import SingleEvent from "./Pages/SingleEvent";
import AboutUsDetail from "./Pages/AboutUsDeatail";
import Gallery from "./Pages/Gallary";
import Educationsection from "./Pages/Educationsection";
import Childrenandyouth from "./Pages/Childrenandyouth";
import Memeberssection from "./Pages/Memeberssection";
import ParentsSection from "./Pages/ParentsSection";
import Mezmursection from "./Pages/Mezmursection";
import ContactPage from "./Pages/ContactPage";
import ListofCommite from "./Pages/ListofCommite";
import VideoGallery from "./Pages/VideoGallery";
import DonationPage from "./Pages/DonationPage";
import ChartDetail from "./Pages/ChartDetail";
import Services from "./Pages/Services";
import Events from "./Pages/Eventsdetail";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import PriestBooking from "./Pages/PriestBooking";

import ScrollToTop from "./Components/ScrollToTop";
import FloatingActions from "./components/FloatingActions";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename="/preview">
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Body />} />

        <Route path="/events-detail" element={<Eventsdetail />} />

        <Route path="/kidase" element={<SingleEvent />} />

        <Route path="/aboutUsDetail" element={<AboutUsDetail />} />

        <Route path="/listofcommite" element={<ListofCommite />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/videogallery" element={<VideoGallery />} />

        <Route path="/education" element={<Educationsection />} />

        <Route path="/mezmur" element={<Mezmursection />} />

        <Route path="/parents" element={<ParentsSection />} />

        <Route path="/memebers" element={<Memeberssection />} />

        <Route path="/children" element={<Childrenandyouth />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/donation" element={<DonationPage />} />

        <Route path="/chartdetail" element={<ChartDetail />} />

        <Route path="/services" element={<Services />} />

        <Route path="/events" element={<Events />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/priest-booking" element={<PriestBooking />} />
      </Routes>

      {/* Floating + quick-action button */}
      <FloatingActions />

      <Footer />
    </Router>
  );
}

export default App;

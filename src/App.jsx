import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import Body from "./Pages/Body";
import Eventsdetail from "./Pages/Eventsdetail";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleEvent from "./Pages/SingleEvent";
import AboutUsDetail from "./Pages/AboutUsDeatail";
import Gallery from "./Pages/Gallary";
import Educationsection from "./Pages/Educationsection";
import Childrenandyouth from "./Pages/Childrenandyouth";
import Memeberssection from "./Pages/Memeberssection";
import ParentsSection from "./Pages/ParentsSection";
import Mezmursection from "./Pages/Mezmursection";
import ContactPage from "./Pages/ContactPage";
import ListofCommite from "./Pages/ListofCommite"
import VideoGallery from "./Pages/VideoGallery";

import DonationPage from "./Pages/DonationPage";
import ScrollToTop from "../src/Components/ScrollToTop";
import ChartDetail from "../src/Pages/ChartDetail";
import Services from "../src/Pages/Services";
import PrivacyPolicy from "../src/Pages/PrivacyPolicy";


function AnalyticsTracker() {
  const location = useLocation();
    useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
}



function App() {
	
	return (
		<Router>
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
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			</Routes>
			<Footer />
			{/* </div> */}
		</Router>
	);
}

export default App;

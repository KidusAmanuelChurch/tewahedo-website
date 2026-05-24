
import ChurchHighlights from '../Components/ChurchHighlights';
import AboutUs from '../Components/AboutUs';
import Banner2 from '../Components/Banner2';
import WhoWeAre from '../Components/WhoWeAre';
import Ministries from '../Components/Ministries';
import Contact from '../Components/Contact';
import Blog from '../Components/Blog';
import Slider from '../Components/Slider';
import BibleVerse from '../Components/BibleVerse';
import WelcomeSection from "../Components/WelcomeSection";


function Body() {
  return (
		<>
			<Slider />
			{/* <WelcomeSection /> */}

			<BibleVerse />
			<AboutUs />
			<ChurchHighlights />
			<Banner2 />
			<WhoWeAre />
			<Ministries />
			<Contact />
			<Blog />
		</>
	);
}

export default Body




// import Img1 from "../assets/Images/ChruchBuilding.jpg";
// import Img2 from "../assets/Images/image07.jpg";
// import Img3 from "../assets/Images/zmain-slider-3-1536x864.jpg";
// import MembershipModal from "./MembershipModal";
// import React, { useState, useEffect } from "react";

// import CircleLeft from "../assets/Images/kidusAmanuel.jpg";
// import CircleRight from "../assets/Images/kidistmariam.jpg";

// function Slider() {
// 	const [openModal, setOpenModal] = useState(false);
// 	const [currentSlide, setCurrentSlide] = useState(0);

// 	const slides = [
// 		{
// 			image: Img1,
// 			title: "የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በዴንማርክ",
// 			subtitle: "ደብረ ምሕረት ቅዱስ አማኑኤል ቤተ ክርስቲያን",
			
// 		},
// 		{
// 			image: Img2,
// 			title: "እንኳን በሰላም መጡ",
// 			subtitle: "",
// 			verse: "“እግዚአብሔርን በልብህ ሁሉ እመን” (ምሳሌ 3:5)",
// 		},
// 		{
// 			image: Img3,
// 			title: "መንፈሳዊ ኅብረት እና ፍቅር",
// 			subtitle: "እርስ በእርስ እንዋደድ",
// 			verse: "“እግዚአብሔር ፍቅር ነው” (1 ዮሐንስ 4:8)",
// 		},
// 	];

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setCurrentSlide((prev) => (prev + 1) % slides.length);
// 		}, 4000);

// 		return () => clearInterval(interval);
// 	}, [slides.length]);

// 	return (
// 		<>
// 			<section
// 	className="get-quote-section section-bg-img position-relative"
// 	style={{
// 		backgroundImage: `url(${slides[currentSlide].image})`,
// 		height: "60vh",
// 		minHeight: "600px",
// 		backgroundSize: "cover",
// 		backgroundPosition: "center",
// 		backgroundRepeat: "no-repeat",
// 		transition: "background-image 1s ease-in-out",
// 	}}
// >
// 	{/* 🔥 Overlay */}
// 	<span className="theme-overlay opacity-50"></span>

// 	{/* 🔵 LEFT FLOATING CIRCLE */}
// 	<div className="floating-circle left-circle">
// 		<img src={CircleLeft} alt="left" />
// 	</div>

// 	{/* 🔵 RIGHT FLOATING CIRCLE */}
// 	<div className="floating-circle right-circle">
// 		<img src={CircleRight} alt="right" />
// 	</div>

// 	{/* 🔥 CONTENT */}
// 	<div className="container">
// 		<div className="row text-center">
// 			<div className="col-md-12">
// 				<div className="get-quote-1">
// 					<div className="title-wrap mb-0">
// 						<div className="section-title typo-white margin-bottom-40 firsttext">
// 							<h2 className="title mb-3 text-white">
// 								{slides[currentSlide].title}
// 							</h2>

// 							<span className="dancing-text text-white fs-1">
// 								{slides[currentSlide].subtitle}
// 							</span>

// 							<p className="text-white mt-3">
// 								{slides[currentSlide].verse}
// 							</p>
// 						</div>

// 						{/* 🔥 FIXED BUTTON */}
// 						<div className="fixed-bottom-center">
// 							<a
// 								className="btn btn-success px-4 py-2 shadow"
// 								href="https://docs.google.com/forms/d/1M5cx_AubDAfA5cz9TZOLBZ9rpHqBvh54z576axq3jPw/edit"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 							>
// 								አባል ይሁኑ
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>

	
// </section>
// </>
// 	);
			
// }

// export default Slider;



import Img1 from "../assets/Images/ChruchBuilding.jpg";
import Img2 from "../assets/Images/image07.jpg";
import Img3 from "../assets/Images/zmain-slider-3-1536x864.jpg";
import MembershipModal from "./MembershipModal";
import React, { useState, useEffect } from "react";

import CircleLeft from "../assets/Images/kidusAmanuel.jpg";
import CircleRight from "../assets/Images/kidistmariam.jpg";
import "./Slider.css";

import { useTranslation } from "react-i18next";

function Slider() {
	const { t } = useTranslation();

	const [openModal, setOpenModal] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);

	// 🔥 Slides with translation keys only
	const slides = [
		{
			image: Img1,
			title: t("slider.slide1.title"),
			subtitle: t("slider.slide1.subtitle"),
			verse: t("slider.slide1.verse"),
		},
		{
			image: Img2,
			title: t("slider.slide2.title"),
			subtitle: t("slider.slide2.subtitle"),
			verse: t("slider.slide2.verse"),
		},
		{
			image: Img3,
			title: t("slider.slide3.title"),
			subtitle: t("slider.slide3.subtitle"),
			verse: t("slider.slide3.verse"),
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<>
			<section
				className="get-quote-section section-bg-img position-relative "
				style={{
					backgroundImage: `url(${slides[currentSlide].image})`,
					height: "60vh",
					minHeight: "600px",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					transition: "background-image 1s ease-in-out",
				}}
			>
				{/* 🔥 Overlay */}
				<span className="theme-overlay opacity-50"></span>

				{/* 🔵 LEFT FLOATING CIRCLE */}
				<div className="floating-circle left-circle">
					<img src={CircleLeft} alt="left" />
				</div>

				{/* 🔵 RIGHT FLOATING CIRCLE */}
				<div className="floating-circle right-circle">
					<img src={CircleRight} alt="right" />
				</div>

				{/* 🔥 CONTENT */}
				<div className="container">
					<div className="row text-center">
						<div className="col-md-12">
							<div className="get-quote-1">
								<div className="title-wrap mb-0">
									<div className="section-title typo-white margin-bottom-40 firsttext">
										<h1
										 className="title mb-3 text-white hero-title">
											{slides[currentSlide].title}
										</h1>

										<span className=" text-white fs-1  ">
											{slides[currentSlide].subtitle}
										</span>

										<p className="text-white mt-3 ">
											{slides[currentSlide].verse}
										</p>
									</div>

									{/* 🔥 FIXED BUTTON */}
									<div className="fixed-bottom-center">
										<a
											className="btn btn-success px-4 py-2 shadow"
											href="https://docs.google.com/forms/d/1M5cx_AubDAfA5cz9TZOLBZ9rpHqBvh54z576axq3jPw/edit"
											target="_blank"
											rel="noopener noreferrer"
										>
											{t("slider.button")}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <MembershipModal
					isOpen={openModal}
					onClose={() => setOpenModal(false)}
				/> */}
			</section>
		</>
	);
}

export default Slider;
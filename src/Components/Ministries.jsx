// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// import Img1 from "../assets/Images/educationsection.png";
// import Img2 from "../assets/Images/mezemure4.jpg";
// import Img3 from "../assets/Images/Children.jpg";
// import Img4 from "../assets/Images/image02.jpg";
// import Img5 from "../assets/Images/image07.jpg";

// function Ministries() {
// 	const { t } = useTranslation();

// 	const ministries = [
// 		{
// 			image: Img1,
// 			title: t("ministries.education.title"),
// 			description: t("ministries.education.description"),
// 			link: "/education",
// 		},
// 		{
// 			image: Img2,
// 			title: t("ministries.mezmur.title"),
// 			description: t("ministries.mezmur.description"),
// 			link: "/mezmur",
// 		},
// 		{
// 			image: Img3,
// 			title: t("ministries.children.title"),
// 			description: t("ministries.children.description"),
// 			link: "/children",
// 		},
// 		{
// 			image: Img4,
// 			title: t("ministries.parents.title"),
// 			description: t("ministries.parents.description"),
// 			link: "/parents",
// 		},
// 		{
// 			image: Img5,
// 			title: t("ministries.members.title"),
// 			description: t("ministries.members.description"),
// 			link: "/memebers",
// 		},
// 	];

// 	return (
// 		<section
// 			id="ministries-section"
// 			className="ministries-section pad-top-95 pad-bottom-70"
// 		>
// 			<div className="container">
// 				<div className="row">
// 					<div className="offset-md-2 col-md-8">
// 						<div className="title-wrap text-center">
// 							<div className="section-title">
// 								<h2 className="section-title margin-top-5">
// 									{t("ministries.mainTitle")}
// 								</h2>

// 								<span className="border-bottom center"></span>
// 							</div>

// 							<p>{t("ministries.mainDescription")}</p>
// 						</div>
// 					</div>

// 					<div className="ministries-main-wrapper row">
// 						{ministries.map((item, index) => (
// 							<div className="item col-md-6" key={index}>
// 								<div className="ministries-box-style-2">
// 									<div className="ministries-inner">
// 										<div className="ministries-thumb">
// 											<img
// 												className="img-fluid squared w-100"
// 												src={item.image}
// 												width="360"
// 												height="240"
// 												alt={item.title}
// 											/>
// 										</div>

// 										<div className="ministries-content pad-30">
// 											<div className="ministries-title margin-bottom-15">
// 												<h4>
// 													<Link
// 														to={item.link}
// 														className="ministries-link text-decoration-none"
// 													>
// 														{item.title}
// 													</Link>
// 												</h4>
// 											</div>

// 											<div className="ministries-desc">
// 												<p>{item.description}</p>
// 											</div>

// 											<div className="ministries-link margin-top-20">
// 												<Link to={item.link} className="link">
// 													{t("ministries.readMore")}
// 												</Link>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default Ministries;



import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Img1 from "../assets/Images/educationsection.png";
import Img2 from "../assets/Images/mezemure4.jpg";
import Img3 from "../assets/Images/Children.jpg";
import Img4 from "../assets/Images/image02.jpg";
import Img5 from "../assets/Images/image07.jpg";

function Ministries() {
	const { t } = useTranslation();

	const ministries = [
		{
			image: Img1,
			title: t("ministries.education.title"),
			description: t("ministries.education.description"),
			link: "/education",
		},
		{
			image: Img2,
			title: t("ministries.mezmur.title"),
			description: t("ministries.mezmur.description"),
			link: "/mezmur",
		},
		{
			image: Img3,
			title: t("ministries.children.title"),
			description: t("ministries.children.description"),
			link: "/children",
		},
		{
			image: Img4,
			title: t("ministries.parents.title"),
			description: t("ministries.parents.description"),
			link: "/parents",
		},
		{
			image: Img5,
			title: t("ministries.members.title"),
			description: t("ministries.members.description"),
			link: "/memebers",
		},
	];

	const renderCard = (item) => (
		<div className="ministry-modern-card h-100">
			<div className="ministry-image-wrap">
				<img
					src={item.image}
					alt={item.title}
					className="ministry-image"
				/>

				<div className="ministry-overlay"></div>

				<div className="ministry-title-overlay">
					<h4>{item.title}</h4>
				</div>
			</div>

			<div className="ministry-card-content">
				<p>{item.description}</p>

				<Link
					to={item.link}
					className="ministry-read-more"
				>
					{t("ministries.readMore")} →
				</Link>
			</div>
		</div>
	);

	return (
		<section
			id="ministries-section"
			className="ministries-section pad-top-95 pad-bottom-70"
		>
			<div className="container">

				{/* HEADER */}
				<div className="row justify-content-center">
					<div className="col-md-9 col-lg-8">
						<div className="title-wrap text-center mb-5">

							<div className="section-title">
								<h2 className="section-title margin-top-5">
									{t("ministries.mainTitle")}
								</h2>

								<span className="border-bottom center"></span>
							</div>

							<p className="mt-3 text-muted">
								{t("ministries.mainDescription")}
							</p>

						</div>
					</div>
				</div>

				{/* DESKTOP GRID */}
				<div className="row g-4 d-none d-lg-flex">

					{ministries.map((item, index) => (
						<div
							className="col-lg-6"
							key={index}
						>
							{renderCard(item)}
						</div>
					))}

				</div>

				{/* MOBILE / TABLET SWIPER */}
				<div className="d-lg-none">

					<Swiper
						modules={[Pagination, Autoplay]}
						spaceBetween={18}
						slidesPerView={1.08}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}
						speed={700}
						breakpoints={{
							576: {
								slidesPerView: 1.3,
							},
							768: {
								slidesPerView: 1.8,
							},
						}}
						className="ministries-swiper pb-5"
					>

						{ministries.map((item, index) => (
							<SwiperSlide key={index}>
								{renderCard(item)}
							</SwiperSlide>
						))}

					</Swiper>

					<p className="text-center text-muted small mt-2 swipe-hint">
						← {t("ministries.swipeHint")} →
					</p>

				</div>

			</div>

			<style>{`

				/* ===============================
				   MODERN MINISTRY CARD
				=============================== */

				.ministry-modern-card {
					background: #fff;
					border-radius: 18px;
					overflow: hidden;
					box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
					transition:
						transform 0.35s ease,
						box-shadow 0.35s ease;
				}

				.ministry-modern-card:hover {
					transform: translateY(-8px);
					box-shadow: 0 15px 35px rgba(0, 0, 0, 0.14);
				}


				/* ===============================
				   IMAGE
				=============================== */

				.ministry-image-wrap {
					position: relative;
					overflow: hidden;
					height: 280px;
				}

				.ministry-image {
					width: 100%;
					height: 100%;
					object-fit: cover;
					transition: transform 0.6s ease;
				}

				.ministry-modern-card:hover .ministry-image {
					transform: scale(1.06);
				}


				/* ===============================
				   IMAGE OVERLAY
				=============================== */

				.ministry-overlay {
					position: absolute;
					inset: 0;

					background:
						linear-gradient(
							to top,
							rgba(0, 0, 0, 0.65),
							rgba(0, 0, 0, 0.05)
						);
				}

				.ministry-title-overlay {
					position: absolute;
					left: 22px;
					right: 22px;
					bottom: 18px;
				}

				.ministry-title-overlay h4 {
					color: #fff;
					font-weight: 700;
					margin: 0;
					text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
				}


				/* ===============================
				   CONTENT
				=============================== */

				.ministry-card-content {
					padding: 22px;
				}

				.ministry-card-content p {
					color: #6c757d;
					line-height: 1.7;
					margin-bottom: 18px;
				}

				.ministry-read-more {
					text-decoration: none;
					color: #198754;
					font-weight: 600;
					transition:
						color 0.3s ease,
						letter-spacing 0.3s ease;
				}

				.ministry-read-more:hover {
					color: #146c43;
					letter-spacing: 0.3px;
				}


				/* ===============================
				   SWIPER
				=============================== */

				.ministries-swiper .swiper-slide {
					height: auto;
				}

				.ministries-swiper .swiper-pagination-bullet {
					width: 9px;
					height: 9px;
					opacity: 0.35;
				}

				.ministries-swiper .swiper-pagination-bullet-active {
					opacity: 1;
					transform: scale(1.25);
				}


				/* ===============================
				   SWIPE TEXT
				=============================== */

				.swipe-hint {
					animation: ministrySwipeHint 1.8s ease-in-out infinite;
				}

				@keyframes ministrySwipeHint {
					0%,
					100% {
						transform: translateX(0);
						opacity: 0.55;
					}

					50% {
						transform: translateX(7px);
						opacity: 1;
					}
				}


				/* ===============================
				   MOBILE
				=============================== */

				@media (max-width: 991px) {

					.ministry-image-wrap {
						height: 240px;
					}

					.ministry-card-content {
						padding: 20px;
					}

					.ministry-modern-card {
						border-radius: 16px;
					}
				}


				@media (max-width: 576px) {

					.ministry-image-wrap {
						height: 220px;
					}

					.ministry-card-content p {
						font-size: 0.95rem;
						line-height: 1.65;
					}
				}

			`}</style>
		</section>
	);
}

export default Ministries;
// import BlogImg from "../assets/Images/newbuilding.jpg";
// import abiytsome from "../assets/Images/abiytsom.jpg";
// import { useTranslation } from "react-i18next";

// function Blog() {
// 	const { t } = useTranslation();

// 	const blogs = [
// 		{
// 			image: BlogImg,
// 			title: t("blog.items.building.title"),
// 			description: t("blog.items.building.description"),
// 		},
// 		{
// 			image: abiytsome,
// 			title: t("blog.items.fasting.title"),
// 			description: t("blog.items.fasting.description"),
// 		},
// 	];

// 	return (
// 		<section className="blog-section pad-top-50 pad-bottom-95" id="news">
// 			<div className="container">
// 				<div className="title-wrap text-center margin-bottom-40">
// 					<div className="section-title">
// 						<span className="sub-title theme-color text-uppercase">
// 							{t("blog.subTitle")}
// 						</span>

// 						<h2 className="section-title margin-top-5">
// 							{t("blog.mainTitle")}
// 						</h2>

// 						<span className="border-bottom center"></span>
// 					</div>
// 				</div>

// 				<div className="row">
// 					{blogs.map((item, index) => (
// 						<div className="col-md-6 mb-4" key={index}>
// 							<div
// 								className="news-card h-100"
// 								style={{
// 									background: "#fff",
// 									borderRadius: "16px",
// 									overflow: "hidden",
// 									boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
// 									transition: "all 0.3s ease",
// 								}}
// 							>
// 								<div style={{ position: "relative" }}>
// 									<img
// 										src={item.image}
// 										className="img-fluid w-100"
// 										alt={item.title}
// 										style={{
// 											height: "280px",
// 											objectFit: "cover",
// 										}}
// 									/>

// 									<div
// 										style={{
// 											position: "absolute",
// 											bottom: "0",
// 											left: "0",
// 											right: "0",
// 											background:
// 												"linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
// 											padding: "45px 25px 20px",
// 										}}
// 									>
// 										<h3
// 											className="text-white margin-bottom-0"
// 											style={{
// 												fontSize: "24px",
// 												fontWeight: "700",
// 												lineHeight: "1.4",
// 											}}
// 										>
// 											{item.title}
// 										</h3>
// 									</div>
// 								</div>

// 								<div
// 									className="blog-details"
// 									style={{
// 										padding: "28px",
// 									}}
// 								>
// 									<p
// 										style={{
// 											fontSize: "16px",
// 											lineHeight: "1.9",
// 											color: "#444",
// 											marginBottom: "22px",
// 										}}
// 									>
// 										{item.description}
// 									</p>

// 									<a
// 										className="btn btn-default text-white"
// 										style={{
// 											borderRadius: "30px",
// 											padding: "10px 24px",
// 											fontWeight: "600",
// 										}}
// 									>
// 										{t("blog.readMore")}
// 									</a>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default Blog;


import BlogImg from "../assets/Images/newbuilding.jpg";
import abiytsome from "../assets/Images/abiytsom.jpg";

import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Blog() {
	const { t } = useTranslation();

	const blogs = [
		{
			image: BlogImg,
			title: t("blog.items.building.title"),
			description: t("blog.items.building.description"),
		},
		{
			image: abiytsome,
			title: t("blog.items.fasting.title"),
			description: t("blog.items.fasting.description"),
		},
	];

	const renderCard = (item) => (
		<div className="news-card h-100">

			{/* IMAGE */}
			<div className="news-image-wrap">

				<img
					src={item.image}
					className="news-image"
					alt={item.title}
				/>

				<div className="news-overlay"></div>

				<div className="news-title-overlay">
					<h3>{item.title}</h3>
				</div>

			</div>

			{/* CONTENT */}
			<div className="blog-details">

				<p>
					{item.description}
				</p>

				<a
					href="#"
					className="news-read-more"
				>
					{t("blog.readMore")} →
				</a>

			</div>

		</div>
	);

	return (
		<section
			className="blog-section pad-top-50 pad-bottom-95"
			id="news"
		>
			<div className="container">

				{/* HEADER */}
				<div className="title-wrap text-center margin-bottom-40">

					<div className="section-title">

						<span className="sub-title theme-color text-uppercase">
							{t("blog.subTitle")}
						</span>

						<h2 className="section-title margin-top-5">
							{t("blog.mainTitle")}
						</h2>

						<span className="border-bottom center"></span>

					</div>

				</div>

				{/* DESKTOP */}
				<div className="row g-4 d-none d-lg-flex">

					{blogs.map((item, index) => (
						<div
							className="col-lg-6"
							key={index}
						>
							{renderCard(item)}
						</div>
					))}

				</div>

				{/* MOBILE / TABLET */}
				<div className="d-lg-none">

					<Swiper
						modules={[Pagination, Autoplay]}
						spaceBetween={18}
						slidesPerView={1.08}
						speed={700}

						pagination={{
							clickable: true,
						}}

						autoplay={{
							delay: 3500,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}

						breakpoints={{
							576: {
								slidesPerView: 1.25,
							},

							768: {
								slidesPerView: 1.7,
							},
						}}

						className="blog-swiper pb-5"
					>

						{blogs.map((item, index) => (
							<SwiperSlide key={index}>
								{renderCard(item)}
							</SwiperSlide>
						))}

					</Swiper>

					<p className="text-center text-muted small mt-2 blog-swipe-hint">
						← {t("blog.swipeHint")} →
					</p>

				</div>

			</div>

			<style>{`

				/* ==============================
				   NEWS CARD
				============================== */

				.news-card {
					background: #fff;
					border-radius: 18px;
					overflow: hidden;

					box-shadow:
						0 8px 28px rgba(0, 0, 0, 0.10);

					transition:
						transform 0.35s ease,
						box-shadow 0.35s ease;
				}

				.news-card:hover {
					transform: translateY(-8px);

					box-shadow:
						0 15px 38px rgba(0, 0, 0, 0.16);
				}


				/* ==============================
				   IMAGE
				============================== */

				.news-image-wrap {
					position: relative;
					height: 300px;
					overflow: hidden;
				}

				.news-image {
					width: 100%;
					height: 100%;
					object-fit: cover;

					transition:
						transform 0.65s ease;
				}

				.news-card:hover .news-image {
					transform: scale(1.06);
				}


				/* ==============================
				   IMAGE OVERLAY
				============================== */

				.news-overlay {
					position: absolute;
					inset: 0;

					background:
						linear-gradient(
							to top,
							rgba(0, 0, 0, 0.78),
							rgba(0, 0, 0, 0.08) 65%
						);
				}


				/* ==============================
				   TITLE
				============================== */

				.news-title-overlay {
					position: absolute;
					left: 24px;
					right: 24px;
					bottom: 22px;
				}

				.news-title-overlay h3 {
					color: #fff;

					font-size: 1.55rem;
					font-weight: 700;
					line-height: 1.4;

					margin: 0;

					text-shadow:
						0 2px 8px rgba(0, 0, 0, 0.45);
				}


				/* ==============================
				   CONTENT
				============================== */

				.blog-details {
					padding: 26px;
				}

				.blog-details p {
					font-size: 1rem;
					line-height: 1.8;

					color: #555;

					margin-bottom: 20px;
				}


				/* ==============================
				   READ MORE
				============================== */

				.news-read-more {
					color: #198754;

					text-decoration: none;

					font-weight: 600;

					transition:
						color 0.3s ease,
						letter-spacing 0.3s ease;
				}

				.news-read-more:hover {
					color: #146c43;
					letter-spacing: 0.4px;
				}


				/* ==============================
				   SWIPER
				============================== */

				.blog-swiper .swiper-slide {
					height: auto;
				}

				.blog-swiper .swiper-pagination-bullet {
					width: 9px;
					height: 9px;
					opacity: 0.35;
				}

				.blog-swiper .swiper-pagination-bullet-active {
					opacity: 1;
					transform: scale(1.25);
				}


				/* ==============================
				   SWIPE HINT
				============================== */

				.blog-swipe-hint {
					animation:
						blogSwipeHint 1.8s ease-in-out infinite;
				}

				@keyframes blogSwipeHint {

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


				/* ==============================
				   MOBILE
				============================== */

				@media (max-width: 991px) {

					.news-image-wrap {
						height: 250px;
					}

					.blog-details {
						padding: 22px;
					}

					.news-card {
						border-radius: 16px;
					}
				}


				@media (max-width: 576px) {

					.news-image-wrap {
						height: 220px;
					}

					.news-title-overlay {
						left: 18px;
						right: 18px;
						bottom: 18px;
					}

					.news-title-overlay h3 {
						font-size: 1.25rem;
					}

					.blog-details {
						padding: 20px;
					}

					.blog-details p {
						font-size: 0.95rem;
						line-height: 1.7;
					}
				}

			`}</style>

		</section>
	);
}

export default Blog;
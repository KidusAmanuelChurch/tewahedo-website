import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
	FaBackward,
	FaUsersCog,
	FaCalculator,
	FaBullhorn,
	FaBoxOpen,
	FaCogs,
	FaPhone,
	FaEnvelope,
} from "react-icons/fa";

/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import about from "../assets/Images/image06.jpeg";
import chart from "../assets/Images/chart123.jpeg";

import team1 from "../assets/Images/nahom.jpg";
import team2 from "../assets/Images/team2.png";
import team3 from "../assets/Images/biruk.jpg";
import team4 from "../assets/Images/team2.png";
import team5 from "../assets/Images/team2.png";
import team6 from "../assets/Images/abaforprofil.jpg";

import ChurchImg from "../assets/Images/aba.jpeg";
import Dicons from "../assets/Images/dicons.jpg";

function AboutUsDetail() {
	const { t } = useTranslation();

	/* READ MORE STATES */
	const [showFatherMore, setShowFatherMore] = useState(false);
	const [showFoundationMore, setShowFoundationMore] = useState(false);

	const teamMembers = [
		{
			name: t("aboutDetail.team.abaZemikael"),
			img: team6,
		},
		{
			name: t("aboutDetail.team.kesisEndale"),
			img: team2,
		},
		{
			name: t("aboutDetail.team.dNahom"),
			img: team1,
		},
		{
			name: t("aboutDetail.team.dHiruy"),
			img: team4,
		},
		{
			name: t("aboutDetail.team.dBuruk"),
			img: team3,
		},
		{
			name: t("aboutDetail.team.dYonas"),
			img: team5,
		},
		{
			name: t("aboutDetail.team.dBekael"),
			img: team4,
		},
	];

	const serviceDepartments = [
		{
			icon: <FaUsersCog />,
			title: t("aboutDetail.departments.office.title"),
			text: t("aboutDetail.departments.office.text"),
		},
		{
			icon: <FaCalculator />,
			title: t("aboutDetail.departments.accounting.title"),
			text: t("aboutDetail.departments.accounting.text"),
		},
		{
			icon: <FaBullhorn />,
			title: t("aboutDetail.departments.gospel.title"),
			text: t("aboutDetail.departments.gospel.text"),
		},
		{
			icon: <FaBoxOpen />,
			title: t("aboutDetail.departments.property.title"),
			text: t("aboutDetail.departments.property.text"),
		},
		{
			icon: <FaCogs />,
			title: t("aboutDetail.departments.additional.title"),
			text: t("aboutDetail.departments.additional.text"),
		},
	];

	/* DEPARTMENT CARD */
	const renderDepartmentCard = (item) => (
		<div className="department-card h-100">
			<div className="department-card-body text-center">

				<div className="department-icon">
					{item.icon}
				</div>

				<h5 className="fw-bold mb-3">
					{item.title}
				</h5>

				<p className="text-muted small mb-0">
					{item.text}
				</p>

			</div>
		</div>
	);

	return (
		<div>

			{/* ==================================================
			    PAGE HEADER
			================================================== */}

			<div className="page-title-wrap typo-white">
				<div
					className="page-title-wrap-inner section-bg-img"
					style={{ backgroundImage: `url(${about})` }}
				>
					<span className="theme-overlay"></span>

					<div className="container">
						<div className="row text-center">
							<div className="col-md-12">
								<div className="page-title-inner">

									<div
										id="breadcrumb"
										className="breadcrumb margin-bottom-10"
									>
										<Link
											to="/"
											className="theme-color text-warning fs-3 text-decoration-none"
										>
											<FaBackward />{" "}
											{t("aboutDetail.backHome")}
										</Link>
									</div>

									<h1 className="page-title mb-0">
										{t("aboutDetail.pageTitle")}
									</h1>

								</div>
							</div>
						</div>
					</div>

				</div>
			</div>


			{/* ==================================================
			    FATHER'S MESSAGE
			================================================== */}

			<section className="father-message-section py-5">

				<div className="container">

					<div className="row align-items-center">

						{/* TEXT */}
						<div className="col-lg-6 mb-5 mb-lg-0">

							<div className="section-title">
								<h2 className="section-title margin-top-5 fw-bold mb-4">
									{t("aboutDetail.fatherMessageTitle")}
								</h2>

								<span className="border-bottom"></span>
							</div>

							<h5 className="fst-italic text-center my-4 father-verse">
								{t("aboutDetail.verse")}
							</h5>

							<h5 className="mb-4">
								{t("aboutDetail.holyIntro")}
							</h5>


							{/* ALWAYS VISIBLE */}
							<p className="detail-paragraph">
								{t("aboutDetail.fatherMessage1")}

								{!showFatherMore && (
									<span
										className="inline-read-more"
										onClick={() =>
											setShowFatherMore(true)
										}
									>
										...{t("aboutDetail.readMore")}
									</span>
								)}
							</p>


							{/* EXPANDED MESSAGE */}
							{showFatherMore && (
								<div className="expanded-content">

									<p className="detail-paragraph">
										{t(
											"aboutDetail.fatherMessage2"
										)}
									</p>

									<p className="detail-paragraph">
										{t(
											"aboutDetail.fatherMessage3"
										)}
									</p>

									<p className="detail-paragraph">
										{t(
											"aboutDetail.fatherMessage4"
										)}
									</p>

									<p className="detail-paragraph">
										{t(
											"aboutDetail.fatherMessage5"
										)}
									</p>

									<p className="detail-paragraph">
										{t(
											"aboutDetail.fatherMessage6"
										)}
									</p>

									<p className="fw-semibold detail-paragraph">
										{t(
											"aboutDetail.fatherMessage7"
										)}

										<span
											className="inline-read-more"
											onClick={() =>
												setShowFatherMore(false)
											}
										>
											...{t(
												"aboutDetail.readLess"
											)}
										</span>
									</p>

								</div>
							)}


							{/* SIGNATURE */}
							<div className="father-signature mt-4">

								<h4 className="fw-bold mb-1">
									{t("aboutDetail.fatherName")}
								</h4>

								<p className="text-muted mb-0">
									{t("aboutDetail.fatherPosition")}
								</p>

							</div>

						</div>


						{/* IMAGE */}
						<div className="col-lg-6 text-center">

							<div className="father-image-wrapper">

								<img
									src={ChurchImg}
									alt={t(
										"aboutDetail.fatherName"
									)}
									className="img-fluid father-image"
								/>

							</div>

						</div>

					</div>

				</div>

			</section>


			{/* ==================================================
			    HISTORICAL MILESTONES
			================================================== */}

			<section className="foundation-section py-5">

				<div className="container">

					<div className="text-center mb-4">

						<h2 className="text-success fw-bold">
							{t(
								"aboutDetail.foundationTitle"
							)}
						</h2>

						<span className="border-bottom center"></span>

					</div>


					<div className="row justify-content-center">

						<div className="col-lg-10">

							<div className="foundation-content">

								<p className="detail-paragraph mb-0">

									{t(
										"aboutDetail.foundationText1"
									)}

									{!showFoundationMore && (
										<span
											className="inline-read-more"
											onClick={() =>
												setShowFoundationMore(
													true
												)
											}
										>
											...{t(
												"aboutDetail.readMore"
											)}
										</span>
									)}

								</p>


								{showFoundationMore && (

									<p className="detail-paragraph mt-4 mb-0">

										{t(
											"aboutDetail.foundationText2"
										)}

										<span
											className="inline-read-more"
											onClick={() =>
												setShowFoundationMore(
													false
												)
											}
										>
											...{t(
												"aboutDetail.readLess"
											)}
										</span>

									</p>

								)}

							</div>

						</div>

					</div>

				</div>

			</section>


			{/* ==================================================
			    ORGANIZATIONAL STRUCTURE
			================================================== */}

			<section className="container py-5">

				<div className="row align-items-center">

					<div className="col-lg-6 text-center mb-5 mb-lg-0">

						<img
							src={about}
							className="img-fluid rounded shadow-sm"
							alt="Church"
						/>

					</div>


					<div className="col-lg-6">

						<h2 className="mb-4 text-center fw-bold">
							{t("aboutDetail.structureTitle")}
						</h2>

						<div className="position-relative">

							<img
								src={chart}
								className="img-fluid rounded shadow"
								alt={t(
									"aboutDetail.structureTitle"
								)}
							/>

							<Link
								to="/chartdetail"
								className="btn btn-success position-absolute structure-button"
							>
								{t(
									"aboutDetail.structureButton"
								)}
							</Link>

						</div>

					</div>

				</div>

			</section>


			{/* ==================================================
			    SERVICE DEPARTMENTS
			================================================== */}

			<section className="departments-section py-5">

				<div className="container">

					<div className="text-center mb-5">

						<h2 className="text-success fw-bold">
							{t(
								"aboutDetail.departmentsTitle"
							)}
						</h2>

						<span className="border-bottom center"></span>

					</div>


					{/* DESKTOP GRID */}
					<div className="row g-4 d-none d-lg-flex">

						{serviceDepartments.map(
							(item, index) => (

								<div
									key={index}
									className="col-lg-4"
								>
									{renderDepartmentCard(
										item
									)}
								</div>

							)
						)}

					</div>


					{/* MOBILE / TABLET SWIPER */}
					<div className="d-lg-none">

						<Swiper
							modules={[
								Pagination,
								Autoplay,
							]}
							spaceBetween={18}
							slidesPerView={1.08}
							speed={700}
							pagination={{
								clickable: true,
							}}
							autoplay={{
								delay: 3800,
								disableOnInteraction:
									false,
								pauseOnMouseEnter:
									true,
							}}
							breakpoints={{
								576: {
									slidesPerView: 1.35,
								},
								768: {
									slidesPerView: 2,
								},
							}}
							className="departments-swiper pb-5"
						>

							{serviceDepartments.map(
								(item, index) => (

									<SwiperSlide
										key={index}
									>
										{renderDepartmentCard(
											item
										)}
									</SwiperSlide>

								)
							)}

						</Swiper>


						<p className="text-center text-muted small department-swipe-hint">

							←{" "}
							{t(
								"aboutDetail.swipeHint"
							)}{" "}
							→

						</p>

					</div>

				</div>

			</section>


			{/* ==================================================
			    DEACONS IMAGE
			================================================== */}

			<section className="container py-4">

				<div className="text-center">

					<div className="deacons-image-wrapper">

						<img
							src={Dicons}
							className="img-fluid"
							alt="Church Deacons"
						/>

					</div>

				</div>

			</section>


			{/* ==================================================
			    CLERGY
			================================================== */}

			<section className="team-section py-5">

				<div className="container">

					<div className="text-center mb-5">

						<h3 className="text-success fw-bold">
							{t(
								"aboutDetail.clergyTitle"
							)}
						</h3>

						<p className="small text-muted">
							{t(
								"aboutDetail.clergySubtitle"
							)}
						</p>

					</div>


					<div className="row">

						{teamMembers.map(
							(member, index) => (

								<div
									key={index}
									className="col-lg-3 col-md-4 col-sm-6 mb-4"
								>

									<div className="team-style-1">

										<div className="team-inner margin-bottom-20">

											<div className="team-thumb mb-0 relative">

												<div className="team-overlay"></div>

												<img
													src={
														member.img
													}
													className="img-fluid thumb w-100"
													alt={
														member.name
													}
												/>

												{(
													member.phone ||
													member.email
												) && (
													<div className="team-overlay-details top-left-overlay text-center">

														<div className="social-icons">

															{member.phone && (
																<a
																	href={`tel:${member.phone}`}
																	title="Call"
																>
																	<FaPhone />
																</a>
															)}

															{member.email && (
																<a
																	href={`mailto:${member.email}`}
																	title="Email"
																>
																	<FaEnvelope />
																</a>
															)}

														</div>

													</div>
												)}

											</div>


											<div className="team-details text-center pad-20">

												<p className="mb-1 text-white">
													{member.name}
												</p>

												{member.role && (
													<p className="mb-0">
														{
															member.role
														}
													</p>
												)}

											</div>

										</div>

									</div>

								</div>

							)
						)}

					</div>

				</div>

			</section>


			{/* ==================================================
			    CSS
			================================================== */}

			<style>{`

				/* ================================
				   PARAGRAPHS
				================================ */

				// .detail-paragraph {
				// 	text-align: justify;
				// 	text-justify: inter-word;
				// 	line-height: 1.85;
				// 	margin-bottom: 18px;
				// }


				/* INLINE FACEBOOK-STYLE READ MORE */

				.inline-read-more {
					font-weight: 700;
					color: #198754;
					cursor: pointer;
					margin-left: 5px;
					white-space: nowrap;
					transition: opacity 0.25s ease;
				}

				.inline-read-more:hover {
					opacity: 0.7;
				}


				/* ================================
				   EXPANDED CONTENT
				================================ */

				.expanded-content {
					animation: expandContent 0.5s ease;
				}

				@keyframes expandContent {

					from {
						opacity: 0;
						transform: translateY(-8px);
					}

					to {
						opacity: 1;
						transform: translateY(0);
					}
				}


				/* ================================
				   FATHER IMAGE
				================================ */

				.father-image-wrapper {
					border-radius: 18px;
					overflow: hidden;

					box-shadow:
						0 12px 35px rgba(
							0,
							0,
							0,
							0.14
						);
				}

				.father-image {
					width: 100%;
					display: block;
					transition: transform 0.6s ease;
				}

				.father-image-wrapper:hover
				.father-image {
					transform: scale(1.03);
				}


				/* ================================
				   FOUNDATION
				================================ */

				.foundation-section {
					background:
						#f8f9fa;
				}

				.foundation-content {
					background: #fff;
					padding: 30px;

					border-radius: 16px;

					box-shadow:
						0 8px 25px rgba(
							0,
							0,
							0,
							0.06
						);
				}


				/* ================================
				   STRUCTURE
				================================ */

				.structure-button {
					bottom: -25px;
					right: 15px;

					padding: 7px 15px;

					border-radius: 8px;
				}


				/* ================================
				   DEPARTMENT CARDS
				================================ */

				.departments-section {
					background: #faf8f9;
				}

				.department-card {
					background: white;

					border-radius: 18px;

					box-shadow:
						0 8px 25px rgba(
							0,
							0,
							0,
							0.08
						);

					transition:
						transform 0.35s ease,
						box-shadow 0.35s ease;
				}

				.department-card:hover {
					transform:
						translateY(-7px);

					box-shadow:
						0 15px 35px rgba(
							0,
							0,
							0,
							0.13
						);
				}

				.department-card-body {
					padding: 30px 25px;
				}


				/* ICON */

				.department-icon {
					width: 72px;
					height: 72px;

					margin: 0 auto 20px;

					display: flex;

					align-items: center;
					justify-content: center;

					border-radius: 50%;

					background:
						rgba(
							25,
							135,
							84,
							0.09
						);

					color: #198754;

					font-size: 30px;

					transition:
						transform 0.3s ease,
						background 0.3s ease;
				}

				.department-card:hover
				.department-icon {
					transform: scale(1.08);

					background:
						rgba(
							25,
							135,
							84,
							0.14
						);
				}


				/* ================================
				   SWIPER
				================================ */

				.departments-swiper
				.swiper-slide {
					height: auto;
				}

				.departments-swiper
				.swiper-pagination-bullet {
					width: 9px;
					height: 9px;

					opacity: 0.35;
				}

				.departments-swiper
				.swiper-pagination-bullet-active {
					opacity: 1;
					transform: scale(1.25);
				}


				/* SWIPE HINT */

				.department-swipe-hint {
					animation:
						departmentSwipe 1.8s
						ease-in-out infinite;
				}

				@keyframes departmentSwipe {

					0%,
					100% {
						transform:
							translateX(0);
						opacity: 0.55;
					}

					50% {
						transform:
							translateX(7px);
						opacity: 1;
					}
				}


				/* ================================
				   DEACONS IMAGE
				================================ */

				.deacons-image-wrapper {
					max-width: 1000px;
					margin: auto;

					border-radius: 15px;

					overflow: hidden;
				}


				/* ================================
				   TEAM
				================================ */

				.team-thumb {
					position: relative;
					overflow: hidden;

					border-radius:
						12px 12px 0 0;
				}

				.team-thumb img {
					height: 260px;

					width: 100%;

					object-fit: cover;

					transition:
						transform 0.5s ease;
				}

				.team-thumb:hover img {
					transform: scale(1.04);
				}

				.team-overlay {
					position: absolute;

					inset: 0;

					background:
						rgba(
							0,
							0,
							0,
							0.25
						);

					opacity: 0;

					transition:
						opacity 0.3s ease;

					z-index: 1;
				}

				.team-thumb:hover
				.team-overlay {
					opacity: 1;
				}

				.team-overlay-details {
					position: absolute;

					z-index: 2;
				}

				.team-details {
					background: #fff;

					border-radius:
						0 0 12px 12px;

					box-shadow:
						0 8px 20px rgba(
							0,
							0,
							0,
							0.08
						);
				}


				/* ================================
				   MOBILE
				================================ */

				@media (max-width: 991px) {

					// .detail-paragraph {
					// 	line-height: 1.9;
					// }

					.foundation-content {
						padding: 22px;
					}

					.department-card {
						min-height: 250px;
					}

					.father-image-wrapper {
						max-width: 600px;
						margin: auto;
					}

				}


				@media (max-width: 576px) {

					// .detail-paragraph {
					// 	font-size: 15px;
					// 	line-height: 1.9;
					// }

					.foundation-content {
						padding: 20px;
					}

					.department-card-body {
						padding: 25px 20px;
					}

					.department-icon {
						width: 64px;
						height: 64px;

						font-size: 26px;
					}

					.team-thumb img {
						height: 280px;
					}

				}


				/* ACCESSIBILITY */

				@media (
					prefers-reduced-motion: reduce
				) {

					.expanded-content,
					.department-card,
					.department-icon,
					.father-image,
					.team-thumb img {
						animation: none;
						transition: none;
					}

				}

			`}</style>

		</div>
	);
}

export default AboutUsDetail;
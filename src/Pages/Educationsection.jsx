// import child from "../assets/Images/educationsection.png";
// import child1 from "../assets/Images/begenamezemur.jpg";
// import child2 from "../assets/Images/image01.jpg";
// import child3 from "../assets/Images/image04.jpg";
// import about from "../assets/Images/image06.jpg";

// import { FaBackward } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// function Educationsection() {
// 	const { t } = useTranslation();

// 	return (
// 		<>
// 			<div className="page-title-wrap typo-white">
// 				<div
// 					className="page-title-wrap-inner section-bg-img"
// 					style={{ backgroundImage: `url(${about})` }}
// 				>
// 					<span className="theme-overlay"></span>

// 					<div className="container">
// 						<div className="row text-center">
// 							<div className="col-md-12">
// 								<div className="page-title-inner">

// 									<div id="breadcrumb" className="breadcrumb margin-bottom-10">
// 										<Link
// 											to="/"
// 											className="theme-color text-warning fs-3 text-decoration-none"
// 										>
// 											<FaBackward /> {t("education.backHome")}
// 										</Link>
// 									</div>

// 									<h1 className="page-title mb-0">
// 										{t("education.title")}
// 									</h1>

// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 				</div>
// 			</div>

// 			<div className="content-wrapper pad-none">
// 				<div className="content-inner">

// 					<section
// 						id="ministries-section"
// 						className="ministries-section pad-bottom-70"
// 					>
// 						<div className="container">

// 							<div className="ministries-main-wrap ministries-grid">
// 								<div className="row">

// 									{/* LEFT CONTENT */}
// 									<div className="col-lg-8">

// 										<div className="row">
// 											<div className="col-md-12">

// 												<div className="zoom-gallery">
// 													<div className="ministries-thumb relative margin-bottom-35">
// 														<img
// 															src={child}
// 															className="img-fluid single-sermon-img b-radius-10"
// 															width="1170"
// 															height="694"
// 															alt="ministries-img"
// 														/>
// 													</div>
// 												</div>

// 											</div>
// 										</div>

// 										<div className="row">
// 											<div className="col-md-12">

// 												<p className="margin-bottom-15">
// 													{t("education.paragraph1")}
// 												</p>

// 												<p className="margin-bottom-30">
// 													{t("education.paragraph2")}
// 												</p>

// 												<h5 className="mb-3">
// 													📖 {t("education.whatWeTeach")}
// 												</h5>

// 												<ul className="margin-bottom-20">
// 													<li>• {t("education.teach1")}</li>
// 													<li>• {t("education.teach2")}</li>
// 													<li>• {t("education.teach3")}</li>
// 													<li>• {t("education.teach4")}</li>
// 													<li>• {t("education.teach5")}</li>
// 												</ul>

// 												<h5 className="mb-3">
// 													🎯 {t("education.goalTitle")}
// 												</h5>

// 												<p className="margin-bottom-20">
// 													{t("education.goalText")}
// 												</p>

// 												<h5 className="mb-3">
// 													👨‍👩‍👧‍👦 {t("education.participants")}
// 												</h5>

// 												<ul className="margin-bottom-20">
// 													<li>• {t("education.participant1")}</li>
// 													<li>• {t("education.participant2")}</li>
// 													<li>• {t("education.participant3")}</li>
// 												</ul>

// 												<h5 className="mb-3">
// 													✨ {t("education.activities")}
// 												</h5>

// 												<ul className="margin-bottom-30">
// 													<li>• {t("education.activity1")}</li>
// 													<li>• {t("education.activity2")}</li>
// 													<li>• {t("education.activity3")}</li>
// 													<li>• {t("education.activity4")}</li>
// 												</ul>

// 												<p className="margin-bottom-30">
// 													👉 {t("education.invitation")}
// 												</p>

// 												{/* GALLERY */}
// 												<div className="row zoom-gallery">

// 													<div className="col-md-4">
// 														<div className="ministries-thumb relative">
// 															<a
// 																className="popup-img"
// 																href="/children"
// 																title="Single Thumb 1"
// 															>
// 																<img
// 																	src={child1}
// 																	className="img-fluid b-radius-6"
// 																	width="768"
// 																	height="512"
// 																	alt="ministries-img"
// 																/>
// 															</a>
// 														</div>
// 													</div>

// 													<div className="col-md-4">
// 														<div className="ministries-thumb relative">
// 															<a
// 																className="popup-img"
// 																href="images/ministries/single-thumb2.jpg"
// 																title="Single Thumb 2"
// 															>
// 																<img
// 																	src={child2}
// 																	className="img-fluid b-radius-6"
// 																	width="768"
// 																	height="512"
// 																	alt="ministries-img"
// 																/>
// 															</a>
// 														</div>
// 													</div>

// 													<div className="col-md-4">
// 														<div className="ministries-thumb relative">
// 															<a
// 																className="popup-img"
// 																href="images/ministries/single-thumb3.jpg"
// 																title="Single Thumb 3"
// 															>
// 																<img
// 																	src={child3}
// 																	className="img-fluid b-radius-6"
// 																	width="768"
// 																	height="512"
// 																	alt="ministries-img"
// 																/>
// 															</a>
// 														</div>
// 													</div>

// 												</div>

// 											</div>
// 										</div>

// 									</div>

// 									{/* SIDEBAR */}
// 									<div className="col-lg-4 ps-5 px-sm-15">

// 										<div className="sidebar right-sidebar">

// 											<div className="widget search-widget">
// 												<div className="search-form-wrapper">

// 													<form className="search-form" role="search">
// 														<div className="input-group add-on">

// 															<input
// 																className="form-control"
// 																placeholder={t("education.search")}
// 																name="srch-term"
// 																type="text"
// 															/>

// 															<div className="input-group-btn">
// 																<button
// 																	className="btn btn-default search-btn"
// 																	type="submit"
// 																>
// 																	<i className="ti-arrow-right"></i>
// 																</button>
// 															</div>

// 														</div>
// 													</form>

// 												</div>
// 											</div>

// 										</div>

// 									</div>

// 								</div>
// 							</div>

// 						</div>
// 					</section>

// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default Educationsection;


import child from "../assets/Images/educationsection.png";
import child1 from "../assets/Images/begenamezemur.jpg";
import child2 from "../assets/Images/image01.jpg";
import child3 from "../assets/Images/image04.jpg";
import about from "../assets/Images/image06.jpg";

import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Educationsection() {
	const { t } = useTranslation();

	const responsibilities = t("education.responsibilities", {
		returnObjects: true,
	});

	return (
		<>
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
									<div id="breadcrumb" className="breadcrumb margin-bottom-10">
										<Link
											to="/"
											className="theme-color text-warning fs-3 text-decoration-none"
										>
											<FaBackward /> {t("education.backHome")}
										</Link>
									</div>

									<h1 className="page-title mb-0">
										{t("education.title")}
									</h1>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div className="content-wrapper pad-none">
				<div className="content-inner">
					<section
						id="ministries-section"
						className="ministries-section pad-bottom-70"
					>
						<div className="container">
							<div className="ministries-main-wrap ministries-grid">

								<div className="row align-items-center">
									<div className="col-lg-6 mb-4">
										<img
											src={child}
											className="img-fluid rounded shadow"
											alt="Sunday School Education Ministry"
										/>
									</div>

									<div className="col-lg-6">
										<h2 className="margin-bottom-20 text-success">
											{t("education.heading")}
										</h2>

										<p className="mb-4">{t("education.paragraph1")}</p>
										<p className="mb-4">{t("education.paragraph2")}</p>
										<p>{t("education.paragraph3")}</p>
									</div>
								</div>

								{/* CARDS */}
								<div className="row mt-5">
									{["card1", "card2", "card3"].map((card, index) => {
										const images = [child1, child2, child3];

										return (
											<div className="col-md-4 mb-4" key={card}>
												<div className="card border-0 shadow-sm h-100">
													<img
														src={images[index]}
														className="card-img-top"
														alt="Education ministry"
													/>

													<div className="card-body text-center">
														<h5 className="text-success fw-bold">
															{t(`education.cards.${card}.title`)}
														</h5>

														<p className="text-muted small">
															{t(`education.cards.${card}.description`)}
														</p>
													</div>
												</div>
											</div>
										);
									})}
								</div>

								{/* RESPONSIBILITIES */}
								<div className="row mt-5">
									<div className="col-lg-12">
										<div className="bg-white shadow rounded p-4 p-md-5">
											<h2 className="text-success text-center fw-bold mb-3">
												{t("education.responsibilitiesTitle")}
											</h2>

											<p className="text-center text-muted mb-5">
												{t("education.responsibilitiesIntro")}
											</p>

											<div className="row">
												{Array.isArray(responsibilities) &&
													responsibilities.map((item, index) => (
														<div className="col-lg-6 mb-4" key={index}>
															<div
																className="d-flex h-100 shadow-sm rounded p-3 bg-light"
																style={{ borderLeft: "5px solid #198754" }}
															>
																<div
																	className="me-3 flex-shrink-0"
																	style={{
																		width: "42px",
																		height: "42px",
																		background: "#198754",
																		color: "#fff",
																		borderRadius: "50%",
																		display: "flex",
																		alignItems: "center",
																		justifyContent: "center",
																		fontWeight: "bold",
																	}}
																>
																	{index + 1}
																</div>

																<p className="mb-0" style={{ lineHeight: "1.8" }}>
																	{item}
																</p>
															</div>
														</div>
													))}
											</div>
										</div>
									</div>
								</div>

								{/* CTA */}
								<div className="text-center mt-5">
									<h4 className="mb-3">{t("education.ctaTitle")}</h4>

									<p className="text-muted mb-4">
										{t("education.ctaDescription")}
									</p>

									<Link to="/contact" className="btn btn-success me-3">
										{t("education.contactButton")}
									</Link>

									<Link to="/children" className="btn btn-outline-primary">
										{t("education.childrenButton")}
									</Link>
								</div>

							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}

export default Educationsection;
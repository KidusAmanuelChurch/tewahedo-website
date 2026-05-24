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
								<div className="row">

									{/* LEFT CONTENT */}
									<div className="col-lg-8">

										<div className="row">
											<div className="col-md-12">

												<div className="zoom-gallery">
													<div className="ministries-thumb relative margin-bottom-35">
														<img
															src={child}
															className="img-fluid single-sermon-img b-radius-10"
															width="1170"
															height="694"
															alt="ministries-img"
														/>
													</div>
												</div>

											</div>
										</div>

										<div className="row">
											<div className="col-md-12">

												<p className="margin-bottom-15">
													{t("education.paragraph1")}
												</p>

												<p className="margin-bottom-30">
													{t("education.paragraph2")}
												</p>

												<h5 className="mb-3">
													📖 {t("education.whatWeTeach")}
												</h5>

												<ul className="margin-bottom-20">
													<li>• {t("education.teach1")}</li>
													<li>• {t("education.teach2")}</li>
													<li>• {t("education.teach3")}</li>
													<li>• {t("education.teach4")}</li>
													<li>• {t("education.teach5")}</li>
												</ul>

												<h5 className="mb-3">
													🎯 {t("education.goalTitle")}
												</h5>

												<p className="margin-bottom-20">
													{t("education.goalText")}
												</p>

												<h5 className="mb-3">
													👨‍👩‍👧‍👦 {t("education.participants")}
												</h5>

												<ul className="margin-bottom-20">
													<li>• {t("education.participant1")}</li>
													<li>• {t("education.participant2")}</li>
													<li>• {t("education.participant3")}</li>
												</ul>

												<h5 className="mb-3">
													✨ {t("education.activities")}
												</h5>

												<ul className="margin-bottom-30">
													<li>• {t("education.activity1")}</li>
													<li>• {t("education.activity2")}</li>
													<li>• {t("education.activity3")}</li>
													<li>• {t("education.activity4")}</li>
												</ul>

												<p className="margin-bottom-30">
													👉 {t("education.invitation")}
												</p>

												{/* GALLERY */}
												<div className="row zoom-gallery">

													<div className="col-md-4">
														<div className="ministries-thumb relative">
															<a
																className="popup-img"
																href="/children"
																title="Single Thumb 1"
															>
																<img
																	src={child1}
																	className="img-fluid b-radius-6"
																	width="768"
																	height="512"
																	alt="ministries-img"
																/>
															</a>
														</div>
													</div>

													<div className="col-md-4">
														<div className="ministries-thumb relative">
															<a
																className="popup-img"
																href="images/ministries/single-thumb2.jpg"
																title="Single Thumb 2"
															>
																<img
																	src={child2}
																	className="img-fluid b-radius-6"
																	width="768"
																	height="512"
																	alt="ministries-img"
																/>
															</a>
														</div>
													</div>

													<div className="col-md-4">
														<div className="ministries-thumb relative">
															<a
																className="popup-img"
																href="images/ministries/single-thumb3.jpg"
																title="Single Thumb 3"
															>
																<img
																	src={child3}
																	className="img-fluid b-radius-6"
																	width="768"
																	height="512"
																	alt="ministries-img"
																/>
															</a>
														</div>
													</div>

												</div>

											</div>
										</div>

									</div>

									{/* SIDEBAR */}
									<div className="col-lg-4 ps-5 px-sm-15">

										<div className="sidebar right-sidebar">

											<div className="widget search-widget">
												<div className="search-form-wrapper">

													<form className="search-form" role="search">
														<div className="input-group add-on">

															<input
																className="form-control"
																placeholder={t("education.search")}
																name="srch-term"
																type="text"
															/>

															<div className="input-group-btn">
																<button
																	className="btn btn-default search-btn"
																	type="submit"
																>
																	<i className="ti-arrow-right"></i>
																</button>
															</div>

														</div>
													</form>

												</div>
											</div>

										</div>

									</div>

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
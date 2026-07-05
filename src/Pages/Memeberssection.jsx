import child from "../assets/Images/image03.jpg";
import child1 from "../assets/Images/begenamezemur.jpg";
import child2 from "../assets/Images/image01.jpg";
import child3 from "../assets/Images/image04.jpg";

import { FaBackward } from "react-icons/fa";
import about from "../assets/Images/image06.jpg";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MembersSection() {
	const { t } = useTranslation();

	const responsibilities = t("membersPage.responsibilities", {
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
											<FaBackward /> {t("membersPage.backHome")}
										</Link>
									</div>

									<h1 className="page-title mb-0">
										{t("membersPage.title")}
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
											alt="Members Ministry"
											className="img-fluid rounded shadow"
										/>
									</div>

									<div className="col-lg-6">
										<h2 className="margin-bottom-20 text-success">
											{t("membersPage.heading")}
										</h2>

										<p className="mb-4">
											{t("membersPage.description1")}
										</p>

										<p className="mb-4">
											{t("membersPage.description2")}
										</p>

										<p>
											{t("membersPage.description3")}
										</p>
									</div>
								</div>

								<div className="row mt-5">
									{["card1", "card2", "card3"].map((card, index) => {
										const images = [child1, child2, child3];

										return (
											<div className="col-md-4 mb-4" key={card}>
												<div className="card border-0 shadow-sm h-100">
													<img
														src={images[index]}
														className="card-img-top"
														alt="Members ministry"
													/>

													<div className="card-body text-center">
														<h5 className="text-success fw-bold">
															{t(`membersPage.cards.${card}.title`)}
														</h5>

														<p className="text-muted small">
															{t(`membersPage.cards.${card}.description`)}
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
												{t("membersPage.responsibilitiesTitle")}
											</h2>

											<p className="text-center text-muted mb-5">
												{t("membersPage.responsibilitiesIntro")}
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

								<div className="text-center mt-5">
									<h4 className="mb-3">
										{t("membersPage.ctaTitle")}
									</h4>

									<p className="text-muted mb-4">
										{t("membersPage.ctaDescription")}
									</p>

									<Link to="/contact" className="btn btn-success me-3">
										{t("membersPage.contactButton")}
									</Link>

									<Link to="/donation" className="btn btn-outline-primary">
										{t("membersPage.supportButton")}
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

export default MembersSection;
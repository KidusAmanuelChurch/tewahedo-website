import child from "../assets/Images/EducationSection.png";
import child1 from "../assets/Images/BegenaMezemur.jpg";
import child2 from "../assets/Images/image01.jpg";
import child3 from "../assets/Images/image04.jpg";

import { FaBackward } from "react-icons/fa";
import about from "../assets/Images/image06.jpg";

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

									<div
										id="breadcrumb"
										className="breadcrumb margin-bottom-10"
									>

										<Link
											to="/"
											className="theme-color text-warning fs-3 text-decoration-none"
										>
											<FaBackward /> {t("educationSection.backHome")}
										</Link>

									</div>

									<h1 className="page-title mb-0">
										{t("educationSection.title")}
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
											alt="education ministry"
											className="img-fluid rounded shadow"
										/>

									</div>

									<div className="col-lg-6">

										<h2 className="margin-bottom-20 text-success">
											{t("educationSection.heading")}
										</h2>

										<p className="mb-4">
											{t("educationSection.description1")}
										</p>

										<p className="mb-4">
											{t("educationSection.description2")}
										</p>

										<p>
											{t("educationSection.description3")}
										</p>

									</div>

								</div>

								<div className="row mt-5">

									<div className="col-md-4 mb-4">

										<div className="card border-0 shadow-sm h-100">

											<img
												src={child1}
												className="card-img-top"
												alt="education"
											/>

											<div className="card-body text-center">

												<h5 className="text-success fw-bold">
													{t("educationSection.cards.card1.title")}
												</h5>

												<p className="text-muted small">
													{t("educationSection.cards.card1.description")}
												</p>

											</div>

										</div>

									</div>

									<div className="col-md-4 mb-4">

										<div className="card border-0 shadow-sm h-100">

											<img
												src={child2}
												className="card-img-top"
												alt="education"
											/>

											<div className="card-body text-center">

												<h5 className="text-success fw-bold">
													{t("educationSection.cards.card2.title")}
												</h5>

												<p className="text-muted small">
													{t("educationSection.cards.card2.description")}
												</p>

											</div>

										</div>

									</div>

									<div className="col-md-4 mb-4">

										<div className="card border-0 shadow-sm h-100">

											<img
												src={child3}
												className="card-img-top"
												alt="education"
											/>

											<div className="card-body text-center">

												<h5 className="text-success fw-bold">
													{t("educationSection.cards.card3.title")}
												</h5>

												<p className="text-muted small">
													{t("educationSection.cards.card3.description")}
												</p>

											</div>

										</div>

									</div>

								</div>

								<div className="text-center mt-5">

									<h4 className="mb-3">
										{t("educationSection.ctaTitle")}
									</h4>

									<Link
										to="/contact"
										className="btn btn-success me-3"
									>
										{t("educationSection.contactButton")}
									</Link>

									<Link
										to="/members"
										className="btn btn-outline-primary"
									>
										{t("educationSection.joinButton")}
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
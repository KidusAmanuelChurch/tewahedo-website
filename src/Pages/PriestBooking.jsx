import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
	FaBackward,
	FaCalendarCheck,
	FaClock,
	FaChurch,
	FaMapMarkerAlt,
	FaUser,
	FaHeart,
	FaShieldAlt,
} from "react-icons/fa";

import about from "../assets/Images/image06.jpg";

function PriestBooking() {
	const { t } = useTranslation();

	const priests = [
		{
			name: t("priestBooking.priests.priest1.name"),
			role: t("priestBooking.priests.priest1.role"),
			description: t("priestBooking.priests.priest1.description"),
			bookingUrl:
				"https://calendar.google.com/calendar/appointments/schedules/PRIEST_1_BOOKING_ID",
		},
		{
			name: t("priestBooking.priests.priest2.name"),
			role: t("priestBooking.priests.priest2.role"),
			description: t("priestBooking.priests.priest2.description"),
			bookingUrl:
				"https://calendar.google.com/calendar/appointments/schedules/PRIEST_2_BOOKING_ID",
		},
	];

	const meetingTypes = [
		{
			icon: <FaHeart />,
			title: t("priestBooking.reasons.spiritual.title"),
			description: t("priestBooking.reasons.spiritual.description"),
		},
		{
			icon: <FaUser />,
			title: t("priestBooking.reasons.family.title"),
			description: t("priestBooking.reasons.family.description"),
		},
		{
			icon: <FaChurch />,
			title: t("priestBooking.reasons.church.title"),
			description: t("priestBooking.reasons.church.description"),
		},
	];

	return (
		<>
			{/* PAGE HEADER */}
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
											<FaBackward /> {t("priestBooking.backHome")}
										</Link>
									</div>

									<h1 className="page-title mb-0">
										{t("priestBooking.title")}
									</h1>

									<p className="text-white mt-3 mb-0">
										{t("priestBooking.subtitle")}
									</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			{/* MAIN CONTENT */}
			<div className="content-wrapper pad-none">
				<div className="content-inner">

					<section className="pad-top-80 pad-bottom-70">
						<div className="container">

							{/* INTRO */}
							<div className="row justify-content-center text-center mb-5">
								<div className="col-lg-9">

									<div
										className="mx-auto mb-4 d-flex align-items-center justify-content-center"
										style={{
											width: "78px",
											height: "78px",
											borderRadius: "50%",
											background: "#198754",
											color: "#fff",
											fontSize: "32px",
										}}
									>
										<FaCalendarCheck />
									</div>

									<h2 className="text-success fw-bold mb-3">
										{t("priestBooking.heading")}
									</h2>

									<p className="lead text-muted">
										{t("priestBooking.description")}
									</p>
								</div>
							</div>

							{/* GENERAL INFO */}
							<div className="row justify-content-center mb-5">
								<div className="col-lg-10">
									<div className="row">

										<div className="col-md-4 mb-3">
											<div className="bg-white shadow-sm rounded p-4 text-center h-100">
												<FaClock className="text-success fs-3 mb-3" />

												<h5 className="fw-bold">
													{t("priestBooking.durationTitle")}
												</h5>

												<p className="mb-0 text-muted">
													{t("priestBooking.duration")}
												</p>
											</div>
										</div>

										<div className="col-md-4 mb-3">
											<div className="bg-white shadow-sm rounded p-4 text-center h-100">
												<FaMapMarkerAlt className="text-success fs-3 mb-3" />

												<h5 className="fw-bold">
													{t("priestBooking.locationTitle")}
												</h5>

												<p className="mb-0 text-muted">
													Roskildevej 303
													<br />
													2630 Taastrup
												</p>
											</div>
										</div>

										<div className="col-md-4 mb-3">
											<div className="bg-white shadow-sm rounded p-4 text-center h-100">
												<FaCalendarCheck className="text-success fs-3 mb-3" />

												<h5 className="fw-bold">
													{t("priestBooking.availabilityTitle")}
												</h5>

												<p className="mb-0 text-muted">
													{t("priestBooking.availabilityText")}
												</p>
											</div>
										</div>

									</div>
								</div>
							</div>

							{/* PRIEST SELECTION */}
							<div className="row justify-content-center mb-5">
								<div className="col-lg-10">

									<h3 className="text-center text-success fw-bold mb-2">
										{t("priestBooking.choosePriestTitle")}
									</h3>

									<p className="text-center text-muted mb-5">
										{t("priestBooking.choosePriestDescription")}
									</p>

									<div className="row justify-content-center">

										{priests.map((priest, index) => (
											<div
												className="col-lg-6 col-md-6 mb-4"
												key={index}
											>
												<div
													className="bg-white shadow rounded p-4 p-md-5 text-center h-100"
													style={{
														borderTop: "5px solid #198754",
													}}
												>
													<div
														className="mx-auto mb-4 d-flex align-items-center justify-content-center"
														style={{
															width: "90px",
															height: "90px",
															borderRadius: "50%",
															background: "#f1f8f3",
															border: "2px solid #198754",
															color: "#198754",
															fontSize: "38px",
														}}
													>
														<FaUser />
													</div>

													<h4 className="fw-bold text-success mb-2">
														{priest.name}
													</h4>

													<p className="fw-semibold mb-3">
														{priest.role}
													</p>

													<p className="text-muted mb-4">
														{priest.description}
													</p>

													<a
														href={priest.bookingUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="btn btn-success px-4"
													>
														<FaCalendarCheck className="me-2" />
														{t("priestBooking.bookButton")}
													</a>
												</div>
											</div>
										))}

									</div>
								</div>
							</div>

							{/* REASONS */}
							<div className="row justify-content-center mb-5">
								<div className="col-lg-10">

									<h3 className="text-center text-success fw-bold mb-4">
										{t("priestBooking.reasonTitle")}
									</h3>

									<div className="row">
										{meetingTypes.map((item, index) => (
											<div className="col-md-4 mb-4" key={index}>
												<div
													className="bg-light rounded shadow-sm p-4 h-100 text-center"
													style={{
														borderTop: "4px solid #198754",
													}}
												>
													<div className="text-success fs-2 mb-3">
														{item.icon}
													</div>

													<h5 className="fw-bold">
														{item.title}
													</h5>

													<p className="text-muted small mb-0">
														{item.description}
													</p>
												</div>
											</div>
										))}
									</div>

								</div>
							</div>

							{/* HOW IT WORKS */}
							<div className="row justify-content-center mb-5">
								<div className="col-lg-9">

									<div className="bg-white shadow-sm rounded p-4 p-md-5">
										<h3 className="text-success fw-bold text-center mb-4">
											{t("priestBooking.howItWorksTitle")}
										</h3>

										<div className="row">
											{[
												t("priestBooking.steps.step1"),
												t("priestBooking.steps.step2"),
												t("priestBooking.steps.step3"),
											].map((step, index) => (
												<div className="col-md-4 mb-3" key={index}>
													<div className="text-center">
														<div
															className="mx-auto mb-3 d-flex align-items-center justify-content-center"
															style={{
																width: "45px",
																height: "45px",
																borderRadius: "50%",
																background: "#198754",
																color: "#fff",
																fontWeight: "bold",
															}}
														>
															{index + 1}
														</div>

														<p className="mb-0">
															{step}
														</p>
													</div>
												</div>
											))}
										</div>
									</div>

								</div>
							</div>

							{/* PRIVACY */}
							<div className="row justify-content-center">
								<div className="col-lg-9">

									<div className="d-flex align-items-start bg-light rounded p-4">

										<FaShieldAlt className="text-success fs-4 me-3 mt-1 flex-shrink-0" />

										<div>
											<h5 className="fw-bold mb-2">
												{t("priestBooking.privacyTitle")}
											</h5>

											<p className="mb-2 text-muted">
												{t("priestBooking.privacyText")}
											</p>

											<Link
												to="/privacy-policy"
												className="text-success fw-semibold"
											>
												{t("priestBooking.privacyLink")}
											</Link>
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

export default PriestBooking;
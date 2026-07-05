// import Kidase from "../assets/Images/kidase.jpg";
// import gena from "../assets/Images/gena.jpeg";
// import event from "../assets/Images/event-1.jpg";
// import { Link } from "react-router-dom";
// import about from "../assets/Images/image06.jpg";

// function Eventsdetail() {
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
// 										<a href="/" className="theme-color">
// 											Home
// 										</a>
// 										<span className="current">All Events </span>
// 									</div>
// 									<h1 className="page-title mb-0">All Events </h1>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<div className="content-wrapper pad-none">
// 				<div className="content-inner">
// 					<section
// 						id="events-section"
// 						className="events-section pad-top-120 pad-bottom-70"
// 					>
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-md-12">
// 									<div className="events-main-wrapper events-grid events-style-4">
// 										<div className="row">
// 											<div className="col-lg-4 col-md-6">
// 												<div className="events-inner margin-bottom-30">
// 													<div className="events-thumb mb-0 relative">
// 														<img
// 															src={Kidase}
// 															className="img-fluid thumb w-100"
// 															width="768"
// 															height="456"
// 															alt="events-img"
// 														/>
// 													</div>
// 													<div className="events-details pad-30">
// 														<div className="event-date margin-bottom-15">
// 															Dec 18<span className="event-time">8.00 am</span>
// 														</div>
// 														<div className="event-title mb-3">
// 															<h5>
// 																<a href="event-details.html">
// 																	Lorem ipsum dolor sit amet consectetur
// 																	adipisicing elit. aliquam id earum maxime.
// 																</a>
// 															</h5>
// 														</div>
// 														<div className="event-excerpt mb-3">
// 															<p>
// 																Nulla, aut iusto eum incidunt cum accusamus quis
// 																illum exercitationem nesciunt, veritatis debitis
// 																expedita consequuntur nostrum eius
// 																distinctioNulla, aut iusto eum incidunt cum
// 																accusamus quis illum exercitationem nesciunt,
// 																veritatis debitis expedita consequuntur nostrum
// 																eius distinctio
// 															</p>
// 														</div>
// 														<div className="read-more">
// 															<Link to="/kidase">Event Details</Link>
// 														</div>
// 													</div>
// 												</div>
// 											</div>

// 											{/* Event 2 */}
// 											<div className="col-lg-4 col-md-6">
// 												<div className="events-inner margin-bottom-30">
// 													<div className="events-thumb mb-0 relative">
// 														<img
// 															src={gena}
// 															className="img-fluid thumb w-100"
// 															width="768"
// 															height="456"
// 															alt="events-img"
// 														/>
// 													</div>
// 													<div className="events-details pad-30">
// 														<div className="event-date margin-bottom-15">
// 															Mar 3<span className="event-time">7.00 am</span>
// 														</div>
// 														<div className="event-title mb-3">
// 															<h5>
// 																<a href="event-details.html">
// 																	Nulla, aut iusto eum incidunt cum accusamus
// 																	quis illum
// 																</a>
// 															</h5>
// 														</div>
// 														<div className="event-excerpt mb-3">
// 															<p>
// 																Nulla, aut iusto eum incidunt cum accusamus quis
// 																illum exercitationem nesciunt, veritatis debitis
// 																expedita consequuntur nostrum eius
// 																distinctioNulla, aut iusto eum incidunt cum
// 																accusamus quis illum exercitationem nesciunt,
// 																veritatis debitis expedita consequuntur nostrum
// 																eius distinctio
// 															</p>
// 														</div>
// 														<div className="read-more">
// 															<a href="event-details.html">Event Details</a>
// 														</div>
// 													</div>
// 												</div>
// 											</div>

// 											{/* Event 3 */}
// 											<div className="col-lg-4 col-md-6">
// 												<div className="events-inner margin-bottom-30">
// 													<div className="events-thumb mb-0 relative">
// 														<img
// 															src={event}
// 															className="img-fluid thumb w-100"
// 															width="768"
// 															height="456"
// 															alt="events-img"
// 														/>
// 													</div>
// 													<div className="events-details pad-30">
// 														<div className="event-date margin-bottom-15">
// 															Apr 10<span className="event-time">6.00 am</span>
// 														</div>
// 														<div className="event-title mb-3">
// 															<h5>
// 																<a href="event-details.html">
// 																	Nulla, aut iusto eum incidunt cum accusamus
// 																	quis illum
// 																</a>
// 															</h5>
// 														</div>
// 														<div className="event-excerpt mb-3">
// 															<p>
// 																Nulla, aut iusto eum incidunt cum accusamus quis
// 																illum exercitationem nesciunt, veritatis debitis
// 																expedita consequuntur nostrum eius
// 																distinctioNulla, aut iusto eum incidunt cum
// 																accusamus quis illum exercitationem nesciunt,
// 																veritatis debitis expedita consequuntur nostrum
// 																eius distinctio
// 															</p>
// 														</div>
// 														<div className="read-more">
// 															<a href="event-details.html">Event Details</a>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 											{/* Event 3 */}
// 											<div className="col-lg-4 col-md-6">
// 												<div className="events-inner margin-bottom-30">
// 													<div className="events-thumb mb-0 relative">
// 														<img
// 															src={event}
// 															className="img-fluid thumb w-100"
// 															width="768"
// 															height="456"
// 															alt="events-img"
// 														/>
// 													</div>
// 													<div className="events-details pad-30">
// 														<div className="event-date margin-bottom-15">
// 															Apr 10<span className="event-time">6.00 am</span>
// 														</div>
// 														<div className="event-title mb-3">
// 															<h5>
// 																<a href="event-details.html">
// 																	Nulla, aut iusto eum incidunt cum accusamus
// 																	quis illum
// 																</a>
// 															</h5>
// 														</div>
// 														<div className="event-excerpt mb-3">
// 															<p>
// 																Nulla, aut iusto eum incidunt cum accusamus quis
// 																illum exercitationem nesciunt, veritatis debitis
// 																expedita consequuntur nostrum eius
// 																distinctioNulla, aut iusto eum incidunt cum
// 																accusamus quis illum exercitationem nesciunt,
// 																veritatis debitis expedita consequuntur nostrum
// 																eius distinctio
// 															</p>
// 														</div>
// 														<div className="read-more">
// 															<a href="event-details.html">Event Details</a>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 											{/* Event 3 */}
// 											<div className="col-lg-4 col-md-6">
// 												<div className="events-inner margin-bottom-30">
// 													<div className="events-thumb mb-0 relative">
// 														<img
// 															src={event}
// 															className="img-fluid thumb w-100"
// 															width="768"
// 															height="456"
// 															alt="events-img"
// 														/>
// 													</div>
// 													<div className="events-details pad-30">
// 														<div className="event-date margin-bottom-15">
// 															Apr 10<span className="event-time">6.00 am</span>
// 														</div>
// 														<div className="event-title mb-3">
// 															<h5>
// 																<a href="event-details.html">
// 																	Nulla, aut iusto eum incidunt cum accusamus
// 																	quis illum
// 																</a>
// 															</h5>
// 														</div>
// 														<div className="event-excerpt mb-3">
// 															<p>
// 																Nulla, aut iusto eum incidunt cum accusamus quis
// 																illum exercitationem nesciunt, veritatis debitis
// 																expedita consequuntur nostrum eius
// 																distinctioNulla, aut iusto eum incidunt cum
// 																accusamus quis illum exercitationem nesciunt,
// 																veritatis debitis expedita consequuntur nostrum
// 																eius distinctio
// 															</p>
// 														</div>
// 														<div className="read-more">
// 															<a href="event-details.html">Event Details</a>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 											{/* Event 3 */}
// 											<div className="col-lg-4 col-md-6">
// 												<div className="events-inner margin-bottom-30">
// 													<div className="events-thumb mb-0 relative">
// 														<img
// 															src={event}
// 															className="img-fluid thumb w-100"
// 															width="768"
// 															height="456"
// 															alt="events-img"
// 														/>
// 													</div>
// 													<div className="events-details pad-30">
// 														<div className="event-date margin-bottom-15">
// 															Apr 10<span className="event-time">6.00 am</span>
// 														</div>
// 														<div className="event-title mb-3">
// 															<h5>
// 																<a href="event-details.html">
// 																	Nulla, aut iusto eum incidunt cum accusamus
// 																	quis illum
// 																</a>
// 															</h5>
// 														</div>
// 														<div className="event-excerpt mb-3">
// 															<p>
// 																Nulla, aut iusto eum incidunt cum accusamus quis
// 																illum exercitationem nesciunt, veritatis debitis
// 																expedita consequuntur nostrum eius
// 																distinctioNulla, aut iusto eum incidunt cum
// 																accusamus quis illum exercitationem nesciunt,
// 																veritatis debitis expedita consequuntur nostrum
// 																eius distinctio
// 															</p>
// 														</div>
// 														<div className="read-more">
// 															<a href="event-details.html">Event Details</a>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 											{/* Additional events here */}
// 											{/* Repeat similar blocks for more events */}
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

// export default Eventsdetail;


import Kidase from "../assets/Images/kidase.jpg";
import gena from "../assets/Images/gena.jpeg";
import eventImg from "../assets/Images/event-1.jpg";
import about from "../assets/Images/image06.jpg";

import { Link } from "react-router-dom";
import { FaBackward, FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Eventsdetail() {
	const { t } = useTranslation();

	const events = [
		{
			image: Kidase,
			date: t("eventsPage.events.kidase.date"),
			time: t("eventsPage.events.kidase.time"),
			location: t("eventsPage.events.kidase.location"),
			title: t("eventsPage.events.kidase.title"),
			description: t("eventsPage.events.kidase.description"),
			link: "/kidase",
			status: t("eventsPage.status.upcoming"),
		},
		{
			image: gena,
			date: t("eventsPage.events.christmas.date"),
			time: t("eventsPage.events.christmas.time"),
			location: t("eventsPage.events.christmas.location"),
			title: t("eventsPage.events.christmas.title"),
			description: t("eventsPage.events.christmas.description"),
			link: "/contact",
			status: t("eventsPage.status.upcoming"),
		},
		{
			image: eventImg,
			date: t("eventsPage.events.general.date"),
			time: t("eventsPage.events.general.time"),
			location: t("eventsPage.events.general.location"),
			title: t("eventsPage.events.general.title"),
			description: t("eventsPage.events.general.description"),
			link: "/contact",
			status: t("eventsPage.status.info"),
		},
	];

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
											<FaBackward /> {t("eventsPage.backHome")}
										</Link>
									</div>

									<h1 className="page-title mb-0">
										{t("eventsPage.title")}
									</h1>

									<p className="mt-3 text-white">
										{t("eventsPage.subtitle")}
									</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div className="content-wrapper pad-none">
				<div className="content-inner">
					<section
						id="events-section"
						className="events-section pad-top-80 pad-bottom-70"
					>
						<div className="container">

							<div className="row text-center mb-5">
								<div className="col-md-10 mx-auto">
									<span className="sub-title theme-color text-uppercase">
										{t("eventsPage.sectionSmallTitle")}
									</span>

									<h2 className="mt-2">
										{t("eventsPage.sectionTitle")}
									</h2>

									<p className="text-muted">
										{t("eventsPage.sectionDescription")}
									</p>
								</div>
							</div>

							<div className="row">
								{events.map((item, index) => (
									<div className="col-lg-4 col-md-6 mb-4" key={index}>
										<div className="events-inner h-100 shadow rounded overflow-hidden bg-white">

											<div className="events-thumb mb-0 relative">
												<img
													src={item.image}
													className="img-fluid thumb w-100"
													alt={item.title}
													style={{
														height: "240px",
														objectFit: "cover",
													}}
												/>

												<span
													className="badge bg-success position-absolute"
													style={{
														top: "15px",
														left: "15px",
														fontSize: "13px",
														padding: "8px 12px",
													}}
												>
													{item.status}
												</span>
											</div>

											<div className="events-details p-4">
												<div className="mb-3">
													<div className="d-flex align-items-center mb-2">
														<FaCalendarAlt className="text-success me-2" />
														<span>{item.date}</span>
													</div>

													<div className="d-flex align-items-center mb-2">
														<FaClock className="text-success me-2" />
														<span>{item.time}</span>
													</div>

													<div className="d-flex align-items-center">
														<FaMapMarkerAlt className="text-success me-2" />
														<span>{item.location}</span>
													</div>
												</div>

												<h5 className="mb-3 text-success fw-bold">
													{item.title}
												</h5>

												<p className="text-muted">
													{item.description}
												</p>

												<div className="read-more mt-3">
													<Link to={item.link} className="btn btn-outline-success btn-sm">
														{t("eventsPage.detailsButton")}
													</Link>
												</div>
											</div>

										</div>
									</div>
								))}
							</div>

							<div className="text-center mt-5">
								<h4>{t("eventsPage.ctaTitle")}</h4>

								<p className="text-muted">
									{t("eventsPage.ctaDescription")}
								</p>

								<Link to="/contact" className="btn btn-success">
									{t("eventsPage.contactButton")}
								</Link>
							</div>

						</div>
					</section>
				</div>
			</div>
		</>
	);
}

export default Eventsdetail;
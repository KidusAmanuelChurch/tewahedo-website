import Kidase from "../assets/Images/kidase.jpg";
import gena from "../assets/Images/gena.jpeg";
import event from "../assets/Images/event-1.jpg";
import { Link } from "react-router-dom";
import about from "../assets/Images/image06.jpg";

function Eventsdetail() {
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
										<a href="/" className="theme-color">
											Home
										</a>
										<span className="current">All Events </span>
									</div>
									<h1 className="page-title mb-0">All Events </h1>
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
						className="events-section pad-top-120 pad-bottom-70"
					>
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="events-main-wrapper events-grid events-style-4">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="events-inner margin-bottom-30">
													<div className="events-thumb mb-0 relative">
														<img
															src={Kidase}
															className="img-fluid thumb w-100"
															width="768"
															height="456"
															alt="events-img"
														/>
													</div>
													<div className="events-details pad-30">
														<div className="event-date margin-bottom-15">
															Dec 18<span className="event-time">8.00 am</span>
														</div>
														<div className="event-title mb-3">
															<h5>
																<a href="event-details.html">
																	Lorem ipsum dolor sit amet consectetur
																	adipisicing elit. aliquam id earum maxime.
																</a>
															</h5>
														</div>
														<div className="event-excerpt mb-3">
															<p>
																Nulla, aut iusto eum incidunt cum accusamus quis
																illum exercitationem nesciunt, veritatis debitis
																expedita consequuntur nostrum eius
																distinctioNulla, aut iusto eum incidunt cum
																accusamus quis illum exercitationem nesciunt,
																veritatis debitis expedita consequuntur nostrum
																eius distinctio
															</p>
														</div>
														<div className="read-more">
															<Link to="/kidase">Event Details</Link>
														</div>
													</div>
												</div>
											</div>

											{/* Event 2 */}
											<div className="col-lg-4 col-md-6">
												<div className="events-inner margin-bottom-30">
													<div className="events-thumb mb-0 relative">
														<img
															src={gena}
															className="img-fluid thumb w-100"
															width="768"
															height="456"
															alt="events-img"
														/>
													</div>
													<div className="events-details pad-30">
														<div className="event-date margin-bottom-15">
															Mar 3<span className="event-time">7.00 am</span>
														</div>
														<div className="event-title mb-3">
															<h5>
																<a href="event-details.html">
																	Nulla, aut iusto eum incidunt cum accusamus
																	quis illum
																</a>
															</h5>
														</div>
														<div className="event-excerpt mb-3">
															<p>
																Nulla, aut iusto eum incidunt cum accusamus quis
																illum exercitationem nesciunt, veritatis debitis
																expedita consequuntur nostrum eius
																distinctioNulla, aut iusto eum incidunt cum
																accusamus quis illum exercitationem nesciunt,
																veritatis debitis expedita consequuntur nostrum
																eius distinctio
															</p>
														</div>
														<div className="read-more">
															<a href="event-details.html">Event Details</a>
														</div>
													</div>
												</div>
											</div>

											{/* Event 3 */}
											<div className="col-lg-4 col-md-6">
												<div className="events-inner margin-bottom-30">
													<div className="events-thumb mb-0 relative">
														<img
															src={event}
															className="img-fluid thumb w-100"
															width="768"
															height="456"
															alt="events-img"
														/>
													</div>
													<div className="events-details pad-30">
														<div className="event-date margin-bottom-15">
															Apr 10<span className="event-time">6.00 am</span>
														</div>
														<div className="event-title mb-3">
															<h5>
																<a href="event-details.html">
																	Nulla, aut iusto eum incidunt cum accusamus
																	quis illum
																</a>
															</h5>
														</div>
														<div className="event-excerpt mb-3">
															<p>
																Nulla, aut iusto eum incidunt cum accusamus quis
																illum exercitationem nesciunt, veritatis debitis
																expedita consequuntur nostrum eius
																distinctioNulla, aut iusto eum incidunt cum
																accusamus quis illum exercitationem nesciunt,
																veritatis debitis expedita consequuntur nostrum
																eius distinctio
															</p>
														</div>
														<div className="read-more">
															<a href="event-details.html">Event Details</a>
														</div>
													</div>
												</div>
											</div>
											{/* Event 3 */}
											<div className="col-lg-4 col-md-6">
												<div className="events-inner margin-bottom-30">
													<div className="events-thumb mb-0 relative">
														<img
															src={event}
															className="img-fluid thumb w-100"
															width="768"
															height="456"
															alt="events-img"
														/>
													</div>
													<div className="events-details pad-30">
														<div className="event-date margin-bottom-15">
															Apr 10<span className="event-time">6.00 am</span>
														</div>
														<div className="event-title mb-3">
															<h5>
																<a href="event-details.html">
																	Nulla, aut iusto eum incidunt cum accusamus
																	quis illum
																</a>
															</h5>
														</div>
														<div className="event-excerpt mb-3">
															<p>
																Nulla, aut iusto eum incidunt cum accusamus quis
																illum exercitationem nesciunt, veritatis debitis
																expedita consequuntur nostrum eius
																distinctioNulla, aut iusto eum incidunt cum
																accusamus quis illum exercitationem nesciunt,
																veritatis debitis expedita consequuntur nostrum
																eius distinctio
															</p>
														</div>
														<div className="read-more">
															<a href="event-details.html">Event Details</a>
														</div>
													</div>
												</div>
											</div>
											{/* Event 3 */}
											<div className="col-lg-4 col-md-6">
												<div className="events-inner margin-bottom-30">
													<div className="events-thumb mb-0 relative">
														<img
															src={event}
															className="img-fluid thumb w-100"
															width="768"
															height="456"
															alt="events-img"
														/>
													</div>
													<div className="events-details pad-30">
														<div className="event-date margin-bottom-15">
															Apr 10<span className="event-time">6.00 am</span>
														</div>
														<div className="event-title mb-3">
															<h5>
																<a href="event-details.html">
																	Nulla, aut iusto eum incidunt cum accusamus
																	quis illum
																</a>
															</h5>
														</div>
														<div className="event-excerpt mb-3">
															<p>
																Nulla, aut iusto eum incidunt cum accusamus quis
																illum exercitationem nesciunt, veritatis debitis
																expedita consequuntur nostrum eius
																distinctioNulla, aut iusto eum incidunt cum
																accusamus quis illum exercitationem nesciunt,
																veritatis debitis expedita consequuntur nostrum
																eius distinctio
															</p>
														</div>
														<div className="read-more">
															<a href="event-details.html">Event Details</a>
														</div>
													</div>
												</div>
											</div>
											{/* Event 3 */}
											<div className="col-lg-4 col-md-6">
												<div className="events-inner margin-bottom-30">
													<div className="events-thumb mb-0 relative">
														<img
															src={event}
															className="img-fluid thumb w-100"
															width="768"
															height="456"
															alt="events-img"
														/>
													</div>
													<div className="events-details pad-30">
														<div className="event-date margin-bottom-15">
															Apr 10<span className="event-time">6.00 am</span>
														</div>
														<div className="event-title mb-3">
															<h5>
																<a href="event-details.html">
																	Nulla, aut iusto eum incidunt cum accusamus
																	quis illum
																</a>
															</h5>
														</div>
														<div className="event-excerpt mb-3">
															<p>
																Nulla, aut iusto eum incidunt cum accusamus quis
																illum exercitationem nesciunt, veritatis debitis
																expedita consequuntur nostrum eius
																distinctioNulla, aut iusto eum incidunt cum
																accusamus quis illum exercitationem nesciunt,
																veritatis debitis expedita consequuntur nostrum
																eius distinctio
															</p>
														</div>
														<div className="read-more">
															<a href="event-details.html">Event Details</a>
														</div>
													</div>
												</div>
											</div>
											{/* Additional events here */}
											{/* Repeat similar blocks for more events */}
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

export default Eventsdetail;

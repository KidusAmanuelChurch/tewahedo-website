
import { Link } from "react-router-dom";
import Kidase from "../assets/Images/kidase.jpg";
import Kidase2 from "../assets/Images/kidase2.jpeg";
import about from "../assets/Images/image06.jpg";


const SingleEvent = () => {
  return (
		<>
			<div className="page-title-wrap typo-white">
				<div
					className="page-title-wrap-inner section-bg-img"
					style={{ backgroundImage: `url(${Kidase})` }}
				>
					<span className="theme-overlay"></span>
					<div className="container">
						<div className="row text-center">
							<div className="col-md-12">
								<div className="page-title-inner">
									<div id="breadcrumb" className="breadcrumb margin-bottom-10">
										<Link to="/" className="theme-color">
											Home
										</Link>
										<span className="current">Event Details</span>
									</div>
									<h1 className="page-title mb-0">ቅዳሴ</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="content-wrapper pad-none">
				<div className="content-inner">
					<section id="single-event" className="single-event">
						<div className="container">
							<div className="single-event-wrap">
								<div className="row">
									<div className="col-md-12">
										<div className="zoom-gallery mb-5">
											<div className="events-thumb relative">
												<a
													className="popup-img"
													href="#"
													title="Single Portfolio"
												>
													<img
														src={Kidase}
														className="img-fluid single-event-img b-radius-10"
														alt="events-img"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-lg-8">
										<p className="margin-bottom-25">
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Dolore, nisi magni? Totam quam rem voluptatum itaque iste
											numquam alias, nostrum nisi perferendis, accusantium
											excepturi illum quia, ullam id laudantium ut. Lorem ipsum
											dolor sit amet consectetur adipisicing elit. Facilis
											minima distinctio nobis quam quia ex maiores. Temporibus
											aliquid nesciunt, dolores enim mollitia nisi ea quo eos
											animi reprehenderit, quibusdam facilis?
										</p>

										<div className="events-title-wrap pt-1 margin-bottom-35">
											<div className="events-content">
												<div className="events-title pad-none margin-none">
													<h3 className="margin-bottom-15">
														<span className="theme-color">Description</span>
													</h3>
												</div>
												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Nulla, necessitatibus hic inventore nemo
													deleniti esse iste! Id ex, ipsum eius sint omnis
													obcaecati magni placeat enim, fugiat labore corporis
													tenetur! Lorem ipsum dolor sit amet consectetur,
													adipisicing elit. Quaerat, dicta assumenda? Incidunt
													minus temporibus, nesciunt quibusdam explicabo eius,
													saepe reprehenderit cum impedit numquam, deserunt
													assumenda possimus vel nihil eaque doloremque?
												</p>
											</div>
										</div>

										<div className="row">
											<div className="col-md-6">
												<div className="events-thumb relative">
													<img
														src="/images/events/events-md1.jpg"
														className="img-fluid b-radius-6"
														alt="events-md1"
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="events-thumb relative">
													<img
														src="/images/events/events-md2.jpg"
														className="img-fluid b-radius-6"
														alt="events-md2"
													/>
												</div>
											</div>
										</div>

										<div className="events-title-wrap margin-top-40">
											<div className="events-content margin-bottom-35">
												<div className="events-title pad-none margin-none">
													<h3 className="margin-bottom-15">
														<span className="theme-color">Gallery</span>
													</h3>
												</div>
												<p></p>
											</div>
										</div>

										<div className="row">
											<div className="col-md-4 margin-bottom-30">
												<div className="events-thumb relative">
													<img
														src={Kidase2}
														className="img-fluid b-radius-6"
														alt="events-sm1"
													/>
												</div>
											</div>
											<div className="col-md-4 margin-bottom-30">
												<div className="event-thumb relative">
													<img
														src={Kidase2}
														className="img-fluid b-radius-6"
														alt="events-sm2"
													/>
												</div>
											</div>
											<div className="col-md-4 margin-bottom-30">
												<div className="event-thumb relative">
													<img
														src={Kidase2}
														className="img-fluid b-radius-6"
														alt="events-sm3"
													/>
												</div>
											</div>
										</div>

										<section
											id="get-quote-section"
											className="get-quote-section pad-none"
										>
											<div
												className="div-bg-img b-radius-8 pad-top-50 pad-bottom-45"
												style={{ backgroundImage: "url(/images/bg/bg-1.jpg)" }}
											>
												<div className="row get-quote-2">
													<div className="col-md-3">
														<div className="video-wrap wrap-stretch relative margin-top-15">
															<div className="video-wrap-details">
																<div className="video-play-btn text-center">
																	<div className="video-icon">
																		<a
																			className="popup-youtube box-shadow1"
																			href="https://www.youtube.com/watch?v=1hLBCOlptq8"
																			target="_blank"
																			rel="noopener noreferrer"
																		>
																			<i className="ti-control-play"></i>
																		</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-9 pe-5">
														<div className="title-wrap mb-0">
															<div className="section-title typo-white mb-0">
																<h2 className="title mb-0">
																	“Pray! And listen to God! You can do this
																	alone...
																</h2>
															</div>
														</div>
													</div>
												</div>
											</div>
										</section>
									</div>

									<div className="col-lg-4">
										<div className="event-details-wrap">
											<div className="event-info pad-bottom-30">
												<h4>ቅዳሴ Details</h4>
												<p>
													<strong>Organizer:</strong> Kidus Amanuel
												</p>
												<p>
													<strong>Start Date:</strong> Mar 3
												</p>
												<p>
													<strong>End Date:</strong> Mar 4
												</p>
												<p>
													<strong>Time:</strong> 7.00 am
												</p>
												{/* <p>
													<strong>Cost:</strong> Free
												</p> */}
											</div>

											<div className="event-venue pad-bottom-30">
												<h4>Event Venue</h4>
												<p>
													<strong>Venue:</strong> Kidus Amanuel 
												</p>
												<p>
													<strong>Address:</strong> Gladsaxe Kommun
													<a
														className="zegen-popup-gmaps theme-color"
														href="https://maps.google.com/maps?q=12%2C+Victoria+Street%2C+Australia"
														target="_blank"
														rel="noopener noreferrer"
													>
														<span className="ti-location-pin"></span>
													</a>
												</p>
											</div>

											<div className="event-contact-wrap">
												<div className="event-contact-title">
													<h4>Event Registration</h4>
												</div>
												<form
													id="contact-form"
													className="contact-form-2 event-form"
												>
													<div className="row">
														<div className="col-md-12">
															<div className="form-group">
																<input
																	id="name"
																	className="form-control"
																	name="name"
																	placeholder="Name"
																	type="text"
																/>
															</div>
														</div>
														<div className="col-md-12">
															<div className="form-group">
																<input
																	id="email"
																	className="form-control"
																	name="email"
																	placeholder="Email"
																	type="email"
																/>
															</div>
														</div>
														<div className="col-md-12">
															<div className="form-group">
																<input
																	id="phone"
																	className="form-control"
																	name="phone"
																	placeholder="Phone"
																	type="text"
																/>
															</div>
														</div>
														<div className="col-md-12">
															<div className="form-group">
																<select name="services">
																	<option value="Select Event">
																		Select Event
																	</option>
																	<option value="Native Tree Planting Contest">
																		Native Tree Planting Contest
																	</option>
																	{/* Add more options as needed */}
																</select>
															</div>
														</div>
														<div className="col-md-12">
															<button
																className="btn btn-theme btn-md"
																type="submit"
															>
																Register Now
															</button>
														</div>
													</div>
												</form>
											</div>
										</div>
										{/* <aside className="widget widget_categories">
											<h5 className="widget-title">Categories</h5>
											<ul>
												<li>
													<Link to="#">Church</Link>
												</li>
												<li>
													<Link to="#">Event</Link>
												</li>
												<li>
													<Link to="#">Sermon</Link>
												</li>
												
											</ul>
										</aside> */}
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default SingleEvent;

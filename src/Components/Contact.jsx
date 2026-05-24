import { Link } from "react-router-dom";
import BanImg1 from "../assets/Images/bg-2.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Contact() {
	const { t } = useTranslation();

	return (
		<div>
			<section
				className="contact-form-section typo-white section-bg-img o-visible pad-top-80 pad-bottom-160"
				style={{ backgroundImage: `url(${BanImg1})` }}
			>
				<span className="theme-overlay opacity-50"></span>

				<div className="shape-bottom" data-negative="false">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1000 100"
						preserveAspectRatio="none"
					>
						<path
							className="shape-fill"
							opacity="0.33"
							d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
						></path>

						<path
							className="shape-fill"
							opacity="0.66"
							d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
						></path>

						<path
							className="shape-fill"
							d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
						></path>
					</svg>
				</div>

				<div className="container" style={{ position: "relative", zIndex: 2 }}>
					<div className="row">
						{/* LEFT CARD */}
						<div className="col-xl-4 pe-xl-4 pb-5 pb-xl-0">
							<div className="flip-box broken-top-115 verticalMove">
								<div className="flip-box-inner imghvr-flip-3d-horz">

									{/* FRONT */}
									<div className="flip-box-front">
										<div className="flip-box-icon margin-bottom-40">
											<BsFillTelephoneFill />
										</div>

										<h3 className="flip-box-title margin-bottom-30">
											{t("contact.contactUs")}
										</h3>

										<div className="flip-content">
											<p>Roskildevej 303, 2630 Taastrup</p>

											<p>
												<a href="tel:+4552847624">
													+45 52 84 76 24
												</a>
											</p>

											<p>secretary@tewahedo.dk</p>
											<p>cordinator@tewahedo.dk</p>
										</div>
									</div>

									{/* BACK */}
									<div className="flip-box-back">
										<h3 className="flip-box-title">
											{t("contact.shareThought")}
										</h3>

										<div className="flip-content">
											<p>Roskildevej 303, 2630 Taastrup</p>

											<p>
												<a href="tel:+4552847624">
													+45 52 84 76 24
												</a>
											</p>

											<p>secretary@tewahedo.dk</p>
											<p>cordinator@tewahedo.dk</p>
										</div>
									</div>

								</div>
							</div>
						</div>

						{/* RIGHT CONTENT */}
						<div className="col-xl-8 ps-xl-4">
							<div className="section-title-wrapper">
								<div className="title-wrap mb-0">

									<div className="section-title">
										<h2 className="section-title margin-top-5">
											{t("contact.shareThought")}
										</h2>

										<span className="border-bottom"></span>
									</div>

									<div className="pad-top-15">
										<p className="text-white margin-bottom-10">
											{t("contact.description")}
										</p>
									</div>

								</div>

								<div className="button-section margin-top-25">
									<Link
										className="btn btn-default"
										to="/contact"
										title="Contact Us"
									>
										{t("contact.button")}
									</Link>
								</div>

							</div>
						</div>

					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
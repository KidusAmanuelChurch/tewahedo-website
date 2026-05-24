import contImg from "../assets/Images/contact_bg1.jpg";
import { useState } from "react";
import { FaBackward } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import about from "../assets/Images/image06.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ContactPage() {
	const { t } = useTranslation();

	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		setMessage(t("contactPage.formMessage"));
	};

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
											<FaBackward /> {t("contactPage.backHome")}
										</Link>
									</div>

									<h1 className="page-title mb-0">
										{t("contactPage.title")}
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
						id="contact-section"
						className="contact-section pad-bottom-none"
					>
						<div className="container">
							<div className="row">

								{/* ADDRESS */}
								<div className="col-lg-4 mb-lg-0 mb-4">
									<div className="div-bg-img b-radius-20" data-bg={contImg}>
										<div className="f-box c-page text-center">
											<div className="feature-icon margin-bottom-10">
												<FaLocationDot />
											</div>

											<div className="feature-content">
												<h5 className="mb-2">
													{t("contactPage.addressTitle")}
												</h5>

												<p className="mb-0">
													Roskildevej 303, 2630 Taastrup.
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* PHONE */}
								<div className="col-lg-4 mb-lg-0 mb-4">
									<div
										className="div-bg-img b-radius-20"
										data-bg="images/contact/contact_bg2.jpg"
									>
										<div className="f-box c-page text-center">
											<div className="feature-icon margin-bottom-10">
												<BsFillTelephoneFill />
											</div>

											<div className="feature-content">
												<h5 className="mb-2">
													{t("contactPage.phoneTitle")}
												</h5>

												<a href="tel:(+45)52847624">
													(+45) 52 84 7624
												</a>

												<br />

												<a href="tel:(+45)91756084">
													(+45) 91 75 60 84
												</a>
											</div>
										</div>
									</div>
								</div>

								{/* EMAIL */}
								<div className="col-lg-4">
									<div
										className="div-bg-img b-radius-20"
										data-bg="images/contact/contact_bg3.jpg"
									>
										<div className="f-box c-page text-center">
											<div className="feature-icon margin-bottom-10">
												<MdOutlineMail />
											</div>

											<div className="feature-content">
												<h5 className="mb-2">
													{t("contactPage.emailTitle")}
												</h5>

												<a href="mailto:secretary@tewahedo.dk">
													secretary@tewahedo.dk
												</a>

												<br />

												<a href="mailto:cordinator@tewahedo.dk">
													cordinator@tewahedo.dk
												</a>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</section>

					{/* FORM */}
					<section className="contact-form-section form-with-img">
						<div className="container">
							<div className="row">

								<div className="col-lg-8 pe-0">
									<div className="contact-form-4 bg-white">
										<div className="contact-form-wrap">

											<form onSubmit={handleSubmit}>
												<div className="row">

													<div className="col-md-12">
														<input
															className="form-control"
															placeholder={t("contactPage.name")}
															type="text"
														/>
													</div>

													<div className="col-md-12 mt-3">
														<input
															className="form-control"
															placeholder={t("contactPage.email")}
															type="email"
														/>
													</div>

													<div className="col-md-12 mt-3">
														<input
															className="form-control"
															placeholder={t("contactPage.phone")}
															type="text"
														/>
													</div>

													<div className="col-md-12 mt-3">
														<textarea
															className="form-control"
															rows="5"
															placeholder={t("contactPage.message")}
														></textarea>
													</div>

													<div className="col-md-12 mt-3">
														<button className="btn btn-info w-100">
															{t("contactPage.send")}
														</button>
													</div>

												</div>
											</form>

											{message && (
												<div className="alert alert-warning mt-3 text-center">
													{message}
												</div>
											)}

										</div>
									</div>
								</div>

								<div className="col-lg-4 pad-none">
									<img
										className="img-fluid"
										src={contImg}
										alt="Contact"
									/>
								</div>

							</div>
						</div>
					</section>

					{/* MAP */}
					<section className="contact-map pad-top-none">
						<div className="container">
							<div className="row">
								<div className="col-md-12">

									<h2 className="screen-reader-text">
										{t("contactPage.map")}
									</h2>

									<div className="container-fluid pad-none">
										<div className="map mt-0">
	<iframe
		src="https://www.google.com/maps?q=Roskildevej+303,+2630+Taastrup&output=embed"
		width="100%"
		height="400"
		style={{ border: 0 }}
		allowFullScreen
		loading="lazy"
		referrerPolicy="no-referrer-when-downgrade"
		title="ደብረ ምሕረት ቅዱስ አማኑኤል ቤተ ክርስቲያን"
	></iframe>
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

export default ContactPage;
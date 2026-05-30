import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import WudasieMaryam from "../Liturature/Wudasie-Maryam-v3.1.pdf";
import { FaCross } from "react-icons/fa";

function Footer() {
	const { t } = useTranslation();
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(t("footer.newsletterMessage"));
	};

	return (
		<div>
			<footer
				id="footer"
				className="footer footer-1 footer-bg-img"
				data-bg="images/bg/footer-bg.jpg"
			>
				<div className="footer-widgets">
					<div className="footer-middle-wrap footer-overlay-dark">
						<div className="color-overlay"></div>

						<div className="container">
							<div className="row">
								{/* ABOUT */}
								<div className="col-lg-3 widget text-widget">
									<div className="">
										<h3 className="title typo-white d-flex align-items-center gap-2">
		<FaCross style={{ fontSize: "18px",color: "#28a745" }} />
											{t("footer.churchName")}
										</h3>
									</div>

									<div className="widget-text margin-bottom-30">
										<p>{t("footer.description")}</p>
									</div>
									

									<p>{t("footer.serviceTime")}</p>
								</div>

								{/* IMPORTANT LINKS */}
								<div className="col-lg-3 widget text-widget">
									<div className="">
	<h3 className="title typo-white d-flex align-items-center gap-2">
		<FaCross style={{ fontSize: "18px",color: "#28a745" }} />
		{t("footer.importantLinks")}
	</h3>
</div>

									<ul className="footer-links list-unstyled">
										
										<li>
											<a
												href={WudasieMaryam}
												target="_blank"
												rel="noopener noreferrer"
											>
												{t("footer.links.wudasieMaryam")}
											</a>
										</li>

										<li>
											<a
												href="https://ethiopianorthodox.org/"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t("footer.links.ethiopianChurch")}
											</a>
										</li>

										<li>
											<a
												href="https://www.bibelselskabet.dk/"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t("footer.links.danishBible")}
											</a>
										</li>

										<li>
											<a
												href="https://www.sacred-texts.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t("footer.links.kibreNegest")}
											</a>
										</li>
										
									</ul>
								</div>

								{/* CONTACT BUTTON */}
								<div className="col-lg-3 widget text-widget">
									<div className="">
										<h3 className="title typo-white d-flex align-items-center gap-2">
		<FaCross style={{ fontSize: "18px",color: "#28a745" }} />
											{t("footer.contactTitle")}
										</h3>
									</div>

									<p>{t("footer.contactText")}</p>

									<Link className="btn btn-default text-white" to="/contact">
										{t("footer.contactButton")}
									</Link>
									<br></br><br></br>
									
									<li>
										
		<Link to="/privacy-policy">
			{t("footer.privacyPolicy")}
		</Link>
	</li>
								</div>
								

								{/* SOCIAL + NEWSLETTER */}
								<div className="col-lg-3 widget contact-info-widget">
									<div className="social-icons">
										<a href="#" className="social-fb" aria-label="Facebook">
											<FaFacebook />
										</a>

										<a href="#" className="social-youtube" aria-label="YouTube">
											<FaYoutube />
										</a>
									</div>

									<p>{t("footer.newsletterTitle")}</p>

									<div className="mailchimp-widget-wrap">
										<form onSubmit={handleSubmit} className="subscribe-form">
											<div className="input-group add-on">
												<input
													type="email"
													className="form-control"
													placeholder={t("footer.emailPlaceholder")}
													required
												/>

												<div className="input-group-btn">
													<button
														className="btn btn-default subscribe-btn text-white"
														type="submit"
													>
														{t("footer.signUp")}
													</button>
													
												</div>
												
												
											</div>

											{message && (
												<p
													className="alert alert-warning mt-3 text-center"
													style={{ marginTop: "10px" }}
												>
													{message}
												</p>
											)}
										</form>
									</div>
								</div>
							</div>
						</div>

					</div>
					
				</div>

				<div className="footer-copyright">
	<div className="text-center mb-2">
	<small>
		{t("footer.officialWebsite")}
	</small>
</div>
					<div className="footer-bottom-wrap pad-tb-20 typo-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<ul className="footer-bottom-items pull-left">
										<li className="nav-item">
											<div className="nav-item-inner">
												{t("footer.copyright")}{" "}
												<a href="/">
													{t("footer.copyrightName")}
												</a>
											</div>
										</li>
									</ul>

									<ul className="footer-bottom-items footer-menu pull-right"></ul>
								</div>
							</div>
						</div>
					</div>
				</div>

			</footer>
		</div>
	);
}

export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import about from "../assets/Images/image06.jpg";

function PrivacyPolicy() {
	const { t } = useTranslation();
    

	const sections = t("privacyPolicy.sections", { returnObjects: true });

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
											<FaBackward /> {t("privacyPolicy.backHome")}
										</Link>
									</div>

									<h1 className="page-title mb-0">
										{t("privacyPolicy.title")}
									</h1>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<section className="privacy-policy-section py-5 bg-light">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div className="bg-white shadow rounded p-4 p-md-5">
								<p className="text-muted mb-4">
									{t("privacyPolicy.lastUpdated")}
								</p>

								<p className="lead">
									{t("privacyPolicy.intro")}
								</p>

								<hr />
                           

								{sections.map((section, index) => (
									<div key={index} className="mb-4">
										<h4 className="text-success mb-3">
											{section.title}
										</h4>

										{section.paragraphs.map((paragraph, pIndex) => (
											<p key={pIndex}>
												{paragraph}
											</p>
										))}

										{section.items && (
											<ul>
												{section.items.map((item, itemIndex) => (
													<li key={itemIndex}>
														{item}
													</li>
												))}
											</ul>
										)}
									</div>
								))}

								<div className="alert alert-success mt-4">
									<strong>{t("privacyPolicy.contactTitle")}</strong>
									<br />
									{t("privacyPolicy.contactText")}
									<br />
									<a href="mailto:finance@tewahedo.dk">
										secretary@tewahedo.dk, 
                                        
									</a>
                                    	<a >
										
                                        Tel-(+45) 52 84 7624
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default PrivacyPolicy;
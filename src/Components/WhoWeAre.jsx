import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AboutImage from "../assets/Images/image03.jpg";

function WhoWeAre() {
	const { t } = useTranslation();

	return (
		<div>
			<section id="section-about" className="section-about pad-top-90">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-12 px-3 ps-xl-0">
							<div className="title-wrap margin-bottom-30">
								<div className="section-title">
									<h2 className="section-title margin-top-5">
										{t("committee.title")}
									</h2>

									<span className="border-bottom"></span>
								</div>

								<div className="pad-top-15">
									<p className="margin-bottom-20">
										{t("committee.description")}
									</p>
								</div>
							</div>

							<div className="row">
								{/* Additional content can be added here */}
							</div>

							<div className="col-xl-12 align-self-center">
								<div className="about-wrap relative">
									<div className="about-wrap-inner">
										<div className="about-wrap-details">
											<div className="text-center">
												<div className="about-img p-4 mb-5 mb-xl-0">
													<img
														src={AboutImage}
														className=""
														alt="Church Committee"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="button-section margin-top-35">
								<Link
									to="/listofcommite"
									className="btn btn-default text-white"
									title={t("committee.button")}
								>
									{t("committee.button")}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default WhoWeAre;
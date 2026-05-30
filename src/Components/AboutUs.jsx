

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AboutImage from "../assets/Images/about-1.jpg";
import DotsBg from "../assets/Images/about-1-bg.png";

function AboutUs() {
	const { t } = useTranslation();

	return (
		<section id="section-about" className="section-about pad-top-90">
			<div className="container">
				{/* ROW */}
				<div className="row align-items-center">
					{/* LEFT — IMAGE */}
					<div className="col-12 col-lg-6 mb-4 mb-lg-0">
						<div className="about-wrap text-center">
							<div className="about-img bf-patternn">
								<img
									src={AboutImage}
									className="img-fluid rounded shadow-sm"
									alt="about church"
								/>
							</div>
						</div>
					</div>

					{/* RIGHT — TEXT */}
					<div className="col-12 col-lg-6">
						<div className="title-wrap margin-bottom-30">
							<div className="section-title">
								<h2 className="section-title margin-top-5">
									{t("about.title")}
								</h2>

								<span className="border-bottom"></span>
							</div>

							<div className="pad-top-15">
								<p className="margin-bottom-20">
									{t("about.paragraph1")}
								</p>

								<p className="margin-bottom-20">
									{t("about.paragraph2")}
								</p>

								<p className="margin-bottom-20">
									{t("about.paragraph3")}
								</p>
							</div>
						</div>

						{/* BUTTON */}
						<div className="button-section margin-top-35">
							<Link
								className="btn btn-default text-white"
								to="/aboutUsDetail"
							>
								{t("about.button")}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
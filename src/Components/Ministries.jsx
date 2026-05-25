import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Img1 from "../assets/Images/EducationSection.png";
import Img2 from "../assets/Images/mezemure4.jpg";
import Img3 from "../assets/Images/Children.jpg";
import Img4 from "../assets/Images/image02.jpg";
import Img5 from "../assets/Images/image07.jpg";

function Ministries() {
	const { t } = useTranslation();

	const ministries = [
		{
			image: Img1,
			title: t("ministries.education.title"),
			description: t("ministries.education.description"),
			link: "/education",
		},
		{
			image: Img2,
			title: t("ministries.mezmur.title"),
			description: t("ministries.mezmur.description"),
			link: "/mezmur",
		},
		{
			image: Img3,
			title: t("ministries.children.title"),
			description: t("ministries.children.description"),
			link: "/children",
		},
		{
			image: Img4,
			title: t("ministries.parents.title"),
			description: t("ministries.parents.description"),
			link: "/parents",
		},
		{
			image: Img5,
			title: t("ministries.members.title"),
			description: t("ministries.members.description"),
			link: "/memebers",
		},
	];

	return (
		<section
			id="ministries-section"
			className="ministries-section pad-top-95 pad-bottom-70"
		>
			<div className="container">
				<div className="row">
					<div className="offset-md-2 col-md-8">
						<div className="title-wrap text-center">
							<div className="section-title">
								<h2 className="section-title margin-top-5">
									{t("ministries.mainTitle")}
								</h2>

								<span className="border-bottom center"></span>
							</div>

							<p>{t("ministries.mainDescription")}</p>
						</div>
					</div>

					<div className="ministries-main-wrapper row">
						{ministries.map((item, index) => (
							<div className="item col-md-6" key={index}>
								<div className="ministries-box-style-2">
									<div className="ministries-inner">
										<div className="ministries-thumb">
											<img
												className="img-fluid squared w-100"
												src={item.image}
												width="360"
												height="240"
												alt={item.title}
											/>
										</div>

										<div className="ministries-content pad-30">
											<div className="ministries-title margin-bottom-15">
												<h4>
													<Link
														to={item.link}
														className="ministries-link text-decoration-none"
													>
														{item.title}
													</Link>
												</h4>
											</div>

											<div className="ministries-desc">
												<p>{item.description}</p>
											</div>

											<div className="ministries-link margin-top-20">
												<Link to={item.link} className="link">
													{t("ministries.readMore")}
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Ministries;
import BlogImg from "../assets/Images/newbuilding.jpg";
import abiytsome from "../assets/Images/abiytsom.jpg";
import { useTranslation } from "react-i18next";

function Blog() {
	const { t } = useTranslation();

	const blogs = [
		{
			image: BlogImg,
			title: t("blog.items.building.title"),
			description: t("blog.items.building.description"),
		},
		{
			image: abiytsome,
			title: t("blog.items.fasting.title"),
			description: t("blog.items.fasting.description"),
		},
	];

	return (
		<section className="blog-section pad-top-50 pad-bottom-95" id="news">
			<div className="container">
				<div className="title-wrap text-center margin-bottom-40">
					<div className="section-title">
						<span className="sub-title theme-color text-uppercase">
							{t("blog.subTitle")}
						</span>

						<h2 className="section-title margin-top-5">
							{t("blog.mainTitle")}
						</h2>

						<span className="border-bottom center"></span>
					</div>
				</div>

				<div className="row">
					{blogs.map((item, index) => (
						<div className="col-md-6 mb-4" key={index}>
							<div
								className="news-card h-100"
								style={{
									background: "#fff",
									borderRadius: "16px",
									overflow: "hidden",
									boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
									transition: "all 0.3s ease",
								}}
							>
								<div style={{ position: "relative" }}>
									<img
										src={item.image}
										className="img-fluid w-100"
										alt={item.title}
										style={{
											height: "280px",
											objectFit: "cover",
										}}
									/>

									<div
										style={{
											position: "absolute",
											bottom: "0",
											left: "0",
											right: "0",
											background:
												"linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
											padding: "45px 25px 20px",
										}}
									>
										<h3
											className="text-white margin-bottom-0"
											style={{
												fontSize: "24px",
												fontWeight: "700",
												lineHeight: "1.4",
											}}
										>
											{item.title}
										</h3>
									</div>
								</div>

								<div
									className="blog-details"
									style={{
										padding: "28px",
									}}
								>
									<p
										style={{
											fontSize: "16px",
											lineHeight: "1.9",
											color: "#444",
											marginBottom: "22px",
										}}
									>
										{item.description}
									</p>

									<a
										className="btn btn-default text-white"
										style={{
											borderRadius: "30px",
											padding: "10px 24px",
											fontWeight: "600",
										}}
									>
										{t("blog.readMore")}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Blog;
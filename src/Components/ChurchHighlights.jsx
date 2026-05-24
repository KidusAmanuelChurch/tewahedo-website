import {
	FaChurch,
	FaUsers,
	FaBook,
	FaFileAlt,
	FaHandsHelping,
	FaDonate,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ChurchHighlights() {
	const { t } = useTranslation();

	const cards = [
		{
			icon: <FaChurch />,
			title: t("highlights.foundationTitle"),
			text: t("highlights.foundationText"),
			link: "/aboutUsDetail",
		},
		{
			icon: <FaUsers />,
			title: t("highlights.departmentsTitle"),
			text: t("highlights.departmentsText"),
			link: "/aboutUsDetail",
		},
		{
			icon: <FaBook />,
			title: t("highlights.rulesTitle"),
			text: t("highlights.rulesText"),
			link: "/aboutUsDetail",
		},
		{
			icon: <FaFileAlt />,
			title: t("highlights.membershipTitle"),
			text: t("highlights.membershipText"),
			link: "https://docs.google.com/forms/d/1M5cx_AubDAfA5cz9TZOLBZ9rpHqBvh54z576axq3jPw/edit",
			external: true,
		},
		{
			icon: <FaHandsHelping />,
			title: t("highlights.servicesTitle"),
			text: t("highlights.servicesText"),
			link: "/services",
		},
		{
			icon: <FaDonate />,
			title: t("highlights.supportTitle"),
			text: t("highlights.supportText"),
			link: "/donation",
		},
	];

	return (
		<section className="events-section py-5 bg-light">
			<div className="container">
				{/* HEADER */}
				<div className="text-center mb-5">
					<h2 className="fw-bold text-success">
						{t("highlights.verse")}
					</h2>

					<p className="fst-italic text-muted fs-5">
						{t("highlights.verseRef")}
					</p>
				</div>

				<div className="row g-4">
					{cards.map((item, index) => {
						const CardContent = (
							<div className="card h-100 shadow-sm border-0 event-card">
								<div className="card-body text-center p-4">
									<div className="icon mb-3 text-success fs-1">
										{item.icon}
									</div>

									<h5 className="fw-bold mb-3">
										{item.title}
									</h5>

									<p className="text-muted small">
										{item.text}
									</p>
								</div>
							</div>
						);

						return (
							<div key={index} className="col-md-6 col-lg-4">
								{item.external ? (
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-decoration-none text-dark"
									>
										{CardContent}
									</a>
								) : (
									<Link
										to={item.link}
										className="text-decoration-none text-dark"
									>
										{CardContent}
									</Link>
								)}
							</div>
						);
					})}
				</div>
			</div>

			{/* CUSTOM CSS */}
			<style jsx>{`
				.event-card {
					border-radius: 15px;
					transition: all 0.3s ease;
				}

				.event-card:hover {
					transform: translateY(-8px);
					box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
					background: rgba(13, 110, 253, 0.1);
				}

				.icon {
					width: 70px;
					height: 70px;
					display: flex;
					align-items: center;
					justify-content: center;
					margin: auto;
					background: rgba(13, 110, 253, 0.1);
					border-radius: 50%;
				}
			`}</style>
		</section>
	);
}

export default ChurchHighlights;
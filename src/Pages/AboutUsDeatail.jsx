import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
	FaBackward,
	FaUsersCog,
	FaCalculator,
	FaBullhorn,
	FaBoxOpen,
	FaCogs,
} from "react-icons/fa";
import { FaPhone, FaEnvelope } from "react-icons/fa";

import about from "../assets/Images/image06.jpg";
import chart from "../assets/Images/chart123.jpeg";

import team1 from "../assets/Images/nahom.jpg";
import team2 from "../assets/Images/team-2.jpg";
import team3 from "../assets/Images/biruk.jpg";
import team4 from "../assets/Images/team-4.jpg";
import team5 from "../assets/Images/team-5.jpg";
import team6 from "../assets/Images/abaforprofil.jpg";
import ChurchImg from "../assets/Images/aba.jpeg";
import Dicons from "../assets/Images/dicons.jpg";

function AboutUsDetail() {
	const { t } = useTranslation();

	const teamMembers = [
		{ name: t("aboutDetail.team.abaZemikael"), img: team6 },
		{ name: t("aboutDetail.team.kesisEndale"), img: team2 },
		{ name: t("aboutDetail.team.dNahom"), img: team1 },
		{ name: t("aboutDetail.team.dHiruy"), img: team4 },
		{ name: t("aboutDetail.team.dBuruk"), img: team3 },
		{ name: t("aboutDetail.team.dYonas"), img: team5 },
		{ name: t("aboutDetail.team.dBekael"), img: team4 },
	];

	const serviceDepartments = [
		{
			icon: <FaUsersCog />,
			title: t("aboutDetail.departments.office.title"),
			text: t("aboutDetail.departments.office.text"),
		},
		{
			icon: <FaCalculator />,
			title: t("aboutDetail.departments.accounting.title"),
			text: t("aboutDetail.departments.accounting.text"),
		},
		{
			icon: <FaBullhorn />,
			title: t("aboutDetail.departments.gospel.title"),
			text: t("aboutDetail.departments.gospel.text"),
		},
		{
			icon: <FaBoxOpen />,
			title: t("aboutDetail.departments.property.title"),
			text: t("aboutDetail.departments.property.text"),
		},
		{
			icon: <FaCogs />,
			title: t("aboutDetail.departments.additional.title"),
			text: t("aboutDetail.departments.additional.text"),
		},
	];

	return (
		<div>
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
											<FaBackward /> {t("aboutDetail.backHome")}
										</Link>
									</div>
									<h1 className="page-title mb-0">{t("aboutDetail.pageTitle")}</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-4 mb-lg-0">
							<div className="section-title">
								<h2 className="section-title margin-top-5 fw-bold mb-4">
									{t("aboutDetail.fatherMessageTitle")}
								</h2>
								<span className="border-bottom"></span>
							</div>

							<br />

							<h5>{t("aboutDetail.holyIntro")}</h5>

							<p>{t("aboutDetail.fatherMessage1")}</p>
							<p>{t("aboutDetail.fatherMessage2")}</p>
							<p>{t("aboutDetail.fatherMessage3")}</p>

							<br />

							<p className="fw-semibold mt-3">{t("aboutDetail.thanksgiving")}</p>
							<h4 className="fw-semibold mt-3">{t("aboutDetail.fatherName")}</h4>
						</div>

						<div className="col-lg-6 text-center">
							<img
								src={ChurchImg}
								alt="Church"
								className="img-fluid rounded shadow"
							/>
						</div>
					</div>
				</div>
			</section>

			<div className="text-center mt-4">
				<h2 className="text-success">{t("aboutDetail.foundationTitle")}</h2>
			</div>

			<div className="container py-5">
				<div className="col-lg-10 mx-auto">
					<p style={{ lineHeight: "1.5" }}>
						{t("aboutDetail.foundationText1")}
						<br />
						<br />
						{t("aboutDetail.foundationText2")}
						<br />
						{t("aboutDetail.foundationText3")}
						<br />
						{t("aboutDetail.foundationText4")}
					</p>
				</div>
			</div>

			<section className="container py-5">
				<div className="row align-items-center">
					<div className="col-lg-6 text-center mb-4">
						<img src={about} className="img-fluid" alt="about" />
					</div>

					<div className="col-lg-6">
						<h2 className="mb-3 text-center">
							{t("aboutDetail.structureTitle")}
						</h2>

						<div className="position-relative">
							<img src={chart} className="img-fluid rounded shadow" alt="chart" />

							<Link
								to="/chartdetail"
								className="btn btn-success position-absolute"
								style={{
									bottom: "-35px",
									right: "15px",
									padding: "5px 8px",
									fontWeight: "200",
									borderRadius: "8px",
								}}
							>
								{t("aboutDetail.structureButton")}
							</Link>
						</div>
					</div>
				</div>
			</section>

			<div className="text-center mt-4">
				<h2 className="text-success">{t("aboutDetail.departmentsTitle")}</h2>
			</div>

			<section className="container py-5">
				<div className="row g-4">
					{serviceDepartments.map((item, index) => (
						<div key={index} className="col-md-6 col-lg-3">
							<div className="card h-100 shadow-sm border-0 event-card">
								<div className="card-body text-center p-4">
									<div className="icon mb-3 text-success fs-1">{item.icon}</div>
									<h6 className="fw-bold">{item.title}</h6>
									<p className="text-muted small">{item.text}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<div className="col-xl-12 align-self-center">
				<div className="about-wrap relative">
					<div className="about-wrap-inner">
						<div className="about-wrap-details">
							<div className="text-center">
								<div className="about-img p-2 m-5">
									<img src={Dicons} className="" alt="about-img" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="team-section py-5">
				<div className="container">
					<div className="text-center mb-4">
						<h3 className="text-success">{t("aboutDetail.clergyTitle")}</h3>
						<p className="small">{t("aboutDetail.clergySubtitle")}</p>
					</div>

					<div className="row">
						{teamMembers.map((member, index) => (
							<div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
								<div className="team-style-1">
									<div className="team-inner margin-bottom-20">
										<div className="team-thumb mb-0 relative">
											<div className="team-overlay"></div>

											<img
												src={member.img}
												className="img-fluid thumb w-100"
												style={{
													height: "260px",
													width: "120px",
													objectFit: "cover",
												}}
												alt="team"
											/>

											<div className="team-overlay-details top-left-overlay text-center">
												<div className="social-icons">
													<a href={`tel:${member.phone}`} title="Call">
														<FaPhone />
													</a>

													<a href={`mailto:${member.email}`} title="Email">
														<FaEnvelope />
													</a>
												</div>
											</div>
										</div>

										<div className="team-details text-center pad-20">
											<h5 className="mb-1 typo-white">{member.name}</h5>
											<p className="mb-0 typo-white">{member.role}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<style jsx>{`
				.event-card {
					border-radius: 12px;
					transition: 0.3s;
				}
				.event-card:hover {
					transform: translateY(-6px);
					box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
				}
				.icon {
					font-size: 28px;
					color: #198754;
				}
				.small-team .team-thumb img {
					height: 220px;
					object-fit: cover;
					border-radius: 10px;
				}
				.team-overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, 0.2);
					opacity: 0;
					transition: 0.3s;
					border-radius: 10px;
				}
				.team-thumb:hover .team-overlay {
					opacity: 1;
				}
				.team-details {
					background: #fff;
					border-radius: 0 0 10px 10px;
				}
			`}</style>
		</div>
	);
}

export default AboutUsDetail;
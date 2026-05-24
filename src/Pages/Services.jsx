import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import prayerImg from "../assets/Images/kidsase.jpg";
import kidasseImg from "../assets/Images/kidase2.jpeg";
import baptismImg from "../assets/oldImages/baptis.jpg";
import funneralImg from "../assets/Images/mehela.jpg";
import marriageImg from "../assets/Images/wedding.jpg";
import educationImg from "../assets/Images/education.jpg";

import { FaBackward } from "react-icons/fa";

import about from "../assets/Images/image06.jpg";

function Services() {

	const { t } = useTranslation();

	const services = [
		{
			title: t("servicesPage.items.liturgy.title"),
			img: kidasseImg,
			desc: t("servicesPage.items.liturgy.description"),
		},
		{
			title: t("servicesPage.items.prayer.title"),
			img: prayerImg,
			desc: t("servicesPage.items.prayer.description"),
		},
		{
			title: t("servicesPage.items.baptism.title"),
			img: baptismImg,
			desc: t("servicesPage.items.baptism.description"),
		},
		{
			title: t("servicesPage.items.marriage.title"),
			img: marriageImg,
			desc: t("servicesPage.items.marriage.description"),
		},
		{
			title: t("servicesPage.items.funeral.title"),
			img: funneralImg,
			desc: t("servicesPage.items.funeral.description"),
		},
		{
			title: t("servicesPage.items.education.title"),
			img: educationImg,
			desc: t("servicesPage.items.education.description"),
		},
	];

	return (
		<>
			{/* HEADER */}
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

									<div
										id="breadcrumb"
										className="breadcrumb margin-bottom-10"
									>

										<Link
											to="/"
											className="theme-color text-warning fs-3 text-decoration-none"
										>
											<FaBackward /> {t("servicesPage.backHome")}
										</Link>

									</div>

									<h1 className="page-title mb-0">
										{t("servicesPage.pageTitle")}
									</h1>

								</div>

							</div>

						</div>

					</div>

				</div>

			</div>

			{/* SERVICES SECTION */}
			<section className="services-page py-5 bg-light">

				<div className="container">

					{/* HEADER */}
					<div className="text-center mb-5">

						<p className="text-muted fs-5 mt-5">
							{t("servicesPage.description")}
						</p>

						<h2 className="mt-5">
							{t("servicesPage.mainServices")}
						</h2>

					</div>

					{/* SERVICES GRID */}
					<div className="row g-4">

						{services.map((item, index) => (

							<div key={index} className="col-md-6 col-lg-4">

								<div className="card h-100 shadow border-0 service-card">

									<img
										src={item.img}
										className="card-img-top"
										alt={item.title}
									/>

									<div className="card-body text-center">

										<h5 className="fw-bold text-success">
											{item.title}
										</h5>

										<p className="text-muted small">
											{item.desc}
										</p>

									</div>

								</div>

							</div>

						))}

					</div>

					{/* CTA */}
					<div className="text-center mt-5">

						<h4 className="mb-3">
							{t("servicesPage.ctaTitle")}
						</h4>

						<Link to="/contact" className="btn btn-success me-3">
							{t("servicesPage.contactButton")}
						</Link>

						<a
							href="https://docs.google.com/forms/d/1M5cx_AubDAfA5cz9TZOLBZ9rpHqBvh54z576axq3jPw/edit"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-outline-primary"
						>
							{t("servicesPage.memberButton")}
						</a>

					</div>

				</div>

				{/* STYLE */}
				<style jsx>{`
					.service-card {
						border-radius: 15px;
						overflow: hidden;
						transition: all 0.3s ease;
					}

					.service-card:hover {
						transform: translateY(-10px);
						box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
					}

					.service-card img {
						height: 200px;
						object-fit: cover;
					}
				`}</style>

			</section>
		</>
	);
}

export default Services;
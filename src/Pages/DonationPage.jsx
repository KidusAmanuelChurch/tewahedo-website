import React from "react";
import { FaBackward } from "react-icons/fa";
import about from "../assets/Images/image06.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function DonationPage() {
	const { t } = useTranslation();

	return (
		<>
			{/* PAGE HEADER */}
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

									<div className="breadcrumb margin-bottom-10">
										<Link
											to="/"
											className="theme-color text-warning fs-3 text-decoration-none"
										>
											<FaBackward /> {t("donation.backHome")}
										</Link>
									</div>

									<h1 className="page-title mb-0">
										{t("donation.pageTitle")}
									</h1>

								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			{/* CONTENT */}
			<div className="content-wrapper pad-none">
				<div className="content-inner pad-60">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8">

								<div className="bg-white p-4 shadow rounded">

									<h4 className="mb-3 text-primary">
										{t("donation.titheTitle")}
									</h4>

									<p>Reg. Nr : 1551</p>
									<p>Account Nr. 10620643</p>

									<hr />

									<h4 className="mb-3 text-primary">
										{t("donation.buildingTitle")}
									</h4>

									<p>Reg. Nr : 9570</p>
									<p>Account Nr. 3385069936</p>

									<hr />

									<h5 className="text-success">
										📱 {t("donation.mobilePay")}: 399977
									</h5>

									<hr />

									<h4 className="mb-3 text-primary">
										{t("donation.internationalTitle")}
									</h4>

									<p>
										<strong>
											{t("donation.churchName")}
										</strong>
									</p>

									<p>
										{t("donation.address")}: Roskildevej 303 Taastrup 2630
									</p>

									<p>
										{t("donation.phone")}: +4552847624
									</p>

									<p>
										{t("donation.email")}: finance@tewahedo.dk
									</p>

									<hr />

									<h5 className="text-dark">
										{t("donation.bank")}: Danske Bank
									</h5>

									<p>Reg: 1551 / Account: 10620643</p>
									<p>IBAN: DK2030000010620643</p>
									<p>SWIFT: DABADKKK</p>

									<hr />

									<h4 className="mb-3 text-primary">
										{t("donation.buildingInternational")}
									</h4>

									<h5>
										{t("donation.bank")}: Danske Bank
									</h5>

									<p>Reg: 9570 / Account: 3385069936</p>
									<p>IBAN: DK0930003385069936</p>
									<p>SWIFT: DABADKKK</p>

									<hr />

									<h4 className="text-center text-success">
										{t("donation.blessing")}
									</h4>

								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DonationPage;
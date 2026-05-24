import React from "react";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ChartDetail() {
	const { t } = useTranslation();

	return (
		<div className="container py-5">
			<div id="breadcrumb" className="breadcrumb margin-bottom-10">
				<Link
					to="/aboutUsDetail"
					className="theme-color fs-3 text-decoration-none"
				>
					<FaBackward /> {t("chartDetail.back")}
				</Link>
			</div>

			<div className="text-center mb-5">
				<h1 className="fw-bold text-success">{t("chartDetail.title")}</h1>
				<p className="text-muted">{t("chartDetail.subtitle")}</p>
			</div>

			<div className="card shadow-sm mb-4 p-4">
				<h4 className="text-primary mb-3">{t("chartDetail.synodTitle")}</h4>
				<p>{t("chartDetail.synodText")}</p>
			</div>

			<div className="card shadow-sm mb-4 p-4">
				<h4 className="text-primary mb-3">{t("chartDetail.patriarchateTitle")}</h4>
				<p>{t("chartDetail.patriarchateText")}</p>
			</div>

			<div className="card shadow-sm mb-4 p-4">
				<h4 className="text-primary mb-3">{t("chartDetail.dioceseTitle")}</h4>
				<p>{t("chartDetail.dioceseText")}</p>
			</div>

			<div className="card shadow mb-5 p-4">
				<h3 className="text-success mb-4">{t("chartDetail.parishCouncilTitle")}</h3>
				<p>{t("chartDetail.parishCouncilText")}</p>
			</div>

			<div className="row g-4">
				<div className="col-md-6">
					<div className="card h-100 shadow-sm p-3">
						<h5 className="text-primary">{t("chartDetail.officeTitle")}</h5>
						<p>{t("chartDetail.officeText")}</p>
					</div>
				</div>

				<div className="col-md-6">
					<div className="card h-100 shadow-sm p-3">
						<h5 className="text-primary">{t("chartDetail.financeTitle")}</h5>
						<p>{t("chartDetail.financeText1")}</p>
						<p>{t("chartDetail.financeText2")}</p>
					</div>
				</div>

				<div className="col-md-6">
					<div className="card h-100 shadow-sm p-3">
						<h5 className="text-primary">{t("chartDetail.gospelTitle")}</h5>
						<p>{t("chartDetail.gospelText")}</p>
					</div>
				</div>

				<div className="col-md-6">
					<div className="card h-100 shadow-sm p-3">
						<h5 className="text-primary">{t("chartDetail.propertyTitle")}</h5>
						<p>{t("chartDetail.propertyText")}</p>
					</div>
				</div>
			</div>

			<div className="mt-5">
				<h4 className="text-success mb-3">{t("chartDetail.additionalTitle")}</h4>
				<p>{t("chartDetail.additionalText")}</p>

				<ul className="list-group shadow-sm">
					<li className="list-group-item">{t("chartDetail.list.charity")}</li>
					<li className="list-group-item">{t("chartDetail.list.it")}</li>
					<li className="list-group-item">{t("chartDetail.list.priests")}</li>
					<li className="list-group-item">{t("chartDetail.list.publicRelations")}</li>
					<li className="list-group-item">{t("chartDetail.list.sundaySchool")}</li>
					<li className="list-group-item">{t("chartDetail.list.building")}</li>
				</ul>
			</div>
			<p></p>
		</div>
	);
}

export default ChartDetail;
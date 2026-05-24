// import React from "react";
// import { Link } from "react-router-dom";
// import about from "../assets/Images/WHO.jpg";
// import one1 from "../assets/Images/kidase.jpg";
// import team6 from "../assets/Images/team-6.jpg";
// import team2 from "../assets/Images/team-2.jpg";
// import team1 from "../assets/Images/team-1.jpg";
// import team4 from "../assets/Images/team-4.jpg";
// import team3 from "../assets/Images/team-3.jpg";
// import team5 from "../assets/Images/team-5.jpg";
// import chart from "../assets//Images/chart.jpg"
// import { FaBackward } from "react-icons/fa";

// function AboutUsDetail() {
//     return (
// 			<div>
// 				<div className="page-title-wrap typo-white">
// 					<div
// 						className="page-title-wrap-inner section-bg-img"
// 						style={{ backgroundImage: `url(${about})` }}
// 					>
// 						<span className="theme-overlay"></span>
// 						<div className="container">
// 							<div className="row text-center">
// 								<div className="col-md-12">
// 									<div className="page-title-inner">
// 										<div
// 											id="breadcrumb"
// 											className="breadcrumb margin-bottom-10"
// 										>
// 											<Link
// 												to="/"
// 												className="theme-color text-warning fs-3 text-decoration-none"
// 											>
// 												<FaBackward /> ቀዳሚ ገጽ
// 											</Link>
// 											{/* <span className="current">የሰ/መ/አ/ጉ አባላት</span> */}
// 										</div>
// 										<h1 className="page-title mb-0">የሰ/መ/አ/ጉ አባላት</h1>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="content-wrapper pad-none">
// 					<div className="content-inner">
// 						<section
// 							id="section-about"
// 							className="section-about pad-bottom-none"
// 						>
// 							<div className="container">
// 								<div className="row d-flex align-items-center">
// 									<div className="col-lg-6">
// 										<div className="about-wrap relative">
// 											<div className="about-wrap-inner">
// 												<div className="about-wrap-details">
// 													<div className="text-center">
// 														<div className="about-img">
// 															<img src={about} alt="about-img" />
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>

// 									<div className="col-lg-6">
// 										<div className="title-wrap margin-bottom-50">
// 											<div className="section-title">
// 												{/* <span className="sub-title theme-color text-uppercase">
//                                                 About Us
//                                             </span> */}
// 												<h2 className="section-title margin-top-5">
// 													የቤተ ክርስቲያናችን መዋቅር
// 												</h2>
// 												<span className="border-bottom"></span>
// 											</div>

// 											<div className="about-img">
// 												<img src={chart} alt="about-img" />
// 											</div>

// 											<div className="pad-top-15">
// 												<p className="margin-bottom-20">
// 													ከጠቅላላ ጉባኤው ቀጥሎ የቤተ ክርስቲያኒቱ ከፍተኛ አመራር ነው በቃለ አዋዲው አንቀጽ
// 													12 ንዑስ አንቀጽ 17 መሠረት አንድ ጽ/ቤትና ልዩ ልዩ የሥራ ክፍሎች አቋቁሞ እየሠራ
// 													ይገኛል በቃለ አዋዲው አንቀጽ 5 እና 6 የተደነገጉትን ተግባራት እያከናወነ ይገኛል
// 													በወር ሁለት ጊዜ መደበኛ ስብሰባ ያደርጋል የቤተ ክርስቲያኒቱን የዕለት ተዕለት
// 													ሥራዎችን እየሠራ፣ እያስተባበረ እና አመራር እየሰጠ ይገኛል
// 												</p>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</section>

// 						<section
// 							id="team-section"
// 							className="team-section pad-top-95 pad-bottom-90"
// 						>
// 							<div className="container">
// 								<div className="row">
// 									<div className="offset-md-2 col-md-8">
// 										<div className="title-wrap text-center">
// 											<div className="section-title">
// 												<span className="sub-title theme-color text-uppercase"></span>
// 												<h2 className="section-title margin-top-5">
// 													የሰ/መ/አ/ጉ አባላት
// 												</h2>
// 												<span className="border-bottom center"></span>
// 											</div>
// 											<p>ቤተ ክርስቲያናችንን ከ2025 ጀምሮ በሰበካ አባልነት እያገለግሉ ያሉ</p>
// 										</div>
// 									</div>

// 									<div className="row">
// 										<div className="col-xl-4 col-lg-6 col-md-6 mb-4">
// 											<div className="team-style-1">
// 												<div className="team-inner margin-bottom-20">
// 													<div className="team-thumb mb-0 relative">
// 														<div className="team-overlay"></div>
// 														<img
// 															src={team6}
// 															className="img-fluid thumb w-100"
// 															width="280"
// 															height="285"
// 															alt="team-img"
// 														/>
// 														<div className="team-overlay-details top-left-overlay typo-white text-center">
// 															<div className="social-icons">
// 																<a href="#">
// 																	<span className="ti-facebook"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-twitter"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-instagram"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-linkedin"></span>
// 																</a>
// 															</div>
// 														</div>
// 													</div>
// 													<div className="team-details text-center pad-20">
// 														<div className="team-name">
// 															<h3 className="mb-0">
// 																<a href="#" className="client-name typo-white">
// 																	መልአከ ምሕረት ቆሞስ አባ ዘሚካኤል
// 																</a>
// 															</h3>
// 														</div>
// 														<div className="team-designation typo-white">
// 															<p className="mb-0">ሰብሳቢ</p>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>

// 										<div className="col-xl-4 col-lg-6 col-md-6 mb-4">
// 											<div className="team-style-1">
// 												<div className="team-inner margin-bottom-20">
// 													<div className="team-thumb mb-0 relative">
// 														<div className="team-overlay"></div>
// 														<img
// 															src={team2}
// 															className="img-fluid thumb w-100"
// 															width="480"
// 															height="485"
// 															alt="team-img"
// 														/>
// 														<div className="team-overlay-details top-left-overlay typo-white text-center">
// 															<div className="social-icons">
// 																<a href="#">
// 																	<span className="ti-facebook"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-twitter"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-instagram"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-linkedin"></span>
// 																</a>
// 															</div>
// 														</div>
// 													</div>
// 													<div className="team-details text-center pad-20">
// 														<div className="team-name">
// 															<h3 className="mb-0">
// 																<a href="#" className="client-name typo-white">
// 																	ወ/ሮ ፋና ሀይሌ ተስፋይ
// 																</a>
// 															</h3>
// 														</div>
// 														<div className="team-designation">
// 															<p className="mb-0">ምክትል ሰብሳቢ</p>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>

// 										<div className="col-xl-4 col-lg-6 col-md-6 mb-4">
// 											<div className="team-style-1">
// 												<div className="team-inner margin-bottom-20">
// 													<div className="team-thumb mb-0 relative">
// 														<div className="team-overlay"></div>
// 														<img
// 															src={team1}
// 															className="img-fluid thumb w-100"
// 															width="480"
// 															height="485"
// 															alt="team-img"
// 														/>
// 														<div className="team-overlay-details top-left-overlay typo-white text-center">
// 															<div className="social-icons">
// 																<a href="#">
// 																	<span className="ti-facebook"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-twitter"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-instagram"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-linkedin"></span>
// 																</a>
// 															</div>
// 														</div>
// 													</div>
// 													<div className="team-details text-center pad-20">
// 														<div className="team-name">
// 															<h3 className="mb-0">
// 																<a href="#" className="client-name typo-white">
// 																	ዶ/ር አዲሱ አንተነህ ድልነሳ
// 																</a>
// 															</h3>
// 														</div>
// 														<div className="team-designation">
// 															<p className="mb-0">ጸሐፊ</p>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>

// 										<div className="col-xl-4 col-lg-6 col-md-6 mb-4">
// 											<div className="team-style-1">
// 												<div className="team-inner margin-bottom-20">
// 													<div className="team-thumb mb-0 relative">
// 														<div className="team-overlay"></div>
// 														<img
// 															src={team4}
// 															className="img-fluid thumb w-100"
// 															width="480"
// 															height="485"
// 															alt="team-img"
// 														/>
// 														<div className="team-overlay-details top-left-overlay typo-white text-center">
// 															<div className="social-icons">
// 																<a href="#">
// 																	<span className="ti-facebook"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-twitter"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-instagram"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-linkedin"></span>
// 																</a>
// 															</div>
// 														</div>
// 													</div>
// 													<div className="team-details text-center pad-20">
// 														<div className="team-name">
// 															<h3 className="mb-0">
// 																<a href="#" className="client-name typo-white">
// 																	ወ/ሮ ብርቱካን ተስፋዬ ወርቁ
// 																</a>
// 															</h3>
// 														</div>
// 														<div className="team-designation">
// 															<p className="mb-0">ገንዘብ ያዥ</p>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>

// 										<div className="col-xl-4 col-lg-6 col-md-6 mb-4">
// 											<div className="team-style-1">
// 												<div className="team-inner margin-bottom-20">
// 													<div className="team-thumb mb-0 relative">
// 														<div className="team-overlay"></div>
// 														<img
// 															src={team3}
// 															className="img-fluid thumb w-100"
// 															width="480"
// 															height="485"
// 															alt="team-img"
// 														/>
// 														<div className="team-overlay-details top-left-overlay typo-white text-center">
// 															<div className="social-icons">
// 																<a href="#">
// 																	<span className="ti-facebook"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-twitter"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-instagram"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-linkedin"></span>
// 																</a>
// 															</div>
// 														</div>
// 													</div>
// 													<div className="team-details text-center pad-20">
// 														<div className="team-name">
// 															<h3 className="mb-0">
// 																<a href="#" className="client-name typo-white">
// 																	ወ/ሮ ማሕደር መኮንን አስፋው
// 																</a>
// 															</h3>
// 														</div>
// 														<div className="team-designation">
// 															<p className="mb-0">ሒሳብ ክፍል</p>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>

// 										<div className="col-xl-4 col-lg-6 col-md-6 mb-4">
// 											<div className="team-style-1">
// 												<div className="team-inner margin-bottom-20">
// 													<div className="team-thumb mb-0 relative">
// 														<div className="team-overlay"></div>
// 														<img
// 															src={team5}
// 															className="img-fluid thumb w-100"
// 															width="480"
// 															height="485"
// 															alt="team-img"
// 														/>
// 														<div className="team-overlay-details top-left-overlay typo-white text-center">
// 															<div className="social-icons">
// 																<a href="#">
// 																	<span className="ti-facebook"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-twitter"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-instagram"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-linkedin"></span>
// 																</a>
// 															</div>
// 														</div>
// 													</div>
// 													<div className="team-details text-center pad-20">
// 														<div className="team-name">
// 															<h3 className="mb-0">
// 																<a href="#" className="client-name typo-white">
// 																	ቀሲስ እንዳለ አሰፋ ገብሬ
// 																</a>
// 															</h3>
// 														</div>
// 														<div className="team-designation">
// 															<p className="mb-0">ስብከተ ወንጌል</p>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>

// 										<div className="col-xl-4 col-lg-6 col-md-6 mb-4">
// 											<div className="team-style-1">
// 												<div className="team-inner margin-bottom-20">
// 													<div className="team-thumb mb-0 relative">
// 														<div className="team-overlay"></div>
// 														<img
// 															src={team3}
// 															className="img-fluid thumb w-100"
// 															width="480"
// 															height="485"
// 															alt="team-img"
// 														/>
// 														<div className="team-overlay-details top-left-overlay typo-white text-center">
// 															<div className="social-icons">
// 																<a href="#">
// 																	<span className="ti-facebook"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-twitter"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-instagram"></span>
// 																</a>
// 																<a href="#">
// 																	<span className="ti-linkedin"></span>
// 																</a>
// 															</div>
// 														</div>
// 													</div>
// 													<div className="team-details text-center pad-20">
// 														<div className="team-name">
// 															<h3 className="mb-0">
// 																<a href="#" className="client-name typo-white">
// 																	አቶ ፍፁም ሀብተማርያም ኪዳኔ
// 																</a>
// 															</h3>
// 														</div>
// 														<div className="team-designation">
// 															<p className="mb-0">ንብረት ክፍል</p>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</section>
// 					</div>
// 				</div>
// 			</div>
// 		);
// }

// export default AboutUsDetail;


import React from "react";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import about from "../assets/Images/committe.jpg";
import chart from "../assets/Images/chartofmembers.jpg";

import team1 from "../assets/Images/team-1.jpg";
import team2 from "../assets/Images/team-2.jpg";
import team3 from "../assets/Images/team-3.jpg";
import team4 from "../assets/Images/team-4.jpg";
import team5 from "../assets/Images/team-5.jpg";
import team6 from "../assets/Images/team-6.jpg";

function AboutUsDetail() {

	const { t } = useTranslation();

	const teamMembers = [
		{
			name: "መልአከ ምሕረት ቆሞስ አባ ዘሚካኤል",
			role: t("committeeDetail.roles.chairman"),
			img: team6,
			phone: "+4552847624",
			email: "abazemikael21@gmail.com",
		},
		{
			name: "ወ/ሮ ፋና ሀይሌ ተስፋይ",
			role: t("committeeDetail.roles.viceChairman"),
			img: team2,
			phone: "+4552668843",
			email: "fanot12@yahoo.com",
		},
		{
			name: "ዶ/ር አዲሱ አንተነህ ድልነሳ",
			role: t("committeeDetail.roles.secretary"),
			img: team1,
			phone: "+4591756084",
			email: "addisuecomsc@gmail.com",
		},
		{
			name: "ወ/ሮ ብርቱካን ተስፋዬ ወርቁ",
			role: t("committeeDetail.roles.finance"),
			img: team4,
			phone: "+4560416832",
			email: "bthelen2@gmail.com",
		},
		{
			name: "ወ/ሮ ማሕደር መኮንን አስፋው",
			role: t("committeeDetail.roles.accounting"),
			img: team3,
			phone: "+4522389611",
			email: "mahider1580mekonnen@gmail.com",
		},
		{
			name: "ቀሲስ እንዳለ አሰፋ ገብሬ",
			role: t("committeeDetail.roles.preaching"),
			img: team5,
			phone: "+4571357668",
		},
		{
			name: "አቶ ፍፁም ሀብተማርያም ኪዳኔ",
			role: t("committeeDetail.roles.property"),
			img: team3,
			phone: "+4571602281",
			email: "fatse8@gmail.com",
		},
	];

	return (
		<div>

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

									<div className="breadcrumb margin-bottom-10">
										<Link
											to="/"
											className="theme-color text-warning fs-3 text-decoration-none"
										>
											<FaBackward /> {t("committeeDetail.backHome")}
										</Link>
									</div>

									<h1 className="page-title mb-0">
										{t("committeeDetail.pageTitle")}
									</h1>

								</div>

							</div>
						</div>
					</div>

				</div>
			</div>

			{/* INTRO */}
			<div className="container py-5">
				<div className="col-lg-10 mx-auto">

					<p style={{ lineHeight: "1.8" }}>
						{t("committeeDetail.description")}
					</p>

				</div>
			</div>

			{/* ABOUT SECTION */}
			<div className="container py-5">

				<div className="row align-items-center">

					<div className="col-lg-6 text-center">
						<img src={about} alt="about" className="img-fluid" />
					</div>

					<div className="col-lg-6 py-5">

						<h2 className="text-center">
							{t("committeeDetail.structureTitle")}
						</h2>

						<img src={chart} alt="chart" className="img-fluid mb-3" />

						<p>
							{t("committeeDetail.structureDescription")}
						</p>

					</div>

				</div>

			</div>

			{/* TEAM SECTION */}
			<section className="team-section pad-top-95 pad-bottom-90">

				<div className="container">

					<div className="text-center mb-5">

						<h2>{t("committeeDetail.teamTitle")}</h2>

						<p>
							{t("committeeDetail.teamSubtitle")}
						</p>

					</div>

					<div className="row">

						{teamMembers.map((member, index) => (

							<div
								key={index}
								className="col-lg-3 col-md-4 col-sm-6 mb-4"
							>

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

													<span className="mb-1 typo-white">
														{member.phone}
													</span>

													{member.email && (
														<>
															<a
																href={`mailto:${member.email}`}
																title="Email"
															>
																<FaEnvelope />
															</a>

															<span className="mb-1 typo-white">
																{member.email}
															</span>
														</>
													)}

												</div>

											</div>

										</div>

										<div className="team-details text-center pad-20">

											<h5 className="mb-1 typo-white">
												{member.name}
											</h5>

											<p className="mb-0 text-success">
												{member.role}
											</p>

										</div>

									</div>

								</div>

							</div>

						))}

					</div>

				</div>

			</section>

		</div>
	);
}

export default AboutUsDetail;
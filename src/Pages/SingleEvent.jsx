import { Link } from "react-router-dom";
import {
	FaBackward,
	FaCalendarAlt,
	FaClock,
	FaMapMarkerAlt,
	FaPrayingHands,
	FaMusic,
	FaBible,
	FaChurch,
} from "react-icons/fa";

import Kidase from "../assets/Images/kidase.jpg";
import Kidase2 from "../assets/Images/kidase2.jpeg";

const SingleEvent = () => {
	const services = [
		{
			icon: <FaPrayingHands />,
			title: "በጸሎት",
			text: "ምእመናን በጸሎት እና በተመስጦ በቅዳሴ ይሳተፋሉ።",
		},
		{
			icon: <FaMusic />,
			title: "በመዝሙር",
			text: "መዘምራን በኦርቶዶክሳዊ ዜማ እግዚአብሔርን ያመሰግናሉ።",
		},
		{
			icon: <FaBible />,
			title: "ስብከተ ወንጌል",
			text: "የቅዱስ ወንጌል ትምህርት ለምእመናን ይሰጣል።",
		},
		{
			icon: <FaChurch />,
			title: "ቅዱስ ቁርባን",
			text: "በተዘጋጁ ምእመናን ቅዱስ ቁርባን ይቀበላሉ።",
		},
	];

	return (
		<>
			<div className="page-title-wrap typo-white">
				<div
					className="page-title-wrap-inner section-bg-img"
					style={{ backgroundImage: `url(${Kidase})` }}
				>
					<span className="theme-overlay"></span>

					<div className="container">
						<div className="row text-center">
							<div className="col-md-12">
								<div className="page-title-inner">
									<div id="breadcrumb" className="breadcrumb margin-bottom-10">
										<Link to="/events" className="theme-color text-warning fs-3 text-decoration-none">
											<FaBackward /> ቀዳሚ ገጽ
										</Link>
									</div>

									<h1 className="page-title mb-0">የቅዳሴ አገልግሎት</h1>
									<p className="mt-3 text-white">
										ዘወትር እሁድ በደብረ ምሕረት ቅዱስ አማኑኤል ቤተ ክርስቲያን
									</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div className="content-wrapper pad-none">
				<div className="content-inner">
					<section id="single-event" className="single-event pad-top-80 pad-bottom-70">
						<div className="container">
							<div className="single-event-wrap">

								<div className="row">
									<div className="col-lg-8">
										<img
											src={Kidase}
											className="img-fluid single-event-img b-radius-10 shadow mb-4"
											alt="Kidase service"
										/>

										<h2 className="text-success mb-3">
											ቅዳሴ ምንድን ነው?
										</h2>

										<p className="margin-bottom-25">
											ቅዳሴ በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ዋና የአምልኮ
											አገልግሎት ሲሆን፣ ምእመናን በጸሎት፣ በመዝሙር፣ በስብከተ
											ወንጌል እና በቅዱስ ቁርባን በእግዚአብሔር ፊት የሚቆሙበት
											ቅዱስ መንፈሳዊ ሥርዓት ነው።
										</p>

										<p className="margin-bottom-35">
											በቅዳሴ ጊዜ ምእመናን በአንድነት ይጸልያሉ፣ መዝሙር ያቀርባሉ፣
											ቃለ እግዚአብሔርን ይሰማሉ፣ እና በተዘጋጁበት መንፈሳዊ ሁኔታ
											ቅዱስ ቁርባን ይቀበላሉ። ይህ አገልግሎት የቤተ ክርስቲያናችን
											መንፈሳዊ ሕይወት ማዕከል ነው።
										</p>

										<div className="row mb-5">
											{services.map((item, index) => (
												<div className="col-md-6 mb-4" key={index}>
													<div
														className="h-100 p-4 shadow-sm rounded bg-light"
														style={{ borderLeft: "5px solid #198754" }}
													>
														<div className="text-success fs-3 mb-2">
															{item.icon}
														</div>

														<h5 className="fw-bold text-success">
															{item.title}
														</h5>

														<p className="mb-0">
															{item.text}
														</p>
													</div>
												</div>
											))}
										</div>

										<h3 className="text-success mb-3">
											የቅዳሴ አገልግሎት ፎቶዎች
										</h3>

										<div className="row">
											{[Kidase2, Kidase2, Kidase2].map((img, index) => (
												<div className="col-md-4 margin-bottom-30" key={index}>
													<img
														src={img}
														className="img-fluid b-radius-6 shadow-sm"
														alt="Kidase gallery"
													/>
												</div>
											))}
										</div>
									</div>

									<div className="col-lg-4">
										<div className="event-details-wrap shadow rounded p-4 bg-white">
											<h4 className="text-success mb-4">
												የአገልግሎት መረጃ
											</h4>

											<p>
												<FaChurch className="text-success me-2" />
												<strong>አዘጋጅ፦</strong> ደብረ ምሕረት ቅዱስ አማኑኤል
											</p>

											<p>
												<FaCalendarAlt className="text-success me-2" />
												<strong>ቀን፦</strong> ዘወትር እሁድ
											</p>

											<p>
												<FaClock className="text-success me-2" />
												<strong>ሰዓት፦</strong> 08:00
											</p>

											<p>
												<FaMapMarkerAlt className="text-success me-2" />
												<strong>ቦታ፦</strong> Roskildevej 303, 2630 Taastrup
											</p>

											<hr />

											<h5 className="text-success mb-3">
												ምእመናን ማስታወሻ
											</h5>

											<p>
												ምእመናን በጸሎት፣ በትሕትና እና በመንፈሳዊ ዝግጅት
												በቅዳሴ እንዲሳተፉ በፍቅር ይጋበዛሉ።
											</p>

											<a
												href="https://www.google.com/maps/search/?api=1&query=Roskildevej+303,+2630+Taastrup"
												target="_blank"
												rel="noopener noreferrer"
												className="btn btn-success w-100 mb-3"
											>
												ካርታ ይክፈቱ
											</a>

											<Link to="/contact" className="btn btn-outline-primary w-100">
												ያግኙን
											</Link>
										</div>
									</div>
								</div>

							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default SingleEvent;
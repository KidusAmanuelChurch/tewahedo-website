import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import DonationModal from "./DonationModal";

import BanImg from "../assets/Images/bg-1.jpg";

import { FaVideo, FaUsers, FaUserCheck } from "react-icons/fa";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Banner2() {
	const { t } = useTranslation();

	const [showVideo, setShowVideo] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	// Close modal with ESC key
	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") {
				setShowVideo(false);
			}
		};

		if (showVideo) {
			window.addEventListener("keydown", handleEsc);
		}

		return () => window.removeEventListener("keydown", handleEsc);
	}, [showVideo]);

	return (
		<>
			<div>
				<section
					id="get-quote-section"
					className="get-quote-section section-bg-img mt-5"
					style={{ backgroundImage: `url(${BanImg})` }}
				>
					<span className="theme-overlay"></span>

					<div className="container">
						<div className="row text-center">
							<div className="col-md-12">
								<div className="get-quote-1">
									{/* VIDEO BUTTON */}
									<div className="video-wrap wrap-stretch relative margin-bottom-50">
										<div className="video-wrap-details">
											<div className="video-play-btn text-center">
												<div className="video-icon">
													<a
														className="popup-youtube box-shadow1"
														href="#!"
														onClick={(e) => {
															e.preventDefault();
															setShowVideo(true);
														}}
													>
														<i>
															<FaVideo
																style={{
																	color: "blue",
																	fontSize: "20px",
																}}
															/>
														</i>
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* COUNTERS */}
									<div className="stats-section margin-bottom-40">
										<div className="row justify-content-center text-center">
											{/* REGISTERED MEMBERS */}
											<div className="col-md-5 mb-4">
												<CounterCard
													icon={<FaUsers />}
													title={t("banner.registeredMembers")}
													end={130}
												/>
											</div>

											{/* MONTHLY SUPPORTERS */}
											<div className="col-md-5 mb-4 text-primary">
												<CounterCard
													icon={<FaUserCheck />}
													title={t("banner.monthlyMembers")}
													end={130}
												/>
											</div>
										</div>
									</div>

									{/* DONATION BUTTON */}
									<div className="get-quote-btn">
										<button
											className="btn btn-default text-white"
											onClick={() => setOpenModal(true)}
										>
											{t("banner.donateButton")}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* VIDEO MODAL */}
			<div
				className={`yt-overlay ${showVideo ? "show" : ""}`}
				onClick={() => setShowVideo(false)}
			>
				<div className="yt-modal" onClick={(e) => e.stopPropagation()}>
					<button
						className="yt-close"
						onClick={() => setShowVideo(false)}
					>
						✕
					</button>

					{showVideo && (
						<iframe
							src="https://www.youtube.com/embed/xSjzDb5t6xw?si=-DyyQBpigd3mNXM8"
							title="YouTube"
							allow="autoplay; encrypted-media"
							allowFullScreen
						/>
					)}
				</div>
			</div>

			<DonationModal
				isOpen={openModal}
				onClose={() => setOpenModal(false)}
			/>
		</>
	);
}

/* COUNTER COMPONENT */
function CounterCard({ icon, title, end }) {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	return (
		<div ref={ref} className="counter-card p-4 text-white">
			<div className="icon mb-3">{icon}</div>

			<h3 className="fw-bold text-warning">
				{inView ? <CountUp end={end} duration={2} /> : 0}+
			</h3>

			<p className="mb-0">{title}</p>
		</div>
	);
}

export default Banner2;
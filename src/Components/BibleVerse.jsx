// import { useRef, useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

// import audioFile from "../assets/images/kidase.mp3";
// import ChurchImg from "../assets/Images/ChruchBuilding.jpg";

// function BibleVerse() {
// 	const { t } = useTranslation();

// 	const audioRef = useRef(null);
// 	const sectionRef = useRef(null);

// 	const [isPlaying, setIsPlaying] = useState(false);
// 	const [visible, setVisible] = useState(false);

// 	// 🎵 Audio control
// 	const togglePlay = () => {
// 		if (!audioRef.current) return;

// 		if (isPlaying) {
// 			audioRef.current.pause();
// 		} else {
// 			audioRef.current.play();
// 		}

// 		setIsPlaying(!isPlaying);
// 	};

// 	// 👁 Fade-in effect
// 	useEffect(() => {
// 		const observer = new IntersectionObserver(
// 			(entries) => {
// 				entries.forEach((entry) => {
// 					if (entry.isIntersecting) {
// 						setVisible(true);
// 					}
// 				});
// 			},
// 			{ threshold: 0.2 }
// 		);

// 		if (sectionRef.current) {
// 			observer.observe(sectionRef.current);
// 		}

// 		return () => observer.disconnect();
// 	}, []);

// 	return (
// 		<section
// 			ref={sectionRef}
// 			className={`bible-verse-section py-5 ${
// 				visible ? "fade-in visible" : "fade-in"
// 			}`}
// 			style={{ backgroundColor: "#f8f9fa" }}
// 		>
// 			<div className="container">

// 				{/* INTRO / WELCOME */}
// 				<div className="row align-items-center">

// 					{/* TEXT */}
// 					<div className="col-lg-6 mb-4 mb-lg-0">

// 						<div className="section-title mb-4">
// 							<h2 className="fw-bold text-success mb-2">
// 								{t("bibleVerse.welcome")}
// 							</h2>

// 							<span className="border-bottom"></span>
							
// 						</div>
// 						<br />

// 						<h4 className="mb-4">
// 							{t("bibleVerse.holyText")}
// 						</h4>

// 						<p className="mb-3">
// 							{t("bibleVerse.paragraph1")}
// 						</p>

// 						<p className="mb-3">
// 							{t("bibleVerse.paragraph2")}
// 						</p>

// 						<p className="mb-3">
// 							{t("bibleVerse.paragraph3")}
// 						</p>

// 						<p className="mb-3">
// 							{t("bibleVerse.paragraph4")}
// 						</p>

// 						<p className="fw-semibold mt-3 mb-4">
// 							{t("bibleVerse.thankyou")}
// 						</p>

// 						{/* BOOKING BUTTON */}
// 						<div className="mt-4">
// 							<Link
// 								to="/priest-booking"
// 								className="btn btn-success px-4 py-2 shadow-sm"
// 							>
// 								{t("bibleVerse.priestBooking")}
// 							</Link>
// 						</div>

// 					</div>

// 					{/* IMAGE */}
// 					<div className="col-lg-6 text-center">
// 						<img
// 							src={ChurchImg}
// 							alt="Church"
// 							className="img-fluid rounded shadow"
// 						/>
// 					</div>

// 				</div>

// 				{/* BIBLE VERSE */}
// 				<div className="row justify-content-center mt-5">
// 					<div className="col-lg-8 text-center">

// 						<div className="p-4 p-lg-5 shadow rounded-4 inspirational-box">

// 							<h2 className="mb-3 verse-text">
// 								{t("bibleVerse.verse")}
// 							</h2>

// 							<h6 className="mb-4 verse-ref">
// 								{t("bibleVerse.verseRef")}
// 							</h6>

// 							<div className="audio-control">
// 								<button
// 									onClick={togglePlay}
// 									className="play-btn"
// 									type="button"
// 									aria-label={
// 										isPlaying
// 											? "Pause Bible verse audio"
// 											: "Play Bible verse audio"
// 									}
// 								>
// 									<span className="icon">
// 										{isPlaying ? "⏸" : "▶"}
// 									</span>
// 								</button>
// 							</div>

// 							<audio
// 								ref={audioRef}
// 								src={audioFile}
// 								onEnded={() => setIsPlaying(false)}
// 							/>

// 						</div>

// 					</div>
// 				</div>

// 			</div>
// 		</section>
// 	);
// }

// export default BibleVerse;


import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import {
	FaPlay,
	FaPause,
	FaVolumeUp,
	FaCalendarCheck,
} from "react-icons/fa";

import audioFile from "../assets/images/kidase.mp3";
import ChurchImg from "../assets/Images/ChruchBuilding.jpg";

function BibleVerse() {
	const { t } = useTranslation();

	const audioRef = useRef(null);
	const sectionRef = useRef(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [visible, setVisible] = useState(false);

	// PLAY / PAUSE
	const togglePlay = async () => {
		if (!audioRef.current) return;

		try {
			if (audioRef.current.paused) {
				await audioRef.current.play();
				setIsPlaying(true);
			} else {
				audioRef.current.pause();
				setIsPlaying(false);
			}
		} catch (error) {
			console.log("Audio playback requires user interaction.");
		}
	};

	// SCROLL ANIMATION + TRY AUTOPLAY
	useEffect(() => {
		const observer = new IntersectionObserver(
			async (entries) => {
				entries.forEach(async (entry) => {
					if (entry.isIntersecting) {
						setVisible(true);

						/*
							Try playing automatically.
							Some browsers will block audio with sound
							until the visitor interacts with the page.
						*/
						if (audioRef.current && audioRef.current.paused) {
							try {
								await audioRef.current.play();
								setIsPlaying(true);
							} catch (error) {
								// Browser blocked autoplay - this is normal
								setIsPlaying(false);
							}
						}

						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.35,
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="bible-verse-section py-5"
			style={{
				backgroundColor: "#f8f9fa",
				overflow: "hidden",
			}}
		>
			<div className="container">

				{/* =========================
				    INTRO SECTION
				========================= */}

				<div className="row align-items-center">

					{/* TEXT */}
					<div
						className={`col-lg-6 mb-4 mb-lg-0 reveal-left ${
							visible ? "show" : ""
						}`}
					>
						<div className="section-title mb-4">
							<h2 className="fw-bold text-success mb-2">
								{t("bibleVerse.welcome")}
							</h2>

							<span className="border-bottom"></span>
						</div>
						<br/>
						

						<h4 className="mb-4">
							{t("bibleVerse.holyText")}
						</h4>

						<p className="mb-3">
							{t("bibleVerse.paragraph1")}
						</p>

						<p className="mb-3">
							{t("bibleVerse.paragraph2")}
						</p>

						<p className="mb-3">
							{t("bibleVerse.paragraph3")}
						</p>

						<p className="mb-3">
							{t("bibleVerse.paragraph4")}
						</p>

						<p className="fw-semibold mt-3 mb-4">
							{t("bibleVerse.thankyou")}
						</p>

						{/* BOOKING */}
						<div className="mt-4">
							<Link
								to="/priest-booking"
								className="btn btn-success px-4 py-2 shadow-sm booking-btn"
							>
								<FaCalendarCheck className="me-2" />

								{t("bibleVerse.priestBooking")}
							</Link>
						</div>
					</div>

					{/* CHURCH IMAGE */}
					<div
						className={`col-lg-6 text-center reveal-right ${
							visible ? "show" : ""
						}`}
					>
						<div className="church-image-wrapper">

							<img
								src={ChurchImg}
								alt="Church"
								className={`church-image ${
									visible ? "church-image-active" : ""
								}`}
							/>

						</div>
					</div>

				</div>


				{/* =========================
				    BIBLE VERSE
				========================= */}

				<div
					className={`row justify-content-center mt-5 reveal-up ${
						visible ? "show" : ""
					}`}
				>
					<div className="col-lg-8 text-center">

						<div className="inspirational-box p-4 p-lg-5">

							<h2 className="verse-text mb-3">
								{t("bibleVerse.verse")}
							</h2>

							<h6 className="verse-ref mb-4">
								{t("bibleVerse.verseRef")}
							</h6>


							{/* MUSIC CONTROL */}

							<div className="music-player">

								<button
									type="button"
									onClick={togglePlay}
									className={`music-control ${
										isPlaying ? "playing" : ""
									}`}
									aria-label={
										isPlaying
											? "Pause audio"
											: "Play audio"
									}
								>
									<span className="music-icon">
										{isPlaying ? (
											<FaPause />
										) : (
											<FaPlay />
										)}
									</span>

									<span className="music-label">
										{isPlaying
											? t("bibleVerse.pauseAudio")
											: t("bibleVerse.playAudio")}
									</span>
								</button>


								{/* PLAYING INDICATOR */}

								{isPlaying && (
									<div className="sound-indicator">

										<FaVolumeUp />

										<span className="sound-bars">
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</span>

									</div>
								)}

							</div>


							<audio
								ref={audioRef}
								src={audioFile}
								onPlay={() => setIsPlaying(true)}
								onPause={() => setIsPlaying(false)}
								onEnded={() => setIsPlaying(false)}
							/>

						</div>

					</div>
				</div>

			</div>


			<style>{`

				/* =================================
				   SCROLL ANIMATION
				================================= */

				.reveal-left,
				.reveal-right,
				.reveal-up {
					opacity: 0;

					transition:
						opacity 1s ease,
						transform 1s ease;
				}

				.reveal-left {
					transform: translateX(-60px);
				}

				.reveal-right {
					transform: translateX(60px);
				}

				.reveal-up {
					transform: translateY(50px);
					transition-delay: 0.2s;
				}

				.reveal-left.show,
				.reveal-right.show,
				.reveal-up.show {
					opacity: 1;
					transform: translate(0, 0);
				}



				/* =================================
				   CHURCH IMAGE
				================================= */

				.church-image-wrapper {
					border-radius: 16px;
					overflow: hidden;

					box-shadow:
						0 10px 30px rgba(0, 0, 0, 0.15);
				}

				.church-image {
					display: block;

					width: 100%;
					height: auto;

					transform: scale(0.92);

					transition:
						transform 1.8s cubic-bezier(
							0.19,
							1,
							0.22,
							1
						);
				}

				.church-image-active {
					transform: scale(1.04);
				}

				.church-image-wrapper:hover .church-image {
					transform: scale(1.08);
				}



				/* =================================
				   VERSE BOX
				================================= */

				.inspirational-box {
					border-radius: 18px;

					background:
						linear-gradient(
							135deg,
							#f1fff7,
							#eef8ff
						);

					box-shadow:
						0 10px 35px rgba(0, 0, 0, 0.10);
				}

				.verse-text {
					color: #075c36;
					font-weight: 700;
					line-height: 1.7;
				}

				.verse-ref {
					color: #198754;
				}



				/* =================================
				   MUSIC PLAYER
				================================= */

				.music-player {
					display: flex;

					align-items: center;
					justify-content: center;

					gap: 18px;

					margin-top: 25px;
				}

				.music-control {
					display: inline-flex;

					align-items: center;
					gap: 12px;

					border: 1px solid rgba(
						25,
						135,
						84,
						0.25
					);

					background: #fff;

					color: #198754;

					padding: 10px 20px;

					border-radius: 50px;

					font-weight: 600;

					box-shadow:
						0 6px 18px rgba(
							0,
							0,
							0,
							0.08
						);

					transition:
						all 0.3s ease;
				}

				.music-control:hover {
					background: #198754;
					color: #fff;

					transform: translateY(-2px);

					box-shadow:
						0 9px 24px rgba(
							25,
							135,
							84,
							0.25
						);
				}

				.music-control.playing {
					background: #198754;
					color: #fff;
				}



				/* ICON */

				.music-icon {
					width: 34px;
					height: 34px;

					display: flex;
					align-items: center;
					justify-content: center;

					border-radius: 50%;

					background:
						rgba(25, 135, 84, 0.10);

					font-size: 14px;
				}

				.music-control.playing .music-icon,
				.music-control:hover .music-icon {
					background:
						rgba(255,255,255,0.18);
				}



				/* =================================
				   SOUND BARS
				================================= */

				.sound-indicator {
					display: flex;
					align-items: center;
					gap: 10px;

					color: #198754;
				}

				.sound-bars {
					height: 20px;

					display: flex;

					align-items: center;

					gap: 3px;
				}

				.sound-bars span {
					display: block;

					width: 3px;

					background: #198754;

					border-radius: 5px;

					animation:
						soundWave 0.8s ease-in-out infinite;
				}

				.sound-bars span:nth-child(1) {
					height: 8px;
				}

				.sound-bars span:nth-child(2) {
					height: 16px;
					animation-delay: 0.15s;
				}

				.sound-bars span:nth-child(3) {
					height: 12px;
					animation-delay: 0.3s;
				}

				.sound-bars span:nth-child(4) {
					height: 18px;
					animation-delay: 0.45s;
				}

				@keyframes soundWave {

					0%,
					100% {
						transform: scaleY(0.5);
					}

					50% {
						transform: scaleY(1);
					}
				}



				/* =================================
				   BOOKING BUTTON
				================================= */

				.booking-btn {
					transition:
						transform 0.3s ease,
						box-shadow 0.3s ease;
				}

				.booking-btn:hover {
					transform: translateY(-3px);
				}



				/* =================================
				   MOBILE
				================================= */

				@media (max-width: 991px) {

					.reveal-left,
					.reveal-right {
						transform:
							translateY(35px);
					}

					.reveal-left.show,
					.reveal-right.show {
						transform:
							translateY(0);
					}

					.church-image {
						transform:
							scale(0.95);
					}

					.church-image-active {
						transform:
							scale(1.03);
					}
				}


				@media (max-width: 576px) {

					.music-player {
						flex-direction: column;
						gap: 12px;
					}

					.music-control {
						padding:
							9px 18px;
					}

					.music-label {
						font-size:
							0.9rem;
					}
				}



				/* =================================
				   ACCESSIBILITY
				================================= */

				@media (
					prefers-reduced-motion: reduce
				) {

					.reveal-left,
					.reveal-right,
					.reveal-up,
					.church-image {
						transition: none;
						transform: none;
						opacity: 1;
					}

					.sound-bars span {
						animation: none;
					}
				}

			`}</style>

		</section>
	);
}

export default BibleVerse;
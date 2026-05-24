import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import audioFile from "../assets/images/Kidase.mp3";
import ChurchImg from "../assets/Images/ChruchBuilding.jpg";

function BibleVerse() {
	const { t } = useTranslation();

	const audioRef = useRef(null);
	const sectionRef = useRef(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [visible, setVisible] = useState(false);

	// 🎵 Audio control
	const togglePlay = () => {
		if (!audioRef.current) return;

		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}

		setIsPlaying(!isPlaying);
	};

	// 👁 Fade-in effect
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setVisible(true);
				});
			},
			{ threshold: 0.2 }
		);

		if (sectionRef.current) observer.observe(sectionRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			className={`bible-verse-section py-5 ${
				visible ? "fade-in visible" : "fade-in"
			}`}
			style={{ backgroundColor: "#f8f9fa" }}
		>
			<div className="container">
				<div className="row align-items-center">
					{/* TEXT */}
					<div className="col-lg-6 mb-4 mb-lg-0">
						<div className="section-title">
							<h2 className="section-title margin-top-5 fw-bold mb-4">
								{t("bibleVerse.welcome")}
							</h2>

							<span className="border-bottom"></span>
						</div>

						<h4>{t("bibleVerse.holyText")}</h4>

						<br />

						<p>{t("bibleVerse.paragraph1")}</p>

						<p>{t("bibleVerse.paragraph2")}</p>

						<p>{t("bibleVerse.paragraph3")}</p>

						<p>{t("bibleVerse.paragraph4")}</p>

						<p className="fw-semibold mt-3">
							{t("bibleVerse.thankyou")}
						</p>

						<p></p>
					</div>

					{/* IMAGE */}
					<div className="col-lg-6 text-center">
						<img
							src={ChurchImg}
							alt="Church"
							className="img-fluid rounded shadow"
						/>
					</div>
				</div>

				{/* VERSE */}
				<div className="row justify-content-center mt-5">
					<div className="col-lg-8 text-center">
						<div className="p-4 p-lg-5 shadow rounded-4 inspirational-box">
							<h2 className="mb-3 verse-text">
								{t("bibleVerse.verse")}
							</h2>

							<h6 className="mb-4 verse-ref">
								{t("bibleVerse.verseRef")}
							</h6>

							<div className="audio-control">
								<button onClick={togglePlay} className="play-btn">
									<span className="icon">
										{isPlaying ? "⏸" : "▶"}
									</span>
								</button>
							</div>

							<audio
								ref={audioRef}
								src={audioFile}
								onEnded={() => setIsPlaying(false)}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BibleVerse;
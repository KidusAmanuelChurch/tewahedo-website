// import { useState, useEffect } from "react";
// import gallery from "../assets/Images/gallary.jpg";

// function VideoGallery() {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const openModal = () => {
// 		setIsOpen(true);
// 		document.body.style.overflow = "hidden";
// 	};

// 	const closeModal = () => {
// 		setIsOpen(false);
// 		document.body.style.overflow = "auto";
// 	};

// 	// ESC key close
// 	useEffect(() => {
// 		const handleKey = (e) => {
// 			if (e.key === "Escape") closeModal();
// 		};
// 		window.addEventListener("keydown", handleKey);
// 		return () => window.removeEventListener("keydown", handleKey);
// 	}, []);

// 	return (
// 		<>
// 			{/* Video Thumbnail */}
// 			<div className="col-md-4">
// 				<div className="portfolio-item portfolio-overlay-wrap">
// 					<div className="portfolio-thumb relative b-radius-6 o-hide">
// 						<img src={gallery} className="img-fluid" alt="Church Video" />
// 						<div className="portfolio-wrap">
// 							<div className="portfolio-details-overlay">
// 								<div className="portfolio-icons">
// 									<button onClick={openModal} className="video-btn">
// 										<i className="ti-control-play"></i>
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Modal */}
// 			{isOpen && (
// 				<div className="video-modal" onClick={closeModal}>
// 					<div
// 						className="video-modal-content"
// 						onClick={(e) => e.stopPropagation()}
// 					>
// 						<button className="video-close" onClick={closeModal}>
// 							×
// 						</button>

// 						<div className="video-wrapper">
// 							<iframe
// 								width="100%"
// 								height="100%"
// 								src="https://www.youtube.com/embed/cKULW8q4OMU?autoplay=1"
// 								title="YouTube video"
// 								frameBorder="0"
// 								allow="autoplay; encrypted-media"
// 								allowFullScreen
// 							></iframe>
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 		</>
// 	);
// }

// export default VideoGallery;



import { useState, useEffect } from "react";
import { FaBackward } from "react-icons/fa";
import about from "../assets/Images/image06.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function VideoGallery() {
	const { t } = useTranslation();

	const [isOpen, setIsOpen] = useState(false);
	const [currentVideo, setCurrentVideo] = useState("");

	const videos = [
		{
			id: "xSjzDb5t6xw",
			title: t("videoGallery.video1")
		},
		{
			id: "RbAwRTSMug4",
			title: t("videoGallery.video2")
		},
		{
			id: "SqYRyAFmOZQ",
			title: t("videoGallery.video3")
		},
		{
			id: "VIDEO_ID_4",
			title: t("videoGallery.video4")
		},
		{
			id: "VIDEO_ID_5",
			title: t("videoGallery.video5")
		},
		{
			id: "VIDEO_ID_6",
			title: t("videoGallery.video6")
		},
		{
			id: "VIDEO_ID_7",
			title: t("videoGallery.video7")
		},
		{
			id: "VIDEO_ID_8",
			title: t("videoGallery.video8")
		},
		{
			id: "VIDEO_ID_9",
			title: t("videoGallery.video9")
		},
		{
			id: "VIDEO_ID_10",
			title: t("videoGallery.video10")
		},
	];

	const openModal = (videoId) => {
		setCurrentVideo(videoId);
		setIsOpen(true);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setIsOpen(false);
		setCurrentVideo("");
		document.body.style.overflow = "auto";
	};

	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === "Escape") closeModal();
		};

		window.addEventListener("keydown", handleKey);

		return () => window.removeEventListener("keydown", handleKey);
	}, []);

	return (
		<>
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
											<FaBackward /> {t("videoGallery.backHome")}
										</Link>
									</div>

									<h1 className="page-title mb-0">
										🎥 {t("videoGallery.title")}
									</h1>

								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div className="row p-5">
				{videos.map((video, index) => (
					<div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={index}>
						<div className="portfolio-item portfolio-overlay-wrap">

							<div className="portfolio-thumb relative b-radius-6 o-hide">
								<img
									src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
									className="img-fluid"
									alt={video.title}
								/>

								<div className="portfolio-wrap">
									<div className="portfolio-details-overlay">
										<div className="portfolio-icons">

											<button
												onClick={() => openModal(video.id)}
												className="video-btn"
											>
												<i className="ti-control-play"></i>
											</button>

										</div>
									</div>
								</div>

							</div>

							<h5 className="mt-3 text-center">
								{video.title}
							</h5>

						</div>
					</div>
				))}
			</div>

			{/* MODAL */}
			{isOpen && (
				<div className="video-modal" onClick={closeModal}>

					<div
						className="video-modal-content"
						onClick={(e) => e.stopPropagation()}
					>

						<button className="video-close" onClick={closeModal}>
							×
						</button>

						<div className="video-wrapper">
							<iframe
								src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
								title="YouTube video"
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen
							></iframe>
						</div>

					</div>
				</div>
			)}
		</>
	);
}

export default VideoGallery;


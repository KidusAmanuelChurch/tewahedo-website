import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";
import about from "../assets/Images/image06.jpg";
import { galleryData } from "../data/galleryData";
import Masonry from "react-masonry-css";
import { useTranslation } from "react-i18next";

function Gallery() {
	const { t } = useTranslation();

	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);
	const [currentImages, setCurrentImages] = useState([]);

	const handleOpen = (images, i = 0) => {
		setCurrentImages(images);
		setIndex(i);
		setOpen(true);
	};

	const breakpointColumnsObj = {
		default: 5,
		1200: 4,
		992: 3,
		768: 2,
		576: 1,
	};

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

									<div id="breadcrumb" className="breadcrumb margin-bottom-10">
										<Link
											to="/"
											className="theme-color text-warning fs-3 text-decoration-none"
										>
											<FaBackward /> {t("gallery.backHome")}
										</Link>
									</div>

									<h1 className="page-title mb-0">
										📸 {t("gallery.photoGallery")}
									</h1>

								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			{/* GALLERY */}
			<div className="container py-5">
				{galleryData.map((event, idx) => {
					const previewImages = event.images.slice(0, 5);

					return (
						<div key={idx} className="mb-5">

							<h3 className="mb-4 text-success fw-bold">
								{event.title}
							</h3>

							<Masonry
								breakpointCols={breakpointColumnsObj}
								className="my-masonry-grid"
								columnClassName="my-masonry-grid_column"
							>
								{previewImages.map((img, i) => (
									<div
										key={i}
										className="gallery-card"
										onClick={() => handleOpen(event.images, i)}
									>
										<img src={img.src} alt="" loading="lazy" />
									</div>
								))}
							</Masonry>

							{event.images.length > 6 && (
								<div className="text-center mt-3">
									<button
										className="btn btn-outline-success"
										onClick={() => handleOpen(event.images)}
									>
										{t("gallery.morePhotos")} ({event.images.length})
									</button>
								</div>
							)}

						</div>
					);
				})}

				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={currentImages}
					index={index}
				/>
			</div>

			<style>{`
				.gallery-card {
					overflow: hidden;
					border-radius: 12px;
					cursor: pointer;
					box-shadow: 0 4px 10px rgba(0,0,0,0.1);
					transition: all 0.3s ease;
				}

				.gallery-card img {
					width: 100%;
					height: 150px;
					object-fit: cover;
					transition: transform 0.4s ease;
				}

				.gallery-card:hover img {
					transform: scale(1.1);
				}

				.gallery-card:hover {
					box-shadow: 0 8px 20px rgba(0,0,0,0.2);
				}
			`}</style>
		</>
	);
}

export default Gallery;
import React, { useEffect } from "react";

function DonationModal({ isOpen, onClose }) {
	if (!isOpen) return null;

	// Close on ESC key
	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [onClose]);

	return (
		<>
			{/* Overlay */}
			<div
				onClick={onClose}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background: "rgba(0,0,0,0.4)",
					backdropFilter: "blur(6px)",
					zIndex: 999,
				}}
			/>

			{/* Modal Box */}
			<div
				style={{
					position: "fixed",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					background: "#fff",
					padding: "30px",
					borderRadius: "12px",
					maxWidth: "600px",
					width: "90%",
					zIndex: 1000,
					maxHeight: "80vh",
					overflowY: "auto",
				}}
				onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					style={{
						position: "absolute",
						top: "10px",
						right: "15px",
						border: "none",
						background: "transparent",
						fontSize: "20px",
						cursor: "pointer",
					}}
				>
					✖
				</button>

				<h4 style={{ marginBottom: "15px" }}>አስራት እና መባ ከፍያ</h4>

				<p>
					Reg. Nr : 1551 <br />
					Account Nr. 10620643
				</p>

				<p>
					<strong>ለደብራችን ሕንጻ ማሰሪያ</strong> <br />
					Reg. Nr : 9570 <br />
					Account Nr. 3385069936
				</p>

				<p>ሞባይል ፔይ ቁጥር: 399977</p>

				<hr />

				<p>
					<strong>ከዴንማርክ ውጪ ያላችሁ ምዕመናን </strong>
				</p>

				<p>
					Den Etiopiske-Ortodokse Tewahedo Kirke i Danmark <br />
					Adresse: Roskildevej 303 Taastrup 2630 <br />
					Telefon: +4552847624 <br />
					Email: finance@tewahedo.dk
				</p>

				<p>
					Bank: Danske Bank <br />
					Reg: 1551 / Acc: 10620643 <br />
					IBAN: DK2030000010620643 <br />
					SWIFT: DABADKKK
				</p>

				<p>
					<strong>ለሕንጻ ማሰሪያ</strong>
				</p>

				<p>
					Bank: Danske Bank <br />
					Reg: 9570 / Acc: 3385069936 <br />
					IBAN: DK0930003385069936 <br />
					SWIFT: DABADKKK
				</p>

				<p style={{ marginTop: "15px", fontWeight: "bold" }}>
					ቅዱስ አማኑኤል ይባርካችሁ።
				</p>
			</div>
		</>
	);
}

export default DonationModal;

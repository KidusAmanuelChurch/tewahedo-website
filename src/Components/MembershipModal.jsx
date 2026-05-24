import React from "react";

function MembershipModal({ isOpen, onClose }) {
	if (!isOpen) return null;

	return (
		<div
			onClick={onClose}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0,0,0,0.5)",
				backdropFilter: "blur(5px)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				zIndex: 9999,
			}}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				style={{
					background: "#fff",
					padding: "30px",
					borderRadius: "12px",
					maxWidth: "500px",
					width: "90%",
					textAlign: "center",
					position: "relative",
					boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
				}}
			>
				{/* CLOSE BUTTON */}
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

				{/* <h4 style={{ marginBottom: "15px", color: "#333" }}>አባል ይሁኑ</h4> */}

				<p style={{ fontSize: "16px", lineHeight: "1.6" }}>
					አባል ለመሆን ስለፈለጉ እናመሰግናለን። <br />
					እባክዎን በ <strong>+4552847624</strong> ይደውሉልን <br />
					ወይም <strong>secretary@tewahedo.dk</strong> ሊጽፍልን ይችላል።
				</p>
			</div>
		</div>
	);
}

export default MembershipModal;

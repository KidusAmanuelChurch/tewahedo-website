import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
	FaPlus,
	FaTimes,
	FaCalendarAlt,
	FaUserFriends,
	FaDonate,
} from "react-icons/fa";

function FloatingActions() {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);

	const actions = [
		{
			icon: <FaCalendarAlt />,
			label: t("floatingActions.events"),
			link: "/events",
			className: "action-events ",
		},
		{
			icon: <FaUserFriends />,
			label: t("floatingActions.appointment"),
			link: "/priest-booking",
			className: "action-appointment",
		},
		{
			icon: <FaDonate />,
			label: t("floatingActions.donation"),
			link: "/donation",
			className: "action-donation",
		},
	];

	return (
		<div className="floating-actions-container">

			{/* ACTION ITEMS */}
			<div className={`floating-actions-menu ${open ? "open" : ""}`}>

				{actions.map((item, index) => (
					<div
						className={`floating-action-item ${item.className}`}
						key={index}
						style={{
							transitionDelay: open
								? `${index * 70}ms`
								: "0ms",
						}}
					>

						{/* LABEL */}
						<span className="floating-action-label">
							{item.label}
						</span>

						{/* BUTTON */}
						<Link
							to={item.link}
							className="floating-small-btn"
							onClick={() => setOpen(false)}
							aria-label={item.label}
						>
							{item.icon}
						</Link>

					</div>
				))}

			</div>

			{/* MAIN + / X BUTTON */}
			<button
				type="button"
				className={`floating-main-btn bg-danger ${open ? "open" : ""}`}
				onClick={() => setOpen(!open)}
				aria-label={
					open
						? t("floatingActions.close")
						: t("floatingActions.open")
				}
			>
				{open ? <FaTimes /> : <FaPlus />}
			</button>

		</div>
	);
}

export default FloatingActions;
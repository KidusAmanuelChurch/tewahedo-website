

// before language added

import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ReactCountryFlag from "react-country-flag";

import { Link } from "react-router-dom";
import Logo from "../assets/Images/EOTLOG.png";
import Logo2 from "../assets/Images/logochurch.jpg";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleCloseMenu = () => setMenuOpen(false);
	const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
const { t, i18n } = useTranslation();


useEffect(() => {
	let lastScrollY = window.scrollY;
	

	const handleScroll = () => {
		const currentScrollY = window.scrollY;

		// Only trigger after small movement (prevents flicker)
		if (Math.abs(currentScrollY - lastScrollY) < 10) return;

		if (currentScrollY > lastScrollY && currentScrollY > 80) {
			// scrolling DOWN → hide
			setShowNavbar(false);
		} else {
			// scrolling UP → show
			setShowNavbar(true);
		}

		lastScrollY = currentScrollY;
	};

	window.addEventListener("scroll", handleScroll);

	return () => window.removeEventListener("scroll", handleScroll);
}, []);

	return (
		<Navbar
	expand="lg"
	 fixed="top"
	bg="warning"
	variant="dark"
	expanded={menuOpen}
	className={`shadow-sm custom-navbar ${showNavbar ? "show" : "hide"}`}
>
			<Container>
				{/* LOGO */}
				<Navbar.Brand as={Link} to="/" onClick={handleCloseMenu}>
					<img
						src={Logo}
						className="img-fluid"
						width="40"
						height="40"
						alt="Logo"
					/>
				</Navbar.Brand>

				{/* TOGGLE BUTTON */}
			<Navbar.Toggle
	aria-controls="basic-navbar-nav"
	onClick={() => setMenuOpen(!menuOpen)}
	className="custom-toggle"
>
	<span className="toggle-icon">
		{menuOpen ? "✖" : "☰"}
	</span>
</Navbar.Toggle>

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto align-items-lg-center">
						<Nav.Link
							as={Link}
							to="/"
							onClick={handleCloseMenu}
							className="fw-bold text-dark"
						>
							{t("header.home")}
						</Nav.Link>
						<NavDropdown
							title={<span className="fw-bold text-dark">{t("header.about")} </span>}
							menuVariant="white"
							to="/aboutUsDetail"
						>
							<NavDropdown.Item
								as={Link}
								to="/aboutUsDetail"
								onClick={handleCloseMenu}
							>
								{t("header.church")}
							</NavDropdown.Item>
							<NavDropdown.Item
								as={Link}
								to="/services"
								onClick={handleCloseMenu}
							>
								{t("header.services")}
							</NavDropdown.Item>

							<NavDropdown.Item
								as={Link}
								to="/listofcommite"
								onClick={handleCloseMenu}
							>
								{t("header.committee")}
							</NavDropdown.Item>
						</NavDropdown>

						<NavDropdown
							title={<span className="fw-bold text-dark">{t("header.education")}</span>}
							id="gallery-dropdown"
							menuVariant="white"
						>
							<NavDropdown.Item
								as={Link}
								to="/education"
								onClick={handleCloseMenu}
							>
								{t("header.teaching")}
							</NavDropdown.Item>

							<NavDropdown.Item
								as={Link}
								to="/mezmur"
								onClick={handleCloseMenu}
							>
								{t("header.mezmur")}
							</NavDropdown.Item>
							<NavDropdown.Item
								as={Link}
								to="/children"
								onClick={handleCloseMenu}
							>
								{t("header.children")}
							</NavDropdown.Item>
							<NavDropdown.Item
								as={Link}
								to="/parents"
								onClick={handleCloseMenu}
							>
								{t("header.parents")}
							</NavDropdown.Item>
							<NavDropdown.Item
								as={Link}
								to="/memebers"
								onClick={handleCloseMenu}
							>
								{t("header.members")}
							</NavDropdown.Item>
						</NavDropdown>

						{/* DROPDOWN */}

						<Nav.Link
							as={Link}
							to="/donation"
							onClick={handleCloseMenu}
							className="fw-bold text-dark"
						>
							{t("header.donation")}
						</Nav.Link>

						{/* <Nav.Link
						as={Link}
							to="/"
							onClick={handleCloseMenu}
							className="fw-bold text-dark"
						>
							{t("header.news")}
						</Nav.Link> */}
						<NavDropdown
							title={<span className="fw-bold text-dark">{t("header.gallery")}</span>}
							id="gallery-dropdown"
							menuVariant="white"
						>
							<NavDropdown.Item
								as={Link}
								to="/gallery"
								onClick={handleCloseMenu}
							>
								{t("header.photoGallery")}
							</NavDropdown.Item>

							<NavDropdown.Item
								as={Link}
								to="/videogallery"
								onClick={handleCloseMenu}
							>
								{t("header.videoGallery")}
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link
							as={Link}
							to="/contact"
							onClick={handleCloseMenu}
							className="fw-bold text-dark"
						>
							{t("header.contact")}
						</Nav.Link>
						<Nav.Link
							as={Link}
							to="/"
							onClick={handleCloseMenu}
							className="fw-bold text-dark"
						>
							{t("header.events")}
						</Nav.Link>
					</Nav>
					{/* LANGUAGE SWITCHER */}
{/* <div className="language-switcher d-flex gap-2 ms-lg-3 my-3 my-lg-0">
	<button
		className="btn btn-light btn-sm fw-bold d-flex align-items-center gap-1"
		onClick={() => i18n.changeLanguage("am")}
	>
		<span>🇪🇹</span>
		<span className="d-none d-lg-inline">አማ</span>
	</button>

	<button
		className="btn btn-success btn-sm fw-bold d-flex align-items-center gap-1"
		onClick={() => i18n.changeLanguage("dk")}
	>
		<span>🇩🇰</span>
		<span className="d-none d-lg-inline">DK</span>
	</button>
</div> */}


<div className="language-switcher d-flex gap-2 ms-lg-3 my-3 my-lg-0">
  <button
    className="btn btn-light btn-sm fw-bold d-flex align-items-center gap-1"
    onClick={() => i18n.changeLanguage("am")}
  >
    <ReactCountryFlag
      countryCode="ET"
      svg
      style={{
        width: "1.5em",
        height: "1.1em",
      }}
      title="Ethiopia"
    />
    {/* <span className="d-none d-lg-inline">አማ</span> */}
  </button>

  <button
    className="btn btn-success btn-sm fw-bold d-flex align-items-center gap-1"
    onClick={() => i18n.changeLanguage("dk")}
  >
    <ReactCountryFlag
      countryCode="DK"
      svg
      style={{
        width: "1.5em",
        height: "1.1em",
      }}
      title="Denmark"
    />
    {/* <span className="d-none d-lg-inline">DK</span> */}
  </button>
</div>

				</Navbar.Collapse>
				{/* <Navbar.Brand as={Link} to="/" onClick={handleCloseMenu}>
					<img
						src={Logo2}
						className="img-fluid"
						width="40"
						height="40"
						alt="Logo"
					/>
				</Navbar.Brand> */}
			</Container>
		</Navbar>
	);
}

export default Header;


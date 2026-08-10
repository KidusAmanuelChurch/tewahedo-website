import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AboutImage from "../assets/Images/image03.jpg";
import ChurchLogo from "../assets/Images/team2.png";

function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <div>
      <section id="section-about" className="section-about pad-top-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 px-3 ps-xl-0">
              <div className="title-wrap margin-bottom-30">
                <div className="section-title">
                  <h2 className="section-title margin-top-5">
                    {t("committee.title")}
                  </h2>

                  <span className="border-bottom"></span>
                </div>

                <div className="pad-top-15">
                  <p className="margin-bottom-20">
                    {t("committee.description")}
                  </p>
                </div>
              </div>

              <div className="row">
                {/* Additional content can be added here */}
              </div>

              <div className="col-xl-12 align-self-center">
                <div
                  className="text-center shadow rounded-4 p-5 mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, #fffdf7 0%, #f8f3e7 100%)",
                    border: "2px solid #d4af37",
                  }}
                >
                  <div
                    className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      border: "3px solid #d4af37",
                      fontSize: "58px",
                    }}
                  >
                    <img
    src={ChurchLogo}
    alt="Church Logo"
    style={{
        width: "110px",
        height: "110px",
        objectFit: "contain",
		borderRadius: "50%",
    }}
/>
                  </div>

                  <h2 className="fw-bold mb-3" style={{ color: "#8b6b00" }}>
                    {t("committee.bannerTitle")}
                  </h2>

                  <p
                    className="lead mb-3"
                    style={{
                      maxWidth: "750px",
                      margin: "0 auto",
                      color: "#555",
                    }}
                  >
                    {t("committee.bannerText")}
                  </p>

                  <p
                    className="fst-italic"
                    style={{
                      color: "#8b6b00",
                      fontSize: "1.1rem",
                    }}
                  >
                    {t("committee.bannerVerse")}
                  </p>
                </div>
              </div>

              <div className="button-section margin-top-35">
                <Link
                  to="/listofcommite"
                  className="btn btn-default text-white"
                  title={t("committee.button")}
                >
                  {t("committee.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoWeAre;

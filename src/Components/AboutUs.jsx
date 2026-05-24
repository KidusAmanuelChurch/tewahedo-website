// import { Link } from "react-router-dom";
// import AboutImage from "../assets/Images/about-1.jpg";
// import DotsBg from "../assets/Images/about-1-bg.png";

// function AboutUs() {
// 	return (
// 		<section id="section-about" className="section-about pad-top-90">
// 			<div className="container">
// 				{/* ROW */}
// 				<div className="row align-items-center">
// 					{/* LEFT — IMAGE */}
// 					<div className="col-12 col-lg-6 mb-4 mb-lg-0">
// 						<div className="about-wrap text-center">
// 							<div className="about-img bf-patternn">
// 								<img
// 									src={AboutImage}
// 									className="img-fluid rounded shadow-sm"
// 									alt="about church"
// 								/>
// 							</div>
// 						</div>
// 					</div>

// 					{/* RIGHT — TEXT */}
// 					<div className="col-12 col-lg-6">
// 						<div className="title-wrap margin-bottom-30">
// 							<div className="section-title">
// 								<h2 className="section-title margin-top-5">ስለ ቤተ ክርስቲያናችን</h2>

// 								<span className="border-bottom"></span>
// 							</div>

// 							<div className="pad-top-15">
// 								<p className="margin-bottom-20">
// 									በዴንማርክ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ የቅዱስ አማኑኤል ቤተ ክርሰቲያን በአቡነ እንጦንስ መልካም
// 									ፍቃድ እና የቡራኬ ሥርዓት በእሁድ, መጋቢት 12 2002 ዓ.ም. ወይንም እ.ኤ.አ. በ ማርች 21
// 									2010 G.C. ተመሠረተች። ቤተ ክርስቲያኒቱም ስትመሠረት ቆሞስ አባ ዘሚካኤል ዴሬሳ
// 									የቤተክርስቲያኗ አስተዳዳሪ ሆኑ።
// 								</p>

// 								<p className="margin-bottom-20">
// 									ቤተ ክርስቲያኒቱ ስትመሰረት ከአባታችን ከቆሞስ አባ ዘሚካኤል በቀር ተጨማሪ ሌላ ካህናትን ይሁን
// 									ዲያቆናት ስላልነበራት ለትምህርት የመጡ ዲያቆናትን አንዳንዴም ከኤርትራ በቤተክርስቲያን ዲያቆናትን
// 									በመለመን በሁለት ሳምንት አንድ ጊዜ ቅዳሴ ታስቀድስ ነበረ። ከዚያን ጊዜ ጀምሮ በብዙ ፈተና ውስጥ
// 									ቢኖንም በአባታችን በቆሞስ አባ ዘሚካኤል መንፈሳዊ መሪነት እና በምእመናን በጎ ድጋፍ እያደገች
// 									በመምጣትዋ አሁን ከአስር የሚበልጡ ዲያቆናት ተምረው አገልግሎት እየሰጡባት ትገኛለች። በዚህ ሂደት
// 									ውስጥ እጅግ በጣም አስቸጋሪው ፈተና የነበረው ለአገልግሎት የሚሆን ቤት መጥፋቱና በተለያየ ጊዜ
// 									የተለያየ ቦታ የቅዳሴ ቤት እየተለመነ የቅዳሴ አገልግሎት ማድረጉ ነበር።
// 								</p>
// 								<p className="margin-bottom-20">
// 									እ.ኤ.አ. ከ2020 G.C ጀምሮ ግን በልመናም ቢሆን የአገልግሎት ቦታ እያጣን ስለመጣን በኦገስት
// 									5, 2023 G.C. ጠቅላላ ጉባኤ አድርገን አገልግሎት የምናከናውንበትን ቤትና ቦታ ለመግዛት
// 									ወስነን በመንቀሳቀስ በአባታችን በቆሞስ አባ ዘሚካኤል መሪነት ሁሉም ምእመናን ገንዘብ አዋጥተው ቦታ
// 									በመግዛት ፣ በአባታችን በብፁዕ አቡነ ኤልያስ ቦታውን አስባርከን እና የመሰረት ድንጋይ አስቀምጠን
// 									ቤተክርስቲያን በመስራት ላይ እንገኛለን።
// 								</p>
// 							</div>
// 						</div>

// 						{/* BUTTON */}
// 						<div className="button-section margin-top-35">
// 							<Link className="btn btn-default text-white" to="/aboutUsDetail">
// 								ተጨማሪ መረጃ
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default AboutUs;




import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AboutImage from "../assets/Images/about-1.jpg";
import DotsBg from "../assets/Images/about-1-bg.png";

function AboutUs() {
	const { t } = useTranslation();

	return (
		<section id="section-about" className="section-about pad-top-90">
			<div className="container">
				{/* ROW */}
				<div className="row align-items-center">
					{/* LEFT — IMAGE */}
					<div className="col-12 col-lg-6 mb-4 mb-lg-0">
						<div className="about-wrap text-center">
							<div className="about-img bf-patternn">
								<img
									src={AboutImage}
									className="img-fluid rounded shadow-sm"
									alt="about church"
								/>
							</div>
						</div>
					</div>

					{/* RIGHT — TEXT */}
					<div className="col-12 col-lg-6">
						<div className="title-wrap margin-bottom-30">
							<div className="section-title">
								<h2 className="section-title margin-top-5">
									{t("about.title")}
								</h2>

								<span className="border-bottom"></span>
							</div>

							<div className="pad-top-15">
								<p className="margin-bottom-20">
									{t("about.paragraph1")}
								</p>

								<p className="margin-bottom-20">
									{t("about.paragraph2")}
								</p>

								<p className="margin-bottom-20">
									{t("about.paragraph3")}
								</p>
							</div>
						</div>

						{/* BUTTON */}
						<div className="button-section margin-top-35">
							<Link
								className="btn btn-default text-white"
								to="/aboutUsDetail"
							>
								{t("about.button")}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
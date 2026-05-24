// import React from "react";

// function WelcomeSection() {
// 	return (
// 		<section className="welcome-section py-5 bg-white">
// 			<div className="container">
// 				<div className="row align-items-center">
// 					{/* LEFT SIDE (TEXT) */}
// 					<div className="col-lg-7 col-md-12">
// 						<h2 className="mb-4 text-primar fw-bold ">WELCOME</h2>

// 						<p className="mb-3">
// 							Welcome to the Website of the Ethiopian Orthodox Tewahedo Church
// 							in Denmark (Debre Mihret St. Amanuel Ethiopian Orthodox Tewahedo
// 							Church in Copenhagen, Denmark).
// 						</p>

// 						<p className="mb-3">
// 							Our mission and vision are to live and proclaim the transforming
// 							Gospel message of Jesus Christ, and to support the development of
// 							youth and children with strong moral values. As an Ethiopian
// 							Orthodox Tewahedo Church, we are committed to being a spiritually
// 							grounded and faith-centered community.
// 						</p>

// 						<p className="mb-3">
// 							Our parish is a place where members gather to worship God,
// 							strengthen their faith, and build meaningful relationships. We
// 							encourage fellowship, mutual care, and community support. You may
// 							be inspired to take part in our church services and community
// 							activities to learn more about the teachings of the Orthodox
// 							Tewahedo Church.
// 						</p>

// 						<p className="mb-3">
// 							We hope you enjoy visiting our parish website. Our goal is to
// 							reflect a strong spiritual and moral foundation through our
// 							content. We aim to help you understand our identity, our mission,
// 							and what we believe as members of the Orthodox Tewahedo Church.
// 						</p>

// 						<p className="mb-3">
// 							This website provides information about our church community in
// 							Denmark, including administration, departments, and youth and
// 							children’s activities. We strive to keep all information accurate
// 							and up to date. If you notice any inaccuracies, please contact us
// 							so we can make corrections promptly.
// 						</p>

// 						<p className="fw-semibold">Thank you for visiting our website.</p>
// 					</div>

// 					{/* RIGHT SIDE (OPTIONAL IMAGE / SPACE) */}
// 					{/* <div className="col-lg-5 col-md-12 text-center mt-4 mt-lg-0">
// 						<div className="p-4 shadow rounded bg-light">
// 							<h5 className="text-secondary mb-2">Our Church</h5>
// 							<p className="mb-0">A place of worship, faith, and community.</p>
// 						</div>
// 					</div> */}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default WelcomeSection;


import React from "react";

function WelcomeSection() {
	return (
		<section className="container py-5">
			<div className="row align-items-center">
				<div className="col-lg-6">
					<h2 className="fw-bold mb-4 text-primary">እንኳን ደህና መጡ</h2>

					<p>
						በዴንማርክ ውስጥ ያለው የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን (ደብረ ምሕረት ቅዱስ አማኑኤል ቤ/ክ
						ኮፐንሃገን) ድረ-ገጽ እንኳን ደህና መጡ።
					</p>

					<p>
						የእኛ ተልእኮና ራዕይ የኢየሱስ ክርስቶስን የሕይወት ወንጌል መኖርና ማስተላለፍ ነው፤ እንዲሁም ሕፃናትና
						ወጣቶች በጎ ሥነ-ምግባር እንዲያድጉ ማገዝ ነው።
					</p>

					<p>
						ቤተ ክርስቲያናችን መንፈሳዊ እና የእምነት ማዕከል ሲሆን፣ አባላት አንድ ሆነው እግዚአብሔርን ይሰግዳሉ፣
						ይተሳሰባሉ፣ እርስ በእርሳቸው ይረዳዳሉ።
					</p>

					<p>
						በዚህ ድረ-ገጽ ላይ የተዘጋጀው መረጃ ስለ እምነታችን፣ ስለ ቤተ ክርስቲያናችን ሥራዎች እና ስለ
						አገልግሎታችን እንዲያውቁ ይረዳዎታል።
					</p>

					<p>
						ድረ-ገጹ ትክክለኛና ዘመናዊ መረጃ እንዲያቀርብ እንጥራለን፤ ማንኛውም ስህተት ካገኙ እባክዎን ያሳውቁን።
					</p>

					<p className="fw-semibold mt-3">ስለ መጡ እናመሰግናለን።</p>
				</div>
				{/* 
				<div className="col-lg-6 text-center">
					<img
						src="/images/church.jpg"
						alt="Church"
						className="img-fluid rounded shadow"
					/>
				</div> */}
			</div>
		</section>
	);
}

export default WelcomeSection;

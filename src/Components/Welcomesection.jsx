


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

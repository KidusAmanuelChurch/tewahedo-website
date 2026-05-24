// Helper to load images from /public folder

const loadImages = (path, count, prefix = "img", ext = "jpg") => {
	return Array.from({ length: count }, (_, i) => ({
		src: `${path}/${prefix}${i + 1}.${ext}`,
	}));
};

export const galleryData = [
	{
		title: "የቤተክርስቲያን ሕንጻ መስረት/Kirkens grundstensceremoni",
		images: loadImages("/images/churchbuilding", 13),
	},

	{
		title: "መስቀል/Meskel - September 2025",
		// because your files are: img (1).jpg
		images: Array.from({ length: 85 }, (_, i) => ({
			src: `/images/meskel2025/img (${i + 1}).jpg`,
		})),
	},

	{
		title: "Photo Collection",
		images: loadImages("/images/collection", 25),
	},

	{
		title: "ሆሳና - April 2014",
		images: loadImages("/images/hosaenapril2014", 4),
	},

	{
		title: "መስቀል - September 2012",
		images: loadImages("/images/meskelsep2012", 35),
	},

	{
		title: "መስቀል - September 2013",
		images: loadImages("/images/meskelsep2013", 7),
	},
];
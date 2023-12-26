const WEBSITE = "website";
// const MOBILE = "mobile";

export const Bio = {
	name : "Jared Castillo",
	role: "Full Stack Developer",
	description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, officia reiciendis! Tempore hic deserunt, consequuntur facere libero, doloremque quae, culpa similique sequi delectus eaque? Quaerat excepturi distinctio saepe inventore illo laudantium eius animi vero possimus id! Voluptatem, officiis porro possimus minima impedit perspiciatis, molestiae eius sapiente, provident mollitia praesentium repudiandae!",
	avatar: "none"
};

export const Experiences = [
	{
		jobTitle: "Software Developer",
		employer: "Payworks Payroll Services Canada",
		workType: "Co-op Work Term 3",
		image: "src/data/images/employers/payworks-logo.png",
		jobDescription: "In my role at Payworks, I played a pivotal role in elevating the website's functionality and user experience. This involved developing and designing custom widgets tailored to enhance specific features. To guarantee robustness and reliability, I implemented thorough unit tests for the front-end components of these widgets. Additionally, a key focus was placed on accessibility, ensuring that all widgets not only met but surpassed established standards, aligning seamlessly with WCAG guidelines. To enhance user communication, I seamlessly integrated email notifications, prioritizing a professional and user-friendly layout for optimal formatting and delivery to recipients.",
		startDate: "May 2023",
		endDate: "August 2023",
		tools: [
			{ name: "Vue" },
			{ name: ".NET" },
			{ name: "Git" },
			{ name: "JavaScript" },
			{ name: "C#" }
		]
	},
	{
		jobTitle: "Junior Programmer",
		employer: "Ubisoft Winnipeg",
		workType: "Co-op Work Term 2",
		image: "src/data/images/employers/ubisoft-logo.png",
		jobDescription: "At Ubisoft's Rainbow Six Mobile team, I developed tools improving navigation in the Unity game engine for artists and UI programmers. I expanded the game's global reach by adding languages for enhanced accessibility. Additionally, I implemented UI validations to detect and address potential issues, reducing performance bottlenecks. These validations were integrated with external code submission tools to maintain data integrity and prevent suboptimal contributions to the project.",
		startDate: "September 2022",
		endDate: "December 2022",
		tools: [
			{ name: "Unity" },
			{ name: "Perforce" },
			{ name: "C#" }
		]
	},
	{
		jobTitle: "Programmer / Analyst",
		employer: "Agriculture and Agri-Food Canada",
		workType: "Co-op Work Term 1",
		image: "src/data/images/employers/aafc-logo.png",
		jobDescription: "At Agriculture and Agri-Food Canada, I revamped an outdated Access Database project for improved efficiency. I designed dynamic components for a user-friendly interface, developed a tool for agricultural analyses, and ensured user satisfaction by addressing requirements during the design phase.",
		startDate: "January 2022",
		endDate: "August 2022",
		tools: [
			{ name: "Vue" },
			{ name: "Spring Boot" },
			{ name: "Git" },
			{ name: "JavaScript" },
			{ name: "Java" }
		]
	},
	{
		jobTitle: "Full Stack Web Developer",
		employer: "Cassidy eCare Solutions",
		workType: "Summer Internship",
		image: "src/data/images/employers/cassidy-logo.png",
		jobDescription: "At Cassidy eCare Solutions, I created a real-time messaging chat system to enhance communication between physicians and patients, minimizing the necessity for casual doctor appointments. Leveraging JSON server, I established a simple and efficient REST API setup, easily adaptable to different backend servers. Furthermore, I implemented reusable components to streamline the display of physician and patient information, minimizing code duplication.",
		startDate: "June 2021",
		endDate: "Semptember 2021",
		tools: [
			{ name: "React" },
			{ name: "Agora" },
			{ name: "Docker" },
			{ name: "JavaScript" }
		]
	}
];

export const Projects = [
	{
		title: "Crave",
		description: "Crave is a food ordering application that allows users to conveniently order dishes from a diverse range of eateries. It analyzes customers past orders, preferences and dietary restrictions to offer better meal suggestions. Additionally, Crave assists restaurant owners in forecasting busy periods, optimizing promotions and enhancing the menu list based on the valuable customer feedback obtained through comments and ratings.",
		startDate: "September 2023",
		endDate: "December 2023",
		tools: [
			{ name: "React" },
			{ name: "Spring Boot" },
			{ name: "Postgres" },
			{ name: "Docker" }
		],
		thumbnail: "src/data/images/crave.png",
		sourceCode: "https://github.com/jablue-12/crave",
		view: "https://crave-comp4350.netlify.app/",
		tag: WEBSITE
	},
	{
		title: "Test1",
		description: "Crave is a food ordering application that allows users to conveniently order dishes from a diverse range of eateries. It analyzes customers past orders, preferences and dietary restrictions to offer better meal suggestions. Additionally, Crave assists restaurant owners in forecasting busy periods, optimizing promotions and enhancing the menu list based on the valuable customer feedback obtained through comments and ratings.",
		startDate: "September 2023",
		endDate: "December 2023",
		tools: [
			{ name: "React" },
			{ name: "Docker" }
		],
		thumbnail: "https://via.placeholder.com/150",
		sourceCode: "https://github.com/jablue-12/crave",
		view: "https://crave-comp4350.netlify.app/",
		tag: WEBSITE
	},
	{
		title: "Test2",
		description: "Crave is a food ordering application that allows users to conveniently order dishes from a diverse range of eateries. It analyzes customers past orders, preferences and dietary restrictions to offer better meal suggestions. Additionally, Crave assists restaurant owners in forecasting busy periods, optimizing promotions and enhancing the menu list based on the valuable customer feedback obtained through comments and ratings.",
		startDate: "September 2023",
		endDate: "December 2023",
		tools: [
			{ name: "React" },
			{ name: "Docker" }
		],
		thumbnail: "https://via.placeholder.com/150",
		sourceCode: "https://github.com/jablue-12/crave",
		view: "https://crave-comp4350.netlify.app/",
		tag: WEBSITE
	}
];
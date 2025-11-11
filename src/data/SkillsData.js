import {
    FaGoogle,
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaRegLightbulb,   // For Strategy (alternative: FaBrain, FaCogs)
    FaChartBar,       // For Analytics (alternative: FaChartLine)
    FaSearch,         // For SEO (alternative: FaSearchDollar)
    FaClipboardList,  // For Research Skills (alternative: FaSearchPlus)
    FaPencilAlt,      // For Content Creation (alternative: FaEdit)
    FaCog,            // For Social Media Management (alternative: FaCogs, FaTools)
} from "react-icons/fa";

// No more imports from "react-icons/md", "react-icons/ri", "react-icons/bi", "react-icons/ai"

export const SkillsData = [
	{
		name: "Digital Strategy",
		icon: <FaRegLightbulb />, // Changed from MdOutlineStrategy to FaRegLightbulb (idea/strategy)
	},
	{
		name: "Analytical Skills",
		icon: <FaChartBar />, // Changed from MdAnalytics to FaChartBar (bar chart for data/analytics)
	},
	{
		name: "SEO",
		icon: <FaSearch />, // Changed from MdOutlineSearch to FaSearch (general search)
	},
	{
		name: "Social Media Marketing",
		icon: <FaFacebookSquare />, // Already FaIcon
	},
	{
		name: "Research Skills",
		icon: <FaClipboardList />, // Changed from BiSearchAlt to FaClipboardList (list/research focus)
	},
	{
		name: "Google Ads",
		icon: <FaGoogle />, // Already FaIcon
	},
	{
		name: "Content Creation",
		icon: <FaPencilAlt />, // Changed from BiPencil to FaPencilAlt (pencil/edit for content)
	},
	{
		name: "Social Media Management",
		icon: <FaCog />, // Changed from AiOutlineSetting to FaCog (gear for management/settings)
	},
    {
        name: "Facebook Marketing",
        icon: <FaFacebookSquare />, // Already FaIcon
    },
    {
        name: "Instagram Marketing",
        icon: <FaInstagram />, // Already FaIcon
    },
    {
        name: "LinkedIn Marketing",
        icon: <FaLinkedin />, // Already FaIcon
    },
];
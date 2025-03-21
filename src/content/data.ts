import { iconName } from "@/assets/icons/icons";

export const profileDescription =
  "I'm a full-stack developer from Ernakulam, Kerala, with a year of experience. I enjoy building creative and useful apps.";

export const skills: {
  name: string;
  iconName: iconName;
  hover: string;
}[] = [
  {
    name: "HTML",
    iconName: "html",
    hover: "text-orange-500",
  },
  {
    name: "CSS",
    iconName: "css",
    hover: "text-blue-500",
  },
  {
    name: "React",
    iconName: "react",
    hover: "text-blue-500",
  },
  {
    name: "Next",
    iconName: "next",
    hover: "text-gray-950",
  },
  {
    name: "Node JS",
    iconName: "node",
    hover: "text-green-500",
  },
  {
    name: "Express",
    iconName: "express",
    hover: "text-gray-950",
  },
  {
    name: "TypeScript",
    iconName: "typescript",
    hover: "text-blue-500",
  },
  {
    name: "PostgreSQL",
    iconName: "postgresql",
    hover: "text-blue-500",
  },
  {
    name: "MongoDB",
    iconName: "mongoDB",
    hover: "text-green-500",
  },
  {
    name: "Tailwind",
    iconName: "tailwind",
    hover: "text-blue-500",
  },
  {
    name: "Sequelize",
    iconName: "sequelize",
    hover: "text-blue-500",
  },
  {
    name: "Docker",
    iconName: "docker",
    hover: "text-blue-500",
  },
];

export const experiences = [
  {
    name: "Codinoz Technologies LLP",
    description:
      "• Developed a restaurant management system # • Worked on a mid-level ERP system to streamline business processes.",
    image: "/codinoz_technologies_logo.jpeg",
    startDate: "Apr, 2024",
    endDate: "current",
    location: "Malappuram, Kerala",
  },
];

export const education = [
  {
    name: "Al Ameen College",
    description: "BSc Computer Science",
    image: "",
    startDate: "Jun, 2020",
    endDate: "Apr, 2024",
    location: "Aluva, Kerala",
  },
  {
    name: "Paliyam GHSS",
    description: "Plus Two(Computer Science)",
    image: "",
    startDate: "Jun, 2018",
    endDate: "Mar, 2020",
    location: "North Paravoor, Kerala",
  },
  {
    name: "St Johns, Aluva",
    description: "SSLC",
    image: "",
    startDate: "Jun, 2017",
    endDate: "Mar, 2018",
    location: "Aluva, Kerala",
  },
];

export const quickSocials: { iconName: iconName; url: string }[] = [
  {
    iconName: "github",
    url: "https://github.com/MuhammedFayazTS",
  },
  {
    iconName: "linkedin",
    url: "https://www.linkedin.com/in/muhammed-fayaz-t-s-64a934285?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwCES3hX%2BQeOxXMEj4qGZ5w%3D%3D",
  },
  {
    iconName: "mail",
    url: "mailto:muhammedfayazts01@gmail.com",
  },
];

export const projectsData: {
  name: string;
  duration: string;
  image: string;
  stack: iconName[];
  github: string;
  live: string;
}[] = [
  {
    name: "Turf Booking Application",
    duration: "Jan,2024",
    image: "/turf-booking.webp",
    stack: ["react", "mongoDB", "node", "express", "tailwind"],
    github: "/",
    live: "",
  },
  {
    name: "Chat Application",
    duration: "Nov,2024",
    image: "/chat-app.webp",
    stack: ["react", "mongoDB", "node", "express", "socket", "mui"],
    github: "/",
    live: "",
  },
];

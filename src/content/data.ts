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
    endDate: "present",
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
  description: string;
  image: string;
  stack: iconName[];
  github: string;
  live: string;
}[] = [
    {
      name: "Aaravam - Kerala Festival Map",
      duration: "Oct,2025 - ongoing",
      image: "./kathakali.svg",
      stack: ["react", "tailwind", "typescript"],
      description:
        "Interactive map showing local festivals across Kerala. Built with React, TypeScript, and Mapbox — includes district, name, and date-based filtering.",
      github: "https://github.com/MuhammedFayazTS/kerala-festival-map-frontend.git",
      live: "",
    },
    {
      name: "Kerala Vegetable & Fruits Price Dashboard",
      duration: "Sept, 2025",
      image: "/veg-fruits.png",
      stack: ["tailwind", "next", "typescript"],
      description:
        "Provides daily market prices and historical trends for vegetables and fruits in Kerala.",
      github: "https://github.com/MuhammedFayazTS/kerala-market-prices-ui.git",
      live: "https://kerala-market-prices.vercel.app/",
    },
    {
      name: "User Management System",
      duration: "Jun,2025",
      image: "/user-management.png",
      stack: ["react", "postgresql", "node", "express", "tailwind"],
      description:
        "The **User Management System** is a comprehensive platform built with **React**, **PostgreSQL**, **Node.js**, **Express**, and **Tailwind CSS**. It allows administrators to manage user accounts, roles, and permissions effectively. Key features include user JWT-based authentication, refresh tokens, and additional security measures like two-factor authentication (2FA). The system ensures secure user authentication and provides a responsive design for seamless usage across devices.",
      github: "https://github.com/MuhammedFayazTS/User-Management-Frontend.git",
      live: "",
    },
    {
      name: "Turf Booking Application",
      duration: "Jan,2024",
      image: "/turf-booking.png",
      stack: ["react", "mongoDB", "node", "express", "tailwind"],
      description:
        "The **Turf Booking Application** is a user-friendly platform built with **React**, **MongoDB**, **Node.js**, **Express**, and **Tailwind CSS**, allowing users to easily browse and book turfs for sports activities. Key features include a **turf list**, **nearby turf search**, **booking**, and **cancellation** functionality. The app offers real-time availability, secure user authentication, and responsive design for a seamless experience across devices. Turf owners can manage bookings and turf details through an optional admin panel, making it a comprehensive solution for turf management and booking.",
      github: "https://github.com/MuhammedFayazTS/Turf-Booking-System.git",
      live: "",
    },
    {
      name: "Chat Application",
      duration: "Nov,2024",
      image: "/chat-app.png",
      stack: ["react", "mongoDB", "node", "express", "socket", "mui"],
      description:
        "The **Chat Application** is a real-time messaging platform built with **React**, **MongoDB**, **Node.js**, **Express**, **Socket.IO**, and **MUI**. It enables users to engage in **one-on-one** and **group chats**, as well as make **audio** and **video calls**. The app supports **secure authentication**, ensuring only authorized users can access the platform. With a responsive UI powered by **MUI**, the application offers a seamless, real-time communication experience across devices, making it ideal for personal or team collaborations.",
      github: "https://github.com/MuhammedFayazTS/Chat-Web-App.git",
      live: "",
    },
  ];

export const blogs = [
  {
    id: 1,
    title: "Workers in React",
    description: "Web Workers vs. Service Workers in React: A Complete Guide with Use Cases",
    url: "https://dev.to/muhammed_fayazts_e35676/web-workers-vs-service-workers-in-react-a-complete-guide-with-use-cases-2po7",
    platform: "Dev.to",
    image: "",
  },
  {
    id: 2,
    title: "SSR, SSG, and ISR in Next.js",
    description: "What, Why, and When to Use - SSR, SSG, and ISR in Next.js",
    url: "https://dev.to/muhammed_fayazts_e35676/ssr-ssg-and-isr-in-nextjs-what-why-and-when-to-use-529d",
    platform: "Dev.to",
    image: "",
  },
  {
    id: 3,
    title: "7 Useful Custom Hooks in React",
    description: " 7 beginner-friendly custom hooks that can significantly enhance your React development experience. Let’s dive in!",
    url: "https://dev.to/muhammed_fayazts_e35676/7-useful-custom-hooks-every-react-beginner-should-know-566m",
    platform: "Dev.to",
    image: "",
  },
  {
    id: 4,
    title: "Introduction to TanStack Query with React and TypeScript",
    description: "TanStack Query is a tool for managing server-state in React apps, simplifying data fetching, caching, and updates, improving efficiency and code readability.",
    url: "https://medium.com/@muhammedfayazts01/introduction-to-tanstack-query-with-react-and-typescript-0448586ccfb2",
    platform: "Medium",
    image: "",
  },
  {
    id: 5,
    title: "File Uploading in React: A Beginner’s Guide",
    description: "Uploading files in React can seem like a challenging task, but with the right approach, it’s straightforward and powerful. In this blog post, we’ll break down the basics of implementing a file uploader in React.",
    url: "https://medium.com/@muhammedfayazts01/file-uploading-in-react-a-beginners-guide-762b45748b23",
    platform: "Medium",
    image: "",
  },
  {
    id: 6,
    title: "Building a Progressive Web App (PWA) in React",
    description: "Progressive Web Apps (PWAs) are web applications that provide a native app-like experience to users. They are reliable, fast, and engaging, offering features like offline access, push notifications, and installation on devices.",
    url: "https://medium.com/@muhammedfayazts01/building-a-progressive-web-app-pwa-in-react-247a81854760",
    platform: "Medium",
    image: "",
  },
  {
    id: 7,
    title: "Exploring tRPC and Comparing It with REST API",
    description: "tRPC (TypeScript Remote Procedure Call) is a library that allows you to build type-safe APIs using TypeScript.",
    url: "https://medium.com/@muhammedfayazts01/exploring-trpc-and-comparing-it-with-rest-api-0090d48a9697",
    platform: "Medium",
    image: "",
  },
];

export const contactInfo = {
  email: "muhammedfayazts01@gmail.com",
  phone: "+91 7994536503"
}

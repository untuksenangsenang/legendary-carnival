import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/flutter.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/supabase.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/firebase.png";
import Tools13 from "/assets/tools/html.png";
import Tools14 from "/assets/tools/css.png";
import Tools15 from "/assets/tools/vite.png";
import Tools16 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Flutter",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Supabase",
    ket: "Backend Service",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Firebase",
    ket: "Backend Service",
    dad: "1300",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];



import Proyek7 from "/assets/proyek/proyek7.jpg";
import Proyek8 from "/assets/proyek/proyek8.jpg";
import Proyek9 from "/assets/proyek/proyek9.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek7,
    title: "Delivoria Apps",
    subtitle: "Your AI-Powered Gateway to Local Flavors, Built with Flutter and Gemini Intelligence.",
    fullDescription:"Delivoria is a cutting-edge food delivery platform built with Flutter to provide a seamless, high-performance user experience that connects food enthusiasts with a vast array of local culinary treasures, from humble street vendors to top-tier restaurants. By leveraging Firebase Firestore, the application ensures real-time data synchronization and a robust, scalable backend for instant order processing and live updates. Enhancing the digital dining experience, Delivoria integrates a sophisticated Gemini-powered chatbot that offers personalized meal recommendations and interactive support, making the journey from discovery to doorstep faster, smarter, and more intuitive than ever before.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/untuksenangsenang/DelivoriaApp.git",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek8,
    title: "Fix It Now",
    subtitle: "A Multi-Tenant Smart Infrastructure Management System for Resilient and Transparent Communities.",
    fullDescription:"Fix It Now is a sophisticated, multi-tenant facility management ecosystem built with Next.js to deliver a fast, SEO-friendly, and responsive interface for reporting and tracking public infrastructure. By leveraging Supabase for its robust PostgreSQL database and seamless real-time capabilities, the platform allows users in universities, corporations, or government bodies to report damages, upload photos, and track repair tickets with instant status updates. The application promotes transparency by enabling a dual-flow system where the public can both report issues and offer appreciation for well-maintained facilities, while administrators benefit from a powerful backend to manage maintenance workflows. Designed with a generic, scalable architecture, Fix It Now empowers any organization to register and independently manage their digital infrastructure, ensuring efficient maintenance and high-quality environments through modern web technology.",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Zauro25/Fix-It-Now-DPSI.git",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek9,
    title: "Instagram Scrapper",
    subtitle: "A Robust Instagram Data Mining Tool Built with FastAPI and React.",
    fullDescription:"Developed as a Data Mining course project, this Instagram Scraper provides a streamlined interface for extracting valuable social media insights through a modern full-stack architecture. The application utilizes a high-performance FastAPI backend written in Python to handle complex data crawling logic and API requests, ensuring efficient retrieval of public profile data and post metrics. On the frontend, a clean and responsive React user interface allows users to input target parameters and visualize scraped data in real-time without the need for manual command-line execution. By bridging the gap between raw data extraction and user accessibility, this tool demonstrates a practical approach to social media analysis and automated data gathering.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "300",
  },
];
import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Lanyard from "./components/Lanyard/Lanyard";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import ChatRoom from "./components/ChatRoom";
import "aos/dist/aos.css";

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Init AOS
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  // Fix reload
  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  // Observer about
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#B700FF", "#2100C9", "#00BDCB"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div>
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="/assets/rapi1.jpg" className="w-7 h-7 rounded-md" />
              <q>I’m not lazy, I’m just on energy-saving mode.</q>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              <ShinyText
                text="Hi I'm Rafi Amrullah Al-Baihaqi Gunawan"
                speed={3}
              />
            </h1>

            <BlurText
  text="Information Systems student specializing in Web Development, focused on building modern, responsive, and user-friendly web applications."
  delay={150}
  animateBy="words"
  direction="top"
  className="mb-6"
/>

            <div className="flex items-center gap-4">
              <a
                href="/assets/CV.pdf"
                download="Rafi_Amrullah_CV.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700"
              >
                <ShinyText text="Download CV" speed={3} />
              </a>

              <a
                href="#project"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700"
              >
                <ShinyText text="Explore My Projects" speed={3} />
              </a>
            </div>
          </div>

          <div className="md:ml-auto">
            <ProfileCard
              name="Rafi Amrullah"
              title="Web Developer & Graphic Designer"
              handle="imrapii"
              avatarUrl="/assets/rapi.png"
              showUserInfo={true}
            />
          </div>
        </div>

        {/* ABOUT */}
        <div
  className="mt-16 mx-auto w-full max-w-[1200px] rounded-3xl border border-violet-500/30 bg-zinc-900/60 backdrop-blur-md p-10 shadow-lg"
  id="about"
>
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
      I’m <span className="text-violet-400 font-semibold">Rafi Amrullah Al-Baihaqi</span>, 
      an Information Systems student with a strong passion for 
      <span className="text-violet-400"> Web Development</span>. 
      I enjoy building modern, responsive, and user-friendly websites that 
      combine clean design with efficient functionality.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 text-center">

    <div className="bg-zinc-800/60 p-6 rounded-xl border border-zinc-700 hover:border-violet-500 transition">
      <h3 className="text-3xl font-bold text-white mb-2">20+</h3>
      <p className="text-gray-400">Projects Completed</p>
    </div>

    <div className="bg-zinc-800/60 p-6 rounded-xl border border-zinc-700 hover:border-violet-500 transition">
      <h3 className="text-3xl font-bold text-white mb-2">Web Dev</h3>
      <p className="text-gray-400">React, JavaScript, Firebase</p>
    </div>

    <div className="bg-zinc-800/60 p-6 rounded-xl border border-zinc-700 hover:border-violet-500 transition">
      <h3 className="text-3xl font-bold text-white mb-2">3.57</h3>
      <p className="text-gray-400">Current GPA</p>
    </div>

  </div>

  <p className="text-center text-gray-400 mt-10 max-w-3xl mx-auto leading-relaxed">
    My focus is on developing interactive web applications using modern 
    technologies such as <span className="text-violet-400">React, JavaScript, and Firebase</span>. 
    I enjoy transforming ideas into real digital products and continuously 
    improving my skills in frontend development, UI/UX, and full-stack web technologies.
  </p>
</div>

        {/* TOOLS */}
        <div className="tools mt-32">
          <h1 className="text-4xl font-bold mb-4">Tools & Technologies</h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900"
              >
                <img src={tool.gambar} className="w-16 h-16 object-contain" />

                <div>
                  <ShinyText text={tool.nama} />
                  <p className="text-sm text-zinc-400">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECT */}
        <div className="proyek mt-32 py-10" id="project">
          <h1 className="text-center text-4xl font-bold mb-2">Project</h1>

          <p className="text-center opacity-50 mb-10">
            Showcasing my projects
          </p>

          <ChromaGrid
            items={listProyek}
            onItemClick={handleProjectClick}
            radius={500}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

        {/* ========================= */}
        {/* CHAT ROOM SECTION */}
        {/* ========================= */}

        <div className="mt-32 mb-32" id="chat">
          <h1 className="text-center text-4xl font-bold mb-4">
            Live Chat
          </h1>

          <p className="text-center text-gray-400 mb-10">
            Login with Google and chat with visitors in real-time.
          </p>

          <ChatRoom />
        </div>

      </main>

      {/* PROJECT MODAL */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
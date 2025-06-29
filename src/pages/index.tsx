import Navbar from '../components/Navbar';
import ProjectCarousel from '../components/ProjectCarousel';
import OrbitProfile from '@/components/OrbitProfile';

export default function Home() {
  return (
    <div className="sm:px-1 min-h-screen flex flex-col text-white" style={{ backgroundColor: '#0A0A0A' }}>
      <Navbar />

      <section id="home" className="flex-1 flex flex-col items-center justify-center min-h-screen scroll-mt-20">
        <OrbitProfile/>
        <h1 className="text-5xl font-IBM font-bold text-red-600 mb-4">Hope you are doing well</h1>
        <p className="text-lg font-IBM font-bold text-gray-400 mb-6">Rungroj Poomkokrak</p>
        {/* <button className="bg-red-600 hover:bg-orange-500 text-black font-IBM font-bold py-3 px-6 rounded-lg transition">
          View Projects
        </button> */}
      </section>

      <section id="about" className="flex flex-col items-center justify-center min-h-screen scroll-mt-20">
        <h2 className="text-4xl font-IBM font-bold text-[#FB9402] mb-4">About</h2>
        <p className="text-lg font-IBM font-bold text-gray-300 max-w-xl text-center">This is the about section. Add your information here.</p>
      </section>

      <section id="projects" className="min-h-screen bg-[#0a0a0a] text-white scroll-mt-20">
        <h2 className="text-4xl font-bold text-[#FB9402] mb-4 text-center">My Projects</h2>
        <ProjectCarousel />
      </section>

      <section id="contact" className="flex flex-col items-center justify-center min-h-screen scroll-mt-20">
        <h2 className="text-4xl font-IBM font-bold text-[#FB9402] mb-4">Contact</h2>
        <p className="text-lg font-IBM font-bold text-gray-300 max-w-xl text-center">This is the contact section. Add your contact info here.</p>
      </section>
    </div>
  );
};


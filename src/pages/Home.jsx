import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Workflow from "../components/Workflow";
import About from "../components/About";
import AIDashboard from "../components/AIDashboard";

function Home() {
  return (
    <div className="relative bg-[#060816] text-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <Workflow />
      <About />
      <AIDashboard />
      <Footer />

    </div>
  );
}

export default Home;
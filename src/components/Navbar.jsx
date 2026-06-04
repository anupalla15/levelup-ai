import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="/"
          className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
        >
          LevelUp AI
        </a>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-purple-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="features"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-purple-400 transition duration-300"
          >
            Features
          </Link>

          <Link
            to="dashboard"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-purple-400 transition duration-300"
          >
            Dashboard
          </Link>

          {/* BUTTON */}
          <a
            href="/interview"
            className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition duration-300 px-6 py-3 rounded-full shadow-lg shadow-purple-500/30"
          >
            Start Interview
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
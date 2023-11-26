// import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom";
import LandLawdz from "../assets/LandLawdz.png";

const Header = () => {
  return (
    <header className="bg-green-900 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to='/'>
      <h1 className="font-bold text:sm sm:text-xl flex flex-wrap">
        <span type="image" href="./src/assets/LandLawdz.png" className=""></span>
        <span className="text-cyan-500">Land</span>
        <span className="text-yellow-600">Lawdz</span>
      </h1>
      </Link>
      <form className="rounded-lg text-black">
          <input type="text" placeholder="Search..." className="bg-green-800 p-2 rounded-lg text-white focus:outline-none" />
      </form>
      <ul className="flex gap-4 text-gray-400">
        <Link to='/'>
        <li className="hidden sm:inline hover:underline hover:text-yellow-600">Home</li>
        </Link>
        <Link to='/about'>
        <li className="hidden sm:inline hover:underline hover:text-yellow-600">About</li>
        </Link>
        <Link to='/sign-in'><li className="hover:underline hover:text-yellow-600">SignIn</li>
        </Link>
      </ul>
      </div>
    </header>
  )
}

export default Header
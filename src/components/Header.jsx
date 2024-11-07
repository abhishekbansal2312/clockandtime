import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-gray-800 text-white py-3 shadow-md">
        <div className="flex justify-center space-x-8">
          <Link
            to="/"
            className="text-base font-medium hover:text-indigo-500 transition duration-200"
          >
            Clock
          </Link>
          <Link
            to="/timer"
            className="text-base font-medium hover:text-indigo-500 transition duration-200"
          >
            Timer
          </Link>
          <Link
            to="/stopwatch"
            className="text-base font-medium hover:text-indigo-500 transition duration-200"
          >
            StopWatch
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

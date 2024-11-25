import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col justify-center w-full h-screen items-center ">
      <h1 className="text-6xl align-center font-serif text-lime-600 flex flex-col">
        Festival Celebration
      </h1>
      <p className="text-2xl font-serif text-lime-600 ">
        Lets celebrate all the festival together
      </p>
      <Link
        to="/events"
        className="p-3 mt-4 text-white rounded bg-lime-600 hover:text-lime-700 hover:font-bold"
      >
        View Events
      </Link>
    </div>
    // </div>
  );
}

export default HomePage;

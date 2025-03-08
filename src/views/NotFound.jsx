import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center h-screen">
      <h1 className="text-7xl">Sorry !</h1>
      <p className="text-xl">The page you are looking for does not exist.</p>
      <p className="text-lg ">
        Go back to{" "}
        <Link className="underline text-primary" to="/">
          Shop
        </Link>
      </p>
    </div>
  );
}

export default NotFound;

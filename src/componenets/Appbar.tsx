import { Avtar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div>
      <div className="border-b flex justify-between px-10 py-4">
        <Link
          to={"/blogs"}
          className="flex flex-col justify-center cursor-pointer"
        >
          BLOGxCODE
        </Link>

        <div>
          <Link to={`/publish`}>
            <button
              type="button"
              className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              New
            </button>
          </Link>
          <Link to={`/signin`}>
            <button
              type="button"
              className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Signin
            </button>
          </Link>

          <Link to={`/signin`}>
            <button
              onClick={logout}
              type="button"
              className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Signout
            </button>
          </Link>
          <Avtar size={"big"} name="Anonymous" />
        </div>
      </div>
    </div>
  );
};

const logout = () => {
  localStorage.removeItem("token");
  alert("sign out sucessfully");
};

import { Link, Outlet } from "react-router-dom"

const Account = () => {
  return (
    <div className="bg-[#181931] pt-20 w-full ">
      <div className="links-container bg-[#232345] h-20 px-2 sm:px-28 flex items-center">
        <Link className="text-white " to={"/account/myaccount"}>
          My Account
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Account
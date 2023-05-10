import { Link, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div className="bg-[#181931] pt-20 w-full ">
      <div className="links-container bg-[#232345] h-20 px-2 sm:px-28 flex items-center gap-4">
        <Link className="text-white " to={"/account/myaccount"}>
          My Account
        </Link>
        <Link className="text-white " to={"/account/mytransactions"}>
          My Transactions
        </Link>
        <Link className="text-white " to={"/account/liveevents"}>
          Live Events
        </Link>
        <Link className="text-white " to={"/account/closedevents"}>
          Closed Events
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Account;

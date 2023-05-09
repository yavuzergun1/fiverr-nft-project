import { Link, Outlet } from "react-router-dom"

const Account = () => {
  return (
    <div className="">
      
      <Link className="text-black" to={"/account/myaccount"}>My Account</Link>
      <Outlet/>
    </div>
  )
}

export default Account
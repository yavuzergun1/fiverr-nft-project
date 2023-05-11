import { Link } from "react-router-dom";
import settings from "../../assets/Group (1).png";
import waves from "../../assets/div (1).png";
import wax from "../../assets/SVG (1).png";

const MyAccount = () => {
  return (
    <div className="bg-[#181931] text-white py-10 px-2 sm:px-28">
      <h1 className=" text-3xl font-medium ">My Account</h1>
      <p className="max-w-[561px] mt-5">
        Lorem ipsum dolor sit amet consectetur. Nisi rhoncus euismod lobortis
        tellus velit amet suscipit amet. Neque diam consequat integer urna
        tristique. At ullamcorper sit.
      </p>
      <div className="containers flex flex-col items-center">
        <div className="top-containers flex flex-col lg:flex-row w-full justify-between items-center sm:items-start mt-12 gap-10">
          <div className="wallet-details w-full lg:w-[661px] h-36">
            <p className="text-lg font-medium ">Wallet Details</p>
            <div className="wallet bg-[#212345] w-full h-full rounded-xl border-[0.8px] border-[#363970] flex justify-between px-7 items-center">
              <div>
                <p className="text-lg font-medium">Wallet Address</p>
                <p className="font-light">iokkl.wam</p>
              </div>
              <div>
                <p className="text-lg font-medium">Balance</p>
                <p className="font-light">999999999999 WAX</p>
              </div>
            </div>
          </div>
          <div className="reward">
            <p className="text-lg font-medium">Reward</p>
            <div className="reward bg-[#212345] lg:w-[404px] w-full h-36 rounded-xl border-[0.8px] border-[#363970] px-4 flex flex-col items-center justify-center">
              <p className="font-light text-center">
                Connect your wallet to see your staking balance and reward
              </p>
              <button className="bg-[#0055FF] w-full h-10 rounded-2xl mt-5 ">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-[#212345] rounded-xl border-[0.8px] border-[#363970] max-w-[528px] sm:w-[528px] h-[441px] my-20 px-5">
          <div className="nav flex justify-between border-b-[0.8px] border-[#8182C5] h-10 mt-5 ">
            <div className="links flex gap-5">
              <Link className="decoration-[#0055FF] underline underline-offset-[22px] ">
                Swap
              </Link>
              <Link>Buy</Link>
            </div>
            <img className="h-6 w-6 mr-10" src={settings} alt="" />
          </div>

          <div className="first flex mt-10 items-center gap-2">
            <img src={waves} alt="" />
            <div className="value flex items-center justify-between px-5 bg-[#363970] w-[270px] h-14 rounded-xl ml-7">
              <div className="left flex gap-3">
                <input
                  placeholder="0.00"
                  className="bg-[#363970] focus:ring-0 outline-none h-14"
                  type="number"
                />
              </div>
              <p className="text-xs">$0 </p>
            </div>
          </div>
          <p className="ml-10 my-9">1 WAVES = ~ 0.3860 WAX</p>
          <div className="second flex mt-10 justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <img src={wax} alt="" />
              <p>WAX</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="value flex items-center justify-between px-5 bg-[#363970] w-[270px] h-14 rounded-xl ">
                <div className="left flex gap-3">
                  <input
                    placeholder="0.00"
                    className="bg-[#363970] focus:ring-0 outline-none h-14"
                    type="number"
                  />{" "}
                </div>
                <p className="text-xs">$0</p>
              </div>
            </div>
          </div>
          <button className="bg-[#0055FF] w-full h-14 rounded-2xl mt-9 ">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;

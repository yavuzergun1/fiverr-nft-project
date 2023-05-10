import bitlogo from "../assets/Group 1000003547.png";
// eslint-disable-next-line
const Card = ({blueColor, redColor}) => {
  return (
    <div className="info-container mt-14 max-w-[614px] h-80 md:h-[392px]  rounded-lg bg-[#212345] border-[.8px] border-[#363970] ">
      <div className="bitcoin px-2 md:px-5 items-center flex justify-between py-2 border-b-[1px] border-[#363970] xl:h-32 ">
        <div className="flex w-9/12 items-center gap-4">
          <img className="w-16 h-16" src={bitlogo} alt="" />
          <p className="text-xs xl:text-lg ml-1 ">
            Bitcoin to be priced at 28853.81 USDT or more at 08:10 PM?
          </p>
        </div>
        <p className="text-xs xl:text-lg">#Cricket</p>
      </div>

      <div className="px-2 mt-7 md:px-5 flex flex-col gap-5">
        <div className="first flex text-sm font-semibold mt-2 justify-between xl:text-xl ">
          <p className="">
            Start Time: <span className="font-normal"> 08:10 PM</span>{" "}
          </p>
          <p className="">
            End Time: <span className="font-normal"> 4h 20m 30sec</span>{" "}
          </p>
        </div>

        <div className="second mt-4 flex text-sm w-full justify-center gap-8">
          <p>$9999</p>
          <button className={`rounded-xl w-6/12 h-7 ${blueColor} xl:h-10`}>
            {" "}
            Yes{" "}
          </button>
        </div>

        <div className="third flex text-sm w-full justify-center gap-8">
          <p>$9999</p>
          <button className={`rounded-xl w-6/12 h-7 ${redColor} xl:h-10`}>
            {" "}
            Yes{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
import binance from "../assets/path16 (1).png";
import ripple from "../assets/Frame 11.png";
import bitcoin from "../assets/Frame 10.png";
import coinbase from "../assets/Vector (4).png";
import rising from "../assets/Rising.png";

const Home = () => {
  return (
    <div className="bg-[#181931] w-full h-full text-white pb-24 px-2 sm:px-28">
      <div className="top-container flex flex-col items-center xl:flex-row xl:items-start justify-between pt-[233px]">
        <div className="left-container w-11/12 ">
          <h1 className="text-6xl max-w-[590px] leading-snug font-bold text-center sm:text-left ">
            Opinions Traded Wealth Create GetFoz
          </h1>
          <p className="text-3xl font-light max-w-[590px] mt-10">
            Experience seamless trading on our secure platform and trade with
            confidence.
          </p>
          <button className="bg-[#0055FF] w-[253px] h-[53px] rounded-2xl mt-10">
            Connect Wallet
          </button>
          <div className="trademarks">
            <div className="first flex gap-10 h-32 mt-10 items-center">
              <img src={binance} alt="" />
              <img src={ripple} alt="" />
              <img src={coinbase} alt="" />
              <img src={bitcoin} alt="" />
            </div>
            <div className="second">
              <img src={binance} alt="" />
            </div>
          </div>
        </div>
        <div className="right-container mt-16 xl:mt-0">
          <img src={rising} alt="" />
          <div className="buttons flex font-dmSans gap-4 text-sm">
            <button className="bg-[#0055FF] w-[70px] h-[40px]  rounded-2xl mt-10">
              Send
            </button>
            <button className="bg-[#FF8811] w-[88.6px] h-[40px]  rounded-2xl mt-10">
              Receive
            </button>
            <button className="bg-[#11A3FF] w-[100.6px] h-[40px]  rounded-2xl mt-10">
              Exchange
            </button>
            <button className="bg-[#9111FF] w-[73.6px] h-[40px]  rounded-2xl mt-10">
              Trade
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-center text-[40px] font-semibold mt-24">
        Trade What You Know
      </h3>
      <p className="text-center text-3xl font-light">
        Invest in your insights regarding regrading upcoming Occurrences, and
        leverage your expertise to engage in trading and reap advantages.
      </p>
    </div>
  );
};

export default Home;

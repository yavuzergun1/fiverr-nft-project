import binance from "../assets/path16 (1).png";
import ripple from "../assets/Frame 11.png";
import bitcoin from "../assets/Frame 10.png";
import coinbase from "../assets/Vector (4).png";
import rising from "../assets/Rising.png";
import icon from "../assets/image 10.png";
import girl from "../assets/image 9.png";
import bitlogo from "../assets/Group 1000003547.png";
import icon1 from "../assets/image-removebg-preview (2) 1.png"
import bull from "../assets/image 8.png"
import goat from "../assets/image-10.png"
import rabbit from "../assets/image 7.png"
import skeleton from "../assets/skeleton.png"

const Home = () => {
  return (
    <div className="bg-[#181931] w-full h-full text-white">
      <div className="top-container pb-24 px-2 sm:px-28 flex flex-col items-center xl:flex-row xl:items-start justify-between pt-24 sm:pt-[233px]">
        <div className="left-container w-11/12 ">
          <h1 className="text-4xl sm:text-6xl max-w-[590px] leading-snug font-bold text-center sm:text-left ">
            Opinions Traded Wealth Create GetFoz
          </h1>
          <p className="text-2xl sm:text-3xl font-light max-w-[590px] mt-10">
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
        <div className="right-container px-5 mt-16 xl:mt-0">
          <img src={rising} alt="" />
          <div className="buttons flex font-dmSans gap-3 text-sm">
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
      <p className="text-center text-3xl px-2 sm:px-28 mt-8 font-light mb-32">
        Invest in your insights regarding regrading upcoming Occurrences, and
        leverage your expertise to engage in trading and reap advantages.
      </p>
      <div className="second-container w-full py-10 px-5 sm:px-28 bg-gradient-radial flex flex-col lg:flex-row items-center ">
        <div className="left lg:w-5/12 mb-20 lg:mb-0 h-full flex items-center">
          <img src={icon} alt="" />
        </div>
        <div className="right lg:w-7/12 flex flex-col justify-center">
          <h2 className="text-6xl text-center font-bold">
            First on Blockchain
          </h2>
          <p className="text-base sm:text-2xl mt-16">
            Welcome to GetFoz, the world’s first WAX blockchain-based betting
            bonanza that’s so much fun, it’ll have you waxing poetic about your
            trades! Tired of the same old, dull trading platforms? Fear not,
            because GetFoz is here to shake things up! We’ ve combined the power
            of WAX blockchain with the exhilarating world of event trading to
            create an experience that’s as entertaining as it is lucrative.
          </p>
          <p className="text-base sm:text-2xl mt-5">
            Step right up, ladies and gentlemen, and join the GetFoz circus,
            where you’ll witness the marvel of cutting-edge blockchain
            technology, the thrill of predicating event outcomes, and the
            undeniable joy of wining those sweet, sweet WAX tokens.{" "}
          </p>
          <button className="bg-[#0055FF] w-[253px] h-[53px] font-medium rounded-2xl mt-10">
            Connect Wallet
          </button>
        </div>
      </div>
      <h2 className="px-2 sm:px-28 text-[40px] text-center mt-32 font-semibold">
        Splurge on Your Perspective
      </h2>
      <p className="px-5 sm:px-28 pb-14 mt-10 text-xl sm:text-3xl font-light">
        Invest in your insights regarding regrading upcoming Occurrences, and
        leverage your expertise to engage in trading and reap advantages.
      </p>
      <div className="third-container sm:relative flex h-full justify-center bg-[#36397031] w-full">
        <div className="organizer sm:relative justify-center flex">
          <div
            className="info-container px-2 block sm:absolute my-8 py-4 w-11/12  xl:px-6 rounded-lg  bg-[#212345] border-[.8px] border-[#363970] sm:-left-28 sm:bottom-16 sm:w-80 sm:h-48
          md:w-80 md:h-52 md:-left-36 md:bottom-16 xl:w-[614px] xl:h-[346px] xl:bottom-36 xl:-left-80"
          >
            <div className="bitcoin items-center flex justify-between py-2 border-b-[1px] border-[#363970] xl:h-32 ">
              <div className="flex w-9/12 items-center">
                <img className="w-8" src={bitlogo} alt="" />
                <p className="text-xs xl:text-lg ml-1 ">
                  Bitcoin to be priced at 28853.81 USDT or more at 08:10 PM?
                </p>
              </div>
              <p className="text-xs xl:text-lg">#Cricket</p>
            </div>

            <div className="h- flex flex-col gap-2">
              <div className="first flex text-sm font-semibold mt-2 justify-between xl:text-xl ">
                <p className="">
                  Start Time: <span className="font-normal"> 08:10 PM</span>{" "}
                </p>
                <p className="">
                  End Time: <span className="font-normal"> 4h 20m 30sec</span>{" "}
                </p>
              </div>

              <div className="second flex text-sm w-full justify-center gap-8">
                <p>$9999</p>
                <button className="rounded-xl w-6/12 h-7 bg-[#0055FF] xl:h-10">
                  {" "}
                  Yes{" "}
                </button>
              </div>

              <div className="third flex text-sm w-full justify-center gap-8">
                <p>$9999</p>
                <button className="rounded-xl w-6/12 h-7 bg-[#FF0000] xl:h-10">
                  {" "}
                  Yes{" "}
                </button>
              </div>
            </div>
          </div>
          <img
            className="w-64 sm:w-96 hidden sm:block sm:translate-x-24 z-10 md:w-[420px] xl:w-[720px] "
            src={girl}
            alt=""
          />
        </div>
      </div>
      <div className="fourth-container px-5 py-9 bg-[#232345] flex flex-col w-full items-center  ">
        <h2 className="text-4xl text-center">How It Work?</h2>
        <p className="my-10 mb-32 text-center">
          Lorem ipsum dolor sit amet consectetur. Dictum vitae urna ullamcorper
          proin mattis. Cursus pellentesque sagittis faucibus quam orci
          parturient condimentum scelerisque vita
        </p>
        <div className="cards-container flex flex-wrap gap-10 justify-center max-w-[1250px] ">
          <div className="bg-card w-[302px] h-[411px] bg-no-repeat flex flex-col items-center justify-center px-5">
            <img className="mb-5" src={icon1} alt="" />
            <p className="mb-8 text-xl font-semibold">Deposit & Party</p>
            <p className="text-center text-xs">
              Users deposit WAX tokens into the GetFoz platform to join the
              trading fiesta.The more tokens, the merrier the party!
            </p>
          </div>
          <div className="bg-card w-[302px] h-[411px] bg-no-repeat flex flex-col items-center justify-center px-5">
            <img className="mb-5" src={bull} alt="" />
            <p className="mb-8 text-xl font-semibold">Deposit & Party</p>
            <p className="text-center text-xs">
              Users deposit WAX tokens into the GetFoz platform to join the
              trading fiesta.The more tokens, the merrier the party!
            </p>
          </div>
          <div className="bg-card w-[302px] h-[411px] bg-no-repeat flex flex-col items-center justify-center px-5">
            <img className="mb-5" src={goat} alt="" />
            <p className="mb-8 text-xl font-semibold">Deposit & Party</p>
            <p className="text-center text-xs">
              Users deposit WAX tokens into the GetFoz platform to join the
              trading fiesta.The more tokens, the merrier the party!
            </p>
          </div>
          <div className="bg-card w-[302px] h-[411px] bg-no-repeat flex flex-col items-center justify-center px-5">
            <img className="mb-5" src={rabbit} alt="" />
            <p className="mb-8 text-xl font-semibold">Deposit & Party</p>
            <p className="text-center text-xs">
              Users deposit WAX tokens into the GetFoz platform to join the
              trading fiesta.The more tokens, the merrier the party!
            </p>
          </div>
          <div className="bg-card w-[302px] h-[411px] bg-no-repeat flex flex-col items-center justify-center px-5">
            <img className="mb-5" src={skeleton} alt="" />
            <p className="mb-8 text-xl font-semibold">Deposit & Party</p>
            <p className="text-center text-xs">
              Users deposit WAX tokens into the GetFoz platform to join the
              trading fiesta.The more tokens, the merrier the party!
            </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Home;

import waves from "../../assets/waves.png";

const TransActions = () => {
  return (
    <div className="bg-[#181931] text-white py-10 px-2 md:px-28">
      <h1 className=" text-3xl font-medium ">My Transactions</h1>
      <p className="max-w-[561px] mt-5">
        Lorem ipsum dolor sit amet consectetur. Nisi rhoncus euismod lobortis
        tellus velit amet suscipit amet. Neque diam consequat integer urna
        tristique. At ullamcorper sit.
      </p>{" "}
      <div className="rounded-2xl pb-16 bg-[#212345] max-w-[1289px] text-[10px] md:text-sm font-[#C6C9F4] mt-14">
        <table className="w-full ">
          <thead>
            <tr className="border-b-[0.8px] border-b-[#363970] h-20">
              <th className="text-center">Token Name</th>
              <th className="text-center">Date</th>
              <th className="text-center">Price</th>
              <th className="text-center">Adress</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full h-16 border-b-[0.8px] border-b-[#363970]">
              <td className="text-center">
                <img className="w-6 h-6 inline-block mr-4" src={waves} alt="" />
                <p className="inline-block">waves</p>
              </td>
              <td className="text-center">04/05/2023</td>
              <td className="text-center">$1.300</td>
              <td className="text-center">iokkl.wam</td>
              <td className="text-center">
                <div className="w-3 h-3 rounded-full bg-[#0BFF99] inline-block mr-2"></div>
                Complete
              </td>
            </tr>
            <tr className="w-full h-16 border-b-[0.8px] border-b-[#363970]">
              <td className="text-center">
                <img className="w-6 h-6 inline-block mr-4" src={waves} alt="" />
                <p className="inline-block">waves</p>
              </td>
              <td className="text-center">04/05/2023</td>
              <td className="text-center">$1.300</td>
              <td className="text-center">iokkl.wam</td>
              <td className="text-center">
                <div className="w-3 h-3 rounded-full bg-[#0BFF99] inline-block mr-2"></div>
                Complete
              </td>
            </tr>
            <tr className="w-full h-16 border-b-[0.8px] border-b-[#363970]">
              <td className="text-center">
                <img className="w-6 h-6 inline-block mr-4" src={waves} alt="" />
                <p className="inline-block">waves</p>
              </td>
              <td className="text-center">04/05/2023</td>
              <td className="text-center">$1.300</td>
              <td className="text-center">iokkl.wam</td>
              <td className="text-center">
                <div className="w-3 h-3 rounded-full bg-[#0BFF99] inline-block mr-2"></div>
                Complete
              </td>
            </tr>
            <tr className="w-full h-16 border-b-[0.8px] border-b-[#363970]">
              <td className="text-center">
                <img className="w-6 h-6 inline-block mr-4" src={waves} alt="" />
                <p className="inline-block">waves</p>
              </td>
              <td className="text-center">04/05/2023</td>
              <td className="text-center">$1.300</td>
              <td className="text-center">iokkl.wam</td>
              <td className="text-center">
                <div className="w-3 h-3 rounded-full bg-[#0BFF99] inline-block mr-2"></div>
                Complete
              </td>
            </tr>
            <tr className="w-full h-16 border-b-[0.8px] border-b-[#363970]">
              <td className="text-center">
                <img className="w-6 h-6 inline-block mr-4" src={waves} alt="" />
                <p className="inline-block">waves</p>
              </td>
              <td className="text-center">04/05/2023</td>
              <td className="text-center">$1.300</td>
              <td className="text-center">iokkl.wam</td>
              <td className="text-center">
                <div className="w-3 h-3 rounded-full bg-[#0BFF99] inline-block mr-2"></div>
                Complete
              </td>
            </tr>
            <tr className="w-full h-16 border-b-[0.8px] border-b-[#363970]">
              <td className="text-center">
                <img className="w-6 h-6 inline-block mr-4" src={waves} alt="" />
                <p className="inline-block">waves</p>
              </td>
              <td className="text-center">04/05/2023</td>
              <td className="text-center">$1.300</td>
              <td className="text-center">iokkl.wam</td>
              <td className="text-center">
                <div className="w-3 h-3 rounded-full bg-[#0BFF99] inline-block mr-2"></div>
                Complete
              </td>
            </tr>
            <tr className="w-full h-16 border-b-[0.8px] border-b-[#363970]">
              <td className="text-center">
                <img className="w-6 h-6 inline-block mr-4" src={waves} alt="" />
                <p className="inline-block">waves</p>
              </td>
              <td className="text-center">04/05/2023</td>
              <td className="text-center">$1.300</td>
              <td className="text-center">iokkl.wam</td>
              <td className="text-center">
                <div className="w-3 h-3 rounded-full bg-[#0BFF99] inline-block mr-2"></div>
                Complete
              </td>
            </tr>
            <tr className="w-full h-16 border-b-[0.8px] border-b-[#363970]">
              <td className="text-center">
                <img className="w-6 h-6 inline-block mr-4" src={waves} alt="" />
                <p className="inline-block">waves</p>
              </td>
              <td className="text-center">04/05/2023</td>
              <td className="text-center">$1.300</td>
              <td className="text-center">iokkl.wam</td>
              <td className="text-center">
                <div className="w-3 h-3 rounded-full bg-[#0BFF99] inline-block mr-2"></div>
                Complete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransActions;

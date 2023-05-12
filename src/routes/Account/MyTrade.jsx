import Pagination from "../../components/Pagination";
import InfoCard from "../../components/InfoCard";

const MyTrade = () => {
  return (
    <div className="pt-10 pb-14 px-2 xl:px-6 2xl:px-16">
      <h1 className=" text-3xl font-medium ">My Trade</h1>
      <p className="max-w-[561px] mt-5">
        Lorem ipsum dolor sit amet consectetur. Nisi rhoncus euismod lobortis
        tellus velit amet suscipit amet. Neque diam consequat integer urna
        tristique. At ullamcorper sit.
      </p>
      <div className="cards flex flex-wrap justify-between">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <Pagination />
    </div>
  );
};

export default MyTrade;

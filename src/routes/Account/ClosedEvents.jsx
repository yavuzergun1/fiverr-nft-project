import Card from "../../components/Card";
import Pagination from "../../components/Pagination";

const ClosedEvents = () => {
  return (
    <div className="pt-10 pb-14 px-2 xl:px-6 2xl:px-28">
      <h1 className=" text-3xl font-medium ">Closed Events</h1>
      <p className="max-w-[561px] mt-5">
        Lorem ipsum dolor sit amet consectetur. Nisi rhoncus euismod lobortis
        tellus velit amet suscipit amet. Neque diam consequat integer urna
        tristique. At ullamcorper sit.
      </p>

      <div className="cards flex flex-wrap justify-between">
        <Card firstColor="bg-[#B9B9B9]" secondColor="bg-[#B9B9B9]" />
        <Card firstColor="bg-[#B9B9B9]" secondColor="bg-[#B9B9B9]" />
        <Card firstColor="bg-[#B9B9B9]" secondColor="bg-[#B9B9B9]" />
        <Card firstColor="bg-[#B9B9B9]" secondColor="bg-[#B9B9B9]" />
      </div>
      <Pagination />
    </div>
  );
};

export default ClosedEvents;

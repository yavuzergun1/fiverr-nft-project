import Card from "../../components/Card";

const Events = () => {
  return (
    <div
      className="pt-10
     pb-44 px-2 sm:px-28"
    >
      <h1 className=" text-3xl font-medium ">My Account</h1>
      <p className="max-w-[561px] mt-5">
        Lorem ipsum dolor sit amet consectetur. Nisi rhoncus euismod lobortis
        tellus velit amet suscipit amet. Neque diam consequat integer urna
        tristique. At ullamcorper sit.
      </p>
      <div className="cards flex flex-wrap justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Events;

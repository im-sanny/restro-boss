import SectionTitle from "../../components/sectionTitle/SectionTitle";
import featured from "../../assets/home/featured.jpg";
import "./Featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white  my-20">
      {/* Section Title */}
      <SectionTitle
        heading={"Check it out"}
        subHeading={"Featured Item"}
      ></SectionTitle>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-800 bg-opacity-60 p-10 md:px-32 space-y-8 md:space-y-0 md:space-x-10">
        {/* Featured Image */}
        <div className="md:w-1/2">
          <img
            src={featured}
            alt="Featured Item"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Featured Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-gray-300">Aug 20, 2039</p>
          <h2 className="text-2xl uppercase font-bold">
            Where can I get some?
          </h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ipsum illum ipsa possimus tenetur voluptate eum
            placeat cumque iste provident! Officia unde fuga enim sit. Sint
            dolores explicabo saepe adipisci!
          </p>
          <button className="btn btn-outline border-1 border-b-4 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white mt-4 transition-all duration-300 ease-in-out">
            <Link to={"/menu"}>Order Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import SectionTitle from "../../components/sectionTitle/SectionTitle";
import featured from "../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-5 my-20">
      <SectionTitle
        heading={"Check it out"}
        subHeading={"Featured Item"}
      ></SectionTitle>
      <div className="flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-32">
        <div className="">
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2039</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ipsum illum ipsa possimus tenetur voluptate eum
            placeat cumque iste provident! Officia unde fuga enim sit. Sint
            dolores explicabo saepe adipisci!
          </p>
          <button className="btn btn-outline border-0 border-b-4 border-black mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

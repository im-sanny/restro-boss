import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MenuItem from "../shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')
  
  return (
    <section className="mb-10">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 max-w-6xl mx-auto">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;

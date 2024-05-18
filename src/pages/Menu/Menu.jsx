import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <div>
        <Helmet>
          <title>Restro Boss | Menu</title>
        </Helmet>
      </div>
      <div>
        <Cover img={menuImg} title={"our menu"}></Cover>
        {/* main cover */}
        <SectionTitle
          subHeading={"Don't Miss"}
          heading={"Today's offered"}
        ></SectionTitle>
        {/* offered menu items */}
        <MenuCategory items={offered}></MenuCategory>
        {/* desert menu items */}
        <MenuCategory
        items={dessert}
        title={'Dessert'}
        img={dessertImg}
        ></MenuCategory>

        <MenuCategory
        items={pizza}
        title={'Pizza'}
        img={pizzaImg}
        ></MenuCategory>

        <MenuCategory
        items={salad}
        title={'salad'}
        img={saladImg}
        ></MenuCategory>

        <MenuCategory
        items={soup}
        title={'soup'}
        img={soupImg}
        ></MenuCategory>
      </div>
    </>
  );
};

export default Menu;

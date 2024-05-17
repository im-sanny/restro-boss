import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from "../home/PopularMenu";

const Menu = () => {
    return (
        <>
        <div>
            <Helmet>
                <title>Restro Boss | Menu</title>
            </Helmet>
        </div>
        <div>
           <Cover img={menuImg} title={'our menu'}></Cover>
           <PopularMenu></PopularMenu>
           <Cover img={menuImg} title={'our menu'}></Cover>
           <PopularMenu></PopularMenu>
           <Cover img={menuImg} title={'our menu'}></Cover>
           <PopularMenu></PopularMenu>
        </div>
        </>
    );
};

export default Menu;
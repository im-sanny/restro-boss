import MenuItem from "../shared/MenuItem";
import Cover from "../shared/cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
        { title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 max-w-6xl mx-auto my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;

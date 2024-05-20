import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const location = useLocation()
    const {user} = useAuth();
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()

    const handleAddToCart = food =>{
      if (user && user.email) {
        //TODO: send cart item to the database
        console.log(user.email, food);
        const cartItem ={
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res =>{
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} added to your card`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      }else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please login to add to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            //send user to login page 
            navigate('/login')
          }
        });
      }
    }
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="bg-slate-900 absolute right-0 mr-4 mt-4 px-4">{price}</p>
        <div className="card-body text-center flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={() =>handleAddToCart (item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-orange-400">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

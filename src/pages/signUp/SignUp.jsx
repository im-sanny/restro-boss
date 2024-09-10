import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photURL)
        .then(() => {
          //create user entry in the  database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };
  return (
    <>
      <Helmet>
        <title>Restro Boss | Sign Up</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: "url('/path/to/your/image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white bg-opacity-90 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-3xl font-bold drop-shadow-lg">
                Sign up now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    PhotoURL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your photo URL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.photURL && (
                  <span className="text-red-600">PhotoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must not exceed 20 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
                    },
                  })}
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-2">
                <input
                  type="submit"
                  value={"Sign Up"}
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

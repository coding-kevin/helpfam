import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css";
import { loginSlice, reset } from "../features/auth/authSlice";
import { useEffect } from "react";

import "../App.css";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data, e) => {
    e.preventDefault();

    dispatch(loginSlice(data));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("Could not log in. Please check login details.");
    }

    if (isSuccess || user) {
      navigate("/tickets");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  //Guest Accounts

  let guestAdmin = {
    name: "Guest_Admin",
    email: "Guest_Admin",
    password: "Guest_Admin",
    userType: "Admin",
  };

  let guestCustomer = {
    name: "Guest_Customer",
    email: "Guest_Customer",
    password: "Guest_Customer",
    userType: "Customer",
  };
  return (
    <section className="login-and-register">
      <div className="ui raised segment form centered">
        <div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Log In</h1>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>

              <button className=" green fluid ui button" type="submit">
                Log In
              </button>
            </form>
          </div>
        </div>
        <div>
          <br></br>
          <h2>No account? Register or use a guest account.</h2>
          <div className="guest-account-logins">
            <button
              onClick={() => navigate("/users/register")}
              className="ui fluid blue button login-button"
            >
              Register
            </button>
            <button
              className="fluid ui blue button login-button"
              onClick={() => dispatch(loginSlice(guestAdmin))}
            >
              Guest Admin
            </button>
            <button
              className="ui fluid blue button login-button"
              onClick={() => dispatch(loginSlice(guestCustomer))}
            >
              Guest Customer
            </button>
          </div>
          <br></br>
        </div>
      </div>
    </section>
  );
};

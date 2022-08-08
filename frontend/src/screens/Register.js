import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css";
import { registerSlice, reset } from "../features/auth/authSlice";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    if (data.password !== data.passwordConfirmation) {
      toast.error("Passwords do not match");
    } else {
      dispatch(registerSlice(data));
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(
        "Something went wrong. Please confirm all details. If problem persists, please try again in a few minutes."
      );
    }

    if (isSuccess || user) {
      navigate("/tickets");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <section className="create-ticket">
      <div>
        <form
          className="ui raised segment centered form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Register</h1>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
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
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              {...register("passwordConfirmation", { required: true })}
            />
            {errors.passwordConfirmation && <span>This field is required</span>}
          </div>
          <div className="login-register-information">
            Select user type. Admin has more priviliges than customer.
            <br></br>
            <input
              {...register("userType", { required: true })}
              type="radio"
              value="Customer"
            />
            Customer
            {errors.passwordConfirmation && <span>This field is required</span>}
            <input
              {...register("userType", { required: true })}
              type="radio"
              value="Admin"
            />
            Admin
            {errors.passwordConfirmation && <span>This field is required</span>}
          </div>

          <button className="blue ui button" type="submit">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

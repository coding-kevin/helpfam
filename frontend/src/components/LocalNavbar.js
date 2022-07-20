import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LocalNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/users/login");
  };
  return (
    <div>
      <nav className="local-nav">
        <div className="local-nav-logout">
          {user ? (
            <button className="blue ui button ticketnav" onClick={onLogout}>
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/users/login")}
              className="blue ui button"
            >
              Log In
            </button>
          )}
        </div>
        <div className="local-nav-home">
          <h1 className="navbar-name">
            <a className="ticketnav" href="/tickets">
              Tickets
            </a>
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default LocalNavbar;

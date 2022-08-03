import Navbar from "./components/Navbar";
import LocalNavbar from "./components/LocalNavbar";
import TicketList from "./screens/TicketList";
import { TicketForm } from "./screens/CreateTicketForm";
import { LoginForm } from "./screens/Login";
import { RegisterForm } from "./screens/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NotFound } from "./screens/NotFound";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <LocalNavbar />
        <Routes>
          <Route path="/" element={<TicketList />} />
          <Route path="/frontend/build/index.html" element={<TicketList />} />
          <Route path="/tickets/" element={<TicketList />} />
          <Route path="/tickets/create" element={<TicketForm />} />
          <Route path="/users/login" element={<LoginForm />} />
          <Route path="/users/register" element={<RegisterForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}
export default App;

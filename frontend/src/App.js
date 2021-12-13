import NavBar from "./components/NavBar";
import TicketList from "./screens/TicketList";
import { CreateTicket } from "./components/CreateTicket";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CreateTicket />} />
      </Routes>
      <TicketList />
      <Footer />
    </>
  );
}
export default App;

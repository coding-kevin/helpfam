import TicketList from "./screens/TicketList";
import { CreateTicket } from "./components/CreateTicket";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CreateTicket />
      <TicketList />
      <Footer />
    </>
  );
}
export default App;

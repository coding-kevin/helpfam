import NavBar from "./components/NavBar";
import TicketList from "./screens/TicketList";
import { CreateTicket } from "./components/CreateTicket";
import Footer from "./components/Footer";
import EditTicket from "./components/EditTicket";
import TicketCard from "./components/TicketCard";

import { Route, Routes, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/tickets" element={<CreateTicket />} />
        <Route path="/edit/" element={<EditTicket />} />
      </Routes>
      <TicketList />
      <Footer />
    </>
  );
}
export default App;

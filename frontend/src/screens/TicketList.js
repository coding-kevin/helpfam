import { useState, useEffect } from "react";
import { getTickets } from "../api";
import TicketCard from "../components/TicketCard";
import Categories from "../components/Categories";

const TicketList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const tickets = await getTickets();
      setItems(tickets); // (or await tickets?)
      console.log(tickets);
    };
    fetchItems();
  }, []);

  const filterTickets = (selectedCategory) => {
    setItems(
      items.map((ticket) =>
        ticket.family_member === selectedCategory || selectedCategory === "All"
          ? { ...ticket, visible: true }
          : { ...ticket, visible: false }
      )
    );
  };

  return (
    <>
      <div className="categories">
        <Categories onFilter={filterTickets} ticket={items} />
      </div>
      <div className="ticket-list">
        {items.map((ticket) => (
          <TicketCard ticket={ticket} key={ticket._id} />
        ))}
      </div>
    </>
  );
};

export default TicketList;

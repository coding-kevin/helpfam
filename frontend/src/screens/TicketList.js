import { useState, useEffect } from "react";
import {getTickets } from "../api"
import TicketCard from "../components/TicketCard"
import Categories from "../components/Categories"



const TicketList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const tickets = await getTickets()
      setItems(tickets) // (or await tickets?)
    }
    fetchItems()
  }, 

  []);

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
      <Categories onFilter={filterTickets} />
      </div>
  <div className="ticket-list">
        {items.map((ticket) => (
         
         <TicketCard ticket={ticket} />
          
        ))}
</div>
    </>
  );
};



export default TicketList;
import { TicketForm } from "./TicketForm";
import { createTicket } from "../api";
import { useNavigate } from "react-router-dom";

export const CreateTicket = () => {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await createTicket(data);
    navigate(0); //refresh the page
  };
  return <TicketForm onSubmit={onSubmit} />;
};

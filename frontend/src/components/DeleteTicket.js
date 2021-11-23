import { deleteTicket } from "../api";
import { useNavigate } from "react-router-dom";

const DeleteTicket = ({ ticket }) => {
  const id = ticket._id;
  const navigate = useNavigate();

  const onSubmit = async () => {
    deleteTicket(id);
    navigate(0);
  };

  return (
    <div>
      <button onClick={() => onSubmit()}>DELETE</button>
    </div>
  );
};

export default DeleteTicket;

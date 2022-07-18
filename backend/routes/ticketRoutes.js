const express = require("express");
const router = express.Router();

const {
  getTickets,
  setTicket,
  deleteTicket,
  resolveTicket,
  addWorknote,
} = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, setTicket);
router.route("/:id").delete(protect, deleteTicket).put(protect, resolveTicket);
router.route("/:id/addWorknote").put(protect, addWorknote);

module.exports = router;

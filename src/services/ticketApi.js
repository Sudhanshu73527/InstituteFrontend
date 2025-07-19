import Axios from "../utils/Axios";

// 🧾 Student: Create new support ticket
export const createStudentTicket = (data) => {
  return Axios.post("/ticketStudent", data);
};

// 🎫 Student: Fetch all my tickets
export const getMyTickets = () => {
  return Axios.get("/ticket/mine");
};

// 🧑‍💼 Admin: Fetch all tickets
export const getAllTickets = () => {
  return Axios.get("/ticketAdmin");
};

// ✅ Admin: Update status (e.g., mark as closed)
export const updateTicketStatus = (ticketId, status) => {
  return Axios.patch(`/ticket/${ticketId}/status`, { status });
};

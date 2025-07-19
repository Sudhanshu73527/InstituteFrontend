import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Paper,
  Chip,
  Button,
  List,
  ListItem,
  Divider,
  Alert,
} from "@mui/material";
import {
  getAllTickets,
  updateTicketStatus,
} from "../../../services/ticketApi";

const AdminTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);
  const [error, setError] = useState(null);

  const fetchTickets = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getAllTickets();
      setTickets(res.data.tickets);
    } catch (err) {
      console.error("Failed to fetch tickets:", err);
      setError("Unable to load tickets. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleStatusChange = async (ticketId) => {
    setUpdating(ticketId);
    try {
      await updateTicketStatus(ticketId, "Closed");
      await fetchTickets();
    } catch (err) {
      console.error("Error updating ticket status:", err);
      setError("Failed to update ticket status.");
    } finally {
      setUpdating(null);
    }
  };

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        🎫 Student Support Tickets
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      {loading ? (
        <Box textAlign="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Paper sx={{ p: 2 }}>
          {tickets.length === 0 ? (
            <Typography align="center">No tickets found.</Typography>
          ) : (
            <List>
              {tickets.map((ticket) => (
                <Box key={ticket._id}>
                  <ListItem
                    alignItems="flex-start"
                    sx={{ flexDirection: "column", mb: 2 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight="bold">
                        {ticket.issueType}
                      </Typography>
                      <Chip
                        label={ticket.status}
                        color={ticket.status === "Open" ? "warning" : "success"}
                        size="small"
                      />
                    </Box>

                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {ticket.description}
                    </Typography>

                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                      Submitted by:{" "}
                      {ticket.studentId?.userId?.firstName}{" "}
                      {ticket.studentId?.userId?.lastName}
                    </Typography>

                    {ticket.status === "Open" && (
                      <Button
                        variant="outlined"
                        size="small"
                        color="success"
                        sx={{ mt: 1 }}
                        onClick={() => handleStatusChange(ticket._id)}
                        disabled={updating === ticket._id}
                      >
                        {updating === ticket._id ? "Closing..." : "Mark as Closed"}
                      </Button>
                    )}
                  </ListItem>
                  <Divider />
                </Box>
              ))}
            </List>
          )}
        </Paper>
      )}
    </Box>
  );
};

export default AdminTickets;

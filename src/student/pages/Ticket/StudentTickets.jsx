import React, { useEffect, useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  List,
  ListItem,
  Chip,
  Alert,
} from '@mui/material';
import { useAuth } from '../../../context/AuthContext';
import {
  createStudentTicket,
  getMyTickets,
} from '../../../services/ticketApi'; // ✅ use service layer

const StudentTickets = () => {
  const { student } = useAuth();
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState([]);
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const res = await getMyTickets();
      setTickets(res.data.tickets);
    } catch (err) {
      console.error('Error fetching tickets:', err);
      setError('Unable to load your tickets. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleSubmit = async () => {
    setError('');
    if (!issueType.trim() || !description.trim()) {
      return setError('Please provide both issue type and description.');
    }

    setSubmitting(true);
    try {
      await createStudentTicket({ issueType, description });
      setIssueType('');
      setDescription('');
      await fetchTickets();
    } catch (err) {
      console.error('Failed to submit ticket:', err);
      setError('Failed to raise ticket. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 5 }}>
      <Paper sx={{ p: 3, mb: 4 }} elevation={3}>
        <Typography variant="h6" gutterBottom>
          📝 Raise a New Support Ticket
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Issue Type"
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
            fullWidth
            placeholder="e.g., Password Reset, Admit Card Issue"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
            fullWidth
            placeholder="Describe your issue clearly"
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={submitting}
            sx={{ alignSelf: 'flex-start' }}
          >
            {submitting ? <CircularProgress size={22} /> : 'Submit Ticket'}
          </Button>
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>
        📂 Your Support Tickets
      </Typography>

      {loading ? (
        <Box textAlign="center" mt={3}>
          <CircularProgress />
        </Box>
      ) : tickets.length === 0 ? (
        <Typography color="text.secondary">You haven't submitted any tickets yet.</Typography>
      ) : (
        <List>
          {tickets.map((t) => (
            <ListItem
              key={t._id}
              sx={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                mb: 2,
                border: '1px solid #ddd',
                borderRadius: 2,
                p: 2,
                backgroundColor: '#fafafa',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography fontWeight="bold">{t.issueType}</Typography>
                <Chip
                  label={t.status}
                  color={t.status === 'Open' ? 'warning' : 'success'}
                  size="small"
                />
              </Box>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {t.description}
              </Typography>
              <Typography variant="caption" sx={{ mt: 1, color: 'text.secondary' }}>
                Submitted on: {new Date(t.createdAt).toLocaleString()}
              </Typography>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default StudentTickets;

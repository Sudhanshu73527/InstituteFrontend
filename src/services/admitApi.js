// src/api/admitCard.api.js
import Axios from '../utils/Axios';

// Generate single admit card
export const generateSingleAdmitCard = (studentId) =>
  Axios.post('/admitCard/generate/single', { studentId }, { responseType: 'blob' });

// Generate bulk admit cards for a batch
export const generateBulkAdmitCards = (batch) =>
  Axios.post('/admitCard/generate/bulk', { batch }, { responseType: 'blob' });

// Get paginated list of generated admit cards
export const getAdmitCardList = (page, limit = 10) =>
  Axios.get('/admitCard/list', { params: { page, limit } });

// Download individual card by ID
export const downloadAdmitCardById = (cardId) =>
  Axios.get(`/admitCard/download/${cardId}`, { responseType: 'blob' });

export const getAdmitCardByStudentId = (studentId) =>
  Axios.get(`/admit-card/${studentId}`);

// services/admitApi.js
export const getAdmitCardByStudentName = async (name) => {
  return await fetch(`/api/admit-card/by-name?name=${encodeURIComponent(name)}`).then((res) => res.json());
};

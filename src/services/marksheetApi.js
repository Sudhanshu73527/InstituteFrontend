import Axios from '../utils/Axios';

export const uploadMarksheetExcel = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return Axios.post('/marksheet/upload-excel', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const upsertMarksheet = (marksheetData) => {
  // marksheetData example: { studentId: '...', marks: [...] }
  return Axios.post('/marksheet/upsert', marksheetData);
};

export const generateMarksheetPDF = (studentId) => {
  return Axios.get(`/marksheet/pdf/${studentId}`, {
    responseType: 'blob', // important for handling PDF file
  });
};

export const checkResultAvailability = (studentId) =>
  Axios.get(`/marksheet/check`, { params: { studentId } });
// services/subjectApi.js
import Axios from '../utils/Axios';


export const createSubject = (data) => Axios.post('/createSubject', data);

// export const getAllSubjects = () => Axios.get('/getAllSubjects');
export const getAllSubjects = async () => {
  const res = await Axios.get('/getAllSubjects');
  return res.data; // Make sure only the data object is returned
};

export const deleteSubject = (subjectId) => Axios.delete(`/deleteSubject/${subjectId}`);
export const updateSubject = (subjectId, data) =>
  Axios.put(`/updateSubject/${subjectId}`, data);
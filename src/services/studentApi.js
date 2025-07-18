// services/studentApi.js
import Axios from '../utils/Axios';

// 🔍 Get all students (optionally filter by year)
export const getAllStudents = (year = '') => {
  const query = year ? `?passingYear=${year}` : '';
  return Axios.get(`/getAllStudents${query}`);
};

// 📝 Register new student
export const registerStudent = (data) => Axios.post('/create-student', data);

// 📄 Get single student profile by ID
export const getStudentProfile = (studentId) => Axios.get(`/student/${studentId}`);

// ✏️ Update student (and optionally user) profile
export const updateStudentProfile = (studentId, data) =>
  Axios.put(`/student/${studentId}`, data);

// ❌ Delete student (and linked user)
export const deleteStudentProfile = (studentId) =>
  Axios.delete(`/student/${studentId}`);

export const searchStudents = (query) => {
  if (!query || query.trim().length < 2) {
    return Promise.reject(new Error('Search query must be at least 2 characters'));
  }
  return Axios.get(`/students/search?query=${encodeURIComponent(query)}`);
};


// export const fetchMarksheetList = (page = 1, pageSize = 10) => {
//   return Axios.get(`http://localhost:5001/api/marksheet/list?page=${page}&pageSize=${pageSize}`);
// };

export const fetchMarksheetList = (page = 1, pageSize = 10) => {
  return Axios.get(`https://institute-backend-8u6d.onrender.com/api/marksheet/list?page=${page}&pageSize=${pageSize}`);
};
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

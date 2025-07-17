import Axios from '../utils/Axios';

// 🔓 Public Exam Subject Routes

// Assign a subject to a course with exam details
export const assignSubjectToCourse = (data) =>
  Axios.post('/assignSubjectToCourse', data);


export const getSubjectsForCourse = async (courseId) => {
  const res = await   Axios.get(`/getSubjectsForCourse/${courseId}`);

  return res.data; // Make sure only the data object is returned
};

export const updateExamSubject = async (id, data) => {
  const res = await Axios.put(`/updateExamSubject/${id}`, data);
  return res.data;
};

export const deleteExamSubject = async (id) => {
  const res = await Axios.delete(`/deleteExamSubject/${id}`);
  return res.data;
};

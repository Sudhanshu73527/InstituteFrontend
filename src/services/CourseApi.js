import Axios from '../utils/Axios';

// 🔓 Public Course Routes
export const getAllCourses = async () => {
  const res = await Axios.get('/getAllCourses');
  return res.data; // Make sure only the data object is returned
};

export const getCourseById = (courseId) =>
  Axios.get(`/getCourseById/${courseId}`);

// 🔐 Protected Course Routes (typically require token)
export const createCourse = (data) =>
  Axios.post('/createCourse', data);

export const updateCourse = (courseId, data) =>
  Axios.put(`/updateCourse/${courseId}`, data);

export const deleteCourse = (courseId) =>
  Axios.delete(`/deleteCourse/${courseId}`);

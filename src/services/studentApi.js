import Axios from '../utils/Axios'; // Axios instance with baseURL, interceptors, etc.

export const registerStudent = (data) => Axios.post('/employee/create-student', data);
export const getStudentProfile = (studentId) => Axios.get(`/employee/student/${studentId}`);

import Axios from '../utils/Axios';

// 🔓 Public Routes
export const register = (data) => Axios.post('/user/register', data);
export const login = (data) => Axios.post('/user/login', data);
export const logout = async () => {
  await Axios.post("/user/logout"); // make sure baseURL is set to backend in Axios
  localStorage.removeItem("authToken"); // optional: also remove token from storage
  delete Axios.defaults.headers.common["Authorization"];
};
export const forgotPassword = (data) => Axios.post('/user/forgotPassword', data);
export const verifyOtp = (data) => Axios.post('/user/verifyOtp', data);
export const resetPassword = (data) => Axios.post('/user/resetPassword', data);
export const googleLogin = (data) => Axios.post('/user/googleLogin', data);

export const getProfile = () => Axios.get('/user/profile');

export const updateProfile = (data) => Axios.patch('/user/updateProfile', data);
export const uploadAvatar = async (formData) => {
  const response = await Axios.post('/user/uploadAvatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
export const getMe = () => Axios.get('/me');
export const refreshToken = () => Axios.post('/auth/refresh-token');

// ✅ New: Address management routes
export const getAddress = () => Axios.get('/user/getaddresses');
export const addAddress = (data) => Axios.post('/user/address', data);
export const updateAddress = (id, data) => Axios.patch(`/user/address/${id}`, data);
export const deleteAddress = (id) => Axios.delete(`/user/address/${id}`);
export const setDefaultAddress = (id) =>
  Axios.patch(`/user/address/${id}/set-default`);
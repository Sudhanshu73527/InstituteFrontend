import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerStudent } from '../../../services/studentApi';
import { getAllCourses } from '../../../services/CourseApi';

const StudentRegistrationForm = () => {
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoadingCourses(true);
      try {
        const res = await getAllCourses();
        const courseList = res?.data?.courses || res?.courses || [];
        setCourses(courseList);
      } catch {
        alert('Failed to load courses');
      } finally {
        setLoadingCourses(false);
      }
    };
    fetchCourses();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      aadharNumber: '',
      rollNumber: '',
      institutionName: '',
      institutionAddress: '',
      passingYear: '',
      fatherName: '',
      educationDetails: [{ degree: '', major: '', grade: '' }],
      phoneNumber: '',
      address: '',
      courseId: '',
      dob: null, // Date object
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().min(6, 'Min 6 characters').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      aadharNumber: Yup.string().required('Required'),
      rollNumber: Yup.string().required('Required'),
      institutionName: Yup.string().required('Required'),
      institutionAddress: Yup.string().required('Required'),
      passingYear: Yup.string().required('Required'),
      fatherName: Yup.string().required('Required'),
      educationDetails: Yup.array().of(
        Yup.object().shape({
          degree: Yup.string().required('Required'),
          major: Yup.string().required('Required'),
          grade: Yup.string().required('Required'),
        })
      ),
      phoneNumber: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      courseId: Yup.string().required('Required'),
      dob: Yup.date()
        .nullable()
        .required('Date of Birth is required')
        .max(new Date(), 'Date of Birth cannot be in the future'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const submitValues = {
        ...values,
        dob: values.dob ? values.dob.toISOString().split('T')[0] : '',
      };
      try {
        await registerStudent(submitValues);
        alert('Student account created successfully');
        resetForm();
      } catch (error) {
        console.error(error);
        alert(error.response?.data?.message || 'Failed to create account');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Student Registration</h2>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: 'username', label: 'Username', type: 'text' },
          { name: 'password', label: 'Password', type: 'password' },
          { name: 'email', label: 'Email', type: 'email' },
          { name: 'firstName', label: 'First Name', type: 'text' },
          { name: 'lastName', label: 'Last Name', type: 'text' },
          { name: 'aadharNumber', label: 'Aadhar Number', type: 'text' },
          { name: 'rollNumber', label: 'Roll Number', type: 'text' },
          { name: 'institutionName', label: 'Institution Name', type: 'text' },
          { name: 'institutionAddress', label: 'Institution Address', type: 'text' },
          { name: 'passingYear', label: 'Passing Year', type: 'text' },
          { name: 'fatherName', label: 'Father Name', type: 'text' },
          { name: 'phoneNumber', label: 'Phone Number', type: 'text' },
          { name: 'address', label: 'Address', type: 'text' },
        ].map(({ name, label, type }) => (
          <div key={name} className="flex flex-col">
            <label htmlFor={name} className="mb-1 font-semibold text-gray-700">
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[name]}
              className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched[name] && formik.errors[name]
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {formik.touched[name] && formik.errors[name] && (
              <p className="text-red-500 mt-1 text-sm">{formik.errors[name]}</p>
            )}
          </div>
        ))}

        {/* DOB Field with DatePicker */}
        <div className="flex flex-col">
          <label htmlFor="dob" className="mb-1 font-semibold text-gray-700">
            Date of Birth
          </label>
          <DatePicker
            id="dob"
            name="dob"
            selected={formik.values.dob}
            onChange={(date) => formik.setFieldValue('dob', date)}
            onBlur={formik.handleBlur}
            maxDate={new Date()}
            dateFormat="yyyy-MM-dd"
            className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formik.touched.dob && formik.errors.dob ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholderText="Select date"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
          />
          {formik.touched.dob && formik.errors.dob && (
            <p className="text-red-500 mt-1 text-sm">{formik.errors.dob}</p>
          )}
        </div>

        {/* Education Details */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-2 font-semibold text-gray-700">Education Details</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['degree', 'major', 'grade'].map((field) => (
              <div key={field} className="flex flex-col">
                <input
                  type="text"
                  name={`educationDetails[0].${field}`}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.educationDetails[0][field]}
                  className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[0] &&
                    formik.touched.educationDetails[0][field] &&
                    formik.errors.educationDetails &&
                    formik.errors.educationDetails[0]?.[field]
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />
                {formik.touched.educationDetails &&
                  formik.touched.educationDetails[0] &&
                  formik.touched.educationDetails[0][field] &&
                  formik.errors.educationDetails &&
                  formik.errors.educationDetails[0]?.[field] && (
                    <p className="text-red-500 mt-1 text-sm">
                      {formik.errors.educationDetails[0][field]}
                    </p>
                  )}
              </div>
            ))}
          </div>
        </div>

        {/* Course Select Dropdown */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="courseId" className="block mb-2 font-semibold text-gray-700">
            Select Course
          </label>
          <select
            id="courseId"
            name="courseId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.courseId}
            disabled={loadingCourses}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formik.touched.courseId && formik.errors.courseId ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">-- Select Course --</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name} ({course.code})
              </option>
            ))}
          </select>
          {formik.touched.courseId && formik.errors.courseId && (
            <p className="text-red-500 mt-1 text-sm">{formik.errors.courseId}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 mt-6">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            {formik.isSubmitting ? 'Creating Account...' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;

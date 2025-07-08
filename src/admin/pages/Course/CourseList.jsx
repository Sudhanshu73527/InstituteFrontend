import React, { useEffect, useState } from 'react';
import { getAllCourses, deleteCourse } from '../../../services/CourseApi';
import CreateCourseForm from './CreateCourseForm';
import UpdateCourseModal from './UpdateCourseModal';  // Import the modal here
import { toast } from 'react-toastify';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await getAllCourses();
        const courseList = res?.data?.courses || res?.courses || [];
        setCourses(courseList);
      } catch (e) {
        toast.error('Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [refresh]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      await deleteCourse(id);
      toast.success('Course deleted successfully');
      setRefresh((r) => r + 1);
    } catch {
      toast.error('Failed to delete course');
    }
  };

  // Add course - show the inline CreateCourseForm
  const handleAdd = () => {
    setEditingCourse(null);
    setShowForm(true);
  };

  // Edit course - open the modal
  const handleEdit = (course) => {
    setEditingCourse(course);
    setShowForm(false); // close inline form if open
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingCourse(null);
    setRefresh((r) => r + 1);
  };

  const handleModalClose = () => {
    setEditingCourse(null);
  };

  const handleUpdateSuccess = () => {
    setEditingCourse(null);
    setRefresh((r) => r + 1);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📚 Course Management</h1>
        <button
          onClick={handleAdd}
          className="mt-4 sm:mt-0 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          + Add Course
        </button>
      </div>

      {/* Inline add form */}
      {showForm && (
        <div className="bg-white p-6 rounded-md shadow-md mb-8 animate-fade-in">
          <CreateCourseForm
            initialData={editingCourse}
            onSuccess={handleFormSuccess}
          />
        </div>
      )}

      {/* Course list */}
      {loading ? (
        <p className="text-center text-gray-500">Loading courses...</p>
      ) : courses.length === 0 ? (
        <p className="text-center text-gray-500">No courses available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white p-5 rounded-md shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-gray-800">{course.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{course.code}</p>
              <p className="text-sm text-gray-600 mt-1">
                {course.duration} year{course.duration > 1 ? 's' : ''}
              </p>
              <p className="text-sm text-gray-600 mt-1">{course.department}</p>
              {course.description && (
                <p className="text-sm text-gray-500 mt-2">{course.description}</p>
              )}

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(course)}
                  className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update modal */}
      {editingCourse && (
        <UpdateCourseModal
          course={editingCourse}
          onClose={handleModalClose}
          onUpdated={handleUpdateSuccess}
        />
      )}
    </div>
  );
};

export default CourseList;

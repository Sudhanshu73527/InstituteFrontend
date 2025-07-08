import React, { useState, useEffect } from 'react';
import { updateCourse } from '../../../services/CourseApi';
import { toast } from 'react-toastify';

const UpdateCourseModal = ({ course, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    duration: '',
    department: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (course) {
      setFormData({
        name: course.name || '',
        code: course.code || '',
        duration: course.duration || '',
        department: course.department || '',
        description: course.description || '',
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateCourse(course._id, formData);
      toast.success('Course updated successfully!');
      onUpdated();
      onClose();
    } catch (error) {
      toast.error('Failed to update course');
    } finally {
      setLoading(false);
    }
  };

  if (!course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-md p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
          aria-label="Close modal"
          disabled={loading}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Update Course</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Code</label>
            <input
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Duration (years)</label>
            <input
              name="duration"
              type="number"
              min="1"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Department</label>
            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded px-3 py-2"
              disabled={loading}
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update Course'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourseModal;

import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createCourse } from '../../../services/CourseApi';

const departments = ['Science', 'Arts', 'Commerce', 'Engineering', 'Management'];

const CreateCourseForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await createCourse({
        ...data,
        duration: Number(data.duration), // Convert string to number
      });
      toast.success(res.message || 'Course created successfully');
      reset();
    } catch (err) {
      const msg = err?.response?.data?.message || 'Something went wrong';
      toast.error(msg);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-xl space-y-6 animate-fade-in"
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center">Add New Course</h2>

      {/* Course Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Course Name *</label>
        <input
          type="text"
          placeholder="e.g. B.Sc Computer Science"
          {...register('name', { required: 'Course name is required' })}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      {/* Course Code */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Course Code *</label>
        <input
          type="text"
          placeholder="e.g. BSC-CS"
          {...register('code', { required: 'Course code is required' })}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.code && <p className="text-red-500 text-xs mt-1">{errors.code.message}</p>}
      </div>

      {/* Duration */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Duration (Years) *</label>
        <input
          type="number"
          min="1"
          placeholder="e.g. 3"
          {...register('duration', {
            required: 'Duration is required',
            min: { value: 1, message: 'Minimum 1 year required' }
          })}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration.message}</p>}
      </div>

      {/* Department */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Department *</label>
        <select
          {...register('department', { required: 'Department is required' })}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
        {errors.department && (
          <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          rows={4}
          placeholder="e.g. Bachelor of Science in Computer Science"
          {...register('description')}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition disabled:opacity-50"
        >
          {isSubmitting ? 'Creating...' : 'Create Course'}
        </button>
      </div>
    </form>
  );
};

export default CreateCourseForm;

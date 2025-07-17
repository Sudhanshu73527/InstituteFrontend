import React, { useState } from 'react';
import { updateExamSubject, deleteExamSubject } from '../../../services/examApi';
import { PencilIcon, TrashIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'; // Optional: if using Heroicons

const AssignedSubjectRow = ({ assignedSubject, onUpdated, onDeleted }) => {
  const { _id, subjectId, examDate, startTime, endTime } = assignedSubject;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    examDate: examDate ? new Date(examDate).toISOString().split('T')[0] : '',
    startTime: startTime || '',
    endTime: endTime || '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async () => {
    setError(null);
    if (!formData.examDate || !formData.startTime || !formData.endTime) {
      setError('All fields are required');
      return;
    }
    if (formData.startTime >= formData.endTime) {
      setError('Start time must be before end time');
      return;
    }
    setLoading(true);
    try {
      await updateExamSubject(_id, formData);
      setIsEditing(false);
      onUpdated(_id, formData);
    } catch (err) {
      setError(err?.response?.data?.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this assigned subject?')) return;
    setLoading(true);
    try {
      await deleteExamSubject(_id);
      onDeleted(_id);
    } catch (err) {
      setError(err?.response?.data?.message || 'Delete failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <tr className="hover:bg-gray-50">
        <td className="p-3 border-b border-gray-300">{subjectId?.name || 'N/A'}</td>
        <td className="p-3 border-b border-gray-300">{subjectId?.code || '-'}</td>
        <td className="p-3 border-b border-gray-300">{subjectId?.type || '-'}</td>

        {isEditing ? (
          <>
            <td className="p-3 border-b border-gray-300">
              <input
                type="date"
                name="examDate"
                value={formData.examDate}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-1 w-full"
              />
            </td>
            <td className="p-3 border-b border-gray-300">
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-1 w-full"
              />
            </td>
            <td className="p-3 border-b border-gray-300">
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-1 w-full"
              />
            </td>
            <td className="p-3 border-b border-gray-300 space-x-2 flex items-center">
              <button
                onClick={handleUpdate}
                disabled={loading}
                className="text-green-600 hover:text-green-700 transition disabled:opacity-50"
                aria-label={`Save changes for ${subjectId?.name}`}
                title="Save"
              >
                <CheckIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setError(null);
                  setFormData({
                    examDate: examDate ? new Date(examDate).toISOString().split('T')[0] : '',
                    startTime: startTime || '',
                    endTime: endTime || '',
                  });
                }}
                disabled={loading}
                className="text-gray-500 hover:text-gray-700 transition"
                aria-label={`Cancel editing for ${subjectId?.name}`}
                title="Cancel"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </td>
          </>
        ) : (
          <>
            <td className="p-3 border-b border-gray-300">{new Date(examDate).toLocaleDateString()}</td>
            <td className="p-3 border-b border-gray-300">{startTime}</td>
            <td className="p-3 border-b border-gray-300">{endTime}</td>
            <td className="p-3 border-b border-gray-300 space-x-2 flex items-center">
              <button
                onClick={() => {
                  setIsEditing(true);
                  setError(null);
                }}
                className="text-yellow-500 hover:text-yellow-600 transition"
                aria-label={`Edit ${subjectId?.name}`}
                title="Edit"
              >
                <PencilIcon className="h-5 w-5" />
              </button>
              <button
                onClick={handleDelete}
                disabled={loading}
                className="text-red-600 hover:text-red-700 transition disabled:opacity-50"
                aria-label={`Delete ${subjectId?.name}`}
                title="Delete"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </td>
          </>
        )}
      </tr>
      {error && (
        <tr>
          <td colSpan={7} className="text-red-600 p-2 bg-red-50 text-center">
            {error}
          </td>
        </tr>
      )}
    </>
  );
};

export default AssignedSubjectRow;

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  uploadMarksheetExcel,
  upsertMarksheet,
  generateMarksheetPDF,
} from '../../../services/marksheetApi';
import ManualMarksheetForm from './ManualMarksheetForm';
import { fetchMarksheetList } from '../../../services/studentApi';
const PAGE_SIZE = 10;

const MarksheetDashboard = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [studentsMarksheets, setStudentsMarksheets] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loadingList, setLoadingList] = useState(false);
  const [showManualForm, setShowManualForm] = useState(false);


  const [selectedStudent, setSelectedStudent] = useState(null);
  const [marks, setMarks] = useState([]);
  const [saving, setSaving] = useState(false);

  const [previewMode, setPreviewMode] = useState(false);

  const fetchMarksheets = async () => {
    setLoadingList(true);
    try {
      const res = await fetchMarksheetList(page, PAGE_SIZE); // 👈 using API function
      const data = res.data;

      setStudentsMarksheets(data.marksheets || []);
      setTotal(data.total || 0);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error fetching marksheets');
    }
    setLoadingList(false);
  };

  useEffect(() => {
    fetchMarksheets();
  }, [page]);

  // Handle Excel file selection
  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Upload Excel file
  const handleUploadExcel = async () => {
    if (!file) {
      toast.error('Please select an Excel file to upload');
      return;
    }
    setUploading(true);
    try {
      await uploadMarksheetExcel(file);
      toast.success('Excel uploaded successfully');
      setFile(null);
      fetchMarksheets();
    } catch (error) {
      toast.error('Failed to upload Excel');
    }
    setUploading(false);
  };

  // Select student to edit marks
  const handleSelectStudent = (marksheet) => {
    setSelectedStudent(marksheet);
    setMarks(marksheet.subjects || []);
  };


  // Change marks input for a subject
  const handleMarkChange = (index, value) => {
    setMarks((prev) => {
      const updated = [...prev];
      updated[index].marksObtained = Number(value);
      return updated;
    });
  };

  // Save updated marksheet for selected student
  const handleSaveMarksheet = async () => {
    if (!selectedStudent) {
      toast.error('No student selected');
      return;
    }
    setSaving(true);
    try {
      const payload = {
        studentId: selectedStudent.studentId,
        marks: marks.map(({ subjectId, marksObtained }) => ({
          subjectId,
          marksObtained: Number(marksObtained),
        })),
      };
      await upsertMarksheet(payload);
      toast.success('Marksheet updated successfully');
      fetchMarksheets();
      setSelectedStudent(null);
      setMarks([]);
    } catch (error) {
      toast.error('Failed to save marksheet');
    }
    setSaving(false);
  };


  // Download or preview marksheet PDF
  const handleDownloadPDF = async (studentId) => {
    try {
      const res = await generateMarksheetPDF(studentId);
      const blob = new Blob([res.data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      if (previewMode) {
        window.open(url, '_blank');
      } else {
        const link = document.createElement('a');
        link.href = url;
        link.download = `marksheet_${studentId}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      toast.error('Failed to generate PDF');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow space-y-8">
      <h1 className="text-3xl font-bold mb-6">Marksheet Dashboard</h1>
      {/* Manual Marksheet Entry Section */}
      <section className="space-y-4">
        <button
          onClick={() => setShowManualForm(true)}
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Add Marksheet Manually
        </button>
      </section>
      {/* Upload Excel Section */}
      <section className="space-y-2">
        <label className="block font-semibold">Upload Marksheet Excel</label>
        <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} />
        <button
          onClick={handleUploadExcel}
          disabled={uploading || !file}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload Excel'}
        </button>
      </section>
      {/* Manual Marksheet Form */}
      {showManualForm && (
        <ManualMarksheetForm
          onCancel={() => setShowManualForm(false)}
          onSave={() => {
            setShowManualForm(false);
            fetchMarksheets(); // refresh list
          }}
        />
      )}

      {/* Preview Mode Toggle */}
      <section className="flex items-center space-x-2">
        <input
          id="previewToggle"
          type="checkbox"
          checked={previewMode}
          onChange={() => setPreviewMode(!previewMode)}
          className="cursor-pointer"
        />
        <label htmlFor="previewToggle" className="select-none cursor-pointer">
          Preview PDF instead of Download
        </label>
      </section>

      {/* Marksheets Table */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Uploaded Marksheet Records</h2>
        {loadingList ? (
          <p>Loading marksheets...</p>
        ) : (
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                {['Roll', 'Student Name', 'Batch', 'Course', 'Updated At', 'Actions'].map((header) => (
                  <th key={header} className="border p-2 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {studentsMarksheets.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-4 text-center">No marksheets found</td>
                </tr>
              ) : (
                studentsMarksheets.map((m) => (
                  <tr key={m._id} className="hover:bg-gray-50">
                    <td className="border p-2">{m.studentId?.rollNumber || '-'}</td>
                    <td className="border p-2">
                      {m.studentId?.userId?.firstName || ''} {m.studentId?.userId?.lastName || ''}
                    </td>
                    <td className="border p-2">{m.studentId?.passingYear || '-'}</td>
                    <td className="border p-2">{m.studentId?.courseId?.name || '-'}</td>
                    <td className="border p-2">
                      {m.studentId?.updatedAt
                        ? new Date(m.studentId.updatedAt).toLocaleString('en-US', {
                          dateStyle: 'medium',
                          timeStyle: 'short',
                        })
                        : '-'}
                    </td>





                    <td className="border p-2 space-x-2">
                      <button
                        onClick={() => handleSelectStudent(m)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDownloadPDF(m.studentId?._id)}
                        className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                      >
                        {previewMode ? 'Preview PDF' : 'Download PDF'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        )}

        {/* Pagination */}
        {total > PAGE_SIZE && (
          <div className="flex justify-between items-center mt-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="border px-3 py-1 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {page} of {Math.ceil(total / PAGE_SIZE)}
            </span>
            <button
              disabled={page * PAGE_SIZE >= total}
              onClick={() => setPage((p) => Math.min(Math.ceil(total / PAGE_SIZE), p + 1))}
              className="border px-3 py-1 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </section>

      {/* Manual Marksheet Update Form */}
      {selectedStudent && (
        <section className="mt-10 p-4 border rounded shadow bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            Edit Marksheet for {selectedStudent.studentName}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2 text-left">Subject</th>
                  <th className="border p-2 text-left">Marks Obtained</th>
                </tr>
              </thead>
              <tbody>
                {marks.map((m, i) => (
                  <tr key={m.subjectId?._id || i}>
                    <td className="border p-2">{m.subjectId?.name || 'Subject'}</td>
                    <td className="border p-2">
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={m.marksObtained || ''}
                        onChange={(e) => handleMarkChange(i, e.target.value)}
                        className="w-20 border rounded px-2 py-1"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
          <div className="mt-4 flex space-x-3">
            <button
              onClick={handleSaveMarksheet}
              disabled={saving}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Marksheet'}
            </button>
            <button
              onClick={() => {
                setSelectedStudent(null);
                setMarks([]);
              }}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default MarksheetDashboard;

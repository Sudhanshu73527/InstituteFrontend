import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  generateSingleAdmitCard,
  generateBulkAdmitCards,
  getAdmitCardList,
  downloadAdmitCardById
} from '../../../services/admitApi';
import { getAllStudents } from '../../../services/studentApi'; // import your existing function

const PAGE_SIZE = 10;

const AdmitCardDashboard = () => {
  const [studentId, setStudentId] = useState('');
  const [batch, setBatch] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [loadingSingle, setLoadingSingle] = useState(false);
  const [loadingBulk, setLoadingBulk] = useState(false);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchGeneratedCards();
  }, [page]);

  useEffect(() => {
    fetchStudents(batch); // Fetch students filtered by batch
  }, [batch]);

  const fetchStudents = async (passingYear = '') => {
    try {
      const res = await getAllStudents(passingYear);
      setStudents(res.data.students || []);
    } catch (err) {
      toast.error('Failed to fetch students');
    }
  };

  const fetchGeneratedCards = async () => {
    try {
      const { cards, total } = (await getAdmitCardList(page, PAGE_SIZE)).data;
      setCards(cards);
      setTotal(total);
    } catch (err) {
      toast.error('Could not fetch admit cards');
    }
  };

  const handleBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    if (previewMode) {
      window.open(url);
    } else {
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
    }
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const handleGenerateSingle = async () => {
    if (!studentId.trim()) return toast.error('Please select a Student');
    setLoadingSingle(true);
    try {
      const res = await generateSingleAdmitCard(studentId);
      handleBlob(res.data, `admit_${studentId}.pdf`);
      toast.success('Admit card generated');
      fetchGeneratedCards();
    } catch (err) {
      toast.error('Failed to generate admit card');
    } finally {
      setLoadingSingle(false);
    }
  };

  const handleGenerateBulk = async () => {
    if (!batch) return toast.error('Please enter a batch year');
    setLoadingBulk(true);
    try {
      const res = await generateBulkAdmitCards(batch);
      handleBlob(res.data, `admit_cards_batch_${batch}.pdf`);
      toast.success('Bulk admit cards generated');
      fetchGeneratedCards();
    } catch (err) {
      toast.error('Failed to generate bulk admit cards');
    } finally {
      setLoadingBulk(false);
    }
  };

  const handleDownload = async (card) => {
    try {
      const res = await downloadAdmitCardById(card._id);
      handleBlob(res.data, `admit_${card.rollNumber}.pdf`);
    } catch {
      toast.error('Failed to download admit card');
    }
  };

  return (
    <div className="p-6 space-y-8 max-w-5xl mx-auto bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold text-gray-800">Admit Card Dashboard</h1>

      {/* Generation Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Batch Year (to filter students)</label>
          <input
            type="text"
            className="border rounded px-3 py-2 w-full"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            placeholder="e.g., 2024"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Select Student</label>
          <select
            className="border rounded px-3 py-2 w-full"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          >
            <option value="">-- Select Student --</option>
            {students.map((s) => (
              <option key={s._id} value={s._id}>
                {s.userId?.firstName} {s.userId?.lastName} ({s.rollNumber})
              </option>
            ))}
          </select>
          <button
            onClick={handleGenerateSingle}
            disabled={loadingSingle}
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loadingSingle ? 'Generating...' : previewMode ? 'Preview Single' : 'Download Single'}
          </button>
        </div>
      </div>

      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="previewMode"
          checked={previewMode}
          onChange={() => setPreviewMode(!previewMode)}
          className="mr-2"
        />
        <label htmlFor="previewMode" className="text-sm">Preview PDF instead of Download</label>
      </div>

      <div className="mt-6 mb-4">
        <button
          onClick={handleGenerateBulk}
          disabled={loadingBulk}
          className="w-full md:w-auto bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:opacity-50"
        >
          {loadingBulk ? 'Generating Bulk...' : previewMode ? 'Preview Bulk' : 'Download Bulk'}
        </button>
      </div>

      {/* Generated Cards Table */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Generated Admit Cards</h2>
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              {['Roll', 'Student Name', 'Batch', 'Course', 'Generated At', 'Action'].map(h => (
                <th key={h} className="p-2 border text-left">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cards.map(card => (
              <tr key={card._id} className="hover:bg-gray-50">
                <td className="p-2 border">{card.rollNumber}</td>
                <td className="p-2 border">{card.studentName}</td>
                <td className="p-2 border">{card.batch}</td>
                <td className="p-2 border">{card.courseName}</td>
                <td className="p-2 border">{new Date(card.updatedAt).toLocaleString()}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDownload(card)}
                    className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                  >
                    {previewMode ? 'Preview' : 'Download'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {total > PAGE_SIZE && (
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPage(prev => Math.max(1, prev - 1))}
              disabled={page === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>Page {page} of {Math.ceil(total / PAGE_SIZE)}</span>
            <button
              onClick={() => setPage(prev => Math.min(Math.ceil(total / PAGE_SIZE), prev + 1))}
              disabled={page * PAGE_SIZE >= total}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmitCardDashboard;

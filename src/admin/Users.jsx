import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {
  FaSyncAlt,
  FaFileExcel,
  FaFilePdf,
  FaUserPlus,
  FaTrash,
} from 'react-icons/fa';

const Users = () => {
  const [members, setMembers] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchMembers = async () => {
    try {
      const res = await axios.get('https://backend-tbh.onrender.com/join');
      setMembers(res.data);
    } catch (err) {
      console.error('Error fetching members:', err);
    }
  };

  const requestDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`https://backend-tbh.onrender.com/join/${deleteId}`);
      setMembers(members.filter((member) => member.id !== deleteId));
    } catch (err) {
      console.error('Error deleting member:', err);
    } finally {
      setShowConfirm(false);
      setDeleteId(null);
    }
  };

  const exportToExcel = () => {
    const wsData = members.map(({ username, email }) => ({
      Username: username,
      Email: email,
    }));
    const worksheet = XLSX.utils.json_to_sheet(wsData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Members');
    XLSX.writeFile(workbook, 'TBH_Recruitments_Y24.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['Username', 'Email'];
    const tableRows = members.map((member) => [member.username, member.email]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      styles: {
        fillColor: [255, 255, 255],      // Black background for body
    textColor: [0, 0, 0],      // Black text (invisible)
    lineColor: [0, 0, 0],      // Black borders
    halign: 'center',
  },
  headStyles: {
    fillColor: [255, 255, 255],      // Black header background
    textColor: [0, 0, 0],      // Black text (invisible)
    lineColor: [0, 0, 0],      // Black header border
    fontStyle: 'bold',
      },
    });

    doc.save('TBH_Recruitments_Y24.pdf');
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-14 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col mt-30 sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-3xl mt-2 mb-5 font-bold border-b border-white pb-2">
            Recruitments Responses  Y-24
          </h2>
          <div className="mt-4 sm:mt-0 mt-40 flex flex-wrap gap-3">
            <button onClick={fetchMembers} className="action-btn">
              <FaSyncAlt className="mr-2" /> Refresh
            </button>
            <button onClick={exportToExcel} className="action-btn">
              <FaFileExcel className="mr-2 text-green-400" /> Export Excel
            </button>
            <button onClick={exportToPDF} className="action-btn">
              <FaFilePdf className="mr-2 text-red-400" /> Export PDF
            </button>
            <button className="action-btn opacity-50 cursor-not-allowed">
              <FaUserPlus className="mr-2 text-violet-400" /> Add Member
            </button>
          </div>
        </div>

        {/* Table */}
        {members.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">No members found.</p>
        ) : (
          <div className="overflow-x-auto border border-white">
            <table className="min-w-full text-sm table-auto border-collapse">
              <thead>
                <tr className="bg-white text-black font-semibold">
                  <th className="px-4 py-3 border">Username</th>
                  <th className="px-4 py-3 border">First Name</th>
                  <th className="px-4 py-3 border">Last Name</th>
                  <th className="px-4 py-3 border">Email</th>
                  <th className="px-4 py-3 border">About</th>
                  <th className="px-4 py-3 border">Interest Area</th>
                  <th className="px-4 py-3 border">Motivation</th>
                  <th className="px-4 py-3 border">Experience</th>
                  <th className="px-4 py-3 border">Profile</th>
                  <th className="px-4 py-3 border">Cover</th>
                  <th className="px-4 py-3 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr
                    key={member.id}
                    className="border-t border-white hover:bg-white/10 transition"
                  >
                    <td className="px-4 py-2 border">{member.username}</td>
                    <td className="px-4 py-2 border">{member.first_name}</td>
                    <td className="px-4 py-2 border">{member.last_name}</td>
                    <td className="px-4 py-2 border">{member.email}</td>
                    <td className="px-4 py-2 border">{member.about}</td>
                    <td className="px-4 py-2 border">{member.interest_area}</td>
                    <td className="px-4 py-2 border">{member.motivation}</td>
                    <td className="px-4 py-2 border">{member.experience}</td>
                    <td className="px-4 py-2 border">
                      {member.profile_photo && (
                        <img
                          src={`https://backend-tbh.onrender.com/uploads/${member.profile_photo}`}
                          alt="profile"
                          className="w-10 h-10 rounded-full object-cover border border-white"
                        />
                      )}
                    </td>
                    <td className="px-4 py-2 border">
                      {member.cover_photo && (
                        <img
                          src={`https://backend-tbh.onrender.com/uploads/${member.cover_photo}`}
                          alt="cover"
                          className="w-16 h-10 object-cover border border-white"
                        />
                      )}
                    </td>
                    <td className="px-4 py-2 border">
                      <button
                        onClick={() => requestDelete(member.id)}
                        className="flex items-center gap-1 px-3 py-1 border border-white text-white hover:bg-white hover:text-black transition rounded"
                      >
                        <FaTrash className="text-sm" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold mb-4">
              Confirm Deletion
            </h3>
            <p>Are you sure you want to delete this member?</p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .action-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.6rem 1rem;
          font-size: 1rem;
          border: 1px solid white;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }
        .action-btn:hover {
          background-color: white;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Users;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FaSyncAlt, FaFileExcel, FaFilePdf, FaUserPlus, FaTrash } from 'react-icons/fa';

const Users = () => {
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    try {
      const res = await axios.get('https://backend-tbh.onrender.com/join');
      setMembers(res.data);
    } catch (err) {
      console.error('Error fetching members:', err);
    }
  };

  const deleteMember = async (id) => {
    if (!window.confirm('Are you sure you want to delete this member?')) return;
    try {
      await axios.delete(`https://backend-tbh.onrender.com/join/${id}`);
      setMembers(members.filter((member) => member.id !== id));
    } catch (err) {
      console.error('Error deleting member:', err);
    }
  };

  const exportToExcel = () => {
    const wsData = members.map(({ username, email }) => ({ Username: username, Email: email }));
    const worksheet = XLSX.utils.json_to_sheet(wsData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Members');
    XLSX.writeFile(workbook, 'TBH_Recruitments y24.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['Username', 'Email'];
    const tableRows = members.map((member) => [member.username, member.email]);
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      styles: { fillColor: [30, 30, 30], textColor: 255 },
      headStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] },
    });
    doc.save('TBH_Recruitments y24.pdf');
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-14 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mt-25 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-3xl font-bold border-b border-white pb-2">Recruitments Responses - y25,26</h2>
          <div className="mt-4 sm:mt-0 flex flex-wrap gap-3 ">
            <button onClick={fetchMembers} className="action-btn">
              <FaSyncAlt className="mr-2" /> Refresh
            </button>
            <button onClick={exportToExcel} className="action-btn">
              <FaFileExcel className="mr-2 text-green-400" /> Export Excel
            </button>
            <button onClick={exportToPDF} className="action-btn">
              <FaFilePdf className="mr-2 text-red-400" /> Export PDF
            </button>
            <button onClick={() => alert('Add Member feature coming soon')} className="action-btn">
              <FaUserPlus className="mr-2 text-violet-400" /> Add Member
            </button>
          </div>
        </div>

        {/* Table */}
        {members.length === 0 ? (
          <p className="text-center text-gray-400 mt-70">No members found.</p>
        ) : (
          <div className="overflow-x-auto border border-white ">
            <table className="min-w-full text-sm table-auto border-collapse">
              <thead>
                <tr className="bg-white text-black font-semibold ">
                  <th className="px-4 py-3 text-left border-r border-gray-300">Username</th>
                  <th className="px-4 py-3 text-left border-r border-gray-300">Email</th>
                  <th className="px-4 py-3 text-left border-r border-gray-300">Profile</th>
                  <th className="px-4 py-3 text-left border-r border-gray-300">Cover</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border-t border-white hover:bg-white/10 transition">
                    <td className="px-4 py-3 border-r border-white">{member.username}</td>
                    <td className="px-4 py-3 border-r border-white">{member.email}</td>
                    <td className="px-4 py-3 border-r border-white">
                      {member.profile_photo && (
                        <img
                          src={`https://backend-tbh.onrender.com/uploads/${member.profile_photo}`}
                          alt="profile"
                          className="w-10 h-10 rounded-full object-cover border border-white"
                        />
                      )}
                    </td>
                    <td className="px-4 py-3 border-r border-white">
                      {member.cover_photo && (
                        <img
                          src={`https://backend-tbh.onrender.com/uploads/${member.cover_photo}`}
                          alt="cover"
                          className="w-16 h-10 object-cover border border-white"
                        />
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => deleteMember(member.id)}
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

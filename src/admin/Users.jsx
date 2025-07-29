import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    try {
      const res = await axios.get('https://backend-tbh.onrender.com/join'); // Change to your backend URL
      setMembers(res.data);
    } catch (err) {
      console.error('Error fetching members:', err);
    }
  };

  const deleteMember = async (id) => {
    if (!window.confirm('Are you sure you want to delete this member?')) return;
    try {
      await axios.delete(`https://backend-tbh.onrender.com/join/${id}`);
      setMembers(members.filter(member => member.id !== id));
    } catch (err) {
      console.error('Error deleting member:', err);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Members List</h2>
      {members.length === 0 ? (
        <p>No members found.</p>
      ) : (
        <table className="min-w-full table-auto border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Profile</th>
              <th className="border px-4 py-2">Cover</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td className="border px-4 py-2">{member.username}</td>
                <td className="border px-4 py-2">{member.email}</td>
                <td className="border px-4 py-2">
                  {member.profile_photo && (
                    <img
                      src={`https://backend-tbh.onrender.com/uploads/${member.profile_photo}`}
                      alt="profile"
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                </td>
                <td className="border px-4 py-2">
                  {member.cover_photo && (
                    <img
                      src={`https://backend-tbh.onrender.com/uploads/${member.cover_photo}`}
                      alt="cover"
                      className="w-16 h-16 object-cover"
                    />
                  )}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => deleteMember(member.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;

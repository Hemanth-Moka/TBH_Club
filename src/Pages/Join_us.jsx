import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PhotoIcon } from '@heroicons/react/24/solid';

export default function JoinUs() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    about: '',
    firstName: '',
    lastName: '',
    email: '',
    interestArea: '',
    motivation: '',
    experience: '',
  });

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [profilePhotoName, setProfilePhotoName] = useState('');
  const [coverPhotoName, setCoverPhotoName] = useState('');

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });

    if (profilePhoto) data.append('profilePhoto', profilePhoto);
    if (coverPhoto) data.append('coverPhoto', coverPhoto);

    try {
      await axios.post('https://backend-tbh.onrender.com/join', data);
      setStatus({ type: 'success', message: '🎉 Registration successful!' });
      setTimeout(() => navigate('/'), 1500); // Navigate after short delay
    } catch {
      setStatus({ type: 'error', message: '❌ Failed to submit form. Please try again.' });
    }
  };

  return (
    <form className="bg-black text-white min-h-screen px-4 py-16" onSubmit={handleSubmit}>
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Status Message */}
        {status.message && (
          <div
            className={`text-center px-6 py-3 rounded-lg font-semibold ${
              status.type === 'success'
                ? 'bg-green-700 text-green-100'
                : 'bg-red-700 text-red-100'
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Header */}
        <div className="text-center">
          <h1 className="mt-20 text-4xl font-bold text-violet-500">Join The Blockchain Hub</h1>
          <p className="mt-3 text-base text-gray-400">
            Become a part of KL University’s Blockchain community.
          </p>
        </div>

        {/* Profile Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-violet-400">Profile</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <InputField id="username" label="Username" placeholder="Enter your username" onChange={handleChange} value={form.username} />
            <InputField id="about" label="About You" placeholder="A brief intro..." onChange={handleChange} value={form.about} />
          </div>

          {profilePhotoName && (
            <p className="text-sm text-green-400 mt-1">📁 Uploaded: {profilePhotoName}</p>
          )}

          <div>
            <label className="block text-sm font-medium">Cover Photo</label>
            <div className="mt-2 flex flex-col items-center justify-center px-6 py-10 rounded-xl border border-dashed border-violet-500/30 bg-black/20 backdrop-blur-sm">
              <PhotoIcon className="w-12 h-12 text-gray-500" />
              <label htmlFor="cover-photo" className="cursor-pointer mt-4 text-violet-400 hover:underline">
                Upload or drag a file
                <input
                  id="cover-photo"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    setCoverPhoto(e.target.files[0]);
                    setCoverPhotoName(e.target.files[0]?.name || '');
                  }}
                />
              </label>
              <p className="mt-1 text-sm text-gray-500">PNG, JPG, up to 10MB</p>
              {coverPhotoName && (
                <p className="text-sm text-green-400 mt-2">📁 Uploaded: {coverPhotoName}</p>
              )}
            </div>
          </div>
        </section>

        {/* Personal Info */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-violet-400">Personal Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField id="firstName" label="First Name" onChange={handleChange} value={form.firstName} />
            <InputField id="lastName" label="Last Name" onChange={handleChange} value={form.lastName} />
            <div className="sm:col-span-2">
              <InputField id="email" label="Email" type="email" onChange={handleChange} value={form.email} />
            </div>
          </div>
        </section>

        {/* Blockchain Journey */}
     <section className="space-y-6">
  <h2 className="text-2xl font-semibold text-violet-400">Your Blockchain Journey</h2>
  
  <div>
    <div className="flex items-center justify-between">
      <label htmlFor="interestArea" className="text-sm font-medium text-white">
        Interest Area
      </label>
      <a
        href="/AboutUs"
        className="text-xs text-violet-400 hover:underline"
      >
        Know more about domains
      </a>
    </div>

    <select
      id="interestArea"
      name="interestArea"
      required
      value={form.interestArea}
      onChange={handleChange}
      className="mt-1 w-full rounded-xl bg-black/30 border border-violet-500/20 p-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
    >
              <option value="">Choose an area</option>
              <option>Blockchain Development</option>
              <option>NFT & WEB 3</option>
              <option>Drafting</option>
              <option>Designing / Video Editing</option>
              <option>Research & Innovation</option>
              <option>PR And Marketing</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TextareaField id="motivation" label="Why do you want to join?" placeholder="Describe your interest..." value={form.motivation} onChange={handleChange} />
            <TextareaField id="experience" label="Prior Experience" placeholder="Built a dApp, read whitepapers..." value={form.experience} onChange={handleChange} />
          </div>
        </section>

        {/* Submit Buttons */}
        <div className="flex justify-center mt-10 gap-6">
          <button
            type="reset"
            className="px-6 py-2 text-sm rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 text-sm rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-violet-500/40"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
}

// Reusable Input
function InputField({ id, label, type = 'text', placeholder = '', value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="mt-1 w-full rounded-xl bg-black/30 border border-violet-500/20 backdrop-blur-sm p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>
  );
}

// Reusable Textarea
function TextareaField({ id, label, placeholder = '', value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={4}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="mt-1 w-full rounded-xl bg-black/30 border border-violet-500/20 backdrop-blur-sm p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>
  );
}

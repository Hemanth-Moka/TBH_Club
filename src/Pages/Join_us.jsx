import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function JoinUs() {
  return (
    <form className="bg-black text-white min-h-screen px-4 py-16">
      <div className="max-w-5xl mx-auto space-y-16">

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
            <InputField id="username" label="Username" placeholder="Enter your username" />
            <InputField id="about" label="About You" placeholder="A brief intro..." />
          </div>

          <div className="flex items-center gap-4 mt-4">
            <UserCircleIcon className="w-12 h-12 text-gray-600" />
            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 transition text-white shadow-sm"
            >
              Upload Profile Photo
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium">Cover Photo</label>
            <div className="mt-2 flex flex-col items-center justify-center px-6 py-10 rounded-xl border border-dashed border-violet-500/30 bg-black/20 backdrop-blur-sm">
              <PhotoIcon className="w-12 h-12 text-gray-500" />
              <label htmlFor="cover-photo" className="cursor-pointer mt-4 text-violet-400 hover:underline">
                Upload or drag a file
                <input id="cover-photo" type="file" className="hidden" />
              </label>
              <p className="mt-1 text-sm text-gray-500">PNG, JPG, up to 10MB</p>
            </div>
          </div>
        </section>

        {/* Personal Info */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-violet-400">Personal Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField id="first-name" label="First Name" />
            <InputField id="last-name" label="Last Name" />
            <div className="sm:col-span-2">
              <InputField id="email" label="Email" type="email" />
            </div>
          </div>
        </section>

        {/* Blockchain Journey */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-violet-400">Your Blockchain Journey</h2>

          <div>
            <label htmlFor="interest-area" className="text-sm font-medium">Interest Area</label>
            <select
              id="interest-area"
              name="interest-area"
              className="mt-1 w-full rounded-xl bg-black/30 border border-violet-500/20 p-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option>Choose an area</option>
              <option>Blockchain Development</option>
              <option>Smart Contracts</option>
              <option>DeFi</option>
              <option>Research & Innovation</option>
              <option>NFTs / Web3</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TextareaField
              id="motivation"
              label="Why do you want to join?"
              placeholder="Describe your interest and motivation..."
            />
            <TextareaField
              id="experience"
              label="Prior Experience"
              placeholder="e.g., built a dApp, read whitepapers..."
            />
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

// Reusable Input Field
function InputField({ id, label, type = 'text', placeholder = '' }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl bg-black/30 border border-violet-500/20 backdrop-blur-sm p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>
  );
}

// Reusable Textarea Field
function TextareaField({ id, label, placeholder = '' }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={4}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl bg-black/30 border border-violet-500/20 backdrop-blur-sm p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>
  );
}
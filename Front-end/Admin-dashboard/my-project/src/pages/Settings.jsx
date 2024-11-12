import React, { useState } from 'react';

function Settings() {
  const [font, setFont] = useState('Arial');
  const [profilePicture, setProfilePicture] = useState(null);

  // Handle font change
  const handleFontChange = (e) => {
    setFont(e.target.value);
    document.body.style.fontFamily = e.target.value;
  };

  // Handle profile picture upload
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
        console.log('Profile picture updated:', e.target.result);
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle logout
  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Settings</h1>

      {/* Profile Section */}
      <div className="p-6 mb-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">Profile</h2>
        <div className="flex items-center gap-4 mb-4">
          <img
            src={profilePicture || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-24 h-24 border rounded-full"
          />
          <div>
            <label className="block mb-2 text-sm font-medium">Upload Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          </div>
        </div>
      </div>

      {/* Font Change Section */}
      <div className="p-6 mb-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">Appearance</h2>
        <label className="block mb-2 text-sm font-medium">Change Font</label>
        <select
          value={font}
          onChange={handleFontChange}
          className="p-2 border rounded"
        >
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>

      {/* Logout Section */}
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">Account</h2>
        <button
          onClick={handleLogout}
          className="px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Settings;

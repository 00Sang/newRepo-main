import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const adminID = "admin";
  const adminPassword = "admin123";

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate credentials
    if (username === adminID && password === adminPassword) {
      alert("Login successful");
      navigate("/admin-panel/admin-dashboard"); // Navigate to the home page or admin dashboard
    } else {
      alert("Invalid credentials");
    }

    // Optionally, clear the form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg p-6 flex flex-col gap-6 w-80 rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-xl font-semibold text-gray-800">Admin Login</h2>

        <div>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
            required
            className="w-full border border-gray-500 py-2 px-3 rounded-sm  outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
            className=" w-full border border-gray-500 py-2 px-3 rounded-sm  outline-none"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 w-full text-white rounded-sm hover:bg-gray-900 transition duration-300"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;

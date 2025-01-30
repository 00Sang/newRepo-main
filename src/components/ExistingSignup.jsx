import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ExistingSignup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [roll_number, setRollNumber] = useState("");
  const [semester, setSemester] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const [loading, setLoading] = useState(false); // For loading state

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleRollNumber = (e) => setRollNumber(e.target.value);
  const handleSemester = (e) => setSemester(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email, phone_number, roll_number, semester, password };

    try {
      setLoading(true); // Start loading

      // Send POST request to backend
      const response = await fetch('http://localhost:5000/api/user/existingUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Handle response
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to register');
      } else {
        // Registration successful, clear the form
        setName('');
        setEmail('');
        setPhoneNumber('');
        setRollNumber('');
        setSemester('');
        setPassword('');

        // Redirect to the homescreen page
        navigate('/');
      }
    } catch (error) {
      setError('An error occurred while trying to register. Please try again.');
      console.error(error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center pt-14 justify-center w-full h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg p-6 flex flex-col gap-6 rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-xl font-semibold text-gray-800">
          Register
        </h2>

        {error && <div className="text-red-500 text-sm">{error}</div>} {/* Display error if any */}

        <div className="flex w-full items-center gap-6">
          <div className="w-full">
            <label className="text-sm py-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
              required
              className="w-full border border-gray-500 py-2 px-2 rounded-sm outline-none"
            />
          </div>
          <div className="w-full">
            <label className="text-sm py-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Enter email"
              required
              className="w-full border border-gray-500 py-2 px-2 rounded-sm outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-full">
            <label className="text-sm py-2">Phone no.</label>
            <input
              type="number"
              value={phone_number}
              onChange={handlePhoneNumber}
              placeholder="123456789"
              required
              className="w-full border border-gray-500 py-2 px-2 rounded-sm outline-none"
            />
          </div>
          <div className="w-full">
            <label className="text-sm py-2">Roll no.</label>
            <input
              type="number"
              value={roll_number}
              onChange={handleRollNumber}
              placeholder="Enter roll number"
              required
              className="w-full border border-gray-500 py-2 px-2 rounded-sm outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-full">
            <label className="text-sm py-2">Semester</label>
            <input
              type="text"
              value={semester}
              onChange={handleSemester}
              placeholder="Enter semester"
              required
              className="w-full border border-gray-500 py-2 px-2 rounded-sm outline-none"
            />
          </div>
          <div className="w-full">
            <label className="text-sm py-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
              className="w-full border border-gray-500 py-2 px-2 rounded-sm outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 w-full text-white rounded-sm text-center hover:bg-gray-900 transition duration-300"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Signing Up..." : "Signup"} {/* Show loading text */}
          </button>
        </div>
        <div className="flex items-center justify-end gap-1 mt-[-20px]">
          <p className="text-xs">Already have an account?</p>
          <Link to="/login-page" className="underline text-blue-500 text-sm">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ExistingSignup;

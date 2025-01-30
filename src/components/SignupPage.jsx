import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate(); // for navigation after successful signup

  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To show errors if something goes wrong

  const handleNameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const userData = { name, email, password };

    try {
      // Send POST request to backend
      const response = await fetch('http://localhost:5000/api/user/register', {
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
        setUsername('');
        setEmail('');
        setPassword('');
        
        // Redirect to the admission form page
        navigate('/admission-form');
      }
    } catch (error) {
      setError('An error occurred while trying to register. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg p-6 flex flex-col gap-6 w-80 rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-xl font-semibold text-gray-800">Register</h2>

        {/* Error Message Display */}
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            required
            className="w-full border border-gray-500 py-2 px-3 rounded-sm outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
            required
            className="w-full border border-gray-500 py-2 px-3 rounded-sm outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
            className="w-full border border-gray-500 py-2 px-3 rounded-sm outline-none"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 w-full text-white rounded-sm text-center hover:bg-gray-900 transition duration-300"
          >
            Signup
          </button>
        </div>
        <div className="flex items-center justify-end w-full gap-1 mt-[-20px]">
          <p className="text-xs">Already have an account?</p>
          <Link to="/login-page" className="underline text-blue-500 text-sm">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;


import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";



const ResetPasswordPage = () => {
  const { token } = useParams(); // Extract token from URL
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/user/resetpassword", {
        token,
        newPassword,
      });

      setMessage(response.data.message);
      setTimeout(() => {
        navigate("/login-page"); // Redirect after success
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.error || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form className="bg-white shadow-lg p-6 flex flex-col gap-6 w-80 rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-center text-xl font-semibold text-gray-800">Reset Password</h2>

        {message && <div className="text-green-500 text-sm text-center">{message}</div>}
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}

        <div>
          <input
            type="password"
            placeholder="Enter new password"
            required
            className="w-full border border-gray-500 py-2 px-3 rounded-sm outline-none"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`px-6 py-2 bg-gray-800 w-full text-white rounded-sm hover:bg-gray-900 transition duration-300 
            ${loading ? "bg-gray-500 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Updating..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;

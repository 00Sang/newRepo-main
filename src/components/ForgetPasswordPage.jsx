import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./forgotpassword.css"; // Import the CSS file for loader

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Loader shows on page load

  const navigate = useNavigate();

  useEffect(() => {
    // Hide the loader after 2 seconds and show the form
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/user/forgotpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message || "Reset link sent to your email.");
        setTimeout(() => navigate("/login-page"), 6000); // Redirect after success
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to send reset link.");
      }
    } catch (error) {
      setError("An error occurred while trying to send the reset link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      {loading && <div className="loader"></div>} {/* Show loader when loading */}

      {!loading && (
        <form
          className="bg-white shadow-lg p-6 flex flex-col gap-6 w-80 rounded-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-xl font-semibold text-gray-800">
            Forgot Password
          </h2>

          {message && (
            <div className="text-green-500 text-sm text-center">{message}</div>
          )}
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-500 py-2 px-3 rounded-sm outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`px-6 py-2 bg-gray-800 w-full text-white rounded-sm hover:bg-gray-900 transition duration-300 
              ${loading ? "bg-gray-500 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordPage;

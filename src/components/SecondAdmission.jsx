import React, { useState } from 'react';

const SecondAdmission = () => {
  const programs = {
    BA: [
      'Anthropology',
      'Economics',
      'Education',
      'English',
      'Geography',
      'History',
      'Mathematics',
      'Pol. Science',
      'Sociology',
      'Mizo',
      'Manipuri',
    ],
    BSc: [
      'Anthropology',
      'Botany',
      'Chemistry',
      'Economics',
      'Geography',
      'Mathematics',
      'Physics',
      'Statistics',
      'Zoology',
    ],
  };

  const [formData, setFormData] = useState({
    session: '',
    program: '',
    subject: '',
    name: '',
    dob: '',
    gender: '',
    category: '',
    fathersName: '',
    address: '',
    contactNumber: '',
    email: '',
    councilRegistration: '',
    UHERegistration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-36 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-4xl flex flex-col p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-center font-extrabold text-2xl sm:text-3xl text-gray-700 mb-8">
          2nd Admission Form
        </h2>

        {/* Session Field */}
        <div className="flex flex-col mb-6">
          <label className="font-medium text-sm sm:text-md" htmlFor="session">
            Session
          </label>
          <input
            type="number"
            id="session"
            name="session"
            placeholder="2024-2025"
            value={formData.session}
            onChange={handleChange}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Program Selection */}
        <div className="flex flex-col mb-6">
          <label className="font-medium text-sm sm:text-md mb-2" htmlFor="program">
            Select Program
          </label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Choose a program</option>
            <option value="BA">BA</option>
            <option value="BSc">B.Sc</option>
          </select>
        </div>

        {/* Subject Selection */}
        {formData.program && (
          <div className="flex flex-col mb-6">
            <label className="font-medium text-sm sm:text-md mb-2" htmlFor="subject">
              Select Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Choose a subject</option>
              {programs[formData.program].map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Name Field */}
        <div className="flex flex-col mb-6">
          <label className="font-medium text-sm sm:text-md">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full name"
            className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Other Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col mb-6">
            <label className="font-medium text-sm sm:text-md">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col mb-6">
            <label className="font-medium text-sm sm:text-md">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="flex flex-col mb-6">
            <label className="font-medium text-sm sm:text-md">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Category</option>
              <option value="ST">ST</option>
              <option value="SC">SC</option>
              <option value="OBC">OBC</option>
              <option value="GEN">GEN</option>
            </select>
          </div>

          <div className="flex flex-col mb-6">
            <label className="font-medium text-sm sm:text-md">Father's Name</label>
            <input
              type="text"
              name="fathersName"
              value={formData.fathersName}
              onChange={handleChange}
              required
              placeholder="Father's Name"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col mb-6">
          <label className="font-medium text-sm sm:text-md">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Full Address"
            className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col mb-6">
            <label className="font-medium text-sm sm:text-md">Contact Number</label>
            <input
              type="number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              placeholder="1234567890"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col mb-6">
            <label className="font-medium text-sm sm:text-md">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@gmail.com"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col mb-6">
            <label className="font-medium text-sm sm:text-md">Council Registration/Migration No.</label>
            <input
              type="text"
              name="councilRegistration"
              value={formData.councilRegistration}
              onChange={handleChange}
              required
              placeholder="123456789"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col mb-6">
            <label className="font-medium text-sm sm:text-md">UHE Registration No.</label>
            <input
              type="text"
              name="UHERegistration"
              value={formData.UHERegistration}
              onChange={handleChange}
              required
              placeholder="123456789"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SecondAdmission;

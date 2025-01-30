import React, { useState } from "react";

const programs = {
  BA: [
    "Anthropology",
    "Economics",
    "Education",
    "English",
    "Geography",
    "History",
    "Mathematics",
    "Pol. Science",
    "Sociology",
    "Mizo",
    "Manipuri",
  ],
  BSc: [
    "Anthropology",
    "Botany",
    "Chemistry",
    "Economics",
    "Geography",
    "Mathematics",
    "Physics",
    "Statistics",
    "Zoology",
  ],
};

const AdmissionPage = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleProgramChange = (program) => {
    setSelectedProgram(program);
    setSelectedSubject(""); // Reset subject when program changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedProgram || !selectedSubject) {
      alert("Please select a program and a core subject.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen mt-36 bg-gray-100 flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Student Admission Form</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl space-y-6"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal Details</h2>
        <div className="space-y-4">
          {/* Name */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-1/3 font-semibold">1. Name (IN BLOCK LETTERS)</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 py-2 px-3 w-full md:w-2/3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Date of Birth and Aadhar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <label className="w-36 font-semibold">2. Date of Birth</label>
              <input
                type="date"
                className="border border-gray-300 py-2 px-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-36 font-semibold">3. Aadhar no.</label>
              <input
                type="number"
                placeholder="8567 4790 3520"
                className="border border-gray-300 py-2 px-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mt-6">Program Selection</h2>
        <div className="space-y-4">
          {/* Program Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              className={`w-1/2 py-2 px-4 rounded-md text-white ${
                selectedProgram === "BA" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => handleProgramChange("BA")}
            >
              BA
            </button>
            <button
              type="button"
              className={`w-1/2 py-2 px-4 rounded-md text-white ${
                selectedProgram === "BSc" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => handleProgramChange("BSc")}
            >
              B.Sc
            </button>
          </div>

          {/* Core Subject Dropdown */}
          {selectedProgram && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Core Subject (6 credits each)
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Choose a subject</option>
                {programs[selectedProgram].map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mt-6">Academic Information</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-200">
              <tr>
                {[
                  "Exams",
                  "Board / University",
                  "Roll No. & Year",
                  "Division",
                  "Total Marks",
                  "Institution",
                ].map((header, idx) => (
                  <th key={idx} className="border border-gray-300 px-4 py-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["Class - X", "Class - XII"].map((exam, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-4 py-2">{exam}</td>
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <td key={i} className="border border-gray-300 px-4 w-72 py-2">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                          placeholder="Enter details"
                          required
                        />
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 mt-4"
        >
          Submit
        </button>
      </form>

      {/* Success Message */}
      {formSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 rounded-lg p-4 mt-6">
          <h3 className="text-lg font-bold">Registration Successful!</h3>
          <p>
            You have selected the <strong>{selectedProgram}</strong> program with{" "}
            <strong>{selectedSubject}</strong> as your core subject.
          </p>
        </div>
      )}
    </div>
  );
};

export default AdmissionPage;

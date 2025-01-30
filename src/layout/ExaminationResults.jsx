import React, { useState } from "react";

const ExaminationResults = () => {
  // Results data categorized by program
  const resultsData = {
    "Bachelor of Arts (B.A)": [
      {
        studentName: "Alice Johnson",
        rollNumber: "BA001",
        subject: "English",
        marks: 85,
        grade: "A",
      },
      {
        studentName: "Bob Smith",
        rollNumber: "BA002",
        subject: "History",
        marks: 78,
        grade: "B+",
      },
      {
        studentName: "Clara Davis",
        rollNumber: "BA003",
        subject: "Economics",
        marks: 92,
        grade: "A+",
      },
    ],
    "Bachelor of Science (B.Sc)": [
      {
        studentName: "David Brown",
        rollNumber: "BSC001",
        subject: "Physics",
        marks: 88,
        grade: "A",
      },
      {
        studentName: "Emily Wilson",
        rollNumber: "BSC002",
        subject: "Chemistry",
        marks: 75,
        grade: "B+",
      },
      {
        studentName: "Frank Miller",
        rollNumber: "BSC003",
        subject: "Mathematics",
        marks: 81,
        grade: "A-",
      },
    ],
  };

  const [activeProgram, setActiveProgram] = useState("Bachelor of Arts (B.A)");

  return (
    <div className="min-h-screen mt-24 bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Examination Results
      </h1>

      {/* Program Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(resultsData).map((program) => (
          <button
            key={program}
            onClick={() => setActiveProgram(program)}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition ${
              activeProgram === program
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {program}
          </button>
        ))}
      </div>

      {/* Results Table */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        {/* Program Header */}
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          {activeProgram}
        </h2>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-5 font-semibold text-gray-600 mb-4">
          <div>Name</div>
          <div>Roll Number</div>
          <div>Subject</div>
          <div>Marks</div>
          <div>Grade</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {resultsData[activeProgram].map((result, index) => (
            <div
              key={index}
              className="grid md:grid-cols-5 grid-cols-1 gap-y-2 md:gap-y-0 py-4 items-center text-gray-700"
            >
              {/* For smaller screens, display labels */}
              <div className="flex flex-col md:hidden">
                <span className="font-semibold">Name:</span>
                <span>{result.studentName}</span>
              </div>
              <div className="hidden md:block">{result.studentName}</div>

              <div className="flex flex-col md:hidden">
                <span className="font-semibold">Roll Number:</span>
                <span>{result.rollNumber}</span>
              </div>
              <div className="hidden md:block">{result.rollNumber}</div>

              <div className="flex flex-col md:hidden">
                <span className="font-semibold">Subject:</span>
                <span>{result.subject}</span>
              </div>
              <div className="hidden md:block">{result.subject}</div>

              <div className="flex flex-col md:hidden">
                <span className="font-semibold">Marks:</span>
                <span>{result.marks}</span>
              </div>
              <div className="hidden md:block">{result.marks}</div>

              <div className="flex flex-col md:hidden">
                <span className="font-semibold">Grade:</span>
                <span>{result.grade}</span>
              </div>
              <div className="hidden md:block">{result.grade}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExaminationResults;

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Marksheet = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [marksheetData, setMarksheetData] = useState(null);

  // Mock data (replace with API or database fetch)
  const sampleData = {
    "12345": {
      name: "John Doe",
      college: "Churachandpur College",
      ABC_ID: "540597939145",
      results: [
        {
          semester: 1,
          date: "22 May 2024",
          courses: [
            { title: "Introduction to Education", credits: 6, letterGrade: "A", gradePoints: 8 },
            { title: "Introduction to Educational Philosophy", credits: 6, letterGrade: "B", gradePoints: 6 },
            { title: "English Communication", credits: 4, letterGrade: "B+", gradePoints: 7 },
            { title: "Nursery Rhymes", credits: 2, letterGrade: "A", gradePoints: 8 },
            { title: "NSS", credits: 2, letterGrade: "A+", gradePoints: 9 },
            { title: "Personality Development", credits: 2, letterGrade: "A+", gradePoints: 9 },
          ],
          SGPA: 7.67,
          CGPA: 7.67,
        },
        {
          semester: 2,
          date: "22 November 2024",
          courses: [
            { title: "Educational Psychology", credits: 6, letterGrade: "A", gradePoints: 8 },
            { title: "Philosophy of Education", credits: 6, letterGrade: "B+", gradePoints: 7 },
            { title: "English Communication II", credits: 4, letterGrade: "A", gradePoints: 8 },
            { title: "Drama & Poetry", credits: 2, letterGrade: "A+", gradePoints: 9 },
            { title: "Environmental Studies", credits: 2, letterGrade: "A+", gradePoints: 9 },
          ],
          SGPA: 8.1,
          CGPA: 7.88,
        },
        // Add similar data for semesters 3 to 6...
      ],
    },
  };

  // Fetch marksheet data
  const fetchMarksheet = () => {
    const data = sampleData[rollNumber];
    if (data) {
      setMarksheetData(data);
      setSelectedSemester(1); // Default to Semester 1
    } else {
      alert('No data found for the entered Roll Number.');
    }
  };

  // Download PDF
  const downloadPDF = () => {
    if (!marksheetData || selectedSemester === null) return;
    const semesterData = marksheetData.results.find((sem) => sem.semester === selectedSemester);

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("MANIPUR UNIVERSITY", 20, 20);
    doc.setFontSize(14);
    doc.text("Online Provisional Grade Sheet", 20, 30);
    doc.text(`BA Education ${selectedSemester} Semester Examination`, 20, 40);

    doc.setFontSize(12);
    doc.text(`Name: ${marksheetData.name}`, 20, 50);
    doc.text(`College: ${marksheetData.college}`, 20, 60);
    doc.text(`ABC ID: ${marksheetData.ABC_ID}`, 20, 70);
    doc.text(`Roll Number: ${rollNumber}`, 20, 80);

    doc.text(`Semester ${selectedSemester}`, 20, 90);
    doc.autoTable({
      startY: 100,
      head: [["Course Title", "Credits", "Letter Grade", "Grade Points"]],
      body: semesterData.courses.map((course) => [
        course.title,
        course.credits,
        course.letterGrade,
        course.gradePoints,
      ]),
    });

    doc.text(`SGPA: ${semesterData.SGPA}`, 20, doc.lastAutoTable.finalY + 10);
    doc.text(`CGPA: ${semesterData.CGPA}`, 20, doc.lastAutoTable.finalY + 20);
    doc.text(`Date of Announcement: ${semesterData.date}`, 20, doc.lastAutoTable.finalY + 30);

    doc.save(`Marksheet_Semester_${selectedSemester}_${rollNumber}.pdf`);
  };

  const renderMarksheet = () => {
    if (!marksheetData || selectedSemester === null) return null;
    const semesterData = marksheetData.results.find((sem) => sem.semester === selectedSemester);

    return (
      <div className="p-4 border rounded shadow-lg bg-white">
        <h1 className="text-2xl font-bold text-center mb-4">MANIPUR UNIVERSITY</h1>
        <p className="text-center">Online Provisional Grade Sheet</p>
        <p className="text-center">BA Education {selectedSemester} Semester Examination</p>

        <div className="mt-4">
          <p><strong>Name:</strong> {marksheetData.name}</p>
          <p><strong>College:</strong> {marksheetData.college}</p>
          <p><strong>ABC ID:</strong> {marksheetData.ABC_ID}</p>
          <p><strong>Roll Number:</strong> {rollNumber}</p>
        </div>

        <table className="w-full text-left border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Course Title</th>
              <th className="border px-4 py-2">Credits</th>
              <th className="border px-4 py-2">Letter Grade</th>
              <th className="border px-4 py-2">Grade Points</th>
            </tr>
          </thead>
          <tbody>
            {semesterData.courses.map((course, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{course.title}</td>
                <td className="border px-4 py-2">{course.credits}</td>
                <td className="border px-4 py-2">{course.letterGrade}</td>
                <td className="border px-4 py-2">{course.gradePoints}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          <p><strong>SGPA:</strong> {semesterData.SGPA}</p>
          <p><strong>CGPA:</strong> {semesterData.CGPA}</p>
          <p><strong>Date of Announcement:</strong> {semesterData.date}</p>
        </div>

        <button
          onClick={downloadPDF}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
        >
          Download PDF
        </button>
      </div>
    );
  };

  return (
    <div className="p-6 pt-36 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Downlaod Marksheet</h1>
      <div className="flex flex-col items-center mb-6">
        <input
          type="text"
          placeholder="Enter Roll Number"
          className="border px-4 py-2 rounded w-full max-w-md"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <button
          onClick={fetchMarksheet}
          className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600"
        >
          Fetch Marksheet
        </button>
      </div>

      {marksheetData && (
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <label className="mr-2">Select Semester:</label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(Number(e.target.value))}
              className="border px-2 py-1 rounded"
            >
              {marksheetData.results.map((sem) => (
                <option key={sem.semester} value={sem.semester}>
                  Semester {sem.semester}
                </option>
              ))}
            </select>
          </div>

          {renderMarksheet()}
        </div>
      )}
    </div>
  );
};

export default Marksheet;

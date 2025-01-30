import React, { useState } from "react";
import {
  FiSettings,
  FiPhone,
  FiMail,
  FiDownload,
  FiPlus,
  FiMoreVertical,
  FiFilter,
} from "react-icons/fi";

const studentsData = [
  { id: "ST001", name: "John Doe", class: "2 A", rollNumber: "12", gender: "Male", joiningDate: "2022-01-15", status: "Active", avatar: "https://static.vecteezy.com/system/resources/thumbnails/026/899/982/small_2x/of-emotional-dynamic-pose-indian-kid-in-school-ai-generative-photo.jpg" },
  { id: "ST002", name: "Jane Smith", class: "1 A", rollNumber: "14", gender: "Female", joiningDate: "2022-02-10", status: "Inactive", avatar: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsb2ZmaWNlMTBfcGhvdG9ncmFwaHlfb2ZfaGFwcHlfaW5kaWFuX2tpZF9wcmltYXJ5X2VsZW1lbl84MjU4YjIxZC1mYWY3LTRhY2ItYWEwNy0zZWE5MjI4NTNiYjEucG5n.png" },
  { id: "ST003", name: "Jane Smith", class: "1 A", rollNumber: "14", gender: "Female", joiningDate: "2022-02-10", status: "Active", avatar: "https://static.vecteezy.com/system/resources/thumbnails/026/899/982/small_2x/of-emotional-dynamic-pose-indian-kid-in-school-ai-generative-photo.jpg" },
  { id: "ST004", name: "Jane Smith", class: "1 A", rollNumber: "14", gender: "Female", joiningDate: "2022-02-10", status: "Active", avatar: "https://static.vecteezy.com/system/resources/thumbnails/026/899/982/small_2x/of-emotional-dynamic-pose-indian-kid-in-school-ai-generative-photo.jpg" },
  { id: "ST005", name: "Jane Smith", class: "1 A", rollNumber: "14", gender: "Female", joiningDate: "2022-02-10", status: "Active", avatar: "https://static.vecteezy.com/system/resources/thumbnails/026/899/982/small_2x/of-emotional-dynamic-pose-indian-kid-in-school-ai-generative-photo.jpg" },
  { id: "ST006", name: "Jane Smith", class: "1 A", rollNumber: "14", gender: "Female", joiningDate: "2022-02-10", status: "Active", avatar: "https://static.vecteezy.com/system/resources/thumbnails/026/899/982/small_2x/of-emotional-dynamic-pose-indian-kid-in-school-ai-generative-photo.jpg" },
  { id: "ST007", name: "Jane Smith", class: "1 A", rollNumber: "14", gender: "Female", joiningDate: "2022-02-10", status: "Inactive", avatar: "https://static.vecteezy.com/system/resources/thumbnails/026/899/982/small_2x/of-emotional-dynamic-pose-indian-kid-in-school-ai-generative-photo.jpg" },
  { id: "ST008", name: "Jane Smith", class: "1 A", rollNumber: "14", gender: "Female", joiningDate: "2022-02-10", status: "Inactive", avatar: "https://static.vecteezy.com/system/resources/thumbnails/026/899/982/small_2x/of-emotional-dynamic-pose-indian-kid-in-school-ai-generative-photo.jpg" },
];

const StudentsData = () => {
  const [students] = useState(studentsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMoreMenu, setShowMoreMenu] = useState(null);
  const [showExportMenu, setShowExportMenu] = useState(false);

  // Search filter
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle More Menu
  const toggleMoreMenu = (id) => {
    setShowMoreMenu((prev) => (prev === id ? null : id));
  };

  // Toggle Export Menu
  const toggleExportMenu = (e) => {
    e.stopPropagation();
    setShowExportMenu((prev) => !prev);
  };

  // Close dropdowns when clicked outside
  const closeMenus = () => {
    setShowMoreMenu(null);
    setShowExportMenu(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen" onClick={closeMenus}>
      <div className="mb-4 text-sm text-gray-600">
        <h2 className="text-xl font-semibold">All Students</h2>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded p-2 text-sm"
          />
          <button className="flex items-center gap-2 bg-gray-200 p-2 rounded text-sm">
            <FiFilter /> Filter
          </button>
        </div>

        {/* Export and Add New Student Buttons */}
        <div className="flex items-center gap-4 relative">
          <button
            className="flex items-center gap-2 bg-slate-200 font-medium text-gray-700 border p-2 rounded text-sm"
            onClick={toggleExportMenu}
          >
            <FiDownload /> Export
          </button>

          {showExportMenu && (
            <div className="absolute top-full right-24 bg-white border rounded shadow-lg mt-2 w-40 z-10">
              <button
                onClick={() => alert("Exporting as PDF")}
                className="block px-2 w-full text-start py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Export as PDF
              </button>
              <button
                onClick={() => alert("Exporting as Excel")}
                className="block px-2 w-full text-start py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Export as Excel
              </button>
            </div>
          )}

          <button className="flex items-center gap-2 bg-blue-500 text-white p-2 rounded text-sm">
            <FiPlus /> Add New Student
          </button>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-lg shadow p-3 flex flex-col items-center"
          >
            <div className="flex items-center border-b pb-2 justify-between w-full">
              <p className="text-sm text-gray-800 font-semibold">ID: {student.id}</p>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    student.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {student.status}
                </span>

                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMoreMenu(student.id);
                    }}
                  >
                    <FiMoreVertical />
                  </button>

                  {showMoreMenu === student.id && (
                    <div className="absolute right-0 bg-white border rounded shadow-lg mt-2 w-32 z-10">
                      <button
                        onClick={() => alert(`Viewing profile of ${student.name}`)}
                        className="block w-full text-start px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={() => alert(`Editing ${student.name}`)}
                        className="block w-full text-start px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => alert(`Deleting ${student.name}`)}
                        className="block w-full text-start px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.class}</p>
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <p className="text-sm text-gray-500">
                Roll No <br /> <span>{student.rollNumber}</span>
              </p>
              <p className="text-sm text-gray-500">
                Gender <br /> <span>{student.gender}</span>
              </p>
              <p className="text-sm text-gray-500">
                Joining Date <br /> <span>{student.joiningDate}</span>
              </p>
            </div>

            <div className="flex justify-between w-full border-t gap-2 mt-4">
              <div className="flex gap-3 items-center pt-2">
                <button className="border text-gray-600 p-2 rounded-full">
                  <FiPhone className="w-4 h-4" />
                </button>
                <button className="border text-gray-600 p-2 rounded-full">
                  <FiMail className="w-4 h-4" />
                </button>
              </div>
              <div className="pt-2">
                <button className="bg-slate-100 text-gray-700 hover:bg-slate-200 p-2 rounded">
                  Add Fees
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Settings Icon */}
      <div className="fixed top-[50%] right-4">
        <button className="bg-blue-500 text-white p-2 rounded-full shadow-lg">
          <FiSettings size={24} />
        </button>
      </div>
    </div>
  );
};

export default StudentsData;

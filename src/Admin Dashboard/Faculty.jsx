import React, { useState } from 'react';

const Faculty = () => {
  // Sample faculty data
  const [facultyList, setFacultyList] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      age: 45, 
      designation: 'Professor', 
      email: 'johndoe@example.com', 
      phone: '123-456-7890', 
      address: '123 Main St, City, Country', 
      type: 'Teaching',
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      age: 38, 
      designation: 'Lab Assistant', 
      email: 'janesmith@example.com', 
      phone: '987-654-3210', 
      address: '456 Elm St, City, Country', 
      type: 'Non-Teaching',
      status: 'Inactive'
    },
    // Add more sample data if needed
  ]);

  // State to manage profile modal visibility
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  // State for search filter
  const [searchTerm, setSearchTerm] = useState('');

  // Handle opening the profile modal
  const handleViewProfile = (faculty) => {
    setSelectedFaculty(faculty);
  };

  // Handle closing the profile modal
  const handleCloseModal = () => {
    setSelectedFaculty(null);
  };

  // Handle search functionality
  const filteredFaculty = facultyList.filter((faculty) =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Faculty Management</h1>
        
        {/* Add Faculty Button */}
        <button
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
          onClick={() => alert('Add Faculty form will go here')}
        >
          Add Faculty
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Faculty Table */}
      <table className="w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr className="bg-gray-200 text-sm text-gray-700">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Designation</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredFaculty.map((faculty) => (
            <tr key={faculty.id} className="border-b hover:bg-gray-100 text-sm text-gray-700">
              <td className="p-2">{faculty.name}</td>
              <td className="p-2">{faculty.designation}</td>
              <td className="p-2">{faculty.type}</td>
              <td className="p-2">{faculty.status}</td>
              <td className="p-2">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => handleViewProfile(faculty)}
                >
                  View
                </button>
                <button
                  className="text-yellow-600 hover:text-yellow-800 mx-2"
                  onClick={() => alert(`Editing profile of ${faculty.name}`)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => setFacultyList(facultyList.filter((f) => f.id !== faculty.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Profile Card Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-2">{selectedFaculty.name}</h2>
            <p><strong>Age:</strong> {selectedFaculty.age}</p>
            <p><strong>Designation:</strong> {selectedFaculty.designation}</p>
            <p><strong>Email:</strong> {selectedFaculty.email}</p>
            <p><strong>Phone:</strong> {selectedFaculty.phone}</p>
            <p><strong>Address:</strong> {selectedFaculty.address}</p>
            <button
              className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;

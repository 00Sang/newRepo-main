import React, { useState } from 'react';

const StudentDashboard = () => {
  const [assignments, setAssignments] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      setAssignments([...assignments, file.name]);
      setFile(null);
      alert('Assignment submitted successfully!');
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 px-6 shadow">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6">
          <nav>
            <ul className="space-y-4">
              <li>
                <a href="#dashboard" className="block text-gray-700 hover:text-blue-600">Dashboard</a>
              </li>
              <li>
                <a href="#profile" className="block text-gray-700 hover:text-blue-600">Profile</a>
              </li>
              <li>
                <a href="#courses" className="block text-gray-700 hover:text-blue-600">Courses</a>
              </li>
              <li>
                <a href="#attendance" className="block text-gray-700 hover:text-blue-600">Attendance</a>
              </li>
              <li>
                <a href="#assignments" className="block text-gray-700 hover:text-blue-600">Assignments</a>
              </li>
              <li>
                <a href="#notifications" className="block text-gray-700 hover:text-blue-600">Notifications</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Dashboard Overview */}
          <section id="dashboard" className="mb-8">
            <h2 className="text-xl font-bold mb-4">Welcome Back!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-lg font-bold">Courses</h3>
                <p className="text-gray-600">5 Enrolled</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-lg font-bold">Attendance</h3>
                <p className="text-gray-600">90% Overall</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-lg font-bold">Notifications</h3>
                <p className="text-gray-600">3 New</p>
              </div>
            </div>
          </section>

          {/* Assignments Section */}
          <section id="assignments" className="mb-8">
            <h2 className="text-xl font-bold mb-4">Assignments</h2>
            <div className="p-4 bg-white rounded shadow mb-4">
              <h3 className="text-lg font-bold mb-2">Submit Assignment</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 mb-2"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-bold mb-2">Submitted Assignments</h3>
              {assignments.length > 0 ? (
                <ul className="list-disc pl-5">
                  {assignments.map((assignment, index) => (
                    <li key={index} className="text-gray-600">
                      {assignment}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No assignments submitted yet.</p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;

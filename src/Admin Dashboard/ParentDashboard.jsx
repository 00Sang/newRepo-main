import React from 'react';

const ParentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white py-4 px-6 shadow">
        <h1 className="text-2xl font-bold">Parent Dashboard</h1>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6">
          <nav>
            <ul className="space-y-4">
              <li>
                <a href="#overview" className="block text-gray-700 hover:text-green-600">Overview</a>
              </li>
              <li>
                <a href="#child-performance" className="block text-gray-700 hover:text-green-600">Child's Performance</a>
              </li>
              <li>
                <a href="#attendance" className="block text-gray-700 hover:text-green-600">Attendance</a>
              </li>
              <li>
                <a href="#fees" className="block text-gray-700 hover:text-green-600">Fees</a>
              </li>
              <li>
                <a href="#notifications" className="block text-gray-700 hover:text-green-600">Notifications</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Overview Section */}
          <section id="overview" className="mb-8">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-lg font-bold">Children</h3>
                <p className="text-gray-600">2 Registered</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-lg font-bold">Attendance</h3>
                <p className="text-gray-600">Overall: 92%</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-lg font-bold">Fees Due</h3>
                <p className="text-gray-600">$200 Pending</p>
              </div>
            </div>
          </section>

          {/* Child's Performance Section */}
          <section id="child-performance" className="mb-8">
            <h2 className="text-xl font-bold mb-4">Child's Performance</h2>
            <div className="p-4 bg-white rounded shadow">
              <p>John Doe: A+ in Mathematics, B in Science</p>
              <p>Jane Doe: A in English, A- in History</p>
            </div>
          </section>

          {/* Attendance Section */}
          <section id="attendance" className="mb-8">
            <h2 className="text-xl font-bold mb-4">Attendance</h2>
            <div className="p-4 bg-white rounded shadow">
              <p>John Doe: 95% Attendance</p>
              <p>Jane Doe: 89% Attendance</p>
            </div>
          </section>

          {/* Fees Section */}
          <section id="fees" className="mb-8">
            <h2 className="text-xl font-bold mb-4">Fees</h2>
            <div className="p-4 bg-white rounded shadow">
              <p>John Doe: Paid in Full</p>
              <p>Jane Doe: $200 Due</p>
            </div>
          </section>

          {/* Notifications Section */}
          <section id="notifications">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            <div className="p-4 bg-white rounded shadow">
              <p>Parent-Teacher meeting scheduled for next week.</p>
              <p>Reminder: Submit project for John Doe by Friday.</p>
              <p>Fee payment due for Jane Doe by end of the month.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ParentDashboard;

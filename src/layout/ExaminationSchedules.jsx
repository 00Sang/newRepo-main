import React from "react";
import Footer2 from "./Footer2";

const ExaminationSchedules = () => {
  // Schedule data categorized by program
  const scheduleData = [
    {
      program: "Bachelor of Arts (B.A)",
      schedules: [
        {
          subject: "English",
          date: "2025-01-30",
          time: "10:00 AM - 1:00 PM",
          venue: "Room A101",
        },
        {
          subject: "History",
          date: "2025-01-31",
          time: "10:00 AM - 1:00 PM",
          venue: "Room A102",
        },
        {
          subject: "Economics",
          date: "2025-02-01",
          time: "10:00 AM - 1:00 PM",
          venue: "Room A103",
        },
      ],
    },
    {
      program: "Bachelor of Science (B.Sc)",
      schedules: [
        {
          subject: "Physics",
          date: "2025-01-30",
          time: "10:00 AM - 1:00 PM",
          venue: "Room B201",
        },
        {
          subject: "Chemistry",
          date: "2025-01-31",
          time: "10:00 AM - 1:00 PM",
          venue: "Room B202",
        },
        {
          subject: "Mathematics",
          date: "2025-02-01",
          time: "10:00 AM - 1:00 PM",
          venue: "Room B203",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen mt-24  bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Examination Schedules
      </h1>
      <div className="w-full max-w-5xl space-y-6 mb-10">
        {scheduleData.map((program, programIndex) => (
          <div
            key={programIndex}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            {/* Program Header */}
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              {program.program}
            </h2>
            {/* Table Header */}
            <div className="grid grid-cols-4 font-semibold text-gray-600 mb-2">
              <div>Subject</div>
              <div>Date</div>
              <div>Time</div>
              <div>Venue</div>
            </div>
            {/* Table Rows */}
            <div className="divide-y divide-gray-200">
              {program.schedules.map((schedule, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 py-4 items-center text-gray-700"
                >
                  <div>{schedule.subject}</div>
                  <div>{schedule.date}</div>
                  <div>{schedule.time}</div>
                  <div>{schedule.venue}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer2 />
    </div>
  );
};

export default ExaminationSchedules;

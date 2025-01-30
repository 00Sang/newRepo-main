import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const oldStudent = [
  {
    name: "John",
    rollno: 12345,
    course: "Bachelor of Arts",
    year: 2020,
    status: "Admitted",
    admissionDate: "2021-06-01",
  }
]

const OldAdmission = () => {

  const navigate = useNavigate();

  const [rollno, setRollno] = useState("");

  const rollnoHandleChange = (e) => {
    setRollno(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/second-admission")
    if (rollnoHandleChange) {
      const student = oldStudent.find(s => s.rollno === parseInt(rollno));
      if (student) {
        navigate("/second-admission", { state: { student } });
      } else {
        alert("Roll number not found!");
      }
    }
    // Call API to check if roll number exists
    // If exists, navigate to the AdmissionForm component
    // If not, display an error message
  };

  return (
    <div className="w-full flex justify-center items-center bg-white mt-40">
      <form onSubmit={handleSubmit} className="w-3/7 p-8 rounded-lg bg-gray-100 shadow-lg">
        <div className="mb-6">
          <label>Enter Roll no.</label>
          <input
            type="number"
            value={rollno}
            onChange={rollnoHandleChange}
            required
            placeholder="12345"
            className="w-full p-2 bg-white rounded-lg"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OldAdmission;

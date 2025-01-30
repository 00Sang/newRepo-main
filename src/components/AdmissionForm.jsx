import React, { useEffect, useState } from "react";

// import InputField from "./InputField";

const AdmissionForm = () => {
  const programs = {
    BA: [
      "Anthropology ( For Arts Background )",
      "Economics ( For Arts Background )",
      "Education",
      "English",
      "Geography ( For Arts Background )",
      "History",
      "Mathematics ( For Arts Background )",
      "Manipuri",
      "Mizo",
      "Political Science",
      "Sociology",
      "Statistics ( For Arts Background )",
    ],
    BSc: [
      "Anthropology ( For Science Background )",
      "Botany",
      "Chemistry",
      "Economics",
      "Geography ( For Science Background )",
      "Mathematics ( For Science Background )",
      "Physics",
      "Statistics ( For Science Background )",
      "Zoology",
    ],
  };

  // const [session, setSession] = useState("");
  const [formData, setFormData] = useState({
    session: "",
    full_name: "",
    date_of_birth: "",
    aadhaar_no: "",
    sex: "",
    category: "",
    nationality: "",
    religion: "",
    name_of_community: "",
    contact_no: "",
    blood_group: "",
    email: "",
    fathers_name: "",
    fathers_occupation: "",
    mothers_name: "",
    mothers_occupation: "",
    permanent_address: "",
    present_address: "",
    guardian_name: "",
    guardian_address: "",
    hslc_board: "",
    hslc_rollno: "",
    hslc_year: "",
    hslc_div: "",
    hslc_tmarks: "",
    hslc_inst: "",
    classXII_board: "",
    classXII_rollno: "",
    classXII_year: "",
    classXII_div: "",
    classXII_tmarks: "",
    classXII_inst: "",
    course: "",
    subject: "",
    mil: "",
  });

  // useEffect(() => {
  //   const currentYear = new Date().getFullYear();
  //   const nextYear = currentYear + 1;
  //   setSession(`${currentYear}-${nextYear}`);
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Check if all required fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill out the field: ${key}`);
        return; // Stop the function if any field is missing
      }
    }
    try {
      console.log("Submitting form data:", formData); // Debugging
      const response = await fetch("http://localhost:5000/api/user/newapps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), //  Send formData directly
      });
      const data = await response.json(); // Convert response to JSON
      console.log("Server Response:", data); //Log server response
      if (response.ok) {
        //  Success message
        alert("Form submitted successfully!");

        setFormData({
          session: "",
          full_name: "",
          date_of_birth: "",
          aadhaar_no: "",
          sex: "",
          category: "",
          nationality: "",
          religion: "",
          name_of_community: "",
          contact_no: "",
          blood_group: "",
          email: "",
          fathers_name: "",
          fathers_occupation: "",
          mothers_name: "",
          mothers_occupation: "",
          permanent_address: "",
          present_address: "",
          guardian_name: "",
          guardian_address: "",
          hslc_board: "",
          hslc_rollno: "",
          hslc_year: "",
          hslc_div: "",
          hslc_tmarks: "",
          hslc_inst: "",
          classXII_board: "",
          classXII_rollno: "",
          classXII_year: "",
          classXII_div: "",
          classXII_tmarks: "",
          classXII_inst: "",
          course: "",
          mil: "",
          subject: "",
        });
      } else {
        const errorData = await response.json();
        alert(
          `Failed to submit the form: ${errorData.message || "Try again."}`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div className="w-full overscroll-y-none bg-gray-100 pt-32">
      <div className=" flex items-center justify-center h-auto">
        <div className="w-2/3 bg-white shadow-md  px-6 py-8">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center border-b justify-between">
              <h2 className="py-3 text-2xl font-medium text-gray-800">
                Admission form
              </h2>
              <div className="flex items-center space-x-4">
                <label>Session -</label>
                <input
                  type="number"
                  name="session"
                  value={formData.session}
                  onChange={handleChange}
                  className="px-2 w-32 border-b h-8 border-gray-500 outline-none"
                />
              </div>
            </div>
            <div className="w-full pt-6 grid grid-cols-3 grid-rows-6 gap-8">
              {/* Name */}
              <div className="flex flex-col">
                <label className="font-medium text-gray-800 text-sm py-1">
                  Name (In full)
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth} // ✅ Bind to formData
                  onChange={handleChange} // ✅ Update state on change
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  required // ✅ Ensure it's required
                />
              </div>

              {/* Aadhaar No. */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Aadhaar No.
                </label>
                <input
                  type="number"
                  name="aadhaar_no"
                  value={formData.aadhaar_no} // ✅ Bind input to formData
                  onChange={handleChange} // ✅ Update state on change
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder="Enter Aadhaar Number"
                  required // ✅ Make it required
                />
              </div>

              {/* Sex */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Sex
                </label>
                <div className="flex items-center space-x-4">
                  <label htmlFor="Male" className="flex items-center">
                    <input
                      type="radio"
                      name="sex"
                      value="Male"
                      checked={formData.sex === "Male"} // ✅ Check if selected
                      onChange={handleChange} // ✅ Update state
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label htmlFor="Female" className="flex items-center">
                    <input
                      type="radio"
                      name="sex"
                      value="Female"
                      checked={formData.sex === "Female"} // ✅ Check if selected
                      onChange={handleChange} // ✅ Update state
                      className="mr-2"
                    />
                    Female
                  </label>
                </div>
              </div>

              {/* Category */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Category
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="ST" // ✅ Corrected value
                      checked={formData.category === "ST"} // ✅ Check if selected
                      onChange={handleChange} // ✅ Update state
                      className="mr-2"
                    />
                    ST
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="SC" // ✅ Corrected value
                      checked={formData.category === "SC"} // ✅ Check if selected
                      onChange={handleChange} // ✅ Update state
                      className="mr-2"
                    />
                    SC
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="OBC" // ✅ Corrected value
                      checked={formData.category === "OBC"} // ✅ Check if selected
                      onChange={handleChange} // ✅ Update state
                      className="mr-2"
                    />
                    OBC
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="GEN" // ✅ Corrected value
                      checked={formData.category === "GEN"} // ✅ Check if selected
                      onChange={handleChange} // ✅ Update state
                      className="mr-2"
                    />
                    GEN
                  </label>
                </div>
              </div>
              {/* Nationality */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Nationality
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="nationality"
                      value="Indian"
                      checked={formData.nationality === "Indian"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Indian
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="nationality"
                      value="Non-Indian"
                      checked={formData.nationality === "Non-Indian"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Non-Indian
                  </label>
                </div>
              </div>

              {/* Religion */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Religion
                </label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/*  */}
              {/* Community */}
              <div className="flex flex-col">
                <label className="font-medium text-gray-800 text-sm py-1">
                  Name of Community
                </label>
                <input
                  type="text"
                  name="name_of_community"
                  value={formData.name_of_community}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Contact */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Contact No.
                </label>
                <input
                  type="number"
                  name="contact_no"
                  value={formData.contact_no}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Blood Group */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Blood Group
                </label>
                <input
                  type="text"
                  name="blood_group"
                  value={formData.blood_group}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/*  */}
              {/* Email */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Email Id
                </label>
                ``
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Fathers Name */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Father's Name
                </label>
                <input
                  type="text"
                  name="fathers_name"
                  value={formData.fathers_name}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Fathers Occupation */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Father's Occupation
                </label>
                <input
                  type="text"
                  name="fathers_occupation"
                  value={formData.fathers_occupation}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Mothers Name */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Mother's Name
                </label>
                <input
                  type="text"
                  name="mothers_name"
                  value={formData.mothers_name}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Mothers Occupation */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Mother's Occupation
                </label>
                <input
                  type="text"
                  name="mothers_occupation"
                  value={formData.mothers_occupation}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Permanent Address */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Permanent Address
                </label>
                <input
                  type="text"
                  name="permanent_address"
                  value={formData.permanent_address}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Present Address */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Persent Address
                </label>
                <input
                  type="text"
                  name="present_address"
                  value={formData.present_address}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Guardian Name */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Guardian's Name
                </label>
                <input
                  type="text"
                  name="guardian_name"
                  value={formData.guardians_name}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>
              {/* Guardian Address */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Guardian Address
                </label>
                <input
                  type="text"
                  name="guardian_address"
                  value={formData.guardians_address}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div className="mt-8 w-full">
              <label className="font-medium text-sm text-gray-800 my-4">
                Details of Examination Passed:
              </label>
              <table className="w-full border-collapse border border-gray-300 ">
                <thead className="bg-gray-100 text-start">
                  <tr>
                    <th className="border text-start border-gray-300 px-2 py-2 text-sm font-medium text-gray-800">
                      Exams
                    </th>
                    <th className="border text-start border-gray-300 px-2 py-2 w-36 text-sm font-medium text-gray-800">
                      Board
                    </th>
                    <th className="border text-start border-gray-300 px-2 py-2 w-44 text-sm font-medium text-gray-800">
                      Roll No
                    </th>
                    <th className="border text-start border-gray-300 px-2 py-2 w-44 text-sm font-medium text-gray-800">
                      Year
                    </th>
                    <th className="border text-start border-gray-300 px-2 py-2 w-36 text-sm font-medium text-gray-800">
                      Division
                    </th>
                    <th className="border text-start border-gray-300 px-2 py-2 text-sm font-medium text-gray-800">
                      Total Mark
                    </th>
                    <th className="border text-start border-gray-300 px-2 w-72 py-2 text-sm font-medium text-gray-800">
                      Institution
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* Add rows here */}
                  <tr>
                    <td className="border border-gray-300 px-2 py-2 text-sm">
                      HSLC
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. BSEM/CBSE"
                        name="hslc_board"
                        value={formData.hslc_board}
                        onChange={handleChange}
                        className="outline-none border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 1234567"
                        name="hslc_rollno"
                        value={formData.hslc_rollno}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 2022"
                        name="hslc_year"
                        value={formData.hslc_year}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 1st division"
                        name="hslc_div"
                        value={formData.hslc_div}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 355"
                        name="hslc_tmarks"
                        value={formData.hslc_tmarks}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. Rayburn High School"
                        name="hslc_inst"
                        value={formData.hslc_inst}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-2 text-sm whitespace-nowrap">
                      Class XII
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. BSEM/CBSE"
                        name="classXII_board"
                        value={formData.classXII_board}
                        onChange={handleChange}
                        className="outline-none border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 1234567"
                        name="classXII_rollno"
                        value={formData.classXII_rollno}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 1st Division"
                        name="classXII_year"
                        value={formData.classXII_year}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 364"
                        name="classXII_div"
                        value={formData.classXII_div}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 364"
                        name="classXII_tmarks"
                        value={formData.classXII_tmarks}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. Rayburn College"
                        name="classXII_inst"
                        value={formData.classXII_inst}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-7 w-full">
              <label className="font-medium text-sm py-2 text-gray-800">
                Subject Offered: BA/BSc First Year : First Semester & Second
                Semester :
              </label>
              <div className="flex items-center gap-52 mb-6">
                {/* Course Selection Dropdown */}
                <select
                  id="program"
                  name="course"
                  value={formData.course}
                  onChange={(e) => {
                    handleChange(e); // Update formData.course
                    setFormData((prev) => ({ ...prev, subject: "" })); // Reset subject
                  }}
                  className="w-96 px-2 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                  required
                >
                  <option value="">Choose a program</option>
                  <option value="BA">BA</option>
                  <option value="BSc">B.Sc</option>
                </select>
              </div>

              {/* Subject Selection */}
              {formData.course && programs?.[formData.course]?.length > 0 && (
                <div className="flex flex-col mb-6">
                  <label
                    className="font-medium text-sm sm:text-md mb-2"
                    htmlFor="subject"
                  >
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
                    {programs[formData.course].map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* MIL Selection */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                For BA & B.SC MIL:
              </label>
              <div className="flex items-center space-x-4">
                {["Paite", "Hmar", "Mizo", "THK", "GEN"].map((milOption) => (
                  <label key={milOption} className="flex items-center">
                    <input
                      type="radio"
                      name="mil"
                      value={milOption}
                      checked={formData.mil === milOption}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {milOption}
                  </label>
                ))}
              </div>
            </div>

            <div className="w-full mt-20">
              <h2 className="text-2xl font-bold text-center underline">
                DECLARATION
              </h2>
              <div className="py-6 text-centre">
                <p>
                  I promise to abide by the rules & regulations of the college
                  and also promise to attend classes regularly. I may be barred
                  from filling up Examination Form if I do not attend the
                  required percentage of attendance prescribed by the
                  University.
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <h2>(Signature of Applicant)</h2>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdmissionForm;

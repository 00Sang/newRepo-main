// import React from "react";

// const FormPage = () => {
//   return (
//     <form
//       onSubmit={(e) => e.preventDefault()}
//       className="w-full mt-20 px-6 md:px-12"
//     >
//       <div className="space-y-8 ">
//         {/* Name Input */}
//         <div className="flex flex-col md:flex-row md:items-center gap-4">
//           <label className="md:w-1/3 font-semibold">
//             Name (IN BLOCK LETTERS)
//           </label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="border border-gray-300 py-2 px-3 w-full md:w-2/3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//         </div>

//         {/* Date of Birth and Aadhar */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Date of Birth */}
//           <div className="flex items-center gap-4">
//             <label className="w-36 font-semibold">Date of Birth</label>
//             <input
//               type="date"
//               className="border border-gray-300 py-2 px-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Aadhar Number */}
//           <div className="flex items-center gap-4">
//             <label className="w-36 font-semibold">Aadhar no.</label>
//             <input
//               type="number"
//               placeholder="8567 4790 3520"
//               className="border border-gray-300 py-2 px-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>
//         </div>

//         {/* Gender and Category */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Gender */}
//           <div className="flex items-center gap-4">
//             <label className="font-semibold">Sex</label>
//             <div className="flex gap-4">
//               <label className="flex items-center gap-1">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   className="focus:ring-blue-500"
//                 />
//                 Male
//               </label>
//               <label className="flex items-center gap-1">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   className="focus:ring-blue-500"
//                 />
//                 Female
//               </label>
//             </div>
//           </div>

//           {/* Category */}
//           <div className="flex items-center gap-4">
//             <label className="font-semibold">Category</label>
//             <div className="flex gap-4 flex-wrap">
//               {["ST", "SC", "OBC", "GEN"].map((category) => (
//                 <label key={category} className="flex items-center gap-1">
//                   <input
//                     type="checkbox"
//                     value={category}
//                     className="focus:ring-blue-500"
//                   />
//                   {category}
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Nationality and Religion */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="flex items-center gap-4">
//             <label className="font-semibold">Nationality</label>
//             <input
//               type="text"
//               placeholder="Indian"
//               className="border border-gray-300 py-2 px-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>
//           <div className="flex items-center gap-4">
//             <label className="font-semibold">Religion</label>
//             <input
//               type="text"
//               placeholder="Christianity/Hindu/Muslim etc..."
//               className="border border-gray-300 py-2 px-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>
//         </div>

//         {/* Additional Information */}
//         {[
//           { label: "8. Name of Community", type: "text" },
//           { label: "9. Contact no.", type: "number" },
//           {
//             label: "10. Email",
//             type: "email",
//             placeholder: "example@gmail.com",
//           },
//           { label: "11. Bloodgroup", type: "text", placeholder: "A/A+/O/B" },
//           { label: "12. Father's Name", type: "text" },
//           { label: "13. Father's Occupation", type: "text" },
//           { label: "14. Mother's Name", type: "text" },
//           { label: "15. Mother's Occupation", type: "text" },
//           { label: "16. Permanent Address", type: "text" },
//           { label: "17. Present Address", type: "text" },
//           { label: "18. Guardian's Name", type: "text" },
//           { label: "19. Guardian's Address", type: "text" },
//         ].map((field, index) => (
//           <div key={index} className="flex flex-col md:flex-row gap-4">
//             <label className="md:w-1/3 font-semibold">{field.label}</label>
//             <input
//               type={field.type}
//               placeholder={field.placeholder || ""}
//               className="border border-gray-300 py-2 px-3 w-full md:w-2/3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>
//         ))}

//         {/* Details of Examination Passed */}
//         <div>
//           <h2 className="text-lg font-semibold mb-4">
//             Details of Examination Passed:
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border border-gray-300 text-left text-sm">
//               <thead className="bg-gray-200">
//                 <tr>
//                   {[
//                     "Exams",
//                     "Board / University",
//                     "Roll No. & Year",
//                     "Division",
//                     "Total Marks",
//                     "Institution",
//                   ].map((header, idx) => (
//                     <th key={idx} className="border border-gray-300 px-4 py-2">
//                       {header}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {["Class - X", "Class - XII"].map((exam, idx) => (
//                   <tr key={idx}>
//                     <td className="border border-gray-300 px-4 py-2">{exam}</td>
//                     {Array(5)
//                       .fill()
//                       .map((_, i) => (
//                         <td
//                           key={i}
//                           className="border border-gray-300 px-4 py-2"
//                         >
//                           <input
//                             type="text"
//                             className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
//                             placeholder="Enter details"
//                           />
//                         </td>
//                       ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* 2nd Page */}
//       <div className=" min-h-screen flex justify-center items-center p-4">
//         <div className="bg-gray-100 rounded-lg p-6 max-w-5xl w-full">
//           <h1 className="text-xl font-bold mb-4 text-center">
//             BA/BSc COURSE OF STUDY UNDER CBCS/LOCF OF NEP-2020 FIRST YEAR
//           </h1>

//           {/* <div className="my-6">
//             <h2>
//               (A) FOUR YEAR B.A & B.Sc Core/Honours Subject (a student should
//               select one Subject as Core/Honours paper from the following)
//               having 6 credits each:
//             </h2>
//             <div className="mt-12">
//               <div className="flex items-center justify-between">
//                 <button className="bg-blue-600 w-72 text-white rounded-xl py-2">B.A</button>
//                 <button className="bg-blue-300 w-72 text-white rounded-xl py-2">B.S.C</button>
//               </div>
//               <div className="mt-3">
//                 <select name="Choose Subject" className="w-72 py-2 border rounded-2xl px-2 ">
//                   <option value="" disable selected>Chooose Subject</option>
//                   <option>Anthropology</option>
//                   <option>Economics</option>
//                   <option>Education</option>
//                   <option>English</option>
//                   <option>Geography</option>
//                   <option>History</option>
//                   <option>Mathematics</option>
//                   <option>Political Science</option>
//                   <option>Sociology</option>
//                   <option>Mizo</option>
//                   <option>Manipuri</option>
//                 </select>
//               </div>
//             </div>
//           </div> */}

//           <div className="mb-6">
//             <h2 className="font-semibold">
//               (B) AECC (Ability Enhancement Compulsory Course)
//             </h2>
//             <p className="mb-2">
//               Having 4 credits each: all students admitted for 1st & 2nd
//               Semester should offer the following AECC papers as indicated
//               below:
//             </p>
//             <div className="ml-6">
//               <label className="block text-sm font-medium mb-2">
//                 Tick any one of the following:
//               </label>
//               <div className="space-y-2">
//                 <label className="flex items-center">
//                   <input type="radio" name="aecc" className="mr-2" /> General
//                   English
//                 </label>
//                 <label className="flex items-center">
//                   <input type="radio" name="aecc" className="mr-2" /> MIL
//                   (Paite/Thadou-Kuki/Hmar/Mizo/Manipuri)
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h2 className="font-semibold">
//               (C) SEC (Skill Enhancement Courses)
//             </h2>
//             <p className="mb-2">
//               Having 4 credit each: This is an interdisciplinary paper which a
//               student should choose/opt one paper option offered by each
//               department in the First Year (1st & 2nd Semester) of study.
//             </p>
//             <p className="italic">
//               (For SEC consult Department teacher for optional papers)
//             </p>
//           </div>

//           <div className="mb-6">
//             <h2 className="font-semibold">(D) VAC (Value Addition Courses)</h2>
//             <p>The following VAC are offered by the college:</p>
//             <ul className="list-disc ml-6">
//               <li>101. Yoga</li>
//               <li>102. Sports - for 1st Semester</li>
//             </ul>
//           </div>

//           <div className="mb-6">
//             <h2 className="font-semibold underline">DECLARATION</h2>
//             <p className="mb-2">
//               I promise to abide by the rules & regulations of the college and
//               also promise to attend classes regularly. I may be barred from
//               filling up Examination Form if I do not attend the required
//               percentage of attendance prescribed by the University.
//             </p>
//             <div className="space-y-2">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" /> Admission granted
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" /> Not granted
//               </label>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h2 className="font-semibold">
//               Documents required at the time of Admission:
//             </h2>
//             <ul className="list-disc ml-6">
//               <li>Fee Payment Receipt (online payment).</li>
//               <li>
//                 3 Xerox copies of Admit Cards & Marksheet of Class X & XII.
//               </li>
//               <li>
//                 Migration Certificate for those who pass Class XII from
//                 Boards/Councils other than Manipur.
//               </li>
//               <li>One copy of SC/ST/OBC Certificate.</li>
//             </ul>
//           </div>

//           <div className="mb-6">
//             <h2 className="font-semibold">Fee Structure:</h2>
//             <table className="w-full border border-gray-300 text-sm">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="border border-gray-300 p-2">Category</th>
//                   <th className="border border-gray-300 p-2">BA</th>
//                   <th className="border border-gray-300 p-2">BSc</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border border-gray-300 p-2">ST/SC</td>
//                   <td className="border border-gray-300 p-2">Rs. 5,380</td>
//                   <td className="border border-gray-300 p-2">Rs. 6,150</td>
//                 </tr>
//                 <tr>
//                   <td className="border border-gray-300 p-2">General</td>
//                   <td className="border border-gray-300 p-2">Rs. 5,880</td>
//                   <td className="border border-gray-300 p-2">Rs. 6,650</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="text-center">
//             <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default FormPage;

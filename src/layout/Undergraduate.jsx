import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Footer2 from "./Footer2";


const Undergraduate = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (prev) => {
    setDropdown(dropdown === prev ? null : prev);
  };

  //   const [openMenu, setOpenMenu] = useState(null);

  // Toggle dropdown menus
  //   const toggleMenu = (menu) => {
  //     setOpenMenu(openMenu === menu ? null : menu);
  //   };

  return (
    <div className="w-full h-screen bg-white lg:px-12 pt-14 lg:pt-28 ">
      <h2 className="font-bold text-2xl md:text-2xl py-6 lg:text-3xl border-b px-4 text-center">
        <span className="text-sky-500 font-medium ">Undergraduate</span>{" "}
        Programs
      </h2>
      <div className="flex flex-col mt-4 lg:flex lg:flex-row bg-white w-full justify-around text-center gap-2 p-2">
        <div className="flex flex-col items-start ">
          <h3 className="text-center font-bold text-2xl pb-4">
            Bachelor of Arts (B.A)
          </h3>
          <div className="flex w-full lg:w-[500px] gap-2 flex-col items-start ">
            <button
              onClick={() => handleDropdown("Anthropology")}
              className="text-start flex items-center gap-12 justify-between font-semibold text-gray-600 bg-white shadow-lg  border-sky-300 px-4 border rounded-full w-full py-3"
            >
              1. Anthropology (For Arts Background )
              {dropdown === "Anthropology" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Anthropology" && (
              <div className="max-w-xl -mt-2 rounded-md">
                <p className="text-justify text-sm p-2 text-gray-500">
                  Explore the rich diversity of human cultures and societies
                  with our comprehensive Anthropology courses, tailored to
                  enhance your understanding of humanity's past and present.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Economics")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              2. Economics
              {dropdown === "Economics" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Economics" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                  Dive into the dynamics of markets, resources, and
                  decision-making with our in-depth Economics courses.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Education")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              3. Education
              {dropdown === "Education" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Education" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                  Shape the future of learning and teaching with our specialized
                  Education programs.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("English")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              4. English
              {dropdown === "English" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "English" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Discover the power of language, literature, and communication with our English courses.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Geography")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              5. Geography (For Arts Background ){" "}
              {dropdown === "Geography" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Geography" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Uncover the fascinating relationships between people, places, and environments in Geography.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("History")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              6. History
              {dropdown === "History" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "History" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Journey through time to explore the events, cultures, and ideas that shaped our world in History.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Mathematics")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              7. Mathematics (For Arts Background ){" "}
              {dropdown === "Mathematics" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Mathematics" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Sharpen your analytical skills and solve complex problems with Mathematics.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Manipuri")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              8. Manipuri
              {dropdown === "Manipuri" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Manipuri" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Delve into the rich language, literature, and culture of Manipuri.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Mizo")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              9. Mizo
              {dropdown === "Mizo" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Mizo" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Explore the vibrant traditions, language, and heritage of the Mizo people.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Political-Science")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              10. Political Science
              {dropdown === "Political-Science" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Political-Science" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Understand governance, politics, and global systems with Political Science.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Sociology")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              11. Sociology
              {dropdown === "Sociology" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Sociology" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Examine society's structures and dynamics to uncover patterns of human interaction in Sociology.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Statistics")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              12. Statistics
              {dropdown === "Statistics" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Statistics" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Master the art of data analysis and decision-making with Statistics.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex mt-12 lg:mt-0 flex-col items-start ">
          <h3 className="font-bold text-2xl pb-4">
            Bachelor of Science (B.Sc)
          </h3>
          <div className="flex flex-col gap-2 w-full lg:w-[500px] items-start ">
            <button
              onClick={() => handleDropdown("Anthropology-Science")}
              className="text-start flex gap-12 items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold whitespace-nowrap text-gray-600 w-full py-3"
            >
              1. Anthropology (For Science Background ){" "}
              {dropdown === "Anthropology-Science" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Anthropology-Science" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                  Explore the rich diversity of human cultures and societies
                  with our comprehensive Anthropology courses, tailored to
                  enhance your understanding of humanity's past and present.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Botany")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              2. Botany
              {dropdown === "Botany" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Botany" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Discover the wonders of plant life and their role in sustaining ecosystems in Botany.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Chemistry")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              3. Chemistry
              {dropdown === "Chemistry" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Chemistry" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Explore the elements of matter and their interactions in our Chemistry courses.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Economics-Science")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              4. Economics (For Science Background ){" "}
              {dropdown === "Economics-Science" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Economics-Science" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Dive into the dynamics of markets, resources, and decision-making with our in-depth Economics courses.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Geography-Science")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              5. Geography (For Science Background ){" "}
              {dropdown === "Geography-Science" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Geography-Science" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Uncover the fascinating relationships between people, places, and environments in Geography.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Mathematics-Science")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              6. Mathematics (For Science Background ){" "}
              {dropdown === "Mathematics-Science" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Mathematics-Science" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Sharpen your analytical skills and solve complex problems with Mathematics.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Physics")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              7. Physics
              {dropdown === "Physics" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Physics" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Unlock the mysteries of the universe through the principles of Physics.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Statistics-Science")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              8. Statistics (For Science Background ){" "}
              {dropdown === "Statistics-Science" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Statistics-Science" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Master the art of data analysis and decision-making with Statistics.
                </p>
              </div>
            )}
            <button
              onClick={() => handleDropdown("Zoology")}
              className="text-start flex items-center bg-white shadow-lg rounded-full border border-sky-300 px-4 justify-between font-semibold text-gray-600 w-full py-3"
            >
              9. Zoology
              {dropdown === "Zoology" ? (
                <FaChevronUp className="w-3 h-3" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
            {dropdown === "Zoology" && (
              <div className="max-w-xl">
                <p className="text-justify text-sm p-2 text-gray-500">
                Dive into the study of animals, their behavior, and ecosystems with Zoology.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Undergraduate;

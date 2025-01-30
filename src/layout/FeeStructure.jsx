import React, { useState } from "react";
import { Fa42Group } from "react-icons/fa6";
import { CgPerformance, CgReadme, CgRemote, CgSmartphoneChip } from "react-icons/cg";

const FeeStructure = () => {
  const [activeTab, setActiveTab] = useState(1); // Default active tab

  return (
    <div className="w-full h-auto px-24 pt-32">
        <h2 className="font-bold text-3xl md:text-2xl py-6 lg:text-3xl text-center">
            <span className="text-sky-500 font-medium ">Fee</span> Structure
          </h2>
      {/* Tabs */}
      <div className="flex w-full px-32 pt-12 justify-around">
        <div className="flex flex-col border">
          <button
            className={`px-4 flex items-center gap-4 py-3 flex-1 text-start border w-80 font-bold text-xl ${
              activeTab === 1 ? "bg-slate-100 text-red-600" : "text-black"
            }`}
            onClick={() => setActiveTab(1)}
          >
            <CgReadme className="w-9 h-9" />
            <div className="flex flex-col -gap-2">
            B.A <br />
            <span className="font-normal text-sm">(Bachelor of Arts)</span>
            </div>
            
          </button>
          <button
            className={`px-4 flex items-center gap-4 py-3 flex-1 text-start border w-80 font-bold text-xl ${
              activeTab === 2 ? "bg-slate-100 text-red-600" : "text-black"
            }`}
            onClick={() => setActiveTab(2)}
          >
            <CgSmartphoneChip className="w-9 h-9" />
            <div className="flex flex-col -gap-2">
            B.Sc <br />
            <span className="font-normal text-sm">(Bachelor of Science)</span>
            </div>
            
          </button>
          <button
            className={`px-4 flex items-center gap-4 py-3 flex-1 text-start border w-80 font-bold text-xl ${
              activeTab === 3 ? "bg-slate-100 text-red-600" : "text-black"
            }`}
            onClick={() => setActiveTab(3)}
          >
            <CgRemote className="w-9 h-9" />
            <div className="flex flex-col -gap-2">
            Others<br />
            
            </div>
            
          </button>
        </div>
        <div className="p-4 flex flex-col max-w-xl items-center">
        {activeTab === 1 && (
          <tbody className="animate-fadeIn">
            <tr className="">
            <th className="border bg-gray-100 px-10 w-44 py-4 text-left text-sm font-semibold text-gray-700">
                Sl no.
              </th>
              <th className="border bg-gray-100 px-10 w-44 py-4 text-left text-sm font-semibold text-gray-700">
                Category
              </th>
              <th className="border bg-gray-100 px-10 w-44 py-4 text-left text-sm font-semibold text-gray-700">
                Fee (Rs.)
              </th>
            </tr>
            <tr>
              <td className="border px-10 w-44 py-4 text-left text-sm">
                1
              </td>
              <td className="border px-10 w-44 py-4 text-left text-sm">
                ST/SC
              </td>
              <td className="border px-10 w-44 py-4 text-left text-sm">
                Rs. 5,380
              </td>
            </tr>
            <tr>
          <td className="border px-10 w-44 py-4 text-left text-sm">
              2
            </td>
            <td className="border px-10 w-44 py-4 text-left text-sm">
              GENERAL
            </td>
            <td className="border px-10 w-44 py-4 text-left text-sm">
              Rs. 5,880
            </td>
          </tr>
          </tbody>
        )}
        {activeTab === 2 && (
          <tbody className="animate-fadeIn">
          <tr className="">
          <th className="border bg-gray-100 px-10 w-44 py-4 text-left text-sm font-semibold text-gray-700">
              Sl no.
            </th>
            <th className="border bg-gray-100 px-10 w-44 py-4 text-left text-sm font-semibold text-gray-700">
              Category
            </th>
            <th className="border bg-gray-100 px-10 w-44 py-4 text-left text-sm font-semibold text-gray-700">
              Fee (Rs.)
            </th>
          </tr>
          <tr>
            <td className="border px-10 w-44 py-4 text-left text-sm">
              1
            </td>
            <td className="border px-10 w-44 py-4 text-left text-sm">
              ST/SC
            </td>
            
            <td className="border px-10 w-44 py-4 text-left text-sm">
              Rs. 6,150
            </td>
          </tr>
          <tr>
          <td className="border px-10 w-44 py-4 text-left text-sm">
              2
            </td>
            <td className="border px-10 w-44 py-4 text-left text-sm">
              GENERAL
            </td>
            <td className="border px-10 w-44 py-4 text-left text-sm">
              Rs. 6,650
            </td>
          </tr>
        </tbody>
        )}
        {activeTab === 3 && (
          <tbody className="">
          <tr className="">
          <th className="border bg-gray-100 px-10 w-44 py-4 text-left text-sm font-semibold text-gray-700">
              Sl no.
            </th>
            <th className="border bg-gray-100 px-10 w-44 py-4 text-left text-sm font-semibold text-gray-700">
              Category
            </th>
            <th className="border bg-gray-100 px-10 w-44 py-4 text-left text-sm font-semibold text-gray-700">
              Fee (Rs.)
            </th>
          </tr>
          <tr>
            <td className="border px-10 w-44 py-4 text-left text-sm">
              1
            </td>
            <td className="border px-10 w-44 py-4 text-left text-sm">
              ST/SC
            </td>
            
            <td className="border px-10 w-44 py-4 text-left text-sm">
              Rs. 0000
            </td>
          </tr>
          <tr>
          <td className="border px-10 w-44 py-4 text-left text-sm">
              2
            </td>
            <td className="border px-10 w-44 py-4 text-left text-sm">
              GENERAL
            </td>
            <td className="border px-10 w-44 py-4 text-left text-sm">
              Rs. 0000
            </td>
          </tr>
        </tbody>
        )}
      </div>
      </div>

      {/* Tab Content */}
      
    </div>
  );
};

export default FeeStructure;

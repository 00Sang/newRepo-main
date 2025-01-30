import React from "react";
import Footer2 from "./Footer2";

const AdmissionProcess = () => {
  return (
    <div className="bg-gray-50 text-gray-800 pt-28">
      {/* Header Section */}
      <div className="bg-white shadow lg:px-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-sky-700">Admission Process</h1>
          <p className="mt-4 text-lg leading-relaxed">
            Bennett University's Admission process is a comprehensive,
            multi-stage journey designed to ensure transparency and efficiency.
            Admission to Bennett University is strictly transparent,
            merit-based, and offers generous Academic/Merit-Based scholarships
            to exceptional and deserving students.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            The process is designed to provide individual attention to each
            applicant, from the application to the registration stage. The
            application is considered based on the student’s performance in
            their X/XII school examinations/Graduation Results (for Distance
            Courses)/personal interviews, depending on the program(s).
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Our Admission Officers are available in multiple cities across the
            country.
          </p>
        </div>
      </div>

      {/* Steps Section */}

      <div className="container mx-auto lg:px-20 py-8 bg-slate-200">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 mt-6">
          Important steps for taking Admission at Churachandpur College
        </h2>
        <div className="space-y-10 bg-white p-6">
          {/* Step 1 */}
          <div className="flex items-start space-x-4 border-b">
            <span className="text-lg font-bold text-red-500">01</span>
            <div>
              <h3 className="text-xl font-semibold">
                Fill the Application Form
              </h3>
              <p className="text-lg">
                All applications must be made through Bennett University’s
                website at{" "}
                <a
                target="_blank"
                  href="http://churachandpurcollege.edu.in/"
                  className="text-sky-500 underline"
                >
                  http://churachandpurcollege.edu.in/
                </a>
                . The application form fee is non-refundable.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4 border-b">
            <span className="text-lg font-bold text-red-500">02</span>
            <div>
              <h3 className="text-xl font-semibold">Submission of Scores</h3>
              <p className="text-lg">
                Upload scores inside the application form immediately within 7
                days of the declaration of results.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4 border-b">
            <span className="text-lg font-bold text-red-500">03</span>
            <div>
              <h3 className="text-xl font-semibold">
                Shortlisting based on Selection Process
              </h3>
              <p className="text-lg">
                Selection process followed will be as per the program(s) applied
                by the candidate.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start space-x-4 border-b">
            <span className="text-lg font-bold text-red-500">04</span>
            <div>
              <h3 className="text-xl font-semibold">
                Offer of Admission Letter
              </h3>
              <p className="text-lg">
                The selected candidate shall be sent provisional admission offer
                letter along with important guidelines on registered e-mail ids.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-start space-x-4 border-b">
            <span className="text-lg font-bold text-red-500">05</span>
            <div>
              <h3 className="text-xl font-semibold">Pay Fee</h3>
              <p className="text-lg">
                Payment of fee as per the date specified in the provisional
                admission offer letter. Students can opt for Hostel and
                transport at this stage.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex items-start space-x-4 border-b">
            <span className="text-lg font-bold text-red-500">06</span>
            <div>
              <h3 className="text-xl font-semibold">Commencement of Classes</h3>
              <p className="text-lg">
                Classes will commence by the first week of July/August 2025.
                <br />
                Guidelines for the same will be issued separately in advance by
                the Registrar’s Office.
              </p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="flex items-start space-x-4 border-b">
            <span className="text-lg font-bold text-red-500">07</span>
            <div>
              <h3 className="text-xl font-semibold">Registration</h3>
              <p className="text-lg">
                The online registration process will start in July 2025. The
                Registrar’s Office will share a detailed step-by-step schedule
                in advance on the student’s registered email id.
                <br />
                Document verification, Residence Fee Payment, and Hostel
                Allocation will be done at the time of registration.
                <br />
                For further guidance/queries, prospective applicants may contact
                Admission Helpline:{" "}
                <span className="text-red-500">1800-103-8484</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default AdmissionProcess;

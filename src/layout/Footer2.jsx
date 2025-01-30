import React from 'react';
import { Link } from 'react-router-dom';

const Footer2 = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-10 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Contact Us */}
        

        {/* Admission */}
        <div>
          <h3 className="text-lg font-bold mb-4">ADMISSION</h3>
          <ul className="space-y-1">
            <li className='border-b py-1 w-full border-gray-600'><Link to="/application-form" className="hover:underline  text-sm">» Application Form</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/admission-process" className="hover:underline text-sm">» Admission Process</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/fee-structure" className="hover:underline text-sm">» Fee Structure</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/fee-payment" className="hover:underline text-sm">» Fee Payment AY 2025-26</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/fee-other-payments" className="hover:underline text-sm">» Fee/Other Payments</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/faqs" className="hover:underline text-sm">FAQs</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/regional-offices" className="hover:underline text-sm">» Regional Offices</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/download-brochure" className="hover:underline text-sm">» Download Brochure</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/placement" className="hover:underline text-sm">» Placement</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/education-loan" className="hover:underline text-sm">» Education Loan</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/enquire-now" className="hover:underline text-sm">» Enquire Now</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/refund-policy" className="hover:underline text-sm">» Refund Policy AY 2024-25</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-bold mb-4">PROGRAMS</h3>
          <ul className="space-y-1">
            <li className='border-b py-1 w-full border-gray-600'><Link to="/btech-cse" className="text-sm">» B.Tech CSE</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/btech-ep" className="text-sm">» B.Tech EP</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/btech-ece" className="text-sm">» B.Tech ECE</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/btech-biotech" className="text-sm">» B.Tech Biotech</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/bca" className="text-sm">» BCA</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/bba" className="text-sm">» BBA</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/ba-mass-communication" className="text-sm">» BA Mass Communication</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/ba-liberal-arts" className="text-sm">» BA Liberal Arts</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/bba-llb" className="text-sm">» BBA LLB (Hons)</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/ba-llb" className="text-sm">» BA LLB (Hons)</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/llm" className="text-sm">» LL.M.</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/mba" className="text-sm">» MBA</Link></li>
            <li className='border-b py-1 w-full border-gray-600'><Link to="/phd" className="text-sm">» PhD</Link></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">IMPORTANT LINKS</h3>
          <ul className="space-y-2">
            <li><Link to="/office-registrar" className="hover:underline text-sm">» The Office of The Registrar</Link></li>
            <li><Link to="/examination-department" className="hover:underline text-sm">» Examination Department</Link></li>
            <li><Link to="/internal-quality-assurance" className="hover:underline text-sm">» Internal Quality Assurance Cell</Link></li>
            <li><Link to="/ordinances" className="hover:underline text-sm">» Ordinances, Statutes & Act</Link></li>
            <li><Link to="/ugc-approval" className="hover:underline text-sm">» University Grants Commission Approval</Link></li>
            <li><Link to="/bar-council" className="hover:underline text-sm">» Bar Council of India Approvals</Link></li>
            <li><Link to="/anti-ragging" className="hover:underline text-sm">» National Anti-Ragging Helpline</Link></li>
            <li><Link to="/sexual-harassment" className="hover:underline text-sm">» Sexual Harassment Grievance</Link></li>
            <li><Link to="/student-grievance" className="hover:underline text-sm">» Student Grievance Redressal Portal</Link></li>
            <li><Link to="/staff-details" className="hover:underline text-sm">» Staff Details</Link></li>
            <li><Link to="/mandatory-disclosure" className="hover:underline text-sm">» Mandatory Disclosure</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline text-sm">» Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <ul className="space-y-2">
            {/* <li><Link to="/google-map" className="hover:underline text-sm">Google Map</Link></li> */}
            <li className='text-sm'>» Lamka CCpur</li>
            <li><a href="mailto:admissions@bennett.edu.in" className="hover:underline text-sm">» admissions@ccpur-college.edu.in</a></li>
            <li><a href="mailto:info@bennett.edu.in" className="hover:underline text-sm">» info@ccpur-college.edu.in</a></li>
            <li className='text-sm'>
            » Admission Queries Toll Free: <a href="tel:18001038484" className="hover:underline text-sm"> 1800-103-8484</a>
              <br className='text-sm' />» Helpline Time: 10:00 AM - 6:00 PM (Monday-Sunday)
            </li>
            <li className='text-sm'>» General Queries: <a href="tel:01207199300" className="hover:underline text-sm">0120-7199300</a></li>
            <li><Link to="/telephone-directory" className="hover:underline text-sm">» Telephone Directory</Link></li>
            {/* <li><Link to="/sitemap" className="hover:underline text-sm">Sitemap</Link></li> */}
          </ul>
          <div className="mt-10 flex items-start flex-col text-center">
        <h3 className="text-lg font-bold">NEWSLETTER</h3>
        <p className="mt-2 text-start">Sign up your mailing list to get latest updates and offers.</p>
        <form className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-2 rounded-l-md border border-gray-400 focus:outline-none"
          />
          <button className="p-2 bg-red-500 text-white rounded-r-md hover:bg-red-600">&rarr;</button>
        </form>
      </div>
        </div>
        
      </div>
      
    </footer>
  );
};

export default Footer2;

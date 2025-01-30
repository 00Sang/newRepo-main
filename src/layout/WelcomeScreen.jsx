import React from "react";

const WelcomeScreen = () => {
  return (
    <div className="w-full h-auto py-6 lg:py-14 px-6  flex flex-col items-center justify-center space-y-6">
      <h2 className="font-bold text-center text-xl md:text-2xl lg:text-3xl">
          <span className="text-sky-500 font-medium">Welcome</span> to Churachandpur College
        </h2>
      <p className="w-full text-justify text-sm lg:max-w-5xl text-gray-700 font-light md:text-lg opacity-90 hover:opacity-100 transition-opacity duration-300">
        The dream of Churachandpur College, one of the premier institutions of
        higher education in Manipur State, began to take shape when Mr. S.
        Pauneikhai Vaiphei and Dr. T.S. Gangte formed its first Governing Body
        of the College on November 30, 1964 as the founder Chairman and the
        founder Principal/Secretary respectively. In the same year, the College
        was opened and affiliated to the University of Gauhati. In 1977, the
        Government of Manipur, Department of Higher Education superseded the
        erstwhile Governing Body and took over the College, followed by the
        transfer of affiliation in 1981 when the State had its own University.
      </p>
    </div>
  );
};

export default WelcomeScreen;

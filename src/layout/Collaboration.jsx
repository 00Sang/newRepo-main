import React from 'react';

const Collaboration = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl text-center pb-8">
          <span className="text-sky-500 font-medium">Academic</span> Collaboration
        </h2>

      <div className="grid gap-6 px-4 md:px-12 lg:px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Image 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://www.cnu.org/sites/default/files/styles/public_square_feature_image/public/BostonCollege1.jpg?itok=iKc35HST"
            alt="Collaboration 1"
            className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">Collaboration 1</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/b8a356f8325aa0d7b4d6b8bd7678f52702b1e00d8fb450ca161e3f97167e01ef._SX1080_FMjpg_.jpg"
            alt="Collaboration 2"
            className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">Collaboration 2</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://cdn.britannica.com/03/130603-050-37F7F535/Alliman-Administration-Center-Hesston-College-Mennonite-college.jpg"
            alt="Collaboration 3"
            className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">Collaboration 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;

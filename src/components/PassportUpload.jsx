import React, { useState } from 'react';
import passport from "../assets/passport.jpg";

const PassportUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='bg-gray-100 shadow-md w-32'>
      <div className='border border-gray-300 overflow-hidden'>
        <img 
          src={uploadedImage || passport} 
          alt="Passport" 
          className='object-contain w-full h-58' 
        />
      </div>
      <div className=' flex flex-col justify-center items-center'>
        <label 
          htmlFor="image-upload" 
          className='block text-xs font-medium text-gray-700 mb-2'>
          Upload a New Photo
        </label>
        <input 
          type="file" 
          id="image-upload" 
          accept="image/*" 
          onChange={handleImageChange} 
          className='hidden' 
        />
        <label 
          htmlFor="image-upload" 
          className='inline-block text-xs px-4 text-center bg-blue-500 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none'>
          Choose Image
        </label>
      </div>
    </div>
  );
};

export default PassportUpload;
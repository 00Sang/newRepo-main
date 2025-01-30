import React from "react";

const InputField = ({ label, type, value, onChange, placeholder, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="font-normal text-sm py-1">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
      />
    </div>
  );
};

export default InputField;

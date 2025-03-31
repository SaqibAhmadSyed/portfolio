"use client";
import React from "react";

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/Saqib_Ahmad_Syed_CV.pdf";
    link.download = "Saqib_Ahmad_Syed_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-1 py-1 rounded-full w-full sm:w-[200px] mr-4 transition ease-in-out 
             bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 mt-3 hover:-translate-y-1"
    >
      <span className="block bg-[#121212] text-white rounded-full px-5 py-2 w-full">
        Download CV
      </span>
    </button>

  );
};

export default DownloadButton;

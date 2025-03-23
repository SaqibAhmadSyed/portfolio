import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-500 bg-[#121212] text-center">
      <div className="footer text-white">
        <div className="p-10 ">
        <p className="text-[#adb7be] ml-auto"> © {new Date().getFullYear()} Saqib Ahmad Syed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

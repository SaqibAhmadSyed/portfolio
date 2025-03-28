import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-500 text-center">
      <div className="footer w-full text-white">
        <div className="p-10">
          <p className="text-[#adb7be] ml-auto">© {new Date().getFullYear()} Saqib Ahmad Syed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

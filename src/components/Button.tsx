import React from "react";

interface ButtonProps {
  text: string;
  cb?: () => void;
  href: string;
  isDownload?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, cb, href ,isDownload}) => {
  return (
    <div className=" flex justify-center items-center mt-12">
      <div className="relative inline-flex group">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#705ee1] to-[#5e99ff] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
        <a
          href={href}
          onClick={(e) => {
            if (cb) {
              e.preventDefault(); 
              cb();
            }
          }}
          download={isDownload ? true : false}
          className="relative inline-flex items-center justify-center px-12 py-4 text-2xl font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          {text}
        </a>
       
      </div>
    </div>
  );
};

export default Button;

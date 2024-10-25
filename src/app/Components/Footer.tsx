import React from "react";

const Footer = () => {
  return (
    <div className="my-16 w-full flex flex-col items-center gap-4 px-4 md:px-8">
      <div className="flex justify-center gap-4 md:gap-5">
        <a
          href="https://www.facebook.com/profile.php?id=100084760552740&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#21243D]"
        >
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6 md:w-7 md:h-7"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a
          href="https://x.com/Huzai_fa123?s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#21243D]"
        >
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6 md:w-7 md:h-7"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/__.zefa.__?igsh=a2J4a3dvcWF2Njg5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#21243D]"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6 md:w-7 md:h-7"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#21243D]"
        >
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0"
            className="w-6 h-6 md:w-7 md:h-7"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </div>
      <div className="text-center font-semibold text-sm md:text-base">
        ©2024 All rights reserved
      </div>
    </div>
  );
};

export default Footer;

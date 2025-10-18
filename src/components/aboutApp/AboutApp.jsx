import React from "react";

const AboutApp = () => {


  return (
    <div className="fixed z-[999999] w-screen h-screen bg-[#161616] p-4 flex flex-col justify-between select-none">

      {/* Background effects */}
      <div className="absolute bg-white blur-2xl -left-10 rotate-18 -z-1 -top-10 w-[70vh] h-70"></div>
      <div className="absolute bg-blue-300 blur-2xl -left-10 rotate-18 -z-1 top-38 w-[70vh] h-20"></div>
      <div className="absolute bg-blue-500 blur-2xl -left-10 rotate-18 -z-1 top-50 w-[70vh] h-20"></div>
      <div className="absolute bg-blue-600 blur-2xl -left-10 rotate-18 -z-1 top-65 w-[70vh] h-20"></div>
      <div className="absolute bg-blue-700 blur-2xl -left-10 rotate-18 -z-1 top-80 w-[70vh] h-20"></div>
      <div className="absolute bg-blue-900 blur-2xl -left-10 rotate-18 -z-1 top-94 w-[70vh] h-20"></div>
      <div className="absolute move bg-[#161616] blur-[5vh] rounded-full -left-40 -z-1 top-70 w-90 h-70"></div>
      <div className="absolute bg-[#161616] blur-2xl -left-40 rotate-18 -z-10 top-110 w-[90vh] h-full"></div>

      <h1 className="font-bold text-[#161616]/80 mr-12 text-[2.2vh]">An.Yaps®</h1>

      <div>
        <h1 className="text-[11vh] leading-[9vh] mb-4 font-bold tracking-tight">
          Discover. <br />
          Trade. <br />
          Achieve.
        </h1>
        <p className="leading-4 opacity-50 tracking-tight text-[2vh]">Master Stock Market on our advanced exchange platform.</p>

        <div className="btn relative bg-gradient-to-r from-blue-100 via-blue-500 to-blue-950 w-full h-15 rounded-full flex items-center mt-6 border border-white/70 cursor-pointer
        active:scale-90 transition-all duration-200 active:brightness-85 select-none" onClick={() => {}} >

          <h1 className="ml-8 text-[2vh] font-bold text-[#161616]/70">Let's start</h1>

          <div className="absolute right-[-0.1vh] bg-[#161616] h-full w-15 flex justify-center items-center rounded-full border border-white/70">
            <img src="icons/link.png" className="w-12 h-full p-3 opacity-80" alt="link" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutApp;

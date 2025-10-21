import React from "react";

const Login = ({ later }) => {

  const appleLogin = () => {
    console.log("Apple login clicked");
  };

  const googleLogin = () => {
    console.log("Google login clicked");
  };

  const emailLogin = () => {
    console.log("Email login clicked");
  };

  const maybeLater = () => {
    console.log("Maybe Later");
  };

  const loginBtn = [
    { img: 'apple.login.png', label: 'Continue with Apple', fun: appleLogin },
    { img: 'google.png', label: 'Continue with Google', fun: googleLogin },
    { label: 'Continue with Email', fun: emailLogin },
  ];


  return (
    <div className="fixed z-[999998] w-screen h-screen bg-[#161616] p-4 px-2 flex flex-col justify-between">

      {/* Background effects */}
      <div className="fixed -z-1">
        <div className="absolute bg-white blur-2xl -left-10 rotate-18 -z-1 -top-12 w-[80vh] h-80"></div>
        <div className="absolute bg-blue-300 blur-2xl -left-10 rotate-18 -z-1 top-38 w-[70vh] h-20"></div>
        <div className="absolute bg-blue-500 blur-2xl -left-10 rotate-18 -z-1 top-50 w-[70vh] h-20"></div>
        <div className="absolute bg-blue-600 blur-2xl -left-10 rotate-18 -z-1 top-65 w-[70vh] h-20"></div>
        <div className="absolute bg-blue-700 blur-2xl -left-10 rotate-18 -z-1 top-80 w-[70vh] h-20"></div>
        <div className="absolute bg-blue-900 blur-2xl -left-10 rotate-18 -z-1 top-94 w-[70vh] h-20"></div>
        <div className="absolute move bg-[#161616] blur-[5vh] rounded-full -left-40 -z-1 top-70 w-90 h-70"></div>
        <div className="absolute bg-[#161616] blur-2xl -left-40 rotate-18 -z-10 top-110 w-[90vh] h-full"></div>
      </div>

      <div className="Skip pr-2 flex flex-col items-end space-y-[-1vh]">
        <h1 className="text-[2vh] text-[#161616]/80 mr-2 tracking-tight active:scale-90 transition-all duration-150 ease-in-out font-bold cursor-pointer" onClick={later}>Skips</h1>
      </div>

      <div className="Login-Section bg-[#161616/90 rounded-3xl p-6 pb-4">
        <h1 className="text-[6vh] tracking-tighter leading-12">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200  to-blue-600">An.Yasps.</span></h1>

        <div className="Logins space-y-3 mt-7">

          {loginBtn.map((btn, i) => (
            <div key={i} className="btn relative bg-gradient-t bg-white text-[#161616] w-full h-14 rounded-full flex justify-center items-center
              border border-white/30 cursor-pointer active:scale-92 transition-all duration-200 active:brightness-85 space-x-3"
              onClick={btn.fun}
            >
              {btn.img && (
                <img src={`icons/${btn.img}`} className={`w-6 h-6 opacity-80" alt="icon ${btn.img === 'apple.login.png' ? 'mix-blend-difference' : ''}`} />
              )}
              <h1 className="text-[2vh] font-bold">{btn.label}</h1>
            </div>
          ))}
        </div>

        <div className="Maybe-Later flex justify-center items-center opacity-60 mt-4 mb-2">
          <p className="cursor-pointer active:scale-94 transition-all duration-150 ease-in-out underline" onClick={later}>Maybe later</p>
        </div>

      </div>



    </div>
  );
};

export default Login;

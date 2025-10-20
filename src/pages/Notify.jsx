import React from "react";

const Notify = ({ close }) => {
  return (
    <div className="relative w-full h-full flex flex-col">

      <div className="flex justify-between items-start opacity-90 ">
        <h1 className="text-4xl tracking-tighter mb-3 font-bold">Notifications</h1>
        <img onClick={close} src="icons/close.png" className="cursor-pointer w-4 mr-2 mt-4"/>
      </div>

      <div className="w-full h-69 border border-white/20 rounded-3xl flex justify-center items-center p-4">
        <h1 className="opacity-20 tracking-tight font-bold">No Notifications</h1>
      </div>

    </div>
  );
};

export default Notify;

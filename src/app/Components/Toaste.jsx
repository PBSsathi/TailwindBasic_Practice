"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toaste() {
  const notify = () => {
    toast.success("Hello!");
  };

  return (
    <>
      <button onClick={notify} className="bg-blue-500 w-50 border justify-center border-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Toast Click
      </button>
      <ToastContainer />
    </>
  );
}
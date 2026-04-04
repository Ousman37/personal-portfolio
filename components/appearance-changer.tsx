"use client" //🚀
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '@/context/appearance-context'; // Import the useTheme hook

const AppearanceChanger = () => {
  const { theme, toggleTheme } = useTheme(); // Use the useTheme hook to access the context values

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsSun />
      ) : (
        <BsMoon />
      )}
    </button>
  );
};

export default AppearanceChanger;



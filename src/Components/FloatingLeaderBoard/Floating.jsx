import React from 'react';
import { AiOutlineUsergroupAdd } from "react-icons/ai"
const FloatingButton = ({ setIsModalOpen, isModalOpen }) => {
  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg"
        onClick={handleClick}
      >
        <AiOutlineUsergroupAdd size={24} />
      </button>
    </div>
  );
};

export default FloatingButton;

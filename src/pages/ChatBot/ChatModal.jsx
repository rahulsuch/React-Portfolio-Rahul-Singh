import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import ChatBot from "./ChatBot";

const ChatModal = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-[#1a1a1a] rounded-lg p-4 w-[90%] max-w-md h-[85vh] flex flex-col justify-between shadow-2xl relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500"
        >
          <FaTimes size={18} />
        </button>

        {/* ChatBot Body */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          💬 Ask Me Anything
        </h2>
        <div className="flex-1 overflow-hidden">
          <ChatBot />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChatModal;
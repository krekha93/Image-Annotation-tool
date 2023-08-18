import React from "react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-8 rounded shadow-lg w-1/4 h-80">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Project Name
            </label>
            <input
              type="text"
              className="mt-1 px-2 py-1 border rounded w-full"
              placeholder="Enter project name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              className="mt-1 px-2 py-1 border rounded w-full"
              placeholder="Enter project description"
            />
          </div>
          <div className="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Label Type
            </label>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="default">Choose a Label</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Youtube">Youtube</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Whatsapp">Whatsapp</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
        {/* <button
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default Modal;

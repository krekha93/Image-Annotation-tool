import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex h-screen ">
      <div className=" w-64 flex-shrink-0">
        <nav className="mt-3 ml-20">
          <ul>
            <li className="p-3 text-black hover:bg-gray-200"></li>
            <li className="p-3 text-black hover:bg-gray-200">
              <a href="#" className="block">
                Dataset
              </a>
            </li>
            <li className="p-3 text-black hover:bg-gray-200">
              <a href="#" className="block">
                Annotation Browser
              </a>
            </li>

            <li className="p-3 text-black hover:bg-gray-200">
              <a href="#" className="block">
                Inference
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

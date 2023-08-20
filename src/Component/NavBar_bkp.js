import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center ml--5">
            {" "}
            {/* Flex container for logo and text */}
            <img
              src="/Favicon/br3.jpg"
              className="h-20 w-30 ml- 3 mr-3"
              alt=""
            />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              Image Annotation tool
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import img from "../../../images/nonLivePage/RightComponent/Arrow.png";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    "싱글",
    "멀티",

    // Add more options as needed
  ];

  return (
    <div
      style={{ background: "#ffffff", width: "86px" }}
      className="relative items-center justify-between rounded-lg "
    >
      <button
        type="button"
        className="flex items-center justify-between focus:outline-none"
        onClick={toggleDropdown}
      >
        <p className="text-12px ml-9px mt-9px mb-7px">
          {" "}
          {selectedOption || "싱글"}{" "}
        </p>
        <img
          src={img}
          className={`ml-31px  mr-10px transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          //   fill="currentColor"
          //   viewBox="0 0 20 20"
        />
        {/* <path fillRule="evenodd" d="M6 8l4 4 4-4" /> */}
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;

// import React, { useState } from 'react';

// const CustomDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   const options = [
//     'Option 1',
//     'Option 2',
//     'Option 3',
//     // Add more options as needed
//   ];

//   return (
//     <div className="relative">
//       <button
//         type="button"
//         className="py-2 px-4 bg-gray-200 rounded-md text-gray-800 font-semibold flex items-center justify-between w-full focus:outline-none"
//         onClick={toggleDropdown}
//       >
//         {selectedOption || 'Select an option'}
//         <svg
//           className={`h-5 w-5 ml-2 transition-transform duration-300 ${
//             isOpen ? 'transform rotate-180' : ''
//           }`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path
//             fillRule="evenodd"
//             d="M6 8l4 4 4-4"
//           />
//         </svg>
//       </button>

//       {isOpen && (
//         <ul className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg">
//           {options.map((option) => (
//             <li
//               key={option}
//               className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
//               onClick={() => handleOptionSelect(option)}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CustomDropdown;

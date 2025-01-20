import React, { useState } from "react";
import { Button } from "./Button";

const DropdownButton = ({ cities, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(cities[0] || "Select a City");

  const handleSelect = (city) => {
    setSelectedCity(city);
    onSelect(city); // Trigger callback when a city is selected
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      
        <Button className={"inline-flex justify-between"} onClick={() => setIsOpen(!isOpen)}>
        {selectedCity}
        <svg
          className={`w-5 h-5 ml-2 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        </Button>
      {isOpen && (
        <div className="absolute left-0 z-10 w-32 mt-2 origin-top-right bg-transparent backdrop-blur-lg border  border-gray-500 rounded-md ">
          <ul>
            {cities.map((city, index) => (
              <li key={index}>
                <Button onClick={() => handleSelect(city)}> {city} </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

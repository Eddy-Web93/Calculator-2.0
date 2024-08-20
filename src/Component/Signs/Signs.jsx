import React from 'react';
import './Signs.css';

const Signs = ({ display, setDisplay }) => {
  const svgBackSpace = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
      <path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z"/>
    </svg>
  );

  const svgPercent = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
      <path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z"/>
    </svg>
  );

  const svgEquals = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
      <path d="M160-280v-120h640v120H160Zm0-280v-120h640v120H160Z"/>
    </svg>
  );

  const arraySigns = [
    "C", svgBackSpace, svgPercent, "/", 7, 8, 9, '*', 4, 5, 6, "-", 1, 2, 3, "+", ",", 0, ".", svgEquals
  ];

  const operation = (item) => {
    if (item === "C") {
      // Clear the display
      setDisplay("");
    } else if (item === svgEquals) {
      // Evaluate the expression, handling percentages as well
      try {
        // If the display contains a percentage sign, handle the calculation
        if (display.includes("%")) {
          const [number, _] = display.split("%");
          setDisplay(eval(`${number/100}`)); // Convert percentage to decimal
        } else {
          setDisplay(eval(display));
        }
      } catch (error) {
        setDisplay("Error");
      }
    } else if (item === svgBackSpace) {
      // Remove the last character from the display
      setDisplay(display.slice(0, -1));
    } else if (item === svgPercent) {
      // Append the percentage sign to the display
      setDisplay(display + "%");
    } else {
      // Append the clicked item to the display
      setDisplay(display + item);
    }
  };

  return (
    <div className='signs'>
      {arraySigns.map((item, index) => {
        return (
          <button key={index} onClick={() => operation(item)} className='btn'>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Signs;
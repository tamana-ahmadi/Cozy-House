import { useState } from "react";
import "./dropdown.css"; 
import { RiMenu3Fill } from "react-icons/ri";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown state
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {/* Button to toggle the dropdown */}
        <RiMenu3Fill />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
             <li>About the shelter</li>
             <li>Our pets</li>
             <li>Help the shelter</li>
             <li>Contacts</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
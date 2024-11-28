import React, { useState } from 'react';

interface DropdownType{
    title: string, 
    children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownType) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <h4>{title}</h4>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Dropdown;

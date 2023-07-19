import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Day from './graph/Day';
import Month from './graph/Month';
import Year from './graph/Year';
const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case 'optionA':
        return <Day />;
      case 'optionB':
        return <Month/>;
      case 'optionC':
        return <Year />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Select an option
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleOptionSelect('optionA')}>
            Option A
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect('optionB')}>
            Option B
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect('optionC')}>
            Option C
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {renderComponent()}
    </div>
  );
};

export default DropdownMenu;

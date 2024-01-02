import React from 'react'
import CustomSelect5 from './SelectNew';

function TestLima() {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
  return (
    <div>
        <CustomSelect5 options={options} >
            
        </CustomSelect5>
    </div>
  )
}

export default TestLima
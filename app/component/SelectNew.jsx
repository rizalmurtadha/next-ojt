// import React, { Component } from "react";
// import Select from "@mui/material/Select";
// import { FixedSizeList as List } from "react-window";

// const options = [
//   { value: "option1", label: "Option 1" },
//   { value: "option2", label: "Option 2" },
//   { value: "option3", label: "Option 3" },
//   { value: "option4", label: "Option 4" },
//   { value: "option5", label: "Option 5" },
//   { value: "option6", label: "Option 6" },
//   { value: "option7", label: "Option 7" },
//   { value: "option8", label: "Option 8" },
//   { value: "option9", label: "Option 9" },
//   { value: "option10", label: "Option 10" },
//   { value: "option11", label: "Option 11" },
//   { value: "option12", label: "Option 12" },
//   { value: "option13", label: "Option 13" },
//   { value: "option14", label: "Option 14" },
//   { value: "option15", label: "Option 15" },
//   { value: "option16", label: "Option 16" },
//   { value: "option17", label: "Option 17" },
//   { value: "option18", label: "Option 18" },
//   { value: "option19", label: "Option 19" },
//   { value: "option20", label: "Option 20" },
// ];

// const height = 35;

// class MenuList extends Component {
//   render() {
//     const { options, children, maxHeight, getValue } = this.props;
//     const [value] = getValue();
//     const initialOffset = options.indexOf(value) * height;

//     return (
//       <List
//         height={maxHeight}
//         itemCount={children.length}
//         itemSize={height}
//         initialScrollOffset={initialOffset}
//       >
//         {({ index, style }) => <div style={style}>{children[index]}</div>}
//       </List>
//     );
//   }
// }

// export const CustomSelectNew = () => (
//   <Select
//     components={{ MenuList }}
//     options={options}
//     isMulti
//     closeMenuOnSelect={false}
//   />
// );

// =========================================================================
// import { FixedSizeList } from 'react-window';
// import { ListboxOption } from '@mui/material';

// function SelectNew({ options }) {
//   const handleChange = (event, value) => {
//     // onChange(value);
//     console.log("clicked");
//   };

//   const renderOption = (option) => (
//     <ListboxOption key={option.nopend} value={option.nopend}>
//       {option.nopend}
//     </ListboxOption>
//   );
  
//   const renderRowsad = ({ index, style }) => {
//     const option = options[index];
//     return renderOption(option);
//   };

//   return (
//     <FixedSizeList
//       height={400}
//       width={300}
//       itemSize={50}
//       itemCount={options.length}
//       onSelectionChange={handleChange}
//     >
//       {renderRowsad}
//     </FixedSizeList>
//   );
// }

// export default SelectNew

// =============================================================================
import React from 'react';
import { Select } from '@mui/material';
import { FixedSizeList } from "react-window";
import { CustomFormControlSelect, CustomSelect, CustomGridLabel } from './Styles'

import { ListboxOption, useMediaQuery, InputLabel, MenuItem, Grid } from '@mui/material';


const CustomSelect5 = ({ options, ...props }) => {
  const [selectedValue, setSelectedValue] = React.useState(null);

  const handleSelectionChange = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
  };

  const renderOptions = ({ index, style }) => {
    const option = options[index];
    return (
      <MenuItem key={option.value} value={option.value} style={style}>
        {option.label}
      </MenuItem>
    );
  };

  const isLargeScreen = useMediaQuery('(min-width:600px)');

  return (
    <Grid container spacing={0}>
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={5}
            >
                <p>label<span>:</span></p>
            </CustomGridLabel>
            <Grid item xs={12} sm={7}>
                <CustomFormControlSelect variant='outlined'>
                    <InputLabel id="select-label">label</InputLabel>
                    <CustomSelect
                        inputProps={{MenuProps: {disableScrollLock: true}}}
                        labelId="select-label"
                        id="select-label"
                        displayEmpty={isLargeScreen}
                        label={isLargeScreen ? "" : "label"}
                        closeMenuOnSelect={true}
                        placeholder='test'
                        
                        // onChange={handleOptionChange}
                        // name={name}
                        // value={selectedOption}
                    >
                        <FixedSizeList
                        height={400}
                        // width={300}
                        itemSize={50}
                        itemCount={options.length}
                        closeMenuOnSelect={true}
                        
                        >
                        {
                            ({ index, style }) => {
                                const option = options[index];
                                return (
                                <MenuItem key={options[index].nopend} value={options[index].nopend} style={style} >
                                    {options[index].nama_kantor}
                                </MenuItem>
                                )
                            }
                        }
                        </FixedSizeList>
                    </CustomSelect>
                </CustomFormControlSelect>
            </Grid>
        </Grid>
    
    
  );
};

export default CustomSelect5;

// =================================================================================
// import { FixedSizeList as List } from "react-window";
// import { useState } from "react";

// export const SelectApp = ({datas}) => {
//   const [data, setData] = useState(() =>
//     // Array.from({ length: 10000 }, faker.address.city)
//     Array.from({ length: 1000 }, (_, index) => `Option ${index + 1}`)
//   );
//   const reverse = () => {
//     setData((data) => data.slice().reverse());
//   };

//   return (
//     <main>
//       <button onClick={reverse}>Reverse</button>
//       <List
//         innerElementType="ul"
//         itemCount={datas.length}
//         itemSize={20}
//         height={200}
//         width={400}
//       >
//         {({ index, style }) => {
//           return (
//             <li style={style}>
//               {datas[index].nama_kantor}
//             </li>
//           );
//         }}
//       </List>
//     </main>
//   );
// };
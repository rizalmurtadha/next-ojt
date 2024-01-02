import React, { useEffect } from 'react'
import { useState } from 'react';
import { FixedSizeList } from 'react-window';

import { CustomFormControlSelect, CustomSelect, CustomGridLabel } from './Styles'

import { ListboxOption, useMediaQuery, InputLabel, MenuItem, Grid } from '@mui/material';




function SelectInput({name, value, label, options, datas, valueKey, labelKey, placeholder, required=false}) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleOptionChange2 = (event) => {
        setSelectedOption(event);
        console.log(event);
        setNameLabel(event[labelKey])
        setNameKey(event[valueKey])
        handleClose();
    };

    const isLargeScreen = useMediaQuery('(min-width:600px)');

    const [isOpen, setOpen] = useState(false);
    const [nameLabel, setNameLabel] = useState(<em>-- Silahkan Pilih --</em>);
    const [nameKey, setNameKey] = useState(value);

    useEffect(() => {
        console.log(value);
        if(value==0) {
            setNameLabel(<em>-- Silahkan Pilih --</em>);
            setNameKey("");
        } 
    }, [value]); 

    

    const handleClose = () => { 
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (

        <Grid container spacing={0}>
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={5}
            >
                <p>{label}<span>:</span></p>
            </CustomGridLabel>
            <Grid item xs={12} sm={7}>
                <CustomFormControlSelect variant='outlined'>
                    <InputLabel id="select-label">{label}</InputLabel>
                    <CustomSelect
                        inputProps={{MenuProps: {disableScrollLock: true}}}
                        labelId="select-label"
                        id="select-label"
                        displayEmpty={isLargeScreen}
                        label={isLargeScreen ? "" : label}
                        onChange={handleOptionChange}
                        name={name}
                        value={nameKey}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={isOpen}
                        required={required}
                    >
                        <MenuItem disabled value="" >
                            <em>{placeholder}</em>
                        </MenuItem>

                        { isOpen ? 
                        (<div></div>) : (
                            // <MenuItem  value={selectedOption[valueKey]} >
                            //     {selectedOption[labelKey]}
                            // </MenuItem>   
                            <MenuItem  value={nameKey} >
                                {/* KOALISI */}
                                {nameLabel}
                            </MenuItem> 
                        )
                        }
                         
                        
                        <FixedSizeList
                            height={400}
                            // width={300}
                            itemSize={50}
                            itemCount={datas.length}
                            
                        >
                            {
                                ({ index, style }) => {
                                    const option = options[index];
                                    return (
                                    <MenuItem role='option' key={options[index][valueKey]} value={options[index][valueKey]} style={style} onClick={() => {
                                        handleOptionChange2(option);
                                         }}>
                                        {option[labelKey]}
                                    </MenuItem>
                                    )
                                }
                            }
                        </FixedSizeList>
                        {/* <MenuItem disabled value="" >
                            <em>{placeholder}</em>
                        </MenuItem>
                            {datas.map((data) => (
                                <MenuItem key={data[valueKey]} value={data[valueKey]}>
                                    {data[labelKey]}
                                </MenuItem>
                            ))} */}
                    </CustomSelect>
                </CustomFormControlSelect>
            </Grid>
        </Grid>

        
    )
}

export default SelectInput
import React from 'react'
import { useState } from 'react';
import { FixedSizeList } from 'react-window';

import { CustomFormControlSelect, CustomSelect, CustomGridLabel } from './Styles'

import { ListboxOption, useMediaQuery, InputLabel, MenuItem, Grid } from '@mui/material';




function SelectInput2({name, label, options, datas, valueKey, labelKey, placeholder}) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const isLargeScreen = useMediaQuery('(min-width:600px)');

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
                        value={selectedOption}
                    >
                        <MenuItem disabled value="" >
                            <em>{placeholder}</em>
                        </MenuItem>
                            {datas.map((data) => (
                                <MenuItem key={data[valueKey]} value={data[valueKey]}>
                                    {data[labelKey]}
                                </MenuItem>
                            ))}
                    </CustomSelect>
                </CustomFormControlSelect>
            </Grid>
        </Grid>

        
    )
}

export default SelectInput2
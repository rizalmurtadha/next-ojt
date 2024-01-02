import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CustomDatePicker, CustomGridLabel } from './Styles';

import { Grid, TextField, useMediaQuery, value } from '@mui/material';

function DateInput({name, label, value}) {

    const isLargeScreen = useMediaQuery('(min-width:600px)');

    const [crtDate, setCrtDate] = useState(value);

    const handleDateChange = (event) => {
        const date=new Date(event);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-indexed
        const year = date.getFullYear();
        const formattedDate = `${day}-${month.toString().padStart(2, '0')}-${year}`;
        setCrtDate(formattedDate);
    }

    // const [vals, setVals] = useState(value);
    // const handleChane = (event) => {
    //     setVals(event.value);
    // }

    return (
        <Grid container spacing={0}>
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={5}
            >
                <p>{label} <span>:</span></p>
            </CustomGridLabel>
            <Grid item xs={12} sm={7}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <CustomDatePicker name="date_test" label={isLargeScreen ? "" : label} onChange={handleDateChange}  />
                    <input type='hidden' name={name} value={crtDate} ></input>
                </LocalizationProvider>
            </Grid>
        </Grid>
        // <LocalizationProvider dateAdapter={AdapterDayjs}>
        //         <CustomDatePicker label={isLargeScreen ? "" : label} />
        // </LocalizationProvider>
    )
}

export default DateInput
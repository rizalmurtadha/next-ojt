import React, { useState } from 'react'
import { CustomNipposTextField, CustomTextField, CustomGridLabel } from './Styles'
import { Grid, useMediaQuery } from '@mui/material';

function TextInput({name, label, value, isNipposForm=false ,type="text"}) {

    const isLargeScreen = useMediaQuery('(min-width:600px)');
    
    const [vals, setVals] = useState(value);
    const handleChane = (event) => {
        setVals(event.value);
    }

    return (
        <div style={{width:'100%', justifyContent:'center', display:'flex'}}>
            {isNipposForm && 
                <CustomNipposTextField
                    id="outlined-basic" 
                    variant="outlined"
                    label={label} 
                    name={name}
                    type={type}
                    value={vals}
                    onChange={handleChane}
                    // type='number'
                />}
            {!isNipposForm && 
                <Grid container spacing={0}>
                    <CustomGridLabel
                        component={Grid}
                        item
                        xs={12} sm={5}
                    >
                        <p>{label} <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        {/* <TextInput name="keterangan" label="Keterangan" /> */}
                        <CustomTextField
                            id="outlined-basic" 
                            label={isLargeScreen ? "" : label}
                            name={name}
                            variant="outlined"
                            value={vals}
                            onChange={handleChane}
                        />
                    </Grid>
                </Grid>
                // <CustomTextField
                //     id="outlined-basic" 
                //     label={isLargeScreen ? "" : label}
                //     name={name}
                //     variant="outlined"
                // />
            }
        </div>        
    )
}

export default TextInput
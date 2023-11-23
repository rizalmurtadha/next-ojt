'use client'
import React from 'react'

import { useMediaQuery } from '@mui/material';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Box, Select } from '@mui/material';

import { CustomNipposTextField, CustomButton, CustomSelect, CustomGridLabel, CustomTextField, DropdownFormControl } from "../component/Styles";


function StatusKerja() {

    const [age, setAge] = React.useState('');

    const isLargeScreen = useMediaQuery('(min-width:600px)');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <div style={{flexGrow:1}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div className='judulPage'>
                    <h1>KELOLA HISTORI STATUS KERJA KARYAWAN</h1>
                </div>
            </Grid>
            <Grid  item container xs={12} spacing={2}>
                <Grid item xs={12}>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={4} >
                                {/* <Paper style={classes.judul}> */}
                                <FormControl sx={{width:'100%'}}>
                                    
                                    <CustomNipposTextField
                                        id="outlined-basic" 
                                        label="Nippos" 
                                        variant="outlined"
                                    />
                                </FormControl>
                                {/* </Paper> */}
                        </Grid>
                        <Grid item xs={2} >
                            {/* <Paper style={classes.judul}> */}
                                {/* <CustomButton type="submit" variant="contained" >
                                    Cari
                                </CustomButton> */}
                            {/* </Paper> */}
                        </Grid>
                    </Grid>
                </form>
                </Grid>
                <Grid item xs={12}>
                    <form className='mainForm'>
                        <Grid container spacing={2}>
                            <Grid item xs={3} sm={4}>
                                <p>Nippos <span>:</span></p>
                            </Grid>
                            <Grid item xs={6} sm={8}>
                                <p className='textShow'>99928371828</p>
                            </Grid>
                            <Grid item xs={12} sm={4} className='labelForm'>
                                <p>Kantor <span>:</span></p>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                            <DropdownFormControl>
                                
                                <InputLabel id="demo-simple-select-helper-label">Kantor</InputLabel>
                                <CustomSelect
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select"
                                    value={age}
                                    // label='Kantor'
                                    // displayEmpty
                                    displayEmpty={isLargeScreen}
                                    label={isLargeScreen ? "" : 'Kantor'}
                                    onChange={handleChange}
                                    >
                                    <MenuItem disabled value="" >
                                        <em>-- Silahkan Pilih {isLargeScreen}--</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </CustomSelect>
                            </DropdownFormControl>
                                {/* {names.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))} */}
                            </Grid>
                            <Grid item xs={12} sm={4} className='labelForm'>
                                <p>Status Kerja* <span>:</span></p>
                            </Grid>

                            <Grid item xs={12} sm={8}>
                            <CustomSelect
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                displayEmpty
                                onChange={handleChange}
                            >
                                <MenuItem disabled value="" >
                                    <em>-- Silahkan Pilih --</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                {/* {names.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))} */}
                            </CustomSelect>
                            </Grid>
                            <Grid item xs={12} sm={4} className='labelForm'>
                                <p>TMT* <span>:</span></p>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <p>DatePicker</p>
                            </Grid>
                            <Grid item xs={12} sm={4} className='labelForm'>
                                <p>Keterangan <span>:</span></p>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <FormControl sx={{width:'100%'}}>
                                    <CustomTextField
                                        id="outlined-basic" 
                                        // label="Keterangan" 
                                        variant="outlined"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4} className='labelForm'>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <p>Perhatian</p>
                            </Grid>
                            <Grid item xs={12} sm={4} className='labelForm'>
                            </Grid>
                            <Grid item xs={12} sm={8} >
                                <Box sx={{display:'flex', justifyContent:'right', maxWidth:'500px', width:'100%'}}>
                                    <CustomButton type='submit' variant='contained'>
                                        Reset
                                    </CustomButton>
                                    <CustomButton type='submit' variant='contained'>
                                        Simpan
                                    </CustomButton>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <p>Ket: * Wajib Diisi</p>
                            </Grid>

                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default StatusKerja
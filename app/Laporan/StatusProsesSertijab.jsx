'use client'
import { ListItemText, Box, FormControl, FormControlLabel, FormGroup,Checkbox , Grid, Select } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { PageAreaContainer, CustomNipposTextField, CustomGridLabel, CustomButton,
         DropdownFormControl, CustomSelect, CustomTextField, CustomFormControlDrop2,
         CustomWarningBox, CustomDatePicker } from '../component/Styles'
import { InputLabel } from '@mui/material'
import { Card, CardActions, CardContent, CardMedia,Typography, Button   } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import TableNoPage from '../component/TableNoPage'

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const rows = [
    { no: 1, nama: 'Rizal', nippos: "999123456", tempatKerja: "KCU BATAM 29400", jabatan: "Account Executive" ,bagian:'Penjualan di KC Tipe B', lamaMenjabat:'2 Thn 7 Bln'},
    { no: 2, nama: 'Rizal', nippos: "999123456", tempatKerja: "KCU BATAM 29400", jabatan: "Account Executive" ,bagian:'Penjualan di KC Tipe B', lamaMenjabat:'2 Thn 7 Bln'},
    { no: 3, nama: 'Rizal', nippos: "999123456", tempatKerja: "KCU BATAM 29400", jabatan: "Account Executive" ,bagian:'Penjualan di KC Tipe B', lamaMenjabat:'2 Thn 7 Bln'},
  ];

  const headCells = [
    {
      id: 'no',
      numeric: false,
      disablePadding: true,
      label: 'No',
    },
    {
      id: 'nama',
      numeric: false,
      disablePadding: false,
      label: 'Nama',
    },
    {
      id: 'nippos',
      numeric: true,
      disablePadding: false,
      label: 'Nippos',
    },
    {
      id: 'tempatKerja',
      numeric: false,
      disablePadding: false,
      label: 'Tempat Kerja',
    },
    {
      id: 'jabatan',
      numeric: true,
      disablePadding: false,
      label: 'Jabatan',
    },
    {
        id: 'bagian',
        numeric: false,
        disablePadding: false,
        label: 'Bagian',
    },
    {
        id: 'lamaMenjabat',
        numeric: false,
        disablePadding: false,
        label: 'Lama Menjabat',
    },
  ];

  const options1 = [
    { id: '1', value: 'KCP PLOSO' },
    { id: '2', value: 'KCP KUDU' },
    { id: '3', value: 'KCP KABUH' },
  ];
  
  const options2 = [
    { id: '4', value: 'Aktif' },
    { id: '5', value: 'PHK ATAS PERMINTAAN SENDIRI' },
    { id: '6', value: 'PHK KARENA MANGKIR' },
  ];

function StatusProsesSertijab() {
    const [age, setAge] = React.useState('');
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [textFieldValue, setTextFieldValue] = useState('');

    const isLargeScreen = useMediaQuery('(min-width:600px)');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleOption1Change = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleOption2Change = (event) => {
        setSelectedOption2(event.target.value);
    };
    const handleTextFieldChange = (event) => {
        setTextFieldValue(event.target.value);
    };

  return (
    <PageAreaContainer >
        <h1>LAPORAN PENGAWASAN PROSES SERTIJAB</h1>
        <Grid className='main' sx={{backgroundColor:'white', marginTop:'40px'}} container spacing={0}>
            {/* <Grid item xs={12}>
                <form style={{paddingBottom:'10px'}}>
                    <FormControl >
                        <CustomNipposTextField
                            id="outlined-basic" 
                            label="Nippos" 
                            variant="outlined"
                            sx={{minWidth:'200px'}}
                            />
                    </FormControl>
                </form>
            </Grid> */}
            <form >
            <Grid container spacing={0}>
                <CustomGridLabel
                    component={Grid}
                    item
                    xs={12} sm={4}
                >
                    <p>Regional <span>:</span></p>
                </CustomGridLabel>
                <Grid item xs={12} sm={8}>
                    <CustomFormControlDrop2 variant='outlined'>
                        
                        <InputLabel id="demo-simple-select-helper-label">Regional</InputLabel>
                        <CustomSelect
                            MenuProps={{
                                PaperProps: {
                                style: {
                                    padding: '0px !important',
                                },
                                },
                            }}
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select"
                            value={selectedOption1}
                            displayEmpty={isLargeScreen}
                            label={isLargeScreen ? "" : 'Regional'}
                            onChange={handleOption1Change}
                            disableScrollLock={true}
                            >
                            <MenuItem disabled value="" >
                                <em>-- Silahkan Pilih {isLargeScreen}--</em>
                            </MenuItem>
                            {options1.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {/* <ListItemText primary={option.value} /> */}
                                    {option.value}
                                </MenuItem>
                            ))}
                            {/* <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem> */}
                        </CustomSelect>
                    </CustomFormControlDrop2>
                </Grid>
                
                {/* <Grid item xs={12} md={6} container spacing={0}>
                    
                    

                </Grid>  */}
                    <CustomGridLabel
                        component={Grid}
                        item
                        xs={12} sm={4}
                    >
                        <p>UPT <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={8}>
                        <CustomFormControlDrop2 variant='outlined'>
                            
                            <InputLabel id="demo-simple-select-helper-label">UPT</InputLabel>
                            <CustomSelect
                                MenuProps={{
                                    PaperProps: {
                                    style: {
                                        padding: '0px !important',
                                    },
                                    },
                                }}
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select"
                                value={selectedOption1}
                                displayEmpty={isLargeScreen}
                                label={isLargeScreen ? "" : 'UPT'}
                                onChange={handleOption1Change}
                                disableScrollLock={true}
                                >
                                <MenuItem disabled value="" >
                                    <em>-- Silahkan Pilih {isLargeScreen}--</em>
                                </MenuItem>
                                {options1.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {/* <ListItemText primary={option.value} /> */}
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </CustomSelect>
                        </CustomFormControlDrop2>
                    </Grid>
                    <CustomGridLabel
                        component={Grid}
                        item
                        xs={12} sm={4}
                    >
                        <p>Tahun <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={8}>
                        <CustomFormControlDrop2 variant='outlined'>
                            
                            <InputLabel id="demo-simple-select-helper-label">Tahun</InputLabel>
                            <CustomSelect
                                MenuProps={{
                                    PaperProps: {
                                    style: {
                                        padding: '0px !important',
                                    },
                                    },
                                }}
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select"
                                value={selectedOption1}
                                displayEmpty={isLargeScreen}
                                label={isLargeScreen ? "" : 'Tahun'}
                                onChange={handleOption1Change}
                                disableScrollLock={true}
                                >
                                <MenuItem disabled value="" >
                                    <em>-- Silahkan Pilih {isLargeScreen}--</em>
                                </MenuItem>
                                {options1.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {/* <ListItemText primary={option.value} /> */}
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </CustomSelect>
                        </CustomFormControlDrop2>
                    </Grid>
                    
                    <CustomGridLabel
                        component={Grid}
                        item
                        xs={12} sm={4}
                    >
                    </CustomGridLabel>
                    <Grid item xs={12} sm={8} >
                        <Box sx={{display:'flex', justifyContent:'right', maxWidth:'500px', width:'100%', marginTop:'15px'}}>
                            <CustomButton type='submit' variant='contained'>
                                Reset
                            </CustomButton>
                            <CustomButton type='submit' variant='contained'>
                                Simpan
                            </CustomButton>
                        </Box>
                    </Grid>
                </Grid> 
                {/* <Grid item xs={12} md={6} container spacing={0}>

                </Grid> */}
                </form>
                {/* <Grid item xs={12}>
                    <p>Ket : * Wajib diisi</p>
                </Grid> */}

            </Grid>

            
        {/* <p>Status kerja saat ini : <b>AKTIF</b></p> */}
        <Box sx={{minHeight:'50px', marginTop:'40px'}}>
            <h3>LAPORAN PENGAWASAN PROSES SERTIJAB KANTOR REGIONAL I MEDAN TAHUN : 2021</h3>
            <p>Posisi Tanggal: 02 November 2023 (tanggal download data) </p>
        </Box>
        <TableNoPage
            rows={rows}
            headCells={headCells}
        />

    </PageAreaContainer>
  )
}

export default StatusProsesSertijab
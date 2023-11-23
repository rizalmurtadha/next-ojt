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
import TableLoader from '../component/TableLoader'
import TableTest from '../component/TableTest'
import TableCSR from '../component/TableCSR'
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
    { no: 1, statusKerja: 'Aktif', TMT: "21-04-2018", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2018" ,button:''},
    { no: 2, statusKerja: 'Aktif', TMT: "21-04-2017", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2017" ,button:''},
    { no: 3, statusKerja: 'Aktif', TMT: "21-04-2016", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2016",button:'' },
  ];

  const headCells = [
    {
      id: 'no',
      numeric: false,
      disablePadding: true,
      label: 'No',
    },
    {
      id: 'statusKerja',
      numeric: false,
      disablePadding: false,
      label: 'Status Kerja',
    },
    {
      id: 'tmt',
      numeric: true,
      disablePadding: false,
      label: 'TMT',
    },
    {
      id: 'keterangan',
      numeric: false,
      disablePadding: false,
      label: 'Keterangan',
    },
    {
      id: 'insert',
      numeric: true,
      disablePadding: false,
      label: 'Tanggal Insert',
    },
    {
        id: 'aksi',
        numeric: false,
        disablePadding: false,
        label: 'Aksi',
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

function KelolaStatusKerja() {
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
        <h1>KELOLA HISTORI STATUS KERJA KARYAWAN</h1>
        <Grid className='main' sx={{backgroundColor:'white'}} container spacing={0}>
            <Grid item xs={12}>
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
            </Grid>
            <form >
            <Grid container spacing={0}>

            

            
            <Grid item xs={3} sm={4}>
                <p>Nippos <span>:</span></p>
            </Grid>
            <Grid item xs={6} sm={8}>
                <p className='textShow'>99928371828</p>
            </Grid>
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={4}
            >
                <p>Kantor <span>:</span></p>
            </CustomGridLabel>
            <Grid item xs={12} sm={8}>
                <CustomFormControlDrop2 variant='outlined'>
                    
                    <InputLabel id="demo-simple-select-helper-label">Kantor</InputLabel>
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
                        label={isLargeScreen ? "" : 'Kantor'}
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
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={4}
            >
                <p>Status Kerja* <span>:</span></p>
            </CustomGridLabel>
            <Grid item xs={12} sm={8}>
                <CustomFormControlDrop2>
                    
                    <InputLabel id="demo-simple-select-helper-label">Status Kerja*</InputLabel>
                    <CustomSelect
                        MenuProps={{
                            PaperProps: {
                            style: {
                                padding: '0px',
                            },
                            },
                        }}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select"
                        value={selectedOption2}
                        displayEmpty={isLargeScreen}
                        label={isLargeScreen ? "" : 'Status Kerja*'}
                        onChange={handleOption2Change}
                        // disableScrollLock={true}
                        >
                        <MenuItem disabled value="" >
                            <em>-- Silahkan Pilih {isLargeScreen}--</em>
                        </MenuItem>
                        {options2.map((option) => (
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
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={4}
            >
                <p>TMT* <span>:</span></p>
            </CustomGridLabel>
            <Grid item xs={12} sm={8}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={[
                        'DatePicker',
                        'MobileDatePicker',
                        'DesktopDatePicker',
                        'StaticDatePicker',
                        ]}
                    >
                        {/* <DemoItem label="Desktop variant">
                        <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
                        </DemoItem>
                        <DemoItem label="Mobile variant">
                        <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                        </DemoItem> */}
                        <CustomDatePicker  />
                        {/* <DemoItem label="Responsive variant">
                        </DemoItem> */}
                        {/* <DemoItem label="Static variant">
                        <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
                        </DemoItem> */}
                    </DemoContainer>
                </LocalizationProvider>
                {/* <CustomFormControlDrop2>
                    
                    <InputLabel id="demo-simple-select-helper-label">TMT*</InputLabel>
                    <CustomSelect
                        MenuProps={{
                            PaperProps: {
                            style: {
                                padding: '0px',
                            },
                            },
                        }}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select"
                        value={age}
                        displayEmpty={isLargeScreen}
                        label={isLargeScreen ? "" : 'TMT*'}
                        onChange={handleChange}
                        // disableScrollLock={true}
                        >
                        <MenuItem disabled value="" >
                            <em>-- Silahkan Pilih {isLargeScreen}--</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </CustomSelect>
                </CustomFormControlDrop2> */}
            </Grid>
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={4}
            >
                <p>Keterangan <span>:</span></p>
            </CustomGridLabel>
            <Grid item xs={12} sm={8}>
                <FormControl sx={{width:'100%'}}>
                    <CustomTextField
                        id="outlined-basic" 
                        label={isLargeScreen ? "" : 'Keterangan'}
                        variant="outlined"
                    />
                </FormControl>
            </Grid>
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={4}
            >
            </CustomGridLabel>
            <Grid item xs={12} sm={8} >
                <CustomWarningBox >
                    <h5 >
                        PERHATIAN
                    </h5>
                    <FormGroup>
                        <FormControlLabel
                            value="start"
                            control={<Checkbox />}
                            label="Apakah data Status Kerja ini akan merubah status kerja orang yang bersangkutan?"
                            labelPlacement="start"
                            
                        />
                    </FormGroup>
                </CustomWarningBox>
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
            </form>
            <Grid item xs={12}>
                <p>Ket : * Wajib diisi</p>
            </Grid>

        </Grid>
        
        <Box sx={{height:'50px'}}>

        </Box>
        <h3>DAFTAR KELOLA HISTORI STATUS KERJA KARYAWAN</h3>
        <p>Status kerja saat ini : <b>AKTIF</b></p>
        <TableNoPage
            rows={rows}
            headCells={headCells}
        />

    </PageAreaContainer>
  )
}

export default KelolaStatusKerja
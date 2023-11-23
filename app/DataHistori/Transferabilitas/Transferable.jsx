'use client'
import { ListItemText, Box, FormControl, FormControlLabel, FormGroup,Checkbox , Grid, Select } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { PageAreaContainer, CustomNipposTextField, CustomGridLabel, CustomButton,
         DropdownFormControl, CustomSelect, CustomTextField, CustomFormControlDrop2,
         CustomWarningBox, CustomDatePicker } from '../../component/Styles'
import { InputLabel } from '@mui/material'
import { Card, CardActions, CardContent, CardMedia,Typography, Button   } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import TableNoPage from '../../component/TableNoPage'

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const rows = [
    { no: 1, noSK: 'SK/1234567890', tgl: "21-04-2018", lama:'Transferable Nasional', baru:'', TMT:'01-05-2018', keterangan: "Mulai Bekerja",button:''},
    { no: 2, noSK: 'SK/1234567890', tgl: "21-04-2018", lama:'Transferable Nasional', baru:'', TMT:'01-05-2018', keterangan: "Mulai Bekerja",button:''},
    { no: 3, noSK: 'SK/1234567890', tgl: "21-04-2018", lama:'Transferable Nasional', baru:'', TMT:'01-05-2018', keterangan: "Mulai Bekerja",button:''},

  ];

  const headCells = [
    {
      id: 'no',
      numeric: false,
      disablePadding: true,
      label: 'No.',
    },
    {
      id: 'noSK',
      numeric: false,
      disablePadding: false,
      label: 'Nomor SK',
    },
    {
      id: 'tanggalSK',
      numeric: true,
      disablePadding: false,
      label: 'Tanggal SK',
    },
    {
        id: 'lama',
        numeric: true,
        disablePadding: false,
        label: 'Lama',
    },
    {
        id: 'baru',
        numeric: true,
        disablePadding: false,
        label: 'Baru',
    },
    {
        id: 'TMT',
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
    { id: '4', value: 'Transferable Lokal' },
    { id: '5', value: 'Transferable Regional' },
    { id: '6', value: 'Transferable Nasional' },
  ];

function Transferable() {
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
        <h1>KELOLA HISTORI STATUS TRANSFERABLE</h1>
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
            <Grid item xs={9} sm={8}>
                <p className='textShow'>99928371828</p>
            </Grid>
            <Grid item xs={3} sm={4}>
                <p>Kantor <span>:</span></p>
            </Grid>
            <Grid item xs={9} sm={8}>
                <p className='textShow'>60900 - IPC SURABAYA</p>
            </Grid>
            <Grid item xs={3} sm={4}>
                <p>Status Pegawai <span>:</span></p>
            </Grid>
            <Grid item xs={9} sm={8}>
                <p className='textShow'>Transferable Lokal</p>
            </Grid>
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={4}
            >
                <p>No SKEP <span>:</span></p>
            </CustomGridLabel>
            <Grid item xs={12} sm={8}>
                <FormControl sx={{width:'100%'}}>
                    <CustomTextField
                        id="outlined-basic" 
                        label={isLargeScreen ? "" : 'No SKEP'}
                        variant="outlined"
                    />
                </FormControl>
            </Grid>
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={4}
            >
                <p>Tgl Skep <span>:</span></p>
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
                        <CustomDatePicker  />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={4}
            >
                <p>Terhitung Mulai Tanggal <span>:</span></p>
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
                        <CustomDatePicker  />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
            <CustomGridLabel
                component={Grid}
                item
                xs={12} sm={4}
            >
                <p>Update Status* <span>:</span></p>
            </CustomGridLabel>
            <Grid item xs={12} sm={8}>
                <CustomFormControlDrop2>
                    
                    <InputLabel id="demo-simple-select-helper-label">Update Status*</InputLabel>
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
                        label={isLargeScreen ? "" : 'Update Status*'}
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
                <p>Keterangan <span>:</span></p>
            </CustomGridLabel>
            <Grid item xs={12} sm={8}>
                <FormControl sx={{width:'100%'}}>
                    <CustomTextField
                        id="outlined-basic" 
                        label={isLargeScreen ? "" : 'Keterangan'}
                        // multiline
                        // rows={2}
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
                            label="Apakah data Pegawai ini akan diubah Status Pegawainya?      Ya"
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

        {/* <h3>DAFTAR KELOLA HISTORI STATUS KERJA KARYAWAN</h3>
        <p>Status kerja saat ini : <b>AKTIF</b></p> */}
        <TableNoPage
            rows={rows}
            headCells={headCells}
        />

    </PageAreaContainer>
  )
}

export default Transferable
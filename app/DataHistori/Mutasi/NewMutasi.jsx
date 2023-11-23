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

function NewMutasi() {
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
        <h1>KELOLA HISTORI  MUTASI</h1>
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
                <Grid item xs={12} md={6} container spacing={0}>
                    <Grid item xs={3} sm={5}>
                        <p>Nippos <span>:</span></p>
                    </Grid>
                    <Grid item xs={9} sm={7}>
                        <p className='textShow'>99928371828</p>
                    </Grid>

                    <CustomGridLabel
                        component={Grid}
                        item
                        xs={12} sm={5}
                    >
                        <p>No. Surat Mutasi* <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        <FormControl sx={{width:'100%'}}>
                            <CustomTextField
                                id="outlined-basic" 
                                label={isLargeScreen ? "" : 'No. Surat Mutasi*'}
                                variant="outlined"
                            />
                        </FormControl>
                    </Grid>

                    <CustomGridLabel
                        component={Grid}
                        item
                        xs={12} sm={5}
                    >
                        <p>Tgl Surat Mutasi* <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <CustomDatePicker label='Tgl Surat Mutasi*'  />
                        </LocalizationProvider>
                    </Grid>

                    <CustomGridLabel
                        component={Grid}
                        item
                        xs={12} sm={5}
                    >
                        <p>TMT Meletakkan Jabatan* <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <CustomDatePicker label="TMT Meletakkan Jabatan*" />
                        </LocalizationProvider>
                    </Grid>

                    <CustomGridLabel
                        component={Grid}
                        item
                        xs={12} sm={5}
                    >
                        <p>Jenis Mutasi * <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        <CustomFormControlDrop2 variant='outlined'>
                            
                            <InputLabel id="demo-simple-select-helper-label">Jenis Mutasi *</InputLabel>
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
                                label={isLargeScreen ? "" : 'Jenis Mutasi *'}
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



                    <Grid item xs={3} sm={5}>
                        <p>Kantor Asal <span>:</span></p>
                    </Grid>
                    <Grid item xs={9} sm={7}>
                        <p className='textShow'>60900 - IPC SURABAYA</p>
                    </Grid>

                    <CustomGridLabel
                        component={Grid}
                        item
                        xs={12} sm={5}
                    >
                        <p>Kantor Tujuan* <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        <CustomFormControlDrop2 variant='outlined'>
                            
                            <InputLabel id="demo-simple-select-helper-label">Kantor Tujuan*</InputLabel>
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
                                label={isLargeScreen ? "" : 'Kantor Tujuan*'}
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

                    

                </Grid> 
                <Grid item xs={12} md={6} container spacing={0}>
                    
                    <CustomGridLabel
                        component={Grid}
                        item
                        xs={12} sm={5}
                    >
                        <p>Bagian* <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        <CustomFormControlDrop2 variant='outlined'>
                            
                            <InputLabel id="demo-simple-select-helper-label">Bagian*</InputLabel>
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
                                label={isLargeScreen ? "" : 'Bagian*'}
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
                        xs={12} sm={5}
                    >
                        <p>Jabatan* <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        <CustomFormControlDrop2 variant='outlined'>
                            
                            <InputLabel id="demo-simple-select-helper-label">Jabatan*</InputLabel>
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
                                label={isLargeScreen ? "" : 'Jabatan*'}
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
                        xs={12} sm={5}
                    >
                        <p>Jenis Jabatan*  <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        <CustomFormControlDrop2 variant='outlined'>
                            
                            <InputLabel id="demo-simple-select-helper-label">Jenis Jabatan*</InputLabel>
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
                                label={isLargeScreen ? "" : 'Jenis Jabatan*'}
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
                        xs={12} sm={5}
                    >
                        <p>Rumpun Jabatan  <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        <CustomFormControlDrop2 variant='outlined'>
                            
                            <InputLabel id="demo-simple-select-helper-label">Rumpun Jabatan</InputLabel>
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
                                label={isLargeScreen ? "" : 'Rumpun Jabatan'}
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
                        xs={12} sm={5}
                    >
                        <p>Jenis Jabatan* <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        <CustomFormControlDrop2 variant='outlined'>
                            
                            <InputLabel id="demo-simple-select-helper-label">Jenis Jabatan*</InputLabel>
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
                                label={isLargeScreen ? "" : 'Jenis Jabatan*'}
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
                        xs={12} sm={5}
                    >
                        <p>Keterangan <span>:</span></p>
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7}>
                        <FormControl sx={{width:'100%'}}>
                            <CustomTextField
                                id="outlined-basic" 
                                label={isLargeScreen ? "" : 'Keterangan'}
                                variant="outlined"
                            />
                        </FormControl>
                    </Grid>
                    
                </Grid> 
                <CustomGridLabel
                    component={Grid}
                    item
                    xs={12} sm={6}
                >
                </CustomGridLabel>
                <Grid item xs={12} sm={6} >
                    <Box sx={{display:'flex', justifyContent:'start',  width:'100%', marginTop:'15px'}}>
                      <CustomWarningBox >
                        <h5 >
                            PERHATIAN
                        </h5>
                        <FormGroup >
                            <FormControlLabel
                                value="start"
                                control={<Checkbox />}
                                label="Apakah data history mutasi ini akan dijadikan current untuk pegawai yang bersangkutan ? Ya"
                                labelPlacement="start"
                                
                            />
                            <FormControlLabel
                                value="start"
                                control={<Checkbox />}
                                label="Insert Nomor SK & Tgl. SK otomatis ?      Ya"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </CustomWarningBox>
                    </Box>
                </Grid>
                <CustomGridLabel
                    component={Grid}
                    item
                    xs={12} sm={6}
                >
                </CustomGridLabel>
                <Grid item xs={12} sm={6} >
                    <Box sx={{display:'flex', justifyContent:'right',  width:'100%', marginTop:'15px'}}>
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

        <h3>DAFTAR KELOLA HISTORI MUTASI POH DAN RANGKAP JABATAN</h3>
        {/* <p>Status kerja saat ini : <b>AKTIF</b></p> */}
        <Box xs={{height:'50px'}}>

        </Box>
        <TableNoPage
            rows={rows}
            headCells={headCells}
        />

    </PageAreaContainer>
  )
}

export default NewMutasi
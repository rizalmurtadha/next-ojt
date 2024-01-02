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

import SelectInput from '../../component/SelectInput';
import TextInput from '../../component/TextInput';
import DateInput from '../../component/DateInput';

const rows = [
    { no: 1, statusKerja: 'Aktif', TMT: "21-04-2018", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2018" ,button:''},
    { no: 2, statusKerja: 'Aktif', TMT: "21-04-2017", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2017" ,button:''},
    { no: 3, statusKerja: 'Aktif', TMT: "21-04-2016", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2016",button:'' },
  ];

  const headCells = [
    { id: 'no', label: 'No', },
    { id: 'statusKerja', label: 'Status Kerja', },
    { id: 'tmt', label: 'TMT', },
    { id: 'keterangan', label: 'Keterangan', },
    { id: 'insert', label: 'Tanggal Insert', },
    { id: 'aksi', label: 'Aksi', },
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

  const listKantor = [
    "KCP CIKUPA",
    "KCP TIGARAKSA",
    "KCP CISOKA",
    "KCP CIBADAK",
  ];

  const listStatusKerja = [
    "Aktif",
    "PHK ATAS PERMINTAAN SENDIRI",
    "PHK KARENA MANGKIR",
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

    const [isUserData, setIsUserData] = useState(null);
    const [userForm, setUserForm] = useState(null);
    const [tableData, setTableData] = useState(null);

    const handleNipposSearchSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data); 
        setIsUserData(true);
    }


  return (
    <PageAreaContainer >
        <Box style={{marginBottom:'20px'}}>
            <h1>KELOLA HISTORI  MUTASI</h1>
        </Box>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <form style={{height:'max-content'}} onSubmit={handleNipposSearchSubmit}>
                    <TextInput name="nippos" label="Nippos" isNipposForm />
                </form>
            </Grid>
        </Grid>
        <Grid className='main' sx={{backgroundColor:'white'}} container spacing={0}>
            <form >
            <Grid container spacing={0}>
                <Grid item xs={12} md={6} container spacing={0}>
                    <Grid item xs={4} sm={5}>
                        <p>Nippos <span>:</span></p>
                    </Grid>
                    <Grid item xs={8} sm={7}>
                        <p className='textShow'>99928371828</p>
                    </Grid>

                    <TextInput name="noSuratMutasi" label="No. Surat Mutasi*" />
                    <DateInput name="tglSuratMutasi" label="Tgl Surat Mutasi*" />
                    <DateInput name="tmtMeletakanJabatan" label="TMT Meletakkan Jabatan*" />
                    <SelectInput name="jenisMutasi" label="Jenis Mutasi*" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <Grid item xs={4} sm={5}>
                        <p>Kantor Asal <span>:</span></p>
                    </Grid>
                    <Grid item xs={8} sm={7}>
                        <p className='textShow'>60900 - IPC SURABAYA</p>
                    </Grid>

                    <SelectInput name="kantorTujuan" label="Kantor Tujuan*" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                </Grid> 

                <Grid item xs={12} md={6} container spacing={0}>

                    <SelectInput name="bagian" label="Bagian*" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="jabatan" label="Jabatan*" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="jenisJabatan" label="Jenis Jabatan*" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="rumpunJabatan" label="Rumpun Jabatan*" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="kantorTujuan" label="Kantor Tujuan*" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="jenisJabatan" label="Jenis Jabatan*" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <TextInput name="keterangan" label="Keterangan" />

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

        <Box sx={{marginTop:'20px'}}>
            <h3>DAFTAR KELOLA HISTORI MUTASI POH DAN RANGKAP JABATAN</h3>
            {/* <p>Status kerja saat ini : <b>AKTIF</b></p> */}
        </Box>

        <TableNoPage
            rows={rows}
            headCells={headCells}
        />

    </PageAreaContainer>
  )
}

export default NewMutasi
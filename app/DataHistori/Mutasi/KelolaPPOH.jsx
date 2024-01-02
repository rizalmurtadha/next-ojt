'use client'
import { ListItemText, Box, FormControl, FormControlLabel, FormGroup,Checkbox , Grid, Select } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import { PageAreaContainer, CustomNipposTextField, CustomGridLabel, CustomButton,
         DropdownFormControl, CustomSelect, CustomTextField, CustomFormControlDrop2,
         CustomWarningBox, CustomDatePicker } from '../../component/Styles'
import { InputLabel } from '@mui/material'
import { Card, CardActions, CardContent, CardMedia,Typography, Button   } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import TableNoPage from '../../component/TableNoPage'

import axios from 'axios';

import SelectInput from '../../component/SelectInput';
import TextInput from '../../component/TextInput';
import DateInput from '../../component/DateInput';

const rows = [
    { no: 1, statusKerja: 'SK.111/REGIONAL V/PDJ/0817', TMT: "Akuntansi", keterangan: "RJT", tanggalInsert: "-" ,button:''},
    { no: 2, statusKerja: 'SK.211/REGIONAL V/PDJ/0619', TMT: "Akuntansi", keterangan: "RJT", tanggalInsert: "-" ,button:''},
    { no: 3, statusKerja: 'SK.311/REGIONAL V/PDJ/0823', TMT: "Akuntansi", keterangan: "POH", tanggalInsert: "-" ,button:''},

  ];

  const headCells = [
    { id: 'no', label: 'No', },
    { id: 'skep', label: 'SKEP', },
    { id: 'jabatan', label: 'Jabatan', },
    { id: 'jenisMutasi', label: 'Jenis Mutasi', },
    { id: 'keterangan', label: 'Keterangan', },
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

  

function KelolaPPOH() {
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

    const [kantorData, setKantorData] = useState([]);
  const [statusKerjaData, setStatusKerjaData] = useState([]);
  const [bagianData, setBagianData] = useState([]);
  const [jenisMutasiData, setJenisMutasiData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetchData();
  }, []);

  async function fetchData() {
      const kantors = await axios.get('http://localhost:2000/kantors');
      setKantorData(kantors.data);
      const bagiand = await axios.get('http://localhost:2000/bagians');
      setBagianData(bagiand.data);
      // const jenis = await axios.get('http://localhost:2000/mutasis');
      // setJenisMutasiData(jenis.data);
      console.log(kantorData);
    }

    const listJenisJabatan = [
      {id:'1',label:'Non-Manajerial'},
      {id:'2',label:'Struktural'},
      {id:'3',label:'Fungsional'},
      {id:'4',label:'Pelaksana'},
      {id:'5',label:'Non-Jabatan'},
      // {id:'3',label:'POH'},
      
    ];

    const listJenisMutasi = [
      {id:'1',label:'POH'},
      {id:'2',label:'RJT'},
      // {id:'1',label:'PJ'},
      // {id:'2',label:'PJS'},
      // {id:'3',label:'ROT'},
      // {id:'4',label:'PRO'},
      // {id:'3',label:'DEM'},
    ];

    const listJabatan = [
      {id:'1',label:'Account Executive'},
      {id:'2',label:'Account Manajer'},
      {id:'3',label:'Assisten Manajer'},
      {id:'4',label:'Auditor Ahli Madya'},
      {id:'5',label:'Auditor Ahli Muda'},
      {id:'6',label:'Auditor Ahli Pratama'},
      {id:'7',label:'Auditor Ahli Utama'},
      // {id:'3',label:'DEM'},
    ];

    const [keterangan, setKeterangan] = useState('');
    const [kantor, setKantor] = useState(0);
    // const [bagian, setBagian] = useState(0);
    // const [jenisMutasi, setJenisMutasi] = useState(0);
    const [status_kerja, setStatusKerja] = useState(0);
    const [tmt, setTmt] = useState('');

  return (
    <PageAreaContainer >
        <Box style={{marginBottom:'20px'}}>
            <h1>KELOLA HISTORI MUTASI POH DAN RANGKAP JABATAN</h1>
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

                    <TextInput name="noKep" label="No. SKEP*" />

                    <DateInput name="tglSkep" label="Tgl SKEP*" />

                    <DateInput name="tmt" label="TMT*" />

                    <DateInput name="tglAkhirPohRjt" label="Tanggal Akhir POH/RJT*" />

                    <Grid item xs={4} sm={5}>
                        <p>Kantor Asal <span>:</span></p>
                    </Grid>
                    <Grid item xs={8} sm={7}>
                        <p className='textShow'>60900 - IPC SURABAYA</p>
                    </Grid>

                </Grid> 


                <Grid item xs={12} md={6} container spacing={0}>
                    <SelectInput name="kantorTujuan" label="Kantor Tujuan*" value={kantor} options={kantorData} datas={kantorData} valueKey="nopend" labelKey="nama_kantor" placeholder="-- Silahkan Pilih --"  />

                    <SelectInput name="bagian" label="Bagian"  value={0} options={bagianData} datas={bagianData} valueKey="bagian_id" labelKey="bagian" placeholder="-- Silahkan Pilih --"  />
                    
                    <SelectInput name="jenisJabatanPohRjt" label="Jenis Jabatan POH/RJT*"  value={0} options={listJenisJabatan} datas={listJenisJabatan} valueKey="id" labelKey="label" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="jabatanPohRjt" label="Jabatan POH/RJT*" value={0} options={listJabatan} datas={listJabatan} valueKey="id" labelKey="label" placeholder="-- Silahkan Pilih --"  />

                    <SelectInput name="jenisMutasi" label="Jenis Mutasi*"  value={0} options={listJenisMutasi} datas={listJenisMutasi} valueKey="id" labelKey="label" placeholder="-- Silahkan Pilih --"  />

                    <TextInput name="keterangan" label="Keterangan" />
                    
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

export default KelolaPPOH
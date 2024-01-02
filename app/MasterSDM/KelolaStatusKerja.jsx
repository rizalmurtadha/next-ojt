'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { Box, FormControlLabel, FormGroup, Checkbox , Grid, Select } from '@mui/material'
import { PageAreaContainer, CustomGridLabel, CustomButton, CustomWarningBox  } from '../component/Styles'

import axios from 'axios';

import TableNoPage from '../component/TableNoPage'
import SelectInput2 from '../component/SelectInput2';
import SelectInput from '../component/SelectInput';
import TextInput from '../component/TextInput';
import DateInput from '../component/DateInput';
import VirtualizedSelect from '../component/VirtualizeSelect';
import CustomSelect5, { SelectApp } from '../component/SelectNew';




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

function KelolaStatusKerja() {
    const [isUserData, setIsUserData] = useState(true);
    const [userForm, setUserForm] = useState(null);
    const [tableData, setTableData] = useState(null);
    const [userData, setUserData] = useState(
        {nippos:null}
    )

    const [kantorData, setKantorData] = useState([]);
    const [statusKerjaData, setStatusKerjaData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const kantors = await axios.get('http://localhost:2000/kantors');
        setKantorData(kantors.data);
        const statusKerja = await axios.get('http://localhost:2000/status-kerja');
        setStatusKerjaData(statusKerja.data);
        console.log(kantorData);
      }

    useEffect(() => {
        setLoading(false);
    }, []); 

    const handleNipposSearchSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data); 
        setUserData(
            userData.nippos = data
        )
        setIsUserData(true);
    }

    const handleFormSimpanSearchSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data); 
        const foundOption = options.find(option => option.value === data["statusKerja"]);
        const newItem = { no: rows.length+1, statusKerja: foundOption['label'], TMT: data["tmt"], keterangan: data["keterangan"], tanggalInsert: "28-11-2023" ,button:''};

        setRosw((prevItems) => [...prevItems, newItem]);
        // if (newItem.trim() !== '') {

        // }
        

        // setIsUserData(true);
    }

    const [opsi, setOpsi] = useState([]);

    const handleOptionChange = (event) => {
        setOpsi(event.value);
        console.log(opsi);
    }

    const options = [
        { value: '1', label: 'Aktif' },
        { value: '2', label: 'CBS AKHIR' },
        { value: '3', label: 'CLTP' },
        { value: '4', label: 'MPP' },
        
      ];

      const handleReset = () => {
        setKeterangan('');
        setKantor("");
        setStatusKerja("");
        setTmt(null);
        console.log(kantor);
      }

    const [keterangan, setKeterangan] = useState('');
    const [kantor, setKantor] = useState(0);
    const [status_kerja, setStatusKerja] = useState(0);
    const [tmt, setTmt] = useState('');

    const [rows, setRosw] = useState([
        { no: 1, statusKerja: 'Aktif', TMT: "21-04-2018", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2018" ,button:''},
        { no: 2, statusKerja: 'Aktif', TMT: "21-04-2017", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2017" ,button:''},
        { no: 3, statusKerja: 'Aktif', TMT: "21-04-2016", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2016",button:'' },
      ]);
    
    // const rows = [
    //     { no: 1, statusKerja: 'Aktif', TMT: "21-04-2018", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2018" ,button:''},
    //     { no: 2, statusKerja: 'Aktif', TMT: "21-04-2017", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2017" ,button:''},
    //     { no: 3, statusKerja: 'Aktif', TMT: "21-04-2016", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2016",button:'' },
    //   ];
    
      const headCells = [
        { id: 'no', label: 'No', },
        { id: 'statusKerja', label: 'Status Kerja', },
        { id: 'tmt', label: 'TMT', },
        { id: 'keterangan', label: 'Keterangan', },
        { id: 'insert', label: 'Tanggal Insert', },
        { id: 'aksi', label: 'Aksi', },
      ];
    
  return (
    <PageAreaContainer >
        <Box style={{marginBottom:'20px'}}>
            <h1>KELOLA HISTORI STATUS KERJA KARYAWAN</h1>
        </Box>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <form style={{height:'max-content'}} onSubmit={handleNipposSearchSubmit}>
                    <TextInput name="nippos" label="Nippos" isNipposForm />
                </form>
            </Grid>
        </Grid>
        
        {isUserData && 
            <div>

                <Grid className='main' sx={{backgroundColor:''}} container spacing={0}>
                    <form style={{width:'100%'}} onSubmit={handleFormSimpanSearchSubmit}>
                    <Grid container spacing={0}>

                        <Grid item xs={4} sm={5}>
                            <p>Nippos <span>:</span></p>
                        </Grid>
                        <Grid item xs={8} sm={7}>
                            <p className='textShow'>{userData.nippos}</p>
                        </Grid>

                        {/* <SelectInput name="kantor" label="Kantor" options={listKantor} placeholder="-- Silahkan Pilih --" /> */}
                        <SelectInput name="kantor" value={kantor} label="Kantor" options={kantorData} datas={kantorData} valueKey="nopend" labelKey="nama_kantor" placeholder="-- Silahkan Pilih --" />

                        {/* <SelectInput name="statusKerja" label="Status Kerja*" options={listStatusKerja} placeholder="-- Silahkan Pilih --" /> */}
                        <SelectInput name="statusKerja" value={status_kerja} label="Status Kerja" options={statusKerjaData} datas={statusKerjaData} valueKey="status_kerja_id" labelKey="status_kerja" placeholder="-- Silahkan Pilih --" />
                        
                        <DateInput name="tmt" label="TMT*" value={tmt} />

                        <TextInput name="keterangan" label="Keterangan" value={keterangan} />

                        <CustomGridLabel
                            component={Grid}
                            item
                            xs={12} sm={5}
                        >
                        </CustomGridLabel>
                        <Grid item xs={12} sm={7} >
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
                                        required
                                    />
                                </FormGroup>
                            </CustomWarningBox>
                        </Grid>


                        <CustomGridLabel
                            component={Grid}
                            item
                            xs={12} sm={5}
                        >
                        </CustomGridLabel>
                        <Grid item xs={12} sm={7} >
                            <Box sx={{display:'flex', justifyContent:'right', maxWidth:'500px', width:'100%', marginTop:'15px'}}>
                                <CustomButton type='' variant='contained' onClick={handleReset}>
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
                    <h3>DAFTAR KELOLA HISTORI STATUS KERJA KARYAWAN</h3>
                    <p>Status kerja saat ini : <b>AKTIF</b></p>
                </Box>
                <TableNoPage
                    rows={rows}
                    headCells={headCells}
                />
            </div>
        }

    </PageAreaContainer>
  )
}

export default KelolaStatusKerja
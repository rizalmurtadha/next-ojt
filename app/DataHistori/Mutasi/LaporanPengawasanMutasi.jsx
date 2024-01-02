// 'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import {  Box, Grid } from '@mui/material'
import { PageAreaContainer, CustomGridLabel, CustomButton } from '../../component/Styles'

import axios from 'axios';

import SelectInput from '../../component/SelectInput';
import TextInput from '../../component/TextInput';
import DateInput from '../../component/DateInput';

const rows = [
    { no: 1, statusKerja: 'Aktif', TMT: "21-04-2018", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2018" },
    { no: 2, statusKerja: 'Aktif', TMT: "21-04-2017", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2017" },
    { no: 3, statusKerja: 'Aktif', TMT: "21-04-2016", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2016" },
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



function LaporanPengawasanMutasi() {
    const [regionalData, setRegionalData] = useState([]);

    const [tickets, setTickets] = useState([]);

    const [regionalList, setRegionalList] = useState([]);
    const [loading, setLoading] = useState(true);

    // async function fetchTickets() {
    // const res = await fetch('http://localhost:2000/regionals');
    // const data = await res.json();
    // setRegionalData(data);
    // }
    useEffect(() => {
        fetchData();
        // async function fetchTickets() {
        // const resp = await axios.get('http://localhost:2000/regionals');
        // console.log(resp.data);
        // setRegionalData(resp.data);
        // console.log(regionalData);
        // // setRegionalList (resp.data.map((obj) => obj.name));
        // // console.log(regionalList);
        // setLoading(false);
        // }

        // fetchTickets();
    }, []);

    async function fetchData() {
        const resp = await axios.get('http://localhost:2000/regionals');
        console.log(resp.data);
        setRegionalData(resp.data);
        setRegionalList (resp.data.map((obj) => obj.regional));
      }

      useEffect(() => {
        setLoading(false);
        console.log(regionalList);
        // You can perform other actions with the updated state here
      }, [regionalList]); // This effect runs whenever regionalData changes


  return (
    <PageAreaContainer >
        <Box style={{marginBottom:'20px'}}>
            <h1>LAPORAN PENGAWASAN PELAKSANAAN MUTASI</h1>
        </Box>
        {/* {loading ? (
            <p>Loading...</p>
            ) : (
            <div>

                <ul>
                    {regionalData.map((reg) => (
                    <li key={reg["regional_id"]}>{reg["regional_id"]} {reg["regional"]}</li>
                    ))}
                </ul>
                
                
            </div>
        )} */}
        <Grid className='main' sx={{backgroundColor:'white'}} container spacing={0}>
            <form style={{width:'100%'}}>
                <Grid container spacing={0}>
                    <SelectInput name="regional" label="Regional" options={regionalList} datas={regionalData} valueKey="regional_id" labelKey="regional" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="upt" label="UPT" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="tahun" label="Tahun" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    {/* <SelectInput name="upt" label="UPT" options={listKantor} placeholder="-- Silahkan Pilih --" /> */}

                    {/* <SelectInput name="tahun" label="Tahun" options={listKantor} placeholder="-- Silahkan Pilih --" /> */}

                    <CustomGridLabel
                        component={Grid}
                        item
                        xs={12} sm={5}
                    >
                    </CustomGridLabel>
                    <Grid item xs={12} sm={7} >
                        <Box sx={{display:'flex', justifyContent:'right', maxWidth:'500px', width:'100%', marginTop:'15px'}}>
                            <CustomButton type='submit' variant='contained'>
                                Tampilkan Data
                            </CustomButton>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Grid>

        <Box style={{marginTop:'40px'}}>
            <h3>LAPORAN PENGAWASAN PELAKSANAAN MUTASI KANTOR REGIONAL V SURABAYA SPP SURABAYA</h3>
            <p>Status kerja saat ini : <b>AKTIF</b></p>        
        </Box>
        {/* <TableNoPage
            rows={rows}
            headCells={headCells}
        /> */}

    </PageAreaContainer>
  )
}

export default LaporanPengawasanMutasi
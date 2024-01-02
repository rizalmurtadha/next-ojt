'use client'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { PageAreaContainer } from '../../component/Styles'
import TableNoPage from '../../component/TableNoPage'

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

function HistoriTransferabilitas() {
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
            <h1>LAPORAN HISTORI TRANSFERABILITAS</h1>
        </Box>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <form style={{height:'max-content'}} onSubmit={handleNipposSearchSubmit}>
                    <TextInput name="nippos" label="Nippos" isNipposForm />
                </form>
            </Grid>
        </Grid>
        
        <Grid className='main' sx={{backgroundColor:'white', marginBottom:'20px'}} container spacing={0}>
            
            <Grid item xs={4} sm={4}>
                <p>Nippos <span>:</span></p>
            </Grid>
            <Grid item xs={8} sm={8}>
                <p className='textShow'>99928371828</p>
            </Grid>
            <Grid item xs={4} sm={4}>
                <p>Kantor <span>:</span></p>
            </Grid>
            <Grid item xs={8} sm={8}>
                <p className='textShow'>IPC SURABAYA 60900</p>
            </Grid>
            
        </Grid>
        
        <TableNoPage
            rows={rows}
            headCells={headCells}
        />

    </PageAreaContainer>
  )
}

export default HistoriTransferabilitas
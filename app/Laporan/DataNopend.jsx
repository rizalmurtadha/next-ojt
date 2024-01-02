'use client'
import React from 'react'
import { useState } from 'react';

import { Box, Grid } from '@mui/material'
import { PageAreaContainer, CustomGridLabel, CustomButton } from '../component/Styles'

import TableNoPage from '../component/TableNoPage'
import SelectInput from '../component/SelectInput';
import TextInput from '../component/TextInput';
import DateInput from '../component/DateInput';

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

function DataNopend() {

  return (
    <PageAreaContainer >
        <Box style={{marginBottom:'20px'}}>
            <h1>PENCARIAN DATA KARYAWAN PADA NOPEND KANTOR NON AKTIF</h1>
        </Box>

        <Grid className='main' sx={{backgroundColor:'white'}} container spacing={0}>
            <form style={{width:'100%'}}>
            <Grid container spacing={0}>

                <SelectInput name="regional" label="Regional" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                <SelectInput name="kprk" label="KPRK" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />
            
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
        
        <Box sx={{marginTop:'20px'}}>
            <h3>DATA KARYAWAN PADA KANTOR YANG TIDAK AKTIF DI REGIONAL I MEDAN 20004</h3>
            <p>Posisi Tanggal: 26 Oktober 2023 (tanggal download data) </p>
        </Box>

        <TableNoPage
            rows={rows}
            headCells={headCells}
        />

    </PageAreaContainer>
  )
}



export default DataNopend
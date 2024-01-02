'use client'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { PageAreaContainer, CustomGridLabel, CustomButton } from '../../component/Styles'

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

function LamaMenjabat() {

  return (
    <PageAreaContainer >

        <Box style={{marginBottom:'20px'}}>
            <h1>MENCARI KARYAWAN BERDASARKAN LAMA PENEMPATAN</h1>
        </Box>

        <Grid className='main' sx={{backgroundColor:'white', marginTop:'40px'}} container spacing={0}>
            <form style={{width:'100%'}}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6} container spacing={0}>

                    <SelectInput name="tingkatJabatan" label="Tingkat Jabatan" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="jabatan" label="Jabatan" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                </Grid> 
                <Grid item xs={12} md={6} container spacing={0}>

                    <SelectInput name="tempatKerja" label="TempatKerja" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="kantor" label="kantor" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />
                    
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
                            Tampilkan Data
                        </CustomButton>
                    </Box>
                </Grid>

            </Grid>
            </form>
        </Grid>

        <Box sx={{marginTop:'20px', textAlign:'center'}}>
            <h3>DATA PEGAWAI WILPOS 01</h3>
            {/* <p>Status kerja saat ini : <b>AKTIF</b></p> */}
        </Box>

        <TableNoPage
            rows={rows}
            headCells={headCells}
        />

    </PageAreaContainer>
  )
}

export default LamaMenjabat
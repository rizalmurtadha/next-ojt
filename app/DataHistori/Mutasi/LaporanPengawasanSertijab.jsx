'use client'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { PageAreaContainer,  CustomGridLabel, CustomButton } from '../../component/Styles'

import SelectInput from '../../component/SelectInput';
import TextInput from '../../component/TextInput';
import DateInput from '../../component/DateInput';

const rows = [
    { no: 1, statusKerja: 'Aktif', TMT: "21-04-2018", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2018" },
    { no: 2, statusKerja: 'Aktif', TMT: "21-04-2017", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2017" },
    { no: 3, statusKerja: 'Aktif', TMT: "21-04-2016", keterangan: "Mutasi antar KPRK", tanggalInsert: "17-04-2016" },
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
    { id: '1', value: 'Regional I' },
    { id: '2', value: 'Regional II' },
    { id: '3', value: 'Regional III' },
  ];
  
  const options2 = [
    { id: '4', value: 'KCP PLOSO' },
    { id: '5', value: 'KCP KUDU' },
    { id: '6', value: 'KCP KABUH' },
  ];

  const options3 = [
    { id: '7', value: '2019' },
    { id: '8', value: '2020' },
    { id: '9', value: '2021' },
    { id: '10', value: '2022' },
    { id: '11', value: '2023' },
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

function LaporanPengawasanSertijab() {
    const years = Array.from(new Array(11), (val, index) => 2023-index);
  return (
    <PageAreaContainer >
        <Box style={{marginBottom:'20px'}}>
            <h1>LAPORAN PENGAWASAN PELAKSANAAN PROSES SERTIJAB</h1>
        </Box>
        <Grid className='main' sx={{backgroundColor:'white'}} container spacing={0}>
            <form>
                <Grid container spacing={0}>
                    <SelectInput name="regional" label="Regional" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="upt" label="UPT" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

                    <SelectInput name="tahun" label="Tahun" options={[]} datas={[]} valueKey="" labelKey="" placeholder="-- Silahkan Pilih --" />

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
            <h3>LAPORAN PENGAWASAN PROSES SERTIJAB KANTOR PUSAT BANDUNG KANTOR PUSAT JAKARTA TAHUN: 2022</h3>
            <p>Posisi Tanggal: 26 Oktober 2023 (tanggal download data)</p>        
        </Box>
        {/* <TableNoPage
            rows={rows}
            headCells={headCells}
        /> */}

    </PageAreaContainer>
  )
}

export default LaporanPengawasanSertijab
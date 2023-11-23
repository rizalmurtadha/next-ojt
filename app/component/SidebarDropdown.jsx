'use client'
import React from 'react'
import {useState} from 'react'


import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { CustomSidebarMobile } from './Styles';


function SidebarDropdown({changeContent}) {
    
    const [open, setOpen] = React.useState(Array(50).fill(false));

    const handleClick = (index) => {
        const newOpen = [...open];
        newOpen[index] = !newOpen[index];
        setOpen(newOpen);
    }

  return (
    <CustomSidebarMobile>
        {/* {[0,1,2].map((index) => (
        ))} */}
        <div key={1}>
            <ListItemButton onClick={() => changeContent('home')}>
                <ListItemText primary={`Home `} />
            </ListItemButton>
        </div>

        <div key={2}>
            <ListItemButton onClick={() => handleClick(2)}>
                <ListItemText primary={`Master SDM `} />
                {open[2] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl:4}} onClick={() => changeContent('statusKerja')}>
                        <ListItemText primary={`Manual - Status Kerja`} />
                    </ListItemButton>
                </List>
            </Collapse>
        </div>

        <div key={3}>
            <ListItemButton onClick={() => handleClick(3)}>
                <ListItemText primary={`Data Histori `} />
                {open[3] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[3]} timeout="auto" unmountOnExit>
                <ListItemButton >
                    <div key={31}>
                        <ListItemButton onClick={() => handleClick(31)}>
                            <ListItemText primary={`Mutasi `} />
                            {open[31] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open[31]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('cetakSkepKJ')} >
                                    <ListItemText primary={`Cetak SKEP KJ`} />
                                </ListItemButton>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('historiPPOH')}>
                                    <ListItemText primary={`Kelola Histori PPOH dan Rangkap Jabatan`} />
                                </ListItemButton>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('laporanPEngawasanPelaksanaanMutasi')}>
                                    <ListItemText primary={`Laporan Pengawasan Pelaksanaan Mutasi`} />
                                </ListItemButton>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('laporanPelaksanaanProsesSertijab')}>
                                    <ListItemText primary={`Laporan Pelaksanaan Proses Sertijab`} />
                                </ListItemButton>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('newMutasi')}>
                                    <ListItemText primary={`New Mutasi`} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </div>
                </ListItemButton>
                <ListItemButton >
                    <div key={32}>
                        <ListItemButton onClick={() => handleClick(32)}>
                            <ListItemText primary={`Transferable `} />
                            {open[32] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open[32]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('historiTransferabilitas')}>
                                    <ListItemText primary={`Histori Transferabilitas`} />
                                </ListItemButton>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('Transferable')}>
                                    <ListItemText primary={`Transferable`} />
                                </ListItemButton>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('laporanStatusTransferabilitas')}>
                                    <ListItemText primary={`Laporan Status Transferable`} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </div>
                </ListItemButton>
            </Collapse>
        </div>

        <div key={4}>
            <ListItemButton onClick={() => handleClick(4)}>
                <ListItemText primary={`Pegawai (Peg12) `} />
                {open[4] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[4]} timeout="auto" unmountOnExit>
                <ListItemButton >
                    <div key={41}>
                        <ListItemButton onClick={() => handleClick(41)}>
                            <ListItemText primary={`Pencarian Berdasarkan `} />
                            {open[41] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open[41]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('cariNama')}>
                                    <ListItemText primary={`Nama`} />
                                </ListItemButton>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('cariNippos')}>
                                    <ListItemText primary={`Nippos`} />
                                </ListItemButton>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('cariKriteria')}>
                                    <ListItemText primary={`Kriteria`} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </div>
                </ListItemButton>
                <ListItemButton >
                    <div key={42}>
                        <ListItemButton onClick={() => handleClick(42)}>
                            <ListItemText primary={`Pencarian Khusus `} />
                            {open[42] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open[42]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('cariLamaMenjabat')}>
                                    <ListItemText primary={`Lama Menjaat`} />
                                </ListItemButton>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('cariStatusCLTP')}>
                                    <ListItemText primary={`Status CLTP`} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </div>
                </ListItemButton>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl:4}} onClick={() => changeContent('peg12Umum')}>
                        <ListItemText primary={`Peg12 Umum`} />
                    </ListItemButton>
                    <ListItemButton sx={{pl:4}} onClick={() => changeContent('profilingPeg12')}>
                        <ListItemText primary={`Profiling Peg12`} />
                    </ListItemButton>
                    <ListItemButton sx={{pl:4}} onClick={() => changeContent('pencarianPeg12')}>
                        <ListItemText primary={`Pencarian Peg12`} />
                    </ListItemButton>
                </List>
            </Collapse>
        </div>

        <div key={5}>
            <ListItemButton onClick={() => handleClick(5)}>
                <ListItemText primary={`Laporan `} />
                {open[5] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[5]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl:4}} onClick={() => changeContent('pencarianBerdasarkanKriteria')}>
                        <ListItemText primary={`Pencarian Berdasarkan Kriteria`} />
                    </ListItemButton>
                    <ListItemButton sx={{pl:4}} onClick={() => changeContent('statusProsesSertijab')}>
                        <ListItemText primary={`Status Proses Sertijab`} />
                    </ListItemButton>
                    <ListItemButton sx={{pl:4}} onClick={() => changeContent('TMT_CBS_MPP_PENSIUN')}>
                        <ListItemText primary={`TMT, CBS AKhir, MPP, Pensiun`} />
                    </ListItemButton>
                    <ListItemButton sx={{pl:4}} onClick={() => changeContent('promosiDanPJS')}>
                        <ListItemText primary={`Promosi dan PJS`} />
                    </ListItemButton>
                    <ListItemButton sx={{pl:4}} onClick={() => changeContent('realisasi_CBS_MPP')}>
                        <ListItemText primary={`Realisasi CBS AKhir, MPP`} />
                    </ListItemButton>
                </List>
                <ListItemButton >
                    <div key={51}>
                        <ListItemButton onClick={() => handleClick(51)}>
                            <ListItemText primary={`Cleansing Data `} />
                            {open[51] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open[51]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('dataKaryawanBagianNonAktif')}>
                                    <ListItemText primary={`Data Karyawan Pada Bagian Non Aktif`} />
                                </ListItemButton>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('dataKaryawanJabatanNonAktif')}>
                                    <ListItemText primary={`Data Karyawan Pada Jabatan Non Aktif`} />
                                </ListItemButton>
                                <ListItemButton sx={{pl:4}} onClick={() => changeContent('dataKaryawanNopendNonAktif')}>
                                    <ListItemText primary={`Data Karyawan Pada Nopend Kantor Non Aktif`} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </div>
                </ListItemButton>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl:4}} onClick={() => changeContent('TMT_CBS_MPP_PENSIUN_PER_KANTOR')}>
                        <ListItemText primary={`TMT, CBS AKhir, MPP, Pensiun Per Kantor`} />
                    </ListItemButton>
                </List>
            </Collapse>
        </div>

    </CustomSidebarMobile>
  )
}

export default SidebarDropdown
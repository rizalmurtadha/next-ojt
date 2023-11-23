import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SummarizeIcon from '@mui/icons-material/Summarize';

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function MenuListTop(  props ) {
    const { changeContent, menu } = props;
  return (
    <div>
        <Box sx={{display:'flex' , flexDirection:'column', maxHeight:'400px', overflowY: 'auto'}}>
            {menu === "Master_SDM" &&
                <List>
                    <ListItem className='secondLevel'>
                        <Button onClick={() => changeContent('statusKerja')}
                        className='tooltipButton'
                            startIcon={<SupervisorAccountIcon />}
                            // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                        >
                            <p>Manual - Status Kerja</p>
                        </Button>
                    </ListItem>
                </List>
            }

            {menu === "Data_Histori" &&
            
                <List>
                    <ListItem className='secondLevel'>
                        <Tooltip disableTriggerFocus title={
                            <List>

                            <ListItem className='secondLevel'>
                                <Button onClick={() => changeContent('cetakSkepKJ')}
                                className='tooltipButton'
                                    startIcon={<SupervisorAccountIcon />}
                                    // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                                >
                                    <p>Cetak Skep KJ</p>
                                </Button>
                            </ListItem>
                            <ListItem className='secondLevel'>
                                <Button onClick={() => changeContent('historiPPOH')}
                                className='tooltipButton'
                                    startIcon={<SupervisorAccountIcon />}
                                    // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                                >
                                    <p>Kelola Histori PPOH dan Rangkap Jabatan</p>
                                </Button>
                            </ListItem>
                            <ListItem className='secondLevel'>
                                <Button onClick={() => changeContent('laporanPEngawasanPelaksanaanMutasi')}
                                className='tooltipButton'
                                    startIcon={<SupervisorAccountIcon />}
                                    // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                                >
                                    <p>Laporan Pengawasan Pelaksanaan Mutasi</p>
                                </Button>
                            </ListItem>
                            <ListItem className='secondLevel'>
                                <Button onClick={() => changeContent('laporanPelaksanaanProsesSertijab')}
                                className='tooltipButton'
                                    startIcon={<SupervisorAccountIcon />}
                                    // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                                >
                                    <p>Laporan Pelaksanaan Proses Sertijab</p>
                                </Button>
                            </ListItem>
                            <ListItem className='secondLevel'>
                                <Button onClick={() => changeContent('newMutasi')}
                                className='tooltipButton'
                                    startIcon={<SupervisorAccountIcon />}
                                    // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                                >
                                    <p>New Mutasi</p>
                                </Button>
                            </ListItem>
                            </List>
                        } placement="right-start">
                            <Button
                            className='tooltipButton'
                                startIcon={<SupervisorAccountIcon />}
                                endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                            >
                                <p>Mutasi</p>
                            </Button>
                        </Tooltip>
                    </ListItem>
                    <ListItem className='secondLevel'>

                        <Tooltip disableTriggerFocus title={
                            <List>
                                <ListItem className='secondLevel'>
                                    <Button onClick={() => changeContent('historiTransferabilitas')}
                                    className='tooltipButton'
                                        startIcon={<SupervisorAccountIcon />}
                                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                                    >
                                        <p>Histori Transferabilitas</p>
                                    </Button>
                                </ListItem>
                                <ListItem className='secondLevel'>
                                    <Button onClick={() => changeContent('Transferable')}
                                    className='tooltipButton'
                                        startIcon={<SupervisorAccountIcon />}
                                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                                    >
                                        <p>Transferable</p>
                                    </Button>
                                </ListItem>
                                <ListItem className='secondLevel'>
                                    <Button onClick={() => changeContent('laporanStatusTransferabilitas')}
                                    className='tooltipButton'
                                        startIcon={<SupervisorAccountIcon />}
                                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                                    >
                                        <p>Laporan Status Transferabilitas</p>
                                    </Button>
                                </ListItem>
                            </List>
                        } placement="right-start">
                            <Button
                            className='tooltipButton'
                                startIcon={<SupervisorAccountIcon />}
                                endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                            >
                                <p>Transferable</p>
                            </Button>
                        </Tooltip>
                    </ListItem>
                </List>
            }
            {menu === "Pegawai_Peg12" &&
            
            <List>
                <ListItem className='secondLevel'>
                    <Tooltip disableTriggerFocus title={
                        <List>

                        <ListItem className='secondLevel'>
                            <Button onClick={() => changeContent('cariNama')}
                            className='tooltipButton'
                                startIcon={<SupervisorAccountIcon />}
                                // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                            >
                                <p>Nama</p>
                            </Button>
                        </ListItem>
                        <ListItem className='secondLevel'>
                            <Button onClick={() => changeContent('cariNippos')}
                            className='tooltipButton'
                                startIcon={<SupervisorAccountIcon />}
                                // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                            >
                                <p>Nippos</p>
                            </Button>
                        </ListItem>
                        <ListItem className='secondLevel'>
                            <Button onClick={() => changeContent('cariKriteria')}
                            className='tooltipButton'
                                startIcon={<SupervisorAccountIcon />}
                                // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                            >
                                <p>Kriteria</p>
                            </Button>
                        </ListItem>
                        
                        </List>
                    } placement="right-start">
                        <Button 
                        className='tooltipButton'
                            startIcon={<SupervisorAccountIcon />}
                            endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                        >
                            <p>Pencarian Berdasarkan</p>
                        </Button>
                    </Tooltip>
                </ListItem>
                <ListItem className='secondLevel'>

                    <Tooltip disableTriggerFocus title={
                        <List>
                            <ListItem className='secondLevel'>
                                <Button onClick={() => changeContent('cariLamaMenjabat')}
                                className='tooltipButton'
                                    startIcon={<SupervisorAccountIcon />}
                                    // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                                >
                                    <p>Lama Menjabat</p>
                                </Button>
                            </ListItem>
                            <ListItem className='secondLevel'>
                                <Button onClick={() => changeContent('cariStatusCLTP')}
                                className='tooltipButton'
                                    startIcon={<SupervisorAccountIcon />}
                                    // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                                >
                                    <p>Status CLTP</p>
                                </Button>
                            </ListItem>
                            
                        </List>
                    } placement="right-start">
                        <Button 
                        className='tooltipButton'
                            startIcon={<SupervisorAccountIcon />}
                            endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                        >
                            <p>Pencarian Khusus</p>
                        </Button>
                    </Tooltip>
                </ListItem>
                <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('peg12Umum')}
                    className='tooltipButton'
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Peg12 Umum</p>
                    </Button>
                </ListItem>
                <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('profilingPeg12')}
                    className='tooltipButton'
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Profiling Peg12</p>
                    </Button>
                </ListItem>
                <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('pencarianPeg12')}
                    className='tooltipButton'
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Pencarian Peg12</p>
                    </Button>
                </ListItem>
            </List>
        }
        {menu === "Laporan" &&
            
            <List>
                <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('pencarianBerdasarkanKriteria')}
                        className='tooltipButton'
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Pencarian Berdasarkan Kriteria</p>
                    </Button>
                </ListItem>
                <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('statusProsesSertijab')}
                    className='tooltipButton'
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Status Proses Sertijab</p>
                    </Button>
                </ListItem>
                {/* <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('laporanGender')}
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Gender</p>
                    </Button>
                </ListItem> */}
                {/* <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('laporanUsiaKaryawan')}
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Usia Karyawan</p>
                    </Button>
                </ListItem> */}
                {/* <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('laporanMasaKerja')}
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Masa Kerja</p>
                    </Button>
                </ListItem> */}
                <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('TMT_CBS_MPP_PENSIUN')}
                        className='tooltipButton'
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>TMT, CBS Akhir, MPP, Pensiun</p>
                    </Button>
                </ListItem>
                {/* <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('laporanStatusNikah')}
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Status Nikah</p>
                    </Button>
                </ListItem> */}
                {/* <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('laporanGolonganDarah')}
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Golongan Darah</p>
                    </Button>
                </ListItem> */}
                {/* <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('laporanAgama')}
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Agama</p>
                    </Button>
                </ListItem> */}
                <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('promosiDanPJS')}
                    className='tooltipButton'
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Promosi dan PJS</p>
                    </Button>
                </ListItem>
                <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('realisasi_CBS_MPP')}
                    className='tooltipButton'
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>Realisasi CBS Akhir, MPP, </p>
                    </Button>
                </ListItem>
                <ListItem className='secondLevel'>
                    <Tooltip disableTriggerFocus title={
                        <List>

                        <ListItem className='secondLevel'>
                            <Button onClick={() => changeContent('dataKaryawanBagianNonAktif')}
                            className='tooltipButton'
                                startIcon={<SupervisorAccountIcon />}
                                // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                            >
                                <p>Data Karyawan Pada Bagian Non Aktif</p>
                            </Button>
                        </ListItem>
                        <ListItem className='secondLevel'>
                            <Button onClick={() => changeContent('dataKaryawanJabatanNonAktif')}
                            className='tooltipButton'
                                startIcon={<SupervisorAccountIcon />}
                                // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                            >
                                <p>Data Karyawan Pada Jabatan Non Aktif</p>
                            </Button>
                        </ListItem>
                        <ListItem className='secondLevel'>
                            <Button onClick={() => changeContent('dataKaryawanNopendNonAktif')}
                            className='tooltipButton'
                                startIcon={<SupervisorAccountIcon />}
                                // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                            >
                                <p>Data Karyawan Pada Nopend Kantor Non Aktif</p>
                            </Button>
                        </ListItem>
                        </List>
                    } placement="right-start">
                        <Button
                        className='tooltipButton'
                            startIcon={<SupervisorAccountIcon />}
                            endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                        >
                            <p>Cleansing Data</p>
                        </Button>
                    </Tooltip>
                </ListItem>
                <ListItem className='secondLevel'>
                    <Button onClick={() => changeContent('TMT_CBS_MPP_PENSIUN_PER_KANTOR')}
                    className='tooltipButton'
                        startIcon={<SupervisorAccountIcon />}
                        // endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6" /></svg>}
                    >
                        <p>TMT, CBS Akhir, MPP, Pensiun per Kanor</p>
                    </Button>
                </ListItem>
                
            </List>
        }
        </Box>
    </div>
  )
}

export default MenuListTop
'use client'
import React, { useState } from 'react'

// import './header.css'
// import './main.css'
// import './tooltip.css'
import MainArea from '../component/MainArea'
// import TestDrawer from '../component/TestDrawer'
// import Sidebar from '../component/Sidebar'
// import Login from '../component/Login'
import Navigation from '../component/Navigation'


function page() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isSidePanel, setIsSidePanel] = useState(false);
    const [isDockOpen, setDock] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
  
    const changeNavStyle = (style) => {
      setIsSidePanel(style);
    }
  
    const changeDockState = (state) => {
      setDock(state);
    }
  
    const userLogin = (state) => {
      setIsLogin(state);
    }
  
  
    const dict = {
      "home":0,
      "statusKerja": 1,
  
      "cetakSkepKJ": 2,
      "historiPPOH": 2,
      "laporanPEngawasanPelaksanaanMutasi": 2,
      "laporanPelaksanaanProsesSertijab": 2,
      "newMutasi": 2,
  
      "historiTransferabilitas": 2,
      "Transferable": 2,
      "laporanStatusTransferabilitas": 2,
  
      "cariNama": 3,
      "cariNippos": 3,
      "cariKriteria": 3,
  
      "cariLamaMenjabat": 3,
      "cariStatusCLTP": 3,
  
      "peg12Umum": 3,
      "profilingPeg12": 3,
      "pencarianPeg12": 3,
  
      "pencarianBerdasarkanKriteria": 4,
      "statusProsesSertijab": 4,
      "laporanGender": 4,
      "laporanUsiaKaryawan": 4,
      "laporanMasaKerja": 4,
      "TMT_CBS_MPP_PENSIUN": 4,
      "laporanStatusNikah": 4,
      "laporanGolonganDarah": 4,
      "laporanAgama": 4,
      "promosiDanPJS": 4,
      "realisasi_CBS_MPP": 4,
      "dataKaryawanBagianNonAktif": 4,
      "dataKaryawanJabatanNonAktif": 4,
      "dataKaryawanNopendNonAktif": 4,
      "TMT_CBS_MPP_PENSIUN_PER_KANTOR": 4,
    };
  
    const changeContent = (page) => {
      setCurrentPage(page);
    }
    return (
    <div style={{ backgroundColor:'#fff', minHeight:'100vh', color:'#000'}}>
        <>
            <Navigation changeContent={changeContent} menu={dict[currentPage]} 
              isSidePanel={isSidePanel} changeNavStyle={changeNavStyle}
            />
            <MainArea currentPage={currentPage} 
              isSidePanel={isSidePanel}
              isDockOpen={isDockOpen} changeDockState={changeDockState}
            />
          </>
    </div>
  )
}

export default page
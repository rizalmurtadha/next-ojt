'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from './component/Navbar'
import styles from './page.module.css'
// import './header.css'
// import './main.css'
// import './tooltip.css'
import MainArea from './component/MainArea'
import TestDrawer from './component/TestDrawer'
import Sidebar from './component/Sidebar'
import Navigation from './component/Navigation'
import Login from './component/Login'
import TestLima from './component/TestLima'
import { Island_Moments } from 'next/font/google'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('statusKerja');
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
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>app/page.js</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore the Next.js 13 playground.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
   
   
   
  <div  style={{ backgroundColor:'#fff', minHeight:'100vh', color:'#000'}}>
      {/* <Navbar changeContent={changeContent} menu={dict[currentPage]} /> */}
      {/* <TestDrawer /> */}
      {/* <Sidebar /> */}
      
      { 
        isLogin ? 
        (
          <>
            <Navigation changeContent={changeContent} menu={dict[currentPage]} 
              isSidePanel={isSidePanel} changeNavStyle={changeNavStyle}
            />
            <MainArea currentPage={currentPage} 
              isSidePanel={isSidePanel}
              isDockOpen={isDockOpen} changeDockState={changeDockState}
            />
          </>
        ) : (<Login userLogin={userLogin} />) 
      }


          {/* {
            !isLogin &&
          <Login isLogin={isLogin} userLogin={userLogin} />
          }
          <Navigation changeContent={changeContent} menu={dict[currentPage]} 
              isSidePanel={isSidePanel} changeNavStyle={changeNavStyle}
            />
            <MainArea isLogin={isLogin} currentPage={currentPage} 
              isSidePanel={isSidePanel}
              isDockOpen={isDockOpen} changeDockState={changeDockState}
            /> */}




      {/* <TestLima /> */}

      {/* <MainArea currentPage={currentPage} 
        isSidePanel={isSidePanel}
        isDockOpen={isDockOpen} changeDockState={changeDockState}
      /> */}

    </div>
  )
}

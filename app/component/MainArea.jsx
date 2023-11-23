'use client'
import React from 'react'
import StatusKerja from '../MasterSDM/StatusKerja'
import KelolaHistoriPPOH from '../DataHistori/Mutasi/KelolaHistoriPPOH'
import Dashboard from './Dashboard'
import { Box, Container } from '@mui/material'
import CollapseTest from './CollapseTest'

import { MainAreaContainer } from './Styles'
import KelolaStatusKerja from '../MasterSDM/KelolaStatusKerja'
import CetakSkepKJ from '../DataHistori/Mutasi/CetakSkepKJ'
import LaporanPengawasanMutasi from '../DataHistori/Mutasi/LaporanPengawasanMutasi'
import LaporanPengawasanSertijab from '../DataHistori/Mutasi/LaporanPengawasanSertijab'
import NewMutasi from '../DataHistori/Mutasi/NewMutasi'
import HistoriTransferabilitas from '../DataHistori/Transferabilitas/HistoriTransferabilitas'
import Transferable from '../DataHistori/Transferabilitas/Transferable'
import LaporanStatusTransferabilitas from '../DataHistori/Transferabilitas/LaporanStatusTransferabilitas'
import CariNama from '../Pegawai/CariNama'
import CariNippos from '../Pegawai/CariNippos'
import CariKriteria from '../Pegawai/CariKriteria'
import KelolaPPOH from '../DataHistori/Mutasi/KelolaPPOH'
import LamaMenjabat from '../Pegawai/PencarianKhusus/LamaMenjabat'
import StatusCLTP from '../Pegawai/PencarianKhusus/StatusCLTP'
import Peg12Umum from '../Pegawai/Peg12Umum'
import ProfilingPeg12 from '../Pegawai/ProfilingPeg12'
import PencarianPeg12 from '../Pegawai/PencarianPeg12'
import PencarianKriteria from '../Laporan/PencarianKriteria'
import StatusProsesSertijab from '../Laporan/StatusProsesSertijab'
import LaporanPerNippos from '../Laporan/LaporanPerNippos'
import LaporanPerKantor from '../Laporan/LaporanPerKantor'
import PromosiPJS from '../Laporan/PromosiPJS'
import RealisasiCBS from '../Laporan/RealisasiCBS'
import DataBagianNon from '../Laporan/DataBagianNon'
import DataJabatanNon from '../Laporan/DataJabatanNon'
import DataNopend from '../Laporan/DataNopend'
import TableauTest from './TableauTest'

const agama = 'https://public.tableau.com/views/StatusNikahAgama/Dashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
const mutasi = 'https://public.tableau.com/views/Dashboard_mutasi3/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link';
const gender = 'https://public.tableau.com/views/GenderdanRentangUsia/Dashboard3?:language=en-US&:display_count=n&:origin=viz_share_link';

function MainArea({currentPage, isSidePanel, isDockOpen}) {
  return (
    <MainAreaContainer className={` ${isSidePanel ? 'sidebar' : ''} ${isDockOpen ? 'open':'close'}` } >
      {/* <CollapseTest /> */}
      {/* <h1>Main Area</h1> */}
      {/* <Dashboard /> */}

      {currentPage === 'home' && <TableauTest link={mutasi} />}
      {/* {currentPage === 'statusKerja' && <StatusKerja />} */}
      {currentPage === 'statusKerja' && <KelolaStatusKerja />}
      
      {currentPage === 'cetakSkepKJ' && <CetakSkepKJ /> }
      {/* {currentPage === 'historiPPOH' && <KelolaHistoriPPOH />} */}
      {currentPage === 'historiPPOH' && <KelolaPPOH />}
      {currentPage === 'laporanPEngawasanPelaksanaanMutasi' && <LaporanPengawasanMutasi />}
      {currentPage === 'laporanPelaksanaanProsesSertijab' && <LaporanPengawasanSertijab />}
      {currentPage === 'newMutasi' && <NewMutasi />}

      {currentPage === 'historiTransferabilitas' && <HistoriTransferabilitas />}
      {currentPage === 'Transferable' && <Transferable />}
      {currentPage === 'laporanStatusTransferabilitas' && <LaporanStatusTransferabilitas />}

      {currentPage === 'cariNama' && <CariNama />}
      {currentPage === 'cariNippos' && <CariNippos />}
      {currentPage === 'cariKriteria' && <CariKriteria />}

      {currentPage === 'cariLamaMenjabat' && <LamaMenjabat /> }
      {currentPage === 'cariStatusCLTP' && <StatusCLTP />}

      {currentPage === 'peg12Umum' && <Peg12Umum />}
      {currentPage === 'profilingPeg12' && <ProfilingPeg12 />}
      {currentPage === 'pencarianPeg12' && <PencarianPeg12 />}

      {currentPage === 'pencarianBerdasarkanKriteria' && <PencarianKriteria />}
      {currentPage === 'statusProsesSertijab' && <StatusProsesSertijab />}
      {currentPage === 'TMT_CBS_MPP_PENSIUN' && <LaporanPerNippos />}

      {currentPage === 'promosiDanPJS' && <PromosiPJS />}
      {currentPage === 'realisasi_CBS_MPP' && <RealisasiCBS />}

      {currentPage === 'dataKaryawanBagianNonAktif' && <DataBagianNon />}
      {currentPage === 'dataKaryawanJabatanNonAktif' && <DataJabatanNon />}
      {currentPage === 'dataKaryawanNopendNonAktif' && <DataNopend />}
      {currentPage === 'TMT_CBS_MPP_PENSIUN_PER_KANTOR' && <LaporanPerKantor />}




        {/* <KelolaHistoriPPOH /> */}
        {/* <StatusKerja /> */}
    </MainAreaContainer>

    // <main className='mainArea'>
    //   <div className='box-orange'>
    //     <div className='box-white'>

          
    //     </div>
    //   </div>
    // </main>
  )
}

export default MainArea
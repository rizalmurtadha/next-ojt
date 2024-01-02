import { Box, List, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import TableauViz from './TableauViz';
// import tableau from 'tableau-api';

function TableauTest({isLogin, link}) {
  const agama = 'https://public.tableau.com/views/StatusNikahAgama/Dashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
  const mutasi = 'https://public.tableau.com/views/Dashboard_mutasi3/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link';
  const gender = 'https://public.tableau.com/views/GenderdanRentangUsia/Dashboard3?:language=en-US&:display_count=n&:origin=viz_share_link';
  
  const [show, setShow] = useState(mutasi);

  const [isMutasi, setIsMutasi] = useState(true);
  const [isGender, setIsGender] = useState(false);

  const changeMutasi = () => {
    setIsMutasi(true);
    setIsGender(false);
  }

  const changeGender = () => {
    setIsMutasi(false);
    setIsGender(true);
  }

  const [activeTab, setActiveTab] = useState('mutasi');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // useEffect(() => {
  //   const vizUrl = 'https://public.tableau.com/views/Dashboard_mutasi3/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link';
  //   const vizContainer = document.getElementById('tableauViz');
  //   let viz = new tableau.Viz(vizContainer, vizUrl);
  // }, []);

  const [refreshKey, setRefreshKey] = useState(0);

  const handleButtonClick = () => {
    // Increment the key to trigger a re-render
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const [visualizations, setVisualizations] = useState([]);
  const handleAddVisualization = () => {
    const newVisualization = (
      <Box
        key={Date.now()} // Use a unique key for each visualization
        sx={{ display: 'flex', justifyContent: 'center', overflow: 'auto' }}
      >
        <tableau-viz
          id={`tableauViz-${Date.now()}`}
          src="https://public.tableau.com/views/Dashboard_mutasi3/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link"
          toolbar="bottom"
          hide-tabs
        ></tableau-viz>
      </Box>
    );

    setVisualizations((prevVisualizations) => [...prevVisualizations, newVisualization]);

  };
  const [vizss, setVizs] = useState(
    <Box
      key={Date.now()} // Use a unique key for each visualization
      sx={{ display: 'flex', justifyContent: 'center', overflow: 'auto' }}
    >
      <tableau-viz
        id={`tableauViz-${Date.now()}`}
        src="https://public.tableau.com/views/Dashboard_mutasi3/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link"
        toolbar="bottom"
        hide-tabs
      ></tableau-viz>
    </Box>
  )
  useEffect(() => {
    setVizs(vizss);
  }, []);

  return (
    <div>
        <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>

        <Box style={{display:'flex', flexDirection:'row', textAlign:'center'}}>
          <List >
              <Button onClick={() => changeMutasi()}>
                  <p>mutasi</p>
              </Button>
          </List>
          
          {/* <List>
              <Button >
                  <p>agama</p>
              </Button>
          </List> */}
          
          <List >
              <Button onClick={() => changeGender()}>
                  <p>gender</p>
              </Button>
          </List>
        </Box>
        
        {/* {activeTab === 'mutasi' && <TableauViz src={mutasi} />}
        {activeTab === 'gender' && <TableauViz src={gender} />} */}
    
        {/* {
          isMutasi &&
            <Box sx={{display:'flex', justifyContent:'center'}}>
              <h1>TEST</h1>
              <tableau-viz id="tableauViz"       
                src='https://public.tableau.com/views/Dashboard_mutasi3/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link'      
              
                toolbar="bottom" hide-tabs>
              </tableau-viz>
            </Box>

        }

        {
          isGender &&
            <Box sx={{display:'flex', justifyContent:'center'}}>
              <tableau-viz id="tableauViz"       
              
              src='https://public.tableau.com/views/GenderdanRentangUsia/Dashboard3?:language=en-US&:display_count=n&:origin=viz_share_link'
              toolbar="bottom" hide-tabs>
              </tableau-viz>
          </Box>
        } */}
        {/* <div id='tableauViz'></div> */}
        {
          isMutasi &&
          // !isLogin?{display:'100vh'}:
          <Box sx={{display:'flex', justifyContent:'center', overflow:'auto'}}>
              <tableau-viz id="tableauViz"       
              src='https://public.tableau.com/views/Dashboard_mutasi3/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link'      
              toolbar="bottom" hide-tabs>
              </tableau-viz>
          </Box>
        }
        {
          isGender &&
          // !isLogin?{height:'100vh'}:
          <Box style={{display:'flex', justifyContent:'center', overflow:'auto'}}>
              <tableau-viz id="tableauViz"       
              // src='https://public.tableau.com/views/Dashboard_mutasi3/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link'      
              src='https://public.tableau.com/views/GenderdanRentangUsia/Dashboard3?:language=en-US&:display_count=n&:origin=viz_share_link'
              toolbar="bottom" hide-tabs
              >
              </tableau-viz>
          </Box>
        }

        {/* <Box sx={{ display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
        <tableau-viz
          key={refreshKey} // This key change will trigger a re-render
          id="tableauViza"
          src="https://public.tableau.com/views/Dashboard_mutasi3/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link"
          toolbar="bottom"
          hide-tabs
        ></tableau-viz>
      </Box>
      <Button onClick={handleButtonClick}>Refresh Tableau Viz</Button> */}


    </div>
  )
}

// export default TableauTest
// import React, { useEffect } from 'react';
// import tableau from 'tableau-api'

// function Tableau() {
//   function initViz() {
    
//     const vizContainer = document.getElementById('tableauViz');
//     const url = 'http://public.tableau.com/views/WorldIndicators/GDPpercapita';
//     const options = {
//       width: '600px',
//       height: '600px',
//       hideTabs: true,
//       hideToolbar: true,
//     };
//     const viz = new tableau.Viz(vizContainer, url, options);
//   }

//   useEffect(() => {
//     initViz();
//   }, []);

//   return (
//     <div>
//       <h1>Tableau Embed Example</h1>
//       <div id="tableauViz"></div>
//     </div>
//   );
// }

// export default Tableau;

export default TableauTest
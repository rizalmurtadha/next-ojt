import { Box } from '@mui/material'
import React from 'react'

function TableauTest({link}) {
  return (
    <div>
        <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>

        <Box sx={{display:'flex', justifyContent:'center'}}>
            <tableau-viz id="tableauViz"       
            // src='https://public.tableau.com/views/Dashboard_mutasi3/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link'      
            src={link}
            // src='https://public.tableau.com/app/profile/naura.as.shofa/viz/StatusNikahAgama/Dashboard?publish=yes'
            // src='https://public.tableau.com/views/GenderdanRentangUsia/Dashboard3?:language=en-US&:display_count=n&:origin=viz_share_link'
            toolbar="bottom" hide-tabs>
            </tableau-viz>
        </Box>
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
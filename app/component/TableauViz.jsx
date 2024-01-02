import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const TableauViz = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger Tableau refresh when the component becomes visible
    if (isVisible && window.tableau) {
      const viz = window.tableau.Viz(document.getElementById('tableauViz'), src);
    }
  }, [isVisible, src]);

  return (
    
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
        <tableau-viz id="tableauViz" src={src} toolbar="bottom" hide-tabs />
      </div>
    </Box>
  );
};

export default TableauViz;
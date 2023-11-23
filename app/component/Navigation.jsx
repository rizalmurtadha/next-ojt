'use client'
import React, { useState } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Navigation({changeContent, menu, isSidePanel, changeNavStyle}) {
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    

    const setDrawerStatus = (status) => {
        setIsDrawerOpen(status);
    }

  return (
    <div>
        <Navbar changeContent={changeContent} menu={menu} 
            isSidePanel={isSidePanel} changeNavStyle={changeNavStyle}
            isDrawerOpen={isDrawerOpen} setDrawerStatus={setDrawerStatus}
        />
        {/* <TestDrawer /> */}

        { isSidePanel &&
            <Sidebar  
                isDrawerOpen={isDrawerOpen} setDrawerStatus={setDrawerStatus}
            />
        }
    </div>
  )
}

export default Navigation
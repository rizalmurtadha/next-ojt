'use client'
import React from 'react'
import {useState} from 'react'

import { StyledDrawer } from './Styles'
import { Collapse, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Image from 'next/image';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import SidebarDropdown from './SidebarDropdown'

function Sidebar({isDrawerOpen, setDrawerStatus}) {


    const [open, setOpen] = React.useState(Array(5).fill(false));

    const handleClick = (index) => {
        const newOpen = [...open];
        newOpen[index] = !newOpen[index];
        setOpen(newOpen);
    }

  return (
    <StyledDrawer open={isDrawerOpen} onClose={() => setDrawerStatus(false)} variant='permanent' >
        {/* <List sx={{padding:'5px 20px'}}>
            <a>
                <Image 
                    src="/images/posindonesia.jpg"
                    width={90}
                    height={60}
                />
            </a>
        </List> */}

        <SidebarDropdown />
        {/* <List>
            {[0,1,2].map((index) => (
                <div key={index}>
                    <ListItemButton onClick={() => handleClick(index)}>
                        <ListItemText primary={`List Item ${index + 1}`} />
                        {open[index] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[index]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{pl:4}}>
                                <ListItemText primary={`Nested List Item ${index + 1}`} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </div>
            ))}
        </List> */}
        
        {/* <List >
            <ListItem button>
            <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
            <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
            <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button>
            <ListItemText primary="Services" />
            </ListItem>
        </List> */}
    </StyledDrawer>
  )
}

export default Sidebar
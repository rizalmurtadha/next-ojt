'use client'
import React from 'react'
import {useState} from 'react'
import { AppBar, Toolbar, Drawer, Box } from '@mui/material'
import { List, ListItem, ListItemText} from '@mui/material'
import { IconButton } from '@mui/material'
import {Container} from '@mui/material'
import {Button} from '@mui/material'
import {Tooltip} from '@mui/material'
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
// import './../tooltip.css'

import MenuListTop from './MenuListTop'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ClickAwayListener from '@mui/material';

import { CustomTooltip, CustomNavbar, LogoContainer, CustomMenuToogler, TopNavbar, MobileMenuToogler } from './Styles'
import SidebarDropdown from './SidebarDropdown'

function Navbar({isSidePanel ,isDrawerOpen, setDrawerStatus, ...props}) {
    const { changeContent, menu } = props;
    // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <CustomNavbar position='fixed'>
            <Box style={{display:'flex', height:'100%'}}>
                <LogoContainer className={` ${isSidePanel ? '' : 'sidebar'} ` }>
                    <List >
                        <a>
                            <Image 
                                src="/images/posindonesia.jpg"
                                width={91}
                                height={54}
                            />
                        </a>
                    </List>
                    <Box sx={{flexGrow:1}}></Box>
                    {/* {isSidePanel && 
                        <List style={{display:'flex', alignItems:'center'}}>
                            <CustomMenuToogler aria-label="menu" onClick={() => setDrawerStatus(true)}>
                                <MenuIcon />
                            </CustomMenuToogler>
                        </List>
                    } */}
                </LogoContainer>
                <MobileMenuToogler>
                    <List style={{display:'flex', alignItems:'center', height:'100%'}}>
                        <CustomMenuToogler className='' aria-label="menu" onClick={() => setDrawerStatus(true)}>
                            <MenuIcon />
                        </CustomMenuToogler>
                    </List>
                </MobileMenuToogler>
                <Drawer disableScrollLock open={isDrawerOpen} onClose={() => setDrawerStatus(false)} className=''>
                    <List sx={{padding:'5px 20px'}}>
                        <a>
                            <Image 
                                src="/images/posindonesia.jpg"
                                width={90}
                                height={60}
                            />
                        </a>
                    </List>
                    <SidebarDropdown changeContent={changeContent} />
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
                </Drawer>
                <TopNavbar className={` ${isSidePanel ? 'hidden' : ''} ` }>
                    <List className={`menu-first ${menu === 0 ? "active" : ""}`}>
                        <Button 
                            onClick={() => changeContent('home')}
                        >
                            <p>Home</p>
                        </Button>
                    </List>
                    <List className={`menu-first ${menu === 1 ? "active" : ""}`}>
                        <CustomTooltip title={
                            <MenuListTop changeContent={changeContent} menu="Master_SDM" />
                        } placement="bottom-start">
                            <Button >
                                Master SDM
                            </Button>
                        </CustomTooltip>
                    </List>
                    <List className={`menu-first ${menu === 2 ? "active" : ""}`}>
                        
                        <Tooltip disableTriggerFocus title={
                            <MenuListTop changeContent={changeContent} menu="Data_Histori"  />
                        } placement="bottom-start">
                            <Button >
                                Data Histori
                            </Button>
                        </Tooltip>
                    </List>
                    <List className={`menu-first ${menu === 3 ? "active" : ""}`}>
                        
                        <Tooltip  title={
                            <MenuListTop changeContent={changeContent} menu="Pegawai_Peg12" />
                        } placement="bottom-start" >
                            <Button >
                                Pegawai (Peg12)
                            </Button>
                        </Tooltip>
                        
                    </List>
                    <List className={`menu-first ${menu === 4 ? "active" : ""}`}>
                        
                        <Tooltip disableTriggerFocus title={
                            <MenuListTop changeContent={changeContent} menu="Laporan" />
                        } placement="bottom-start">
                            <Button >
                                <p>Laporan</p>
                            </Button>
                        </Tooltip>
                        
                    </List>
                    {/* <List className={`menu-first ${menu === 4 ? "active" : ""}`}>
                        
                        <Tooltip title={
                            <MenuListTop changeContent={changeContent} menu="Laporan" />
                        } placement="bottom-start">
                            <Button >
                                <p>Laporan</p>
                            </Button>
                        </Tooltip>
                        
                    </List> */}
                    {/* <List className={`menu-first ${menu === 4 ? "active" : ""}`}>
                        
                        <Tooltip title={
                            <MenuListTop changeContent={changeContent} menu="Laporan" />
                        } placement="bottom-start">
                            <Button >
                                <p>Laporan</p>
                            </Button>
                        </Tooltip>
                        
                    </List> */}
                    {/* <List sx={{flexGrow:1}}>
                        
                    </List> */}
                </TopNavbar>
                <List sx={{flexGrow:1}}>
                                
                </List>
                <List className='' style={{display:'flex'}} >
                    <Tooltip disableTriggerFocus title={
                        <p>Logout</p>
                    } placement="bottom-end">
                        <Button 
                            sx={{width:'40px'}}
                            // startIcon={<PersonOutlineOutlinedIcon sx={{ fontSize:40}} />}
                        >
                            <PersonOutlineOutlinedIcon  />
                            {/* <KeyboardArrowDownIcon /> */}
                        </Button>
                    </Tooltip>
                </List>
            </Box>
            {/* <Toolbar sx={{minHeight:'64px'}}>
                <Box className='navbar-logo'>
                    <List className='navbar-appIcon'>
                        <a>
                            <Image 
                                src="/images/posindonesia.jpg"
                                width={91}
                                height={54}
                            />
                        </a>
                    </List>
                    <Box sx={{flexGrow:1}}></Box>
                    <IconButton className='sideBarToogler' aria-label="menu" onClick={() => setIsDrawerOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} className='sidePanel'>
                    <List sx={{padding:'5px 20px'}}>
                        <a>
                            <Image 
                                src="/images/posindonesia.jpg"
                                width={90}
                                height={60}
                            />
                        </a>
                    </List>
                    <List >
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
                    </List>
                </Drawer>
                <Container maxWidth={false} disableGutters className='navbarMenu'  > 
                    <div className='navbar-menu'>
                        <List className={`menu-first ${menu === 0 ? "active" : ""}`}>
                            <Button 
                                onClick={() => changeContent('home')}
                            >
                                <p>Home</p>
                            </Button>
                        </List>
                        <List className={`menu-first ${menu === 1 ? "active" : ""}`}>
                            <CustomTooltip title={
                                <MenuListTop changeContent={changeContent} menu="Master_SDM" />
                            } placement="bottom-start">
                                <Button >
                                    Master SDM
                                </Button>
                            </CustomTooltip>
                        </List>
                        <List className={`menu-first ${menu === 2 ? "active" : ""}`}>
                            
                            <Tooltip title={
                                <MenuListTop changeContent={changeContent} menu="Data_Histori"  />
                            } placement="bottom-start">
                                <Button >
                                    Data Histori
                                </Button>
                            </Tooltip>
                        </List>
                        <List className={`menu-first ${menu === 3 ? "active" : ""}`}>
                            
                            <Tooltip title={
                                <MenuListTop changeContent={changeContent} menu="Pegawai_Peg12" />
                            } placement="bottom-start">
                                <Button >
                                    Pegawai (Peg12)
                                </Button>
                            </Tooltip>
                            
                        </List>
                        <List className={`menu-first ${menu === 4 ? "active" : ""}`}>
                            
                            <Tooltip title={
                                <MenuListTop changeContent={changeContent} menu="Laporan" />
                            } placement="bottom-start">
                                <Button >
                                    <p>Laporan</p>
                                </Button>
                            </Tooltip>
                            
                        </List>
                        <List sx={{flexGrow:1}}>
                            
                        </List>
                    </div>
                </Container>
                <List sx={{flexGrow:1}}>
                            
                </List>
                <List className='profilIcon' >
                    <Tooltip title={
                        <p>Logout</p>
                    } placement="bottom-end">
                        <Button 
                            startIcon={<PersonOutlineOutlinedIcon sx={{ fontSize:40}} />}
                        >
                            <KeyboardArrowDownIcon />
                        </Button>
                    </Tooltip>
                </List>
            </Toolbar> */}
        </CustomNavbar>
    )
}

export default Navbar
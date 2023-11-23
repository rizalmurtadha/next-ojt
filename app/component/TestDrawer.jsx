import React from 'react'
import { StyledDrawer } from './Styles'
import { List, ListItem, ListItemText } from '@mui/material'
import Image from 'next/image';

function TestDrawer() {
  return (
    <StyledDrawer variant="permanent" open={true}>
        {/* <List sx={{padding:'5px 20px'}}>
            <a>
                <Image 
                    src="/images/posindonesia.jpg"
                    width={90}
                    height={60}
                />
            </a>
        </List> */}
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
    </StyledDrawer>
  )
}

export default TestDrawer
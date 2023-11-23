import { styled } from '@mui/material/styles';
import { AppBar, List, Toolbar } from '@mui/material';
import { Grid, Box } from '@mui/material';
import { IconButton, Button, Tooltip } from '@mui/material';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import {Drawer} from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { DatePicker } from '@mui/x-date-pickers';
// import { makeStyles } from '@material-ui/core/styles';


export const MainAreaContainer = styled(Box)({
    // backgroundColor:'pink',
    // backgroundColor:'#9D9D9D',
    padding:'0px 24px',
    paddingTop:'84px',
    minHeight:'calc(100vh)',
    
    '&.sidebar.open': {
        marginLeft:'260px'
    },
    '&.sidebar.close': {
        marginLeft:'72px'
    }
});

export const PageAreaContainer = styled(Box)({
    padding: '10px 20px',
    minHeight:'calc(100vh - 84px)',
    flexGrow:1,
    // backgroundColor:'rgb(54, 65, 82)',
    // border:'solid 10px #9d9d9d80',
    borderRadius:'20px 20px 0px 0px',
    alignItems:'center',
    'h1': {
        textAlign:'center',
        fontSize:'28px',
    },
    'p' :{
        width:'100%',
        fontSize:'14px',
        'span':{
            float:'right',
        },
        
    },
    '.MuiGrid-item ':{
        display:'flex', 
        alignItems:'center',
        minHeight:'40px',
        padding:'4px 10px',
        '@media (max-width:600px)':{
            padding:'8px 10px',
        }
    },
    '@media (max-width:600px)':{
        'h1':{
            fontSize:'20px',
        }
    }
}) 

export const CustomNavbar = styled(AppBar)({
    backgroundColor:'#FFFFFF',
    height:'64px',
    padding:'0px 24px',
    '@media (max-width: 600px)':{
        padding:'0px 16px',
    }
});

export const CustomDatePicker = styled(DatePicker) ({
    height:'40px',
    width:'100%',
    maxWidth:'500px',
    '.MuiInputBase-root':{
        height:'40px',
        borderRadius:'10px',
        // width:'100%',
        // maxWidth:'500px',
        '.MuiInputBase-input':{
            height:'40px',
            padding:'0px 10px',
        },
        ':hover':{
            borderColor:'red',
        }
    },
    '.MuiFormLabel-root' :{
        top:'-7px',
    },
});

export const LogoContainer = styled(Box)(({ theme }) => ({
    width:'calc(260px - 24px)',
    height:'64px',
    display:'flex',
    '&.hidden, .hidden': {
        display:'none',
    },
    '&.side-lg':{
        minWidth:'calc(260px - 24px)',
    },
    '&.sidebar' : {
        width:'calc(100px - 24px)',
    },
    [theme.breakpoints.down('md')]: {
        display:'none',
    },
}));

export const MobileMenuToogler = styled(Box) (({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        display:'block',
    },
    [theme.breakpoints.up('md')]: {
        display:'none',
    },
}));

export const CustomMenuToogler = styled(IconButton)({
    height:'40px',
});

export const TopNavbar = styled(Toolbar) (({ theme }) => ({
    display:'flex',
    '.menu-first':{
        height:'64px',
        padding:'0px',
        borderBottom:'4px solid transparent',
        boxSizing:'border-box',
        transition:'border 0.5s',
        'Button' :{
            height:'100%',
            minWidth:'fit-content',
            color:'#000',
            fontWeight:'bold',
            textTransform:'capitalize'
        },
        ':hover, :hover Button ,&.active, &.active Button':{
            color:'#FF6900',
            borderColor:"#FF6900"
        },
    },
    '&.hidden':{
        display:'none',
    },
    '@media (max-width:600px)':{
        display:'none',
    },
    [theme.breakpoints.down('md')]: {
        display:'none',
    },
}));

export const CustomButton = styled(Button)({
    height:"40px",
    minWidth:"100px",
    // ' .MuiButtonBase-root': {
    //     color:'red'
    // }
    color: 'white',
    backgroundColor: '#FF6900',
    '&:hover': {
      backgroundColor: '#c25100',
    },
    // width: '90px',
    // height: '36px',
    borderRadius:'10px',
    borderBottom: '1px solid #EE3A02',
    boxSizing: 'border-box',
    margin: '0px 5px',
});

export const CustomWarningBox = styled(Box) ({
    // justifyContent:'right', maxWidth:'700px', width:'100%', marginTop:'15px', borderRadius:'15px', bo
    width:'100%',
    maxWidth:'700px',
    border:'2px solid #000',
    boxSizing:'border-box',
    borderRadius:'17px',
    'h5':{
        // textAlign:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FF6900',
        color:'#fff',
        borderRadius:'15px 15px 0px 0px',
        minHeight:'25px',
        fontSize:'14px',
    },
    '.MuiFormControlLabel-root':{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        padding:'0px 10px',
        margin:'0px',
        'span':{
            fontSize:'14px',
            color:'#000000',
        },
        '.MuiCheckbox-root':{
            padding:'9px 1px',
        }
    },

});

export const CustomNipposTextField = styled(TextField)({
    paddingBottom:'20px',
    '& .MuiInputBase-root':{
        height:'56px',
        width:'100%',
        minWidth:'200px',
        borderRadius:'25px',
        "@media (max-width: 600px)": {
            // width:'200px',
            height:'40px',
            '.MuiInputBase-input':{
                display:'flex',
                // textAlign:'center',
                alignItem:'center',
                height:'40px',
                padding:'0px 14px'
            }
        }
    },
    '& label.Mui-focused' :{
        color: '#FF6900'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#FF6900'
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#FF6900'
        }
    },
    '@media (max-width:600px)':{
        '.MuiFormLabel-root' :{
            top:'-7px',
        }
    }
    
});

export const CustomSelect = styled(Select)({
    // color: "Black",
    // width:'100% !important',
    // minWidth:'200px',
    maxWidth:'500px',
    height:'40px',
    borderRadius:'10px',
    // '&.MuiOutlinedInput-notchedOutline': {
    //     borderColor: 'rgba(228, 219, 233, 0.25)',
    //     borderColor:'rgba(0,0,0,0.8',
    // },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#FF6900',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#FF6900',
    },

    '.MuiSvgIcon-root ': {
        fill: '#FF6900',
    },  
    'em':{
        fontSize:'14px',
    },
    '.MuiSelect-select' :{
        // color:'#FF6900',
    },
    '.MuiPopover-root': {
        zIndex:2000,
      }
});

export const CustomSidebarMobile = styled(List)({
    width:'260px',

})

export const DropdownFormControl = styled(FormControl)({
    // width:'100%',
    // ".MuiFormLabel-root" : {
    //     top:"-7px",
    //     height:'40px',
    //     // color: '#FF6900',
    //     "@media (min-width: 600px)": {
    //         display:'none'
    //     },
    //     '.Mui-focused' :{
    //         color: '#FF6900',
    //     }

    // },

    // ".MuiInputLabel-shrink" : {
    //     color: '#FF6900',
    //     top:'0px',
    // }
})

export const CustomFormControlDrop2 = styled(FormControl)({
    width:'100%',
    height:'40px',
    ".MuiFormLabel-root" : {
        top:"-7px",
        color: '#FF6900',
        '.MuiFormLabel-root': {
            '.Mui-focused':{
                color: '#FF6900',
            }
        },
        "@media (min-width: 600px)": {
            display:'none'
        },
        
    },
    // '.Mui-focused' :{
    //     color: '#FF6900',
    // }
});

export const CustomGridLabel = styled(Box)({
    display:'none',
    "@media (max-width: 600px)": {
        display:'none !important'
    }
})

export const CustomLabelGrid = styled(Grid)({
    display:'none'
    // "@media (min-width: 600px)": {
    // }
});




export const CustomTextField = styled(TextField)({
    
    '& .MuiInputBase-root':{
        width:'100%',
        maxWidth:'500px',
        height:'40px',
        borderRadius:'10px',
    },
    '& label.Mui-focused' :{
        color: '#FF6900'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#FF6900'
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#FF6900'
        }
    },
});

export const CustomTooltip = styled(Tooltip)({
    '& .MuiTooltip-tooltip': {
        padding: '0px',
        width: '100%',
        backgroundColor: '#ffffff',
        ShadowRoot: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }
});

// const drawerWidth = 450;


// const useStyles = makeStyles((theme) => ({
//     drawer: {
//       position: 'absolute',
//       overflowX: 'hidden',
//       zIndex: theme.zIndex.drawer + 2,
//       [theme.breakpoints.up('sm')]: {
//         position: 'relative',
//         width: 'drawerWidth',
//         flexShrink: 0,
//         zIndex: theme.zIndex.drawer,
//       },
//       whiteSpace: 'nowrap',
//     },
//     drawerOpen: {
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     drawerClose: {
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       overflowX: 'hidden',
//       width: 0,
//       [theme.breakpoints.up('sm')]: {
//         width: theme.spacing.unit * 9 + 1,
//       },
//     },
//   }));

export const StyledDrawer = styled(Drawer)({
    paddigTop:'64px',
    zIndex:'-100',

  '.MuiDrawer-paper': {
    width:'260px',

    '&::-webkit-scrollbar': {
      width: '2px'
    },

    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        display: 'none'
      }
    },

    '&::-webkit-scrollbar-thumb': {
      display: 'none'
    },

    '&::-webkit-scrollbar-track': {
      display: 'none'
    },

    "@media (min-width: 0px)": {
        marginTop:'64px'
    }
    
  }
});

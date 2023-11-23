import React from 'react'
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

import { CustomNipposTextField, CustomButton, CustomSelect, CustomTextField } from "../../component/Styles";


function KelolaHistoriPPOH() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <div style={{flexGrow:1}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div className='judulPage'>
                    <h1>KELOLA HISTORI MUTASI POH DAN RANGKAP JABATAN</h1>
                </div>
            </Grid>
            <Grid item xs={4} >
                    <form>
                        <FormControl sx={{width:'100%'}}>
                            
                            <CustomNipposTextField
                                id="outlined-basic" 
                                label="Nippos" 
                                variant="outlined"
                                sx={{minWidth:'200px'}}
                                />
                        </FormControl>
                    </form>
            </Grid>
        </Grid>
        <form className='mainForm'> 
            <Grid container spacing={2} className='fomGridContainer'>
                {/* Kiri */}
                <Grid item xs={4} sm={4} lg={2} order={{xs:1, sm:1, lg:1}}>
                    <p>Nippos <span>:</span></p>
                </Grid>
                <Grid item xs={8} sm={8} lg={4} order={{xs:2, sm:2, lg:2}}>
                    <p className='textShow'>99928371828</p>
                </Grid>

                <Grid item xs={12} sm={4} lg={2} className='labelForm' order={{xs:3, sm:3, lg:5}}>
                    <p>No. Skep* <span>:</span></p>
                </Grid> 
                <Grid item xs={12} sm={8} lg={4} order={{xs:3, sm:3, lg:6}}>
                    <FormControl sx={{width:'100%'}}>
                        <CustomTextField
                            id="outlined-basic" 
                            // label="Keterangan" 
                            variant="outlined"
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={4} lg={2} className='labelForm' order={{xs:4, sm:4, lg:9}}>
                    <p>Tgl Skep* <span>:</span></p>
                </Grid>
                <Grid item xs={12} sm={8} lg={4} order={{xs:4, sm:4, lg:10}}>
                    <p>DatePicker</p> 
                </Grid>

                <Grid item xs={12} sm={4} lg={2} className='labelForm' order={{xs:5, sm:5, lg:13}}>
                    <p>TMT* <span>:</span></p>
                </Grid>
                <Grid item xs={12} sm={8} lg={4} order={{xs:5, sm:5, lg:14}}>
                    <p>DatePicker</p>
                </Grid>

                <Grid item xs={12} sm={4} lg={2} className='labelForm' order={{xs:6, sm:6, lg:17}}>
                    <p>Tanggal Akhir POH/RJT* </p>
                    <span>:</span>
                </Grid>
                <Grid item xs={12} sm={8} lg={4} order={{xs:6, sm:6, lg:18}} >
                    <p>DatePicker</p>
                </Grid>

                <Grid item xs={4} sm={4} lg={2} order={{xs:7, sm:7, lg:21}}>
                    <p>Kantor Asal <span>:</span></p>
                </Grid>
                <Grid item xs={8} sm={8} lg={4} order={{xs:7, sm:7, lg:22}}>
                    <p className='textShow'>60900 - IPC SURABAYA</p>
                </Grid>

                {/* Kanan */}
                <Grid item xs={12} sm={4} lg={2} className='labelForm' order={{xs:8, sm:8, lg:3}}>
                    <p>Kantor Tujuan* <span>:</span></p>
                </Grid>
                <Grid item xs={12} sm={8} lg={4} order={{xs:8, sm:8, lg:4}}>
                    <CustomSelect
                        id="demo-simple-select"
                        value={age}
                        displayEmpty
                        onChange={handleChange}
                    >
                        <MenuItem disabled value="" >
                            <em>-- Pilih Kantor --</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </CustomSelect>
                </Grid>

                <Grid item xs={12} sm={4} lg={2} className='labelForm' order={{xs:9, sm:9, lg:7}}>
                    <p>Bagian* <span>:</span></p>
                </Grid>
                <Grid item xs={12} sm={8} lg={4} order={{xs:9, sm:9, lg:8}}>
                    <CustomSelect
                        id="demo-simple-select"
                        value={age}
                        displayEmpty
                        onChange={handleChange}
                    >
                        <MenuItem disabled value="" >
                            <em>-- Silahkan Pilih --</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </CustomSelect>
                </Grid>
                
                <Grid item xs={12} sm={4} lg={2} className='labelForm' order={{xs:10, sm:10, lg:11}}>
                    <p>Jenis Jabatan POH/RJT* </p><span>:</span>
                </Grid>
                <Grid item xs={12} sm={8} lg={4} order={{xs:10, sm:10, lg:12}}>
                    <CustomSelect
                        id="demo-simple-select"
                        value={age}
                        displayEmpty
                        onChange={handleChange}
                    >
                        <MenuItem disabled value="" >
                            <em>-- Silahkan Pilih --</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </CustomSelect>
                </Grid>

                <Grid item xs={12} sm={4} lg={2} className='labelForm' order={{xs:11, sm:11, lg:15}}>
                    <p>Jabatan POH/RJT* <span>:</span></p>
                </Grid>
                <Grid item xs={12} sm={8} lg={4} order={{xs:11, sm:11, lg:16}}>
                    <CustomSelect
                        id="demo-simple-select"
                        value={age}
                        displayEmpty
                        onChange={handleChange}
                    >
                        <MenuItem disabled value="" >
                            <em>-- Silahkan Pilih --</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </CustomSelect>
                </Grid>

                <Grid item xs={12} sm={4} lg={2} className='labelForm' order={{xs:12, sm:12, lg:19}}>
                    <p>Jenis Mutasi* <span>:</span></p>
                </Grid>
                <Grid item xs={12} sm={8} lg={4} order={{xs:13, sm:13, lg:20}}>
                    <CustomSelect
                        id="demo-simple-select"
                        value={age}
                        displayEmpty
                        onChange={handleChange}
                    >
                        <MenuItem disabled value="" >
                            <em>-- Silahkan Pilih --</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </CustomSelect>
                </Grid>

                <Grid item xs={12} sm={4} lg={2} className='labelForm' order={{xs:13, sm:13, lg:23}}>
                    <p>Keterangan <span>:</span></p>
                </Grid>
                <Grid item xs={12} sm={8} lg={4} order={{xs:14, sm:14, lg:24}}>
                    <FormControl sx={{width:'100%'}}>
                        <CustomTextField
                            id="outlined-basic" 
                            variant="outlined"
                        />
                    </FormControl>
                </Grid>
                {/* <Grid item xs={12} sm={4} className='labelForm'>
                </Grid>
                <Grid item xs={12} sm={8} >
                    <Box sx={{display:'flex', justifyContent:'right', maxWidth:'500px', width:'100%', marginTop:'15px'}}>
                        <CustomButton type='submit' variant='contained'>
                            Reset
                        </CustomButton>
                        <CustomButton type='submit' variant='contained'>
                            Simpan
                        </CustomButton>
                    </Box>
                </Grid> */}
                <Grid item xs={12} sm={4} lg={8} order={{xs:97}}></Grid>
                <Grid item xs={12} sm={8} lg={4} order={{xs:98}}>
                    <Box sx={{display:'flex', justifyContent:'right', maxWidth:'500px', width:'100%', marginTop:'15px'}}>
                        <CustomButton type='submit' variant='contained'>
                            Reset
                        </CustomButton>
                        <CustomButton type='submit' variant='contained'>
                            Simpan
                        </CustomButton>
                    </Box>
                </Grid>
                <Grid item xs={12} order={{xs:99}}>
                    <p>Ket: * Wajib Diisi</p>
                </Grid>
            </Grid>
        </form>
        
    </div>
  )
}

export default KelolaHistoriPPOH
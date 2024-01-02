'use client'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { PageAreaContainer } from '../component/Styles'

import SelectInput from '../component/SelectInput';
import TextInput from '../component/TextInput';
import DateInput from '../component/DateInput';

function CariNippos() {
    const [isUserData, setIsUserData] = useState(null);
    const [userForm, setUserForm] = useState(null);
    const [tableData, setTableData] = useState(null);

    const handleNipposSearchSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data); 
        setIsUserData(true);
    }

    return (
        <PageAreaContainer >

            <Box style={{marginBottom:'20px'}}>
                {/* <h1>KELOLA HISTORI STATUS KERJA KARYAWAN</h1> */}
            </Box>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <form style={{height:'max-content'}} onSubmit={handleNipposSearchSubmit}>
                        <TextInput name="nippos" label="Nippos" isNipposForm />
                    </form>
                </Grid>
            </Grid>
            
            <Box sx={{textAlign:'center', marginTop:'40px', marginBottom:'20px'}}>
                <h3>DETAIL DATA PEGAWAI</h3>
            </Box>

        </PageAreaContainer>
    )
}

export default CariNippos
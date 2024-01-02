'use client'
import React, { useRef } from 'react'
import { useEffect } from 'react';
import { LoginCanvas, LoginFormCanvas, CustomButton, LogoGrid } from './Styles'
import { Grid, Box } from '@mui/material'
import Image from 'next/image';
import gsap from 'gsap';

import TextInput from './TextInput';
import DateInput from './DateInput';
import SelectInput from './SelectInput';

function Login({isLogin, userLogin}) {
    // const firstText = useRef(null);
    // const secondText = useRef(null);
    // let xPercent = 0;
    // let direction = -1;
    
    // useEffect( () => {
    //     requestAnimationFrame(animation);
    // },[firstText]);

    // const animation = ( ()=> {
    //     if(xPercent <= -100){
    //         xPercent = 0;
    //     }
    //     gsap.set(firstText.current, {xPercent:xPercent})
    //     gsap.set(secondText.current, {xPercent:xPercent})
    //     xPercent += 0.05 * direction;
    //     requestAnimationFrame(animation);
    // })

    const firstText = useRef(null);
  const secondText = useRef(null);

  useEffect(() => {
    let xPercent = 0;
    let direction = -1;

    const animation = () => {
      if (xPercent <= -100) {
        xPercent = 0;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      xPercent += 0.15 * direction;
      requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);

    return () => {
      gsap.killTweensOf(firstText.current);
      gsap.killTweensOf(secondText.current);
    };
  }, [firstText, secondText]);

  return (
    <LoginCanvas
        style={isLogin?{zIndex:-10000}:{}}
    >
        {/* <h1>Login</h1> */}
        <Grid container spacing={0} style={{width:'100%', height:'100vh', justifyContent:"center", alignContent:'center'}}>
            <Grid item xs={12} style={{width:'100%', maxWidth:'700px'}}>
                {/* RunningText */}                        
                <Box style={{ overflow: 'hidden', padding: '10px 0px' }}>
                <div style={{ position: 'relative', display: 'flex', backgroundColor: '#BABABA' }}>
                    <li ref={firstText} style={{ padding: '0px', whiteSpace: 'nowrap' }}>
                    Mari Wujudkan Budaya AKHLAK : Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.
                    {/* Test */}
                    </li>
                    <li ref={secondText} style={{ position: 'absolute',left:'710.350px', whiteSpace: 'nowrap' }}>
                    Mari Wujudkan Budaya AKHLAK : Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.
                    {/* Test */}
                    </li>
                </div>
                </Box>
                {/* <Box style={{overflow:'hidden', padding:'10px 0px'}}>
                    <div style={{position:'relative', whiteSpace:'nowrap', display:'flex', backgroundColor:'#BABABA'}}>
                        <li ref={firstText} style={{padding:'0px 5px'}}>
                            Mari Wujudkan Budaya AKHLAK : Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.
                            TEst
                            </li>
                        <li ref={secondText} style={{position:'absolute', left:'100%'}}>
                            Mari Wujudkan Budaya AKHLAK : Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.
                            Test
                            </li>
                    </div>
                </Box>                 */}
            </Grid>
            <LoginFormCanvas item xs={12}>
                <Grid container>
                    <Grid item xs={6} className='gambar'>
                        <Image 
                            src="/images/foto_kantor_cilaki.jpeg"
                            width={400}
                            height={400}
                            alt=''
                        />
                    {/* Add your image here */}
                    </Grid>
                    <Grid item xs={12} lg={6}>
                    {/* Add your content here */}
                        <Grid container spacing={0}>
                            <Grid item xs={12} style={{alignItems:'center', display:'flex', padding:'10px 20px'}}>
                                <Image 
                                    src="/images/logoBUMN.png"
                                    width={150}
                                    height={30}
                                    alt=''
                                />
                                <Box style={{flexGrow:1}}></Box>
                                <Image 
                                    src="/images/logo_posindo_new.png"
                                    width={60}
                                    height={60}
                                    alt=''
                                    style={{justifySelf:'end'}}
                                />
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center', color:'#1B2C5A'}}>
                                <h1>SIM SDM</h1>
                                <p>Sistem Informasi Management</p>
                                <p>Sumber Daya Manusia</p>
                            </Grid>
                            <form style={{width:'100%', paddingTop:'10px',display:'flex', justifyContent:'center'}} onSubmit={() => {
                                        userLogin(true);
                                         }}>
                            <Grid container spacing={0} style={{width:'60%'}}>
                                <Grid item xs={12} style={{padding:'10px'}}>
                                    <TextInput name="userId" label="User ID" isNipposForm />
                                </Grid>
                                <Grid item xs={12} style={{padding:'10px', paddingBottom:'5px'}}>
                                    <TextInput name="password" label="Password" isNipposForm type="password" />
                                </Grid>
                                <Grid item xs={12} style={{textAlign:'end',color:'#1B2C5A', paddingBottom:'20px', paddingRight:'20px'}}>
                                    {/* <p>Lupa Password</p> */}
                                    <a href=''>Lupa Password</a>
                                </Grid>
                                <Grid item xs={12} style={{display:'flex', justifyContent:'center'}}>
                                    <CustomButton type='submit' variant='contained'>
                                        Masuk
                                    </CustomButton>
                                </Grid>
                            </Grid>
                            </form>
                        {/* <form style={{width:'100%'}}>
                            
                        </form> */}
                        </Grid>
                    </Grid>
                </Grid>
            </LoginFormCanvas>
            <Grid item xs={12} style={{maxWidth:'900px', display:'flex', justifyContent:'center', paddingTop:'20px'}}>
                <Grid container spacing={0}>

                    <LogoGrid item xs={12} sm={6} className='left'>
                        <Image 
                        src="/images/LogoAkhlak.png"
                        width={100}
                        height={50}
                        alt=''
                        style={{margin:'0px 10px'}}
                        />
                        <Image 
                        src="/images/LogoPosAja.png"
                        width={50}
                        height={50}
                        alt=''
                        style={{margin:'0px 10px'}}
                        />
                        <Image 
                        src="/images/LogoPospay.png"
                        width={160}
                        height={50}
                        alt=''
                        style={{margin:'0px 10px'}}
                        />
                    </LogoGrid>

                    <LogoGrid item xs={12} sm={6}  className='right'>
                        <Image 
                        src="/images/LogoPosBloc.png"
                        width={50}
                        height={50}
                        alt=''
                        style={{margin:'0px 10px'}}
                        />
                        <Image 
                        src="/images/LogoPosStori.png"
                        width={100}
                        height={50}
                        alt=''
                        style={{margin:'0px 10px'}}
                        />
                        <Image 
                        src="/images/LogoUlbi.png"
                        width={100}
                        height={50}
                        alt=''
                        style={{margin:'0px 10px'}}
                        />
                    </LogoGrid>
                </Grid>
            </Grid>
        </Grid>
    </LoginCanvas>
  )
}

export default Login
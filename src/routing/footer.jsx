import darklogo from "../Image/darklogo.png"
import darkinsta from "../Image/darkinsta.png"
import lightinsta from "../Image/lightinsta.png"
import darktube from "../Image/darktube.png"
import lighttube from "../Image/lighttube.png"
import darkemail from "../Image/darkemail.png"
import lightemail from "../Image/lightemail.png"
import lightf from "../Image/lightf.png"
import darkf from "../Image/darkf.png"
import darkp from "../Image/darkp.png"
import lightp from "../Image/lightp.png"
import { useNavigate } from "react-router-dom";
import { Box,Image,Grid,GridItem} from "@chakra-ui/react";
import v from "../Image/v.png"
import {Authcontext} from "../authcontext/authcontext"
import { useContext } from 'react';

function Footer(){
    const value=useContext(Authcontext)
    let {theme,settingtheme}=value
    const navigate=useNavigate()
    function handellogo(){
       navigate('/')     
    }
    return <>
     <Box  style={{backgroundColor:theme?'black':'#ECEFF1',height:'60px',zIndex:"2",borderBottom:theme?'2px solid blue':'2px solid black'}}>
               
               <div>
                     <button onClick={handellogo}>  <Image  style={{display:'block',margin:'auto',borderRadius:'50%',height:'150px',borderTop:theme?'8px solid blue':'8px solid black'}} src={theme?darklogo:v} alt="" /></button>
                   </div>
                   </Box>
                   <div>
                   <div style={{backgroundColor:theme?'black':'#E1BEE7',height:'100px',zIndex:'1'}}></div>
                   <div >
                    
                   <div style={{display:'flex',justifyContent:'center',textAlign:'center',gap:'40px',width:'100%',backgroundColor:theme?'black':'#E1BEE7',padding:'10px 20px'}}>
                   
                      <Image width={'30px'} style={{display:'block'}} src={theme?darkf:lightf}/>
                      <Image style={{display:'block',width:'50px'}} src={theme?darktube:lighttube}/>
                      <Image  style={{display:'block'}} src={theme?darkp:lightp} />
                      <Image style={{display:'block',width:'40px'}} src={theme?darkinsta:lightinsta} />
                      <Image style={{display:'block',width:'35px'}} src={theme?darkemail:lightemail} />
           
                   </div>
                   </div>
                   </div>

                   <div style={{padding:'20px 100px',background:theme?'black':'#E1BEE7'}}><hr/></div>
                   <div style={{padding:'0px 100px',background:theme?'black':'#E1BEE7',display:'flex',justifyContent:'space-evenly',color:theme?'white':'black'}}>
                    <b>Stores</b>
                    <b>Tearms and Conditions</b>
                    <b>Returns</b>
                    <b>FAQs</b>
                    <b>About Us</b>
                   </div>
                   <div style={{padding:'20px 100px',background:theme?'black':'#E1BEE7'}}><hr/></div>
                   <div style={{padding:'0px 100px',color:'white',background:theme?'black':'#E1BEE7'}}>
                   <h1 style={{fontSize:'25px',textAlign:'left',color:theme?'white':'black'}}><b>GET IN TOUCH</b></h1>
                   <Grid  templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)','repeat(5, 1fr)']} style={{gap:'25px',textAlign:'left',color:theme?'white':'black'}}>
                   <GridItem><div>
                    <h2><b>Call us at</b></h2>
                    <h2><b>1800-209-9933</b></h2>
                    <h2><b>Monday to Friday: 9AM to 7PM</b></h2>
                   </div></GridItem>
                   <GridItem><div>
                    <h2><b>Support</b></h2>
                    <a href={'./'}  ><b>hello@sugarcosmetics.com</b></a>
                   </div></GridItem>
                   <GridItem><div>
                    <h2><b>Careers</b></h2>
                    <h2><b>We're hiring!</b></h2>
                   </div></GridItem>
                   <GridItem><div>
                    <h2><b>Press & Media</b></h2>
                    <a href={'./'}  ><b>pr@sugarcosmetics.com</b></a>
                   </div></GridItem>
                   <GridItem><div>
                    <h2><b>Influencer Collab</b></h2>
                    <h2><b>Join us</b></h2>
                   </div></GridItem>

                   </Grid >
                   </div>
                   <div style={{padding:'20px 100px',background:theme?'black':'#E1BEE7'}}><hr /></div>
                   <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'40px',color:theme?'white':'black',background:theme?'black':'#E1BEE7',padding:'15px 0px'}}>
                    <div>
                        <h1><b>GET THE NEW JULIANA APP TODAY!</b></h1>
                        <p>Tap into a batter shop experience!</p>
                    </div>
                    <div>
                        <img style={{width:'150px',height:'50px'}} src="https://in.sugarcosmetics.com/playstore.png" alt="" />
                    </div>
                    <div>
                        <img style={{width:'150px',height:'50px'}} src="https://in.sugarcosmetics.com/apple-store.png" alt="" />
                    </div>
                   </div>
                   <hr></hr>
                   <div style={{color:theme?'white':'black',background:theme?'black':'#E1BEE7',padding:'20px 0px'}}><a href="./">Copyright © 2023 SUGAR Cosmetics. All rights reserved.</a></div>
                   </>
}

export default Footer
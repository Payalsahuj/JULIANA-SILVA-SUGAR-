import styled from "styled-components";
import MultipleItems,{SimpleSlider,Multiple,MultipleItemstwo,Multipletwo,MultipleItemsthree,MultipleItemsfour, MultipleItemsfive,SimpleSlidertwo} from "./slick";
import {Authcontext} from "../authcontext/authcontext"
import { useContext } from 'react';
import { Box,Image} from "@chakra-ui/react";
import v from "../Image/v.png"

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
import lightp from "../Image/lightf.png"
function Landpage() {
    const value=useContext(Authcontext)
    let {theme,settingtheme}=value
    return (
        <>
            <DIV style={{padding:'10px 30px',backgroundColor:theme?'black':'#ECEFF1',color:theme?'black':''}}>
            <div>
             <SimpleSlider/>
             </div>
             <div style={{ backgroundColor:"#1A237E",padding:'40px 0px',marginTop:'20px'}}>
             < MultipleItems />
             
             </div>
             <div style={{marginTop:'20px',borderRadius:'9px'}}><h1 style={{textAlign:'center',fontSize:'30px',color:'white'}}><b>--Hotel Details--</b></h1><div style={{border:theme?'4px solid blue':""}}><Multiple/></div></div>
             <div style={{ backgroundColor:"#1A237E",padding:'40px 0px',marginTop:'20px'}}><MultipleItemstwo/></div>
             <div style={{marginTop:'20px', padding:'0px 30px'}}>
                <h1 style={{textAlign:'center',fontSize:'30px',color:theme?'white':'black'}}><b>--TIPSY LIPS SCRUB + BALM DUO--</b></h1>
                <div >
                <img style={{borderRadius:'7px', display:'block',height:'540px',width:'100%'}} src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/0533d215-072d-46a6-a126-656aa10580fb.jpg&w=1920&q=75" alt="" />
                </div>
             </div>
             <div style={{marginTop:'20px'}}><Multipletwo/></div>
        
             <div style={{ backgroundColor:"#1A237E",padding:'40px 0px',marginTop:'20px'}}><MultipleItemsthree/></div>
             <div style={{ backgroundColor:"#1A237E",padding:'40px 0px',marginTop:'20px'}}><MultipleItemsfour/></div>
             <div>
                <h1 style={{textAlign:'center',fontSize:'30px',marginTop:'30px',color:theme?'white':'black'}}><b>--REFER YOUR FRIENDS--</b></h1>
                <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8638d096-d168-404e-9b83-56967625b5e6.jpg&w=1920&q=75" alt="" />
             </div>
             <div style={{ backgroundColor:"#1A237E",padding:'40px 0px',marginTop:'20px'}}>
       

             < MultipleItemsfive />
             </div>
             <div style={{marginTop:'20px'}}>
             <h1 style={{textAlign:'center',fontSize:'30px',color:theme?'white':'black'}}><b>--NEWLY LAUNCHED--</b></h1>
                <SimpleSlidertwo/>
             </div>
            
             <div style={{marginTop:'45px'}}>
             <h1 style={{textAlign:'center',fontSize:'30px',color:theme?'white':'black'}}><b>-- THIS OR THAT--</b></h1>
             <div style={{display:'flex',gap:'30px',marginTop:'10px'}}>
                <div style={{border:theme?'4px solid blue':"",borderRadius:'9px'}}><img style={{borderRadius:'9px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F50d277c9-c605-4c1a-b9da-ae952189292d.jpg&w=1920&q=75" alt="" /></div>
                <div style={{border:theme?'4px solid blue':'',borderRadius:'9px'}}><img style={{borderRadius:'9px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F597e2c6d-4144-497c-90c2-5d09de375506.jpg&w=1920&q=75" alt="" /></div>

             </div>
             </div>

             {/* nav */}
             <Box  style={{backgroundColor:'white',height:'60px',zIndex:"2",marginTop:'20px'}}>
    <div >
            <Image style={{display:'block',margin:'auto',borderRadius:'50%',height:'150px'}} src={theme?darklogo:v} alt="" />
        </div>
        </Box>
        <div>
        <div style={{backgroundColor:'#E1BEE7',height:'100px',zIndex:'1'}}></div>
        <div style={{display:'flex',margin:'auto',width:'100%'}}>
           <Image src={theme?darkf:lightf}/>
           <Image src={theme?darktube:lighttube}/>
           <Image src={theme?darkp:lightp} />
           <Image src={theme?darkinsta:lightinsta} />

        </div>
        </div>
            </DIV>
        </>
    )
}
export default Landpage
const DIV=styled.div` 


`
   

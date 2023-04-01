import styled from "styled-components";
import MultipleItems,{SimpleSlider,Multiple,MultipleItemstwo,Multipletwo,MultipleItemsthree,MultipleItemsfour, MultipleItemsfive,SimpleSlidertwo,Multiplelast} from "./slick";
import {Authcontext} from "../authcontext/authcontext"
import { useContext } from 'react';


function Landpage() {
    const value=useContext(Authcontext)
    let {theme,settingtheme}=value
    
    return (
        <>
            <DIV style={{padding:'30px 30px',backgroundColor:theme?'black':'#ECEFF1',color:theme?'black':''}}>
            <div>
             <SimpleSlider/>
             </div>
             <div style={{boxShadow:' rgba(255, 255, 255, 0.55) 0px 5px 15px', backgroundColor:"#1A237E",padding:'40px 0px',marginTop:'60px'}}>
             < MultipleItems />
             
             </div>
             <div style={{marginTop:'60px',borderRadius:'9px'}}><h1 style={{textAlign:'center',fontSize:'30px',color:theme?'white':'black'}}><b>--Hotel Details--</b></h1><div ><Multiple/></div></div>
             <div style={{ backgroundColor:"#1A237E",padding:'30px 0px',marginTop:'60px'}}>
             <h1 style={{textAlign:'center',fontSize:'30px',color:theme?'white':'white'}}><b>--Just In--</b></h1><MultipleItemstwo/></div>
             <div style={{marginTop:'20px', padding:'0px 30px'}}>
                <h1 style={{textAlign:'center',fontSize:'30px',color:theme?'white':'black'}}><b>--TIPSY LIPS SCRUB + BALM DUO--</b></h1>
                <div >
                <img style={{borderRadius:'7px', display:'block',height:'490px',width:'100%'}} src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/0533d215-072d-46a6-a126-656aa10580fb.jpg&w=1920&q=75" alt="" />
                </div>
             </div>
             <div style={{marginTop:'20px'}}><Multipletwo/></div>
        
             <div style={{ backgroundColor:"#1A237E",padding:'30px 0px',marginTop:'60px'}}><MultipleItemsthree/></div>
             <div style={{ backgroundColor:"#1A237E",padding:'30px 0px',marginTop:'60px'}}><MultipleItemsfour/></div>
             <div>
                <h1 style={{textAlign:'center',fontSize:'30px',marginTop:'30px',color:theme?'white':'black'}}><b>--REFER YOUR FRIENDS--</b></h1>
                <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8638d096-d168-404e-9b83-56967625b5e6.jpg&w=1920&q=75" alt="" />
             </div>
             <div style={{ backgroundColor:"#1A237E",paddingBottom:'25px',marginTop:'20px'}}>
             <h1 style={{textAlign:'center',marginTop:'60px',fontSize:'30px',color:theme?'white':'white'}}><b>--SUPER SAVERS--</b></h1>

             < MultipleItemsfive />
             </div>
             <div style={{marginTop:'20px'}}>
             <h1 style={{textAlign:'center',marginTop:'60px',fontSize:'30px',color:theme?'white':'black'}}><b>--NEWLY LAUNCHED--</b></h1>
                <SimpleSlidertwo/>
             </div>
            
             <div style={{marginTop:'45px'}}>
             <h1 style={{textAlign:'center',fontSize:'30px',color:theme?'white':'black'}}><b>-- THIS OR THAT--</b></h1>
             <div style={{display:'flex',gap:'30px',marginTop:'10px'}}>
                <div style={{border:theme?'4px solid blue':"",borderRadius:'9px'}}><img style={{borderRadius:'9px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F50d277c9-c605-4c1a-b9da-ae952189292d.jpg&w=1920&q=75" alt="" /></div>
                <div style={{border:theme?'4px solid blue':'',borderRadius:'9px'}}><img style={{borderRadius:'9px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F597e2c6d-4144-497c-90c2-5d09de375506.jpg&w=1920&q=75" alt="" /></div>
               
             </div>
             <div style={{marginTop:'50px',marginBottom:'50px',borderRadius:'9px'}}><h1 style={{textAlign:'center',fontSize:'30px',color:theme?'white':'black'}}><b>--Explore--</b></h1><div><Multiplelast/></div></div>
             
             </div>

           
            </DIV>
           
        </>
    )
}
export default Landpage
const DIV=styled.div` 


`
   

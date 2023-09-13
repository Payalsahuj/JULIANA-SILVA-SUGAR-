import {Authcontext} from "../authcontext/authcontext"
import { useContext } from 'react';
import { Image,Box,Button } from "@chakra-ui/react";
import v from "../Image/v.png"
import { useNavigate } from "react-router-dom";
  import darklogo from "../Image/darklogo.png"
import lightfav from "../Image/lightfav.png"
import darkfav from "../Image/darkfav.png"
import darkbag from "../Image/darkbag.png"
import lightbag from "../Image/lightbag.png"
import darkadmin from "../Image/darkadmin.png"
import lightadmin from "../Image/lightadmin.png"
import darktheme from "../Image/darktheme.png"
import lighttheme from "../Image/lighttheme.png"
import { Link as Baglink} from "react-router-dom";
function Bottomnav(){
        
    const value=useContext(Authcontext)
    let {theme,settingtheme}=value
    const navigate=useNavigate()
    function handellogo(){
       navigate('/')     
    }
    return <Box display={{base:'flex' ,md:'none', lg:'none'}} >
    <div style={{ borderTop: theme?'1px solid blue':'1px solid pink',backgroundColor:theme?'black':'#E1BEE7',
        height: '70px',
        width: '100%',
        position:'fixed',
        bottom:'0%',
        zIndex:'100',
        display:'flex',alignItems:'end',color:theme?'white':'black'}}>
            <div  style={{display:'flex', justifyContent:'space-evenly',alignItems:'center',width:'100%'}}>
            
            <div style={{marginTop:'20px'}}><Image display={'block'} src={theme?darkfav:lightfav} alt=''/></div>
            <div style={{marginTop:'20px'}}><Button h='20px' bg={theme?'black':'brand.100'} color={theme?'white':'black'}  onClick={settingtheme}> < Image display={'block'}  h="30px" src={theme?darktheme:lighttheme} alt=''/></Button></div>
            <div><button onClick={handellogo}><Image src={theme?darklogo:v} w="100px" borderRadius={'50%'} h="95px" border={theme?'1px solid blue':'1px solid #E1BEE7'} alt='logo' /></button></div>
            <Baglink to='/bag'><Button bg={theme?'black':'brand.100'} style={{marginTop:'20px'}} onClick={()=>console.log("ok")}><Image w="30px" src={theme?darkbag:lightbag} alt=''/></Button></Baglink>
            <div style={{marginTop:'20px'}}><Image display={'block'} h='35px' src={theme?darkadmin:lightadmin} alt=''/></div>
            </div>
        </div>
        </Box>
}
export default Bottomnav
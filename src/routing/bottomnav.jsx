import {Authcontext} from "../authcontext/authcontext"
import { useContext } from 'react';
import { Image,Box,Button } from "@chakra-ui/react";
import v from "../Image/v.png"

  import darklogo from "../Image/darklogo.png"
import lightfav from "../Image/lightfav.png"
import darkfav from "../Image/darkfav.png"
import darkbag from "../Image/darkbag.png"
import lightbag from "../Image/lightbag.png"
import darkadmin from "../Image/darkadmin.png"
import lightadmin from "../Image/lightadmin.png"
import darktheme from "../Image/darktheme.png"
import lighttheme from "../Image/lighttheme.png"
function Bottomnav(){
        
    const value=useContext(Authcontext)
    let {theme,settingtheme}=value
    console.log(theme)
    return <Box display={{base:'flex' ,md:'none', lg:'none'}}>
    <div style={{ border: theme?'2px solid blue':'2px solid pink',backgroundColor:theme?'black':'#E1BEE7',
        height: '70px',
        width: '100%',
        position:'fixed',
        top: '91vh',
        display:'flex',alignItems:'end',color:theme?'white':'black'}}>
            <div  style={{display:'flex', justifyContent:'space-evenly',alignItems:'center',width:'100%'}}>
            
            <div><Image display={'block'} src={theme?darkfav:lightfav} alt=''/></div>
            <div><Button h='20px' bg={theme?'black':'brand.100'} color={theme?'white':'black'}  onClick={settingtheme}> < Image display={'block'}  h="30px" src={theme?darktheme:lighttheme} alt=''/></Button></div>
            <div><Image src={theme?darklogo:v} w="140px" borderRadius={'50%'} h="100px" border={theme?'2px solid blue':'2px solid #E1BEE7'} alt='logo' /></div>
            <div><Image display={'block'} width='32px' src={theme?darkbag:lightbag} alt=''/></div>
            <div><Image display={'block'} h='35px' src={theme?darkadmin:lightadmin} alt=''/></div>
            </div>
        </div>
        </Box>
}
export default Bottomnav
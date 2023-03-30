import styled from "styled-components";
import MultipleItems from "./slick";

function Landpage() {
   

    return (
        <>
            <DIV>
            <div className='sliderfirst' >
            
             </div>
             <MultipleItems/>

            </DIV>
        </>
    )
}
export default Landpage
const DIV=styled.div` 
.sliderfirst{
        width: 100%;
        height: 400px;
        background-color: 'pink';
        /* position: absolute; */
        background-image: url("https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff3167316-1728-4c8d-8389-3e467cf033a0.jpg&w=1920&q=75");
        background-size: 100% 100%;
        box-shadow: 1px 2px 10px 5px white;
        animation: slider 30s infinite linear;
        margin-top:20px;
    }
     @keyframes slider{
       0%{ background-image: url("https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F14bd68a6-77a3-4cac-8d80-bce249d31a01.jpg&w=1920&q=75");} 
       45%{ background-image: url("https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F0886c9f4-a521-4ff2-9ec7-6a5947860753.jpg&w=1920&q=75");}
       75%{ background-image: url("https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ffeb81cd7-cb89-4d40-8b45-b2f5bfe406d9.jpg&w=1920&q=75");}
      
     } 

`
   

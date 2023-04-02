import { Authcontext } from "../authcontext/authcontext"
import { useContext,useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Onloadimg from "./onloadimg";
import Onclickimg from "./onclickimg";
import {
    Divider,
    Center,
    Button,
    Input,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import darkrab from "../Image/darkrab.png"
import lightrab from "../Image/lightrab.png"
import darkqual from "../Image/darkqual.png"
import lightqual from "../Image/lightqual.png"
import darkreturn from "../Image/darkreturn.png"
import lightreturn from "../Image/lightreturn.png"
import wish from '../Image/wish.png'

function getdata(id){
    return fetch(`http://localhost:8080/lipstick/${id}`)
    .then((res)=>res.json())
}
function Singlepage() {
    const value = useContext(Authcontext)
    const [onload,setonload]=useState(true)
    const [imageid,setimageid]=useState('')
    let { theme, settingtheme } = value

    const [data,setdata]=useState({})
    const [shadedata,setshadedata]=useState([])
    const {id}=useParams("id")
    
    const fetchandrender=async()=>{
        try{
            let data=await getdata(id)
            setdata(data)
            let shadedatainput=[]
            for(let x=1;x<=10;x++){
                if(data[`image${x}`]!==null){
                    shadedatainput.push(data[`shade${x}`])
                }
                
            }
            setshadedata(shadedatainput)
            
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchandrender(id)
        setonload(true)
    },[id])
    

    function handelshade(e){
        setonload(false)
        let idimg=(+e.target.id)+1
        
        setimageid(idimg)
        
    }

    return <div style={{ backgroundColor: theme ? 'black' : '#ECEFF1', padding: '25px 0px' }}>
        <div style={{ margin: 'auto', width: '95%' }}><div style={{ display: 'flex', padding: '10px 20px', border: theme ? '1px solid #E1F5FE' : '', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '10px', color: theme ? 'white' : 'black', backgroundColor: theme ? 'black' : "#E1BEE7" }}><h1>Home</h1><b style={{ padding: '0px 10px' }}>{" > "}</b><h1>LIPS</h1><b style={{ padding: '0px 10px' }}>{" > "}</b><h1><b> {data.name}</b></h1></div></div>
        <div style={{ display: "flex", width: '95%',padding:'10px 15px',borderRadius:'10px', margin: 'auto', marginTop: '25px',boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
            {onload?<Onloadimg data={data.image1}/>:<Onclickimg data={data[`image${imageid}`]}/>}

            <div style={{ width: '55%', padding: '30px',color:theme?'white':'black', textAlign: 'left' }}>
                <h1 style={{ fontSize: '25px' }}>{data.name}</h1>

                <div style={{ display: 'flex', fontSize: '15px', marginTop: '10px', padding: '0px 10px' }}>
                    <h1>Rs. {data.price}.00</h1>
                    <button style={{ padding: '0px 20px', marginLeft: '10px', backgroundColor: 'green', borderRadius: '5px', fontSize: '12px' ,color:'white'}}>Free Shipping</button>
                </div>
                
                <div style={{ marginTop: '20px', padding: '0px 10px' }}>Shades</div>
                <div style={{display:"grid",gridTemplateColumns:'repeat(6,1fr)',gap:'25px',padding:'10px 10px',margin:'auto'}}>{shadedata.map((item,index)=> <div key={index} style={{width:'60px' ,height:'50px', background:`${item}`,borderRadius:'7px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} id={index} onClick={(e)=>handelshade(e)}></div>)}</div>
                <div style={{ marginTop: '20px', padding: '10px 20px', backgroundColor:theme?'black':'white', border:theme?'1px solid white':'',borderRadius: '10px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                    <h1>AVAILABLE OFFERS!!</h1>
                    <div>
                        <ul style={{ padding: '0px 20px' }}>
                            <li>Get Joker & Witch Black Dial Rosegold Watch Worth Rs.3799 On A Spend Of Rs.2999<span></span></li>
                            <li>Get Rs.500 Off On A Minimum Purchase Of Rs.1500</li>
                            <li>FREE Gift Choice On Total Spend Of Rs.699 And Above. Make Selection In Final Checkout.</li>
                            <li>Get Rs.300 Off On A Spend Of Rs.999</li>
                            <li>Buy 2 Get 1 Free</li>
                        </ul>
                    </div>
                </div>

                <div style={{ margin: '20px 0px' }}>
                    <Button style={{ backgroundColor: '#D53F8C', color: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>  <img style={{display:'block',width:'20px'}} src={wish} alt="" /></Button>
                    <Button style={{ marginLeft: '10px', backgroundColor:'#4299E1', color: theme?'white':'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >ADD TO BAG</Button>
                </div>
                <Center height='20px'>
                    <Divider orientation='horizontal' />
                </Center>
                <div style={{ display: 'flex', gap: '20px', padding: '6px 10px' ,backgroundColor:theme?'black':'white',color:theme?'white':'black',borderRadius:'10px',marginBottom:'10px'}}>
                    <Input placeholder='Enter delivery pincode' width={'280px'} />
                    <Button style={{ color: 'white',backgroundColor:theme?'grey':'black' }}>CHECK</Button>
                </div>
                <div style={{backgroundColor:theme?'black':'white',color:theme?'white':'black',borderRadius:'10px'}}>
                <Center height='20px'>
                    <Divider orientation='horizontal' />
                </Center>
                
                <div style={{ display: 'flex', gap: '20px',marginBottom:'15px',backgroundColor:theme?'black':'white',color:theme?'white':'black' }}>
                    <div style={{ display: 'flex' }}> <img style={{ width: '20px',margin:'0px 7px'}} src={theme ? darkrab : lightrab} alt="" /><span>Cruelty Free </span></div>
                    <div style={{ display: 'flex' }}> <img style={{ width: '20px',margin:'0px 7px' }} src={theme ? darkqual : lightqual} alt="" />Easy Return</div>
                    <div style={{ display: 'flex' }}> <img style={{ width: '20px',margin:'0px 7px' }} src={theme ? darkreturn : lightreturn} alt="" />Quality First</div>
                </div>
                <Accordion allowToggle>
                    <AccordionItem style={{backgroundColor:theme?'black':'white',color:theme?'white':'black'}}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'style={{padding:'7px 0px'}}>
                                    <b>
                                   DESCRIPTION
                                   </b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} style={{textAlign:'justify'}}>
                        Glam up your pout with our beautifully bold, 
                        incredibly long-lasting and gorgeously vivid SUGAR Matte As Hell Crayon Lipstick. This lipstick lives up to its title by providing the most smooth, silky soft matte finish!
                        <br/><br/>
                        Blending confident colour with desirable comfort, Matte As Hell Crayon lipstick is highly-pigmented formula that glides on comfortable and instantly reveals a weightless veil of high pigment. 
                        Enriched with lip-conditioning ingredients, this long-wear crayon lipstick keeps your lips soft and hydrated whilst helping ward against dryness. What makes it even better? It comes with a high-quality sharpener that helps keep the tip of the crayon ultra-precise for an effortless swipe every single time! Read more details about the Crayon Lipstick Sharpener here!
                        <br/><br/>
                        Indulge in 36 gorgeous matte lipstick shades, that can also be layered and mixed to create a totally unique lip look and add an extra dose of ‘oomph’ to your pout!
                        <br/><br/>
                        <h1 style={{fontSize:'18px'}}><b>Benefits</b></h1>
                        <ul style={{padding:'0px 20px'}}>
                            <li><b>High Colour Payoff:</b> This crayon lipstick comes with a creamy, rich formula and high colour payoff that gives you plush and pampered-looking lips throughout the day. It glides smoothly onto your lips, flaunting a super pigmenting hue. This crayon lipstick is priced reasonably. The lipstick boasts stunning bold shades that can fit your mood</li>
                            <li><b>Silky Matte Finish:</b> Achieve soft, subtle and smooth pout with SUGAR Matte lipstick. Offering a silky matte finish, this lip crayon delivers an even swatch of hues onto your pout, taking your mood and look to the next level. Soft texture ensures a smooth application with every swipe</li>
                            <li><b>Excellent Coverage:</b> The coverage of this crayon is nothing but iconic. The oh-so-lovely formula presents flawless coverage to give pout perfection. Infused with hydrating ingredients, the lipstick nourishes and soothes the pout in just one swipe</li>
                            <li><b>Super Long Lasting:</b> Be it rain or shine, this lipstick crayon will not leave your side. The slim bullet design allows for easy and precise application on the go. This long-wear lipstick keeps your pout perfect all night</li>
                        </ul>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{backgroundColor:theme?'black':'white',color:theme?'white':'black'}}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' style={{padding:'7px 0px'}}>
                                <b>
                                   HOW TO APPLY
                                   </b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        When it comes to application, lipstick application has a lot of rules. To achieve a perfectly polished pout, follow these steps:
                        <br/><br/>
                        <ul style={{padding:'0px 20px'}}>
                            <li><b>Start with exfoliation:</b> Make a note if you want a faultless pout to get those chapped skin off your lips. Flakey or uneven lips can make your lipstick feathered. Exfoliate your lips with a gentle exfoliator. Use tiny granules infused Lip Service Sugar Scrub that revives and spruces up your lips. The tiny grains of sugar crystals combined with hydrating natural butters buffs away dead skin cells and protect lips from drying. This vegan lip scrub boasts skin-conditioning agents and vitamin E that treat peeling, cracking and chapping</li>
                            <li><b>Hydrate them:</b> Once you are done with exfoliation, start prepping the lips with a hydrating lip balm. It keeps your lips soft and juicy and removes your dry patches. Use our Tipsy Lips Moisturizing Lip Balm that keeps your lips supple and moisturized. The 7 must-have flavours of this lip balm are enriched with Vitamin E, jojoba oil, shea butter, and SPF.</li>
                            <li><b>Colour correct:</b> If you have lip pigmentation, then your lipstick hue is not revealing its real colour. To get that bold pigment red pout or berry lips, you must correct your pigmentation. Use a corrector and apply it on the dark areas, once the top it up with a powder foundation. Once you get an even-toned lip, you can apply lipstick.</li>
                            <li><b>Line and define your lips:</b>Lip liner helps in the lining and accentuates your pout, making your lipstick more natural. Use our Lipping On The Edge Lip Liner to outline your lips. Start with your cupid's bow and follow the little V at the centre of your top lips. Follow along the lip line and work your way to the edges. Apply your crayon lipstick afterwards. You can also apply a lip liner after lipstick to clean up the edges. A quick hack: Apply the lip liner all over your lips before lipstick to make your pretty pout last longer.</li>
                        </ul>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem style={{backgroundColor:theme?'black':'white',color:theme?'white':'black'}}>
                        <h2>
                            <AccordionButton >
                                <Box as="span" flex='1' textAlign='left' style={{padding:'7px 0px'}}>
                                <b>
                                   DESCRIPTION
                                   </b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Isododecane, Dimethicone, Diisostearyl Malate, Synthetic Wax, Distarch Phosphate, Polybutene, Dimethicone/Vinyl Dimethicone Crosspolymer, Caprylyl Methicone, Dimethylimidazolidinone Rice Starch, Glyceryl Caprylate, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Silica, Isoceteth - 10 May Contain: CI 77491, 77492, 77499, 77891, 77019
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem style={{backgroundColor:theme?'black':'white',color:theme?'white':'black'}}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' style={{padding:'7px 0px'}}>
                                   <b>ADDITIONAL DETAILS</b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <h1 style={{fontSize:'18px'}}><b>Some commonly asked question</b></h1>
                        <h1 style={{fontSize:'18px'}}><b>Q. How is the finish of this crayon lipstick?</b></h1>
                        <p><b>A. </b>This crayon lipstick comes with a super matte & comfortable finish. When its full coverage formula meets creamy texture, all you get is pout perfection. To achieve a perfect pout, never forget to prep and prime.</p>
                        <br/><br/>
                        <h1 style={{fontSize:'18px'}}><b>Q. How long does the lipstick stay?</b></h1>
                        <p ><b>A. </b> Our highly pigmented Matte As Hell Crayon Lipstick comes with a high pigment, long-lasting formula that stays with you for more than 10-12 hours.</p>
                        <br/><br/>
                        <h1 style={{fontSize:'18px'}}><b>Q. How to make your lipstick last longer?</b></h1>
                        <p ><b>A. </b>Other than using a lip primer, try applying translucent powder on top of your lipstick. Take your small fluffy powder brush and swirl some powder onto your lipstick. Tap off the excess. Finally, gently press the lips, and you are good to go.</p>
                        <br/><br/>
                        <h1 style={{fontSize:'18px'}}><b>Q. Are there any nude lipstick shades available for everyday wear?</b></h1>
                        <p ><b>A. </b> Absolutely! Matte As Hell Lipsticks is available in 36 stunning shades, with a lip shade for each skin tone and occasion. Our best nude lipsticks from the collection are 20 Buffy Summers (Mid-tone Warm Nude) which suits fair to medium skin tone better, 19 Emma Woodhouse (Earthy Brown), which looks gorgeous on most Indian skin tones and 18 Rosalind (Nude Rose), and 07 Viola (Mauve Nude) shades that suit medium to dusky skin tone better! Find your best nude lipstick match here.</p>
                        <br/><br/>
                        <h1 style={{fontSize:'18px'}}><b>Q. How to remove matte lipstick easily?</b></h1>
                        <p ><b>A. </b> If you are wondering how to take off a long-wear matte lipstick, the best option is to use micellar water. Pour some on the cotton pad and place it onto your lips. Wait for a few seconds and swipe off gently. Dual cleanse your face with an oil-based cleanser that will easily break down the pigment gently.</p>

                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem style={{backgroundColor:theme?'black':'white',color:theme?'white':'black'}}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' style={{padding:'7px 0px'}}>
                                    <b>REVIEW</b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Write your feedback
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                </div>
            </div>

        </div>
    </div>
}
export default Singlepage
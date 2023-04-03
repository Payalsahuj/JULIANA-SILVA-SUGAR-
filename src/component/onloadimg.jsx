function Onloadimg(props){
    
    return <>
    <div style={{ display: 'flex', width: '45%'}}>
                <div style={{ display: 'flex', padding: '30px 10px', gap: '20px', flexDirection: 'column', width: '15%' }}>
                    {props.data.map((item,index)=>
                     <div key={index}>
                     <img style={{ display: 'block', borderRadius: '10px',boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }} src={item} alt="" />
                 </div>
                    )}
                    {/* <div >
                        <img style={{ display: 'block', borderRadius: '10px',boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }} src={props.data[0]} alt="" />
                    </div>
                    <div>
                        <img style={{ display: 'block', borderRadius: '10px',boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }} src={props.data[1]} alt="" />
                    </div>
                    <div>
                        <img style={{ display: 'block', borderRadius: '10px',boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }} src={props.data[2]} alt="" />
                    </div>
                    <div>
                        <img style={{ display: 'block', borderRadius: '10px',boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }} src={props.data[3]} alt="" />
                    </div> */}
                </div>
                <div style={{ width: '85%' }}>
                    <img style={{ margin: 'auto', height:'600px', marginTop: '30px', width: '80%', display: 'block', borderRadius: '10px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} src={props.data[0]} alt="" />
                </div>
            </div>
            </>
}
export default Onloadimg






// <div style={{ display: 'flex', width: '45%', border: '2px solid green' }}>
// <div style={{ display: 'flex', padding: '30px 10px', gap: '20px', flexDirection: 'column', width: '15%', border: '2px solid white' }}>
//     <div >
//         <img style={{ display: 'block', borderRadius: '10px' }} src={props.data[0]!==undefined?props.data[0]:''} alt="" />
//     </div>
//     <div>
//         <img style={{ display: 'block', borderRadius: '10px' }} src={props.data[1]!==undefined?props.data[1]:''} alt="" />
//     </div>
//     <div>
//         <img style={{ display: 'block', borderRadius: '10px' }} src={props.data[2]!==undefined?props.data[2]:''} alt="" />
//     </div>
//     <div>
//         <img style={{ display: 'block', borderRadius: '10px' }} src={props.data[3]?props.data[3]:''} alt="" />
//     </div>
// </div>
// <div style={{ width: '85%', border: '2px solid green', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
//     <img style={{ margin: 'auto', padding: '30px 0px', width: '80%', display: 'block', borderRadius: '10px',boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }} src={props.data[0]!==undefined?props.data[0]:''} alt="" />
// </div>
// </div>
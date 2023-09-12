import { Authcontext } from "../authcontext/authcontext"
import { useContext,useEffect,useReducer } from 'react';
import { useNavigate } from "react-router-dom"
import { useToast } from '@chakra-ui/react'
let initial={
    "firstname":"",
    "lastname":"",
    "email":'',
    "address1":'',
    'address2':'',
    'country':'',
    'mobile':'',
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'firstname':{
            return {...state,firstname:action.payload}
        }
        case 'lastname':{
            return {...state,lastname:action.payload}
        }
        case 'email':{
            return {...state,email:action.payload}
        }
        case 'address1':{
            return {...state,address1:action.payload}
        }
        case 'address2':{
            return {...state,address2:action.payload}
        }
        case 'country':{
            return {...state,country:action.payload}
        }
        case 'mobile':{
            return {...state,mobile:action.payload}
        }
        case 'reset':{
            return {...initial}
        }
        default: throw new Error('')
    }
}
function Orderdetail() {
    const value = useContext(Authcontext)
    const navigate = useNavigate();
    const toast = useToast()
    let { theme } = value
    const [state,dispatch]=useReducer(reducer,initial)
    function handelchange(e){
        if(e.target.name==="firstname"){
         dispatch({type:'firstname',payload:e.target.value})   
        }
        else if(e.target.name==='lastname'){
            dispatch({type:'lastname',payload:e.target.value})  
        }
        else if(e.target.name==="email"){
            dispatch({type:'email',payload:e.target.value})  
        }
        else if(e.target.name==="address1"){
            dispatch({type:'address1',payload:e.target.value})  
        }
        else if(e.target.name==="address2"){
            dispatch({type:'address2',payload:e.target.value})  
        }
        else if(e.target.name==="country"){
            dispatch({type:'country',payload:e.target.value})  
        }
        else if(e.target.name==="mobile"){
            dispatch({type:'mobile',payload:e.target.value})  
        }
    }
    function handelclick(){
         toast({
                title: 'Payment Successfull',
                description: "Your order has been placed",
                status: 'success',
                duration: 9000,
                isClosable: true,
               
              })
              setTimeout(()=>{
                navigate("/")
                
            },2000)
    }
    return (
        <div width='100%' style={{ backgroundColor: theme ? 'black' : '#ECEFF1', color: theme ? 'white' : 'black',paddingTop:'13%',paddingBottom:'3%' }} >
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '93%', margin: 'auto',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', padding: '40px 10px', gap: '35px' }}>
                <div style={{  width: '50%', border: theme?'1px solid white':'' ,borderRadius:'10px',paddingTop:'20px' }}>
                    <h1 style={{fontSize:'30px'}}>Order details</h1>
                    <div style={{ textAlign: 'left', padding: '30px 60px' }}>
                        <p >First Name*</p>
                        <input type="text" placeholder="Enter your first name" style={{ width: '100%', padding: '10px 10px', borderRadius: '7px' }} name="firstname" value={state.firstname} onChange={(e)=>handelchange(e)}/>
                        <p style={{ marginTop: '15px' }}>Last Name*</p>
                        <input type="text" placeholder="Enter your last name" style={{ width: '100%', padding: '10px 10px', borderRadius: '7px' }} name="lastname" value={state.lastname} onChange={(e)=>handelchange(e)} />
                        <p style={{ marginTop: '15px' }}>Email*</p>
                        <input type="text" placeholder="Enter your email" style={{ width: '100%', padding: '10px 10px', borderRadius: '7px' }} name="email" value={state.email} onChange={(e)=>handelchange(e)}/>
                        <p style={{ marginTop: '15px' }}>Address*</p>
                        <input type="text" placeholder="Enter your Address details" style={{ width: '100%', padding: '10px 10px', borderRadius: '7px',color:'black' }} name="address1" value={state.address1} onChange={(e)=>handelchange(e)}/>
                        <p style={{ marginTop: '15px' }}>Alternavite Address*</p>
                        <input type="text" placeholder="Enter your Address details" style={{ width: '100%', padding: '10px 10px', borderRadius: '7px',color:'black' }} name="address2" value={state.address2} onChange={(e)=>handelchange(e)}/>
                        <p style={{ marginTop: '15px' }}>Select your Country*</p>
                        <select style={{color:'black',width:'100%',borderRadius:'7px',padding: '10px 10px'}} name="country" value={state.country} onChange={(e)=>handelchange(e)}>
                            <option value="" >Select Country</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="Germany">Germany</option>
                            <option value="India">India</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United States">USA</option>
                        </select>
                        <p style={{ marginTop: '15px' }}>Mobile number*</p>
                        <input type="number" placeholder="Enter your mobile number" style={{ width: '100%', padding: '10px 10px', borderRadius: '7px' ,color:'black'}} name="mobile" value={state.mobile} onChange={(e)=>handelchange(e)}/>
                    </div>
                </div>
                <div style={{ width: '50%', border: theme?'1px solid white':'' ,borderRadius:'10px',paddingTop:'20px' ,color:'black' }}>
                    <h1 style={{fontSize:'30px'}}>Bank details</h1>
                    <div style={{ textAlign: 'left', padding: '30px 60px' }}>
                    <p style={{marginTop:'10px'}}>Name on Card*</p>
                    <input type="text" placeholder="Enter your first name" style={{ width: '100%', padding: '10px 20px', borderRadius: '7px' }} />
                    <p style={{marginTop:'10px'}}>Debit/Credit card number*</p>
                        <input type="text" placeholder="Enter your first name" style={{ width: '100%', padding: '10px 20px', borderRadius: '7px' }} />
                        <p style={{marginTop:'10px'}}>Expiration Date*</p>
                        <div style={{display:'flex',gap:'20px',color:'black'}}>
                            <select style={{padding:'5px 10px',borderRadius:'7px'}} >
                                <option value="">Month</option>
                                <option value="">01-Jan</option>
                                <option value="">02-Feb</option>
                                <option value="">03-March</option>
                                <option value="">04-April</option>
                                <option value="">05-May</option>
                                <option value="">06-June</option>
                                <option value="">07-July</option>
                                <option value="">08-Aug</option>
                                <option value="">09-Sep</option>
                                <option value="">10-Oct</option>
                                <option value="">11-Nov</option>
                                <option value="">12-Dec</option>

                            </select>
                            <select style={{padding:'5px 10px',borderRadius:'7px'}}>
                                <option value="">Year</option>
                                <option value="">2023</option>
                                <option value="">2024</option>
                                <option value="">2025</option>
                                <option value="">2026</option>
                                <option value="">2027</option>
                                <option value="">2028</option>
                                <option value="">2029</option>
                                <option value="">2030</option>
                                <option value="">2031</option>
                                <option value="">2032</option>
                                <option value="">2033</option>
                                <option value="">2034</option>
                                <option value="">2035</option>
                                <option value="">2036</option>
                                <option value="">2037</option>
                                <option value="">2038</option>
                                <option value="">2039</option>
                                <option value="">2040</option>
                                <option value="">2041</option>
                            </select>
                        </div>
                        <div >
                            <p style={{marginTop:'10px'}}>Security Code</p>
                            <input type="number" style={{ width: '36%', padding: '10px 10px', borderRadius: '7px' }} />
                            <p style={{marginTop:'10px'}}>Billing ZIP Code</p>
                            <input type="text" style={{ width: '36%', padding: '10px 10px', borderRadius: '7px' }}/>

                        </div>
                    </div>
                    <div style={{width:'100%',marginTop:'20px',fontSize:'25px'}}><button style={{display:'flex',margin:'auto',backgroundColor:'pink',color:'black',padding:'5px 20px',borderRadius:'10px'}} onClick={handelclick}>Place Order</button></div>

                </div>
                
            </div>
            
        </div>
    )

}
export default Orderdetail
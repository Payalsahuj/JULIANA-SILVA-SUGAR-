import {useContext} from "react"
// import { useToast } from "@chakra-ui/react";

import {Navigate} from "react-router-dom"
import {Authcontext} from "../authcontext/authcontext"

const PrivateRoute = ({children})=>{
 const { auth} = useContext(Authcontext);
//  const toast = useToast()

 if(!auth){
   alert('You need to login First')
   //  toast({
   //      description: "You need to login First",
   //      status: "error",
   //      duration: 5000,
   //      isClosable: true,
   //    });
   return <Navigate to = "/"/>
 }
    return children
}
export default PrivateRoute;

import { Box, Text, Flex, Img, SimpleGrid } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom"
import { Authcontext } from "../authcontext/authcontext"
import { useToast } from '@chakra-ui/react'


const CheckOut = () => {
  const { theme,bag, setBag,price} = useContext(Authcontext)
  const toast = useToast()
  const navigate = useNavigate();
  const[finalPrice, setFinalPrice]= useState(0)
   let gst = Math.ceil(price*.18)

   function finalPriceSet(price){
      let x = price +gst
      setFinalPrice(x)
   } 
  
  useEffect(() => {
   finalPriceSet(price)
  }, [price]);
  
  
  

  

  return (
    <Box>
       <Box mb={10}
        p={4}
        boxShadow= " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
       >
          <Text>
        BAG/CHECKOUT
          </Text>
          </Box>
        

      <SimpleGrid columns={{lg:2,md:2,sm:1,base:1}} spacing={10}
     >
        <Box>
          <Text className="ggbag" fontWeight="600" fontSize={30}>YOUR JULAIANA SILVA ORDERS</Text>
          {bag.map((ele, i) => (
            <Flex key={i} border='1px solid lightgray' mt='5' justifyContent='center' ml='145' w='70%'>  <Box width="100px">
              {" "}
              <Img pr='2' borderRight="1px solid lightgray" src={ele.img} />
            </Box>
              <Box mt="4%" w="40%" pr='2' borderRight="1px solid lightgray">
                {" "}
                {ele.name}
              </Box>
              <Box mt="4%" w="10%" ml="5%" pr='2' borderRight="1px solid lightgray">
                {ele.amount}
              </Box>
              <Box mt="4%" w="10%" ml="5%" pr='2' >
                ₹  {ele.offerPrice *ele.amount}
              </Box>

            </Flex>
          ))
          }
        </Box>

        <Box

          padding="2%"
          lineHeight="300%"
          
        >
      
          
         
          <Text className="ggbag" fontWeight="600" textAlign="center" fontSize={30}>
            ORDER SUMMARY
          </Text>
          <Box lineHeight="200%" paddingBottom={7} >
            <Flex justifyContent="space-between">
              <Box>Actual Amount</Box>
              <Box textAlign="right">₹{price}/-</Box>
            </Flex>
            <Flex justifyContent="space-between">
              <Box>Shipping Charges</Box>
              <Box align="right">FREE</Box>
            </Flex>
            <Flex justifyContent="space-between">
              <Box>GST TAX (18%)</Box>
              <Text textAlign="center">₹{gst}/-</Text>
            </Flex>
          </Box>
          <Flex justifyContent="space-between">
            <Box lineHeight="150%" paddingBottom={7}>
              <Box fontWeight='600' textAlign="left">
                Amount to Pay
              </Box>
              <Box color="orange" >
               Note: Inclusive of all other taxes
              </Box>
            </Box>
            <Box float="right" fontWeight="600" >
              Final amount: ₹{finalPrice}/-
            </Box>
          </Flex>
          <Box
            className="placeOrder"
            bg="black"
            padding="3px"
            w="100%"
            color="white"
            onClick={() =>{
              toast({
                title: 'Payment Successfull',
                description: "Your order has been placed",
                status: 'success',
                duration: 9000,
                isClosable: true,
               
              })
              setTimeout(()=>{
                navigate("/")
                setBag([])
            },3000)
            
            } 
             
            }
          >
            PLACE ORDER <ArrowForwardIcon />
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
export default CheckOut;
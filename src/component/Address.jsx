import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Input,
  Button,
  Grid,
  FormControl,
  FormLabel,
  Image,
  RadioGroup,
  Stack,
  Radio,
  useToast,
  Divider,
} from "@chakra-ui/react";
import './Bag.css';
import styles from "./Address.module.css";
import { useContext } from "react";
import {Authcontext} from "../authcontext/authcontext"
import { Navigate, useNavigate } from "react-router-dom";

const Checkout = () => {
  const [value, setValue] = useState("Cash on delivery");
  const [fname, setFname] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState();
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState([]);
  const {cart,setCart}=useContext(Authcontext)
  const toast = useToast();
    const navigate= useNavigate()
 console.log(cart)
  const handleSubmit = () => {
    if (
      fname === "" ||
      mobile===""||
      address === "" ||
      city === "" ||
      pinCode === "" ||
      email === ""
    ) {
      toast({
        description: "fill all details",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    } else {
      const AddressDetail = {
        fname: fname,
        mobile:mobile,
        address: address,
        city: city,
        pinCode: pinCode,
        email: email,
        state:" state", country: "India",
      };
      
      setFormData(AddressDetail);
      setCart(0)
      toast({
        size: "700",
        position: "top-center",
        title: "Order Placed.",
        description: "Thank you for shopping with us.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
     navigate('/')
    }
  };


  function total(){ 
    let sum=0;

    for(let x=0;x<cart.length;x++){
     
     sum+= (cart[x].price*cart[x].quantity); 
    
    }
      return sum;
  }

  return (
    <Box className={styles.body}>
     
      <Box p={"3rem"}>
        <Text textAlign={"start"}>Home » Checkout</Text>
      </Box>
      <Box>
        <Heading size={"lg"}  color="blue">
          Checkout
        </Heading>
      </Box>

      <Box padding={"4rem"}>
        <Grid gridTemplateColumns="6fr 4fr" gap={"5rem"}>
          <Box>
            <Box>
              <Heading textAlign={"start"} size="md" mb={"1.7rem"}>
               Shipping Address
              </Heading>
             
              <Box>
                  <FormControl isRequired>
                    <FormLabel>Full name</FormLabel>
                    <Input
                      borderRadius={"none"}
                      value={fname}
                      size="lg"
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </FormControl>
              </Box>

              <Box mb="1rem">
                <FormControl isRequired>
                  <FormLabel>Email address *</FormLabel>
                  <Input
                    borderRadius={"none"}
                    type={"email"}
                   size="lg" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl>
                <FormLabel>Mobile Number *</FormLabel>
                <Input
                      borderRadius={"none"}
                      value={mobile}
                      size="lg"
                      onChange={(e) => setMobile(e.target.value)}
                    />
                 
                </FormControl>
              </Box>
             
              <Box mb="1.3rem">

                <FormControl isRequired>

                  <FormLabel>Street address</FormLabel>
                  <Input
                    size="lg"
                    placeholder="House number and street name"
                    borderRadius={"none"}
                    mb="1rem"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <Input
                    size="lg"
                    placeholder="Apartment, siute, unit, etc. (optional)"
                    borderRadius={"none"}
                  />
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl isRequired>
                  <FormLabel>Town / City </FormLabel>
                  <Input
                    borderRadius={"none"}
                    size="lg"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl isRequired>
                  <FormLabel>State</FormLabel>

                  <Input
                    borderRadius={"none"}
                    size="lg"
                   
                  />
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl isRequired>
                  <FormLabel>Country / Region</FormLabel>

                  <Input
                    size="lg"
                    borderRadius={"none"}
                    defaultValue={"India"}
                  />
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl isRequired>
                  <FormLabel>PIN Code</FormLabel>
                  <Input
                    borderRadius={"none"}
                    size="lg"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                 
                </FormControl>
              </Box>
             
             
            </Box>
           
          </Box>
          <Box>
            <Box>
              <Heading textAlign={"start"} size={"md"}>
                Your orders
              </Heading>
              <Box
                border={"1px solid"}
                borderColor="gray.300"
                padding="0 2rem"
                m={"1.5rem 0"}
                color="#e40046"
              >
                <Flex
                  justifyContent={"space-between"}
                 p="1rem 2rem" 
                  flexDirection={"column"}
                  borderBottom={"1px solid"}
                  borderColor="gray.300"
                >
                  <Text color="#0984e3">Product Details</Text>
                  
                  {cart.map((item) => (
        <Box className="cart_box" key={item.id}>
          <Box className="cart_img">
            <Image src={item?.images?.image1} alt="" />
            <Text color="#0984e3">{item.title}</Text>
          </Box>
        </Box>
      ))}
      <Divider/>
      <Text>Total Price: ₹{total()}/-</Text>
                </Flex>
              </Box>
              <Box
                border={"1px solid"}
                borderColor="gray.300"
                p="0.5rem"
                m={"1.5rem 0"}
              >
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="column" textAlign={"start"}>
                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="Cash on delivery">Cash on delivery</Radio>
                    </Flex>

                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="pay with paytm">
                        <Image
                          src="data:image/png;base64,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"
                          width={"5rem"}
                          display="inline"
                          ml={"1rem"}
                        />
                      </Radio>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    > <Radio value="amazonpay">
                        <Image
                          src="data:image/png;base64,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"
                          width={"5rem"}
                          display="inline"
                          ml={"1rem"}
                        />
                      </Radio>
                     
                     
                    </Flex>
                    <Flex
                     borderColor="gray.300"  
                      border={"1px solid #dfe6e9"}
                     alignItems={"center"}
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="google">
                        <Image
                          src="data:image/png;base64,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"
                           ml={"1rem"}
                         width={"5rem"}
                          display="inline"
                        /> </Radio>
                    </Flex>
                  </Stack>
                </RadioGroup>
              </Box>
              <Box m={"1.4rem 0"}>

                <Button
                  backgroundColor="#0984e3"
                  color="#dfe6e9"
                  size="lg"
                  width={"100%"}
                  borderRadius={"none"}
                  _hover="none"
                  onClick={() => {
                   
                    handleSubmit();
                  }}
                >
                  Place Order
                </Button>
              </Box>
             
            </Box>
          </Box>
        </Grid>
      </Box>
    
    </Box>
  );
};

export default Checkout;
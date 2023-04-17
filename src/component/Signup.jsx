import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
    ModalCloseButton,
    Input,
    Image,
    Divider,
    Box,
    FormControl,
    FormLabel,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Text,
    useColorModeValue,
    Link,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from 'react';
  import axios from "axios";
  
  import darklogo from "../Image/darklogo.png"
  
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import Signin from "./Signin";

  function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast()
     const [firstName, setFirstName] = useState("");
     const[lastName, setLastName] = useState("");
     const [email, setEmail] =useState("");
     const [password , setPassword] = useState("");
     const [formData, setFormData] = useState({})
    
     const AddUser =(value={firstName,lastName,email,password})=>{
      return axios({
        method:"post",

        url:" https://expensive-flannel-shirt-calf.cyclic.app/registeredUser",

        data:value
      })
     }

     
     const handleRegister=()=>{
    if (
      firstName==="" ||
      lastName==="" ||
      email==="" ||
      password===""
      
    ) {
      toast({
        description: "fill all details",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    } else {
      const UserDetails = {
        firstName :firstName,
        lastName :lastName,
        email :email,
        password:password
        
      }

      AddUser(UserDetails)
      toast({
        description: "Registered Succesfully",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      
      alert('Please Signin now for conformation!!!')
      
      setFormData(UserDetails)
      
    }
  }
  // console.log(formData)
 
  
     
  
    return (
      <Box>
       
        
        <Button onClick={onOpen}  as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              
              _hover={{
                bg: 'pink.300',
              }}>Sign up</Button>
        <Modal
        width="500px"
        border="1px solid red"
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <Box marginTop="20px">
              <Text width={"80%"} textAlign="center" margin="auto">
                Get 15% Good Points back on every order
              </Text>
            </Box>
            <Image
              margin={" 20px 100px 20px 100px"}
              width="200px"
              height='125px'
              src={darklogo}
            ></Image>
            <Text
              marginLeft="80px"
              paddingBottom="value"
              borderBottomStyle="solid"
              fontWeight="bold"
              fontSize="14px"
            >
              Enter Details
            </Text>
            <Divider borderColor={"black"}></Divider>
            <ModalCloseButton />
            <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter Email Address" value={email}  onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} placeholder="Enter password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <a href={'/'}>
              <Button
              onClick={handleRegister}
                loadingText="Submitting"
                size="lg"
                bg={'black'}
                color={'white'}
                _hover={{
                  bg: 'rgb(218 170 77)'
                }}>
                Sign up
              </Button>
              </a>
              
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link  color={'rgb(218 170 77)'}><Signin/></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
           
          
          </ModalContent>
        </Modal>
      </Box>
    );
  }
  
  export default Signup;
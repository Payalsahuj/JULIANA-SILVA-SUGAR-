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
    Stack,
    Text,
    useColorModeValue,
    Link,
    useToast,
    Checkbox,
  } from "@chakra-ui/react";
  import { useEffect, useState, useContext } from 'react';
  import darklogo from "../Image/darklogo.png"
  
  import {Authcontext} from "../authcontext/authcontext"
  

  function GetData (){
  
    return fetch(" https://expensive-flannel-shirt-calf.cyclic.app/registeredUser").then((res) => res.json())

  }
  
  function Signin() {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState([])
    const { user, setUser, auth, setAuth } = useContext(Authcontext)
   
    const fetchandrender=async()=>{
      try{
        let data=await GetData()
       
        setUserData(data)
      }
      catch(err){
        console.log(err)
      }
    }
    useEffect(() => {
      fetchandrender()
    }, [])
  
    // console.log(userData)
    const HandleLogin = () => {
      let flag = false;
  
      userData.forEach((item) => {
  
        if (item.email === email && item.password === password) {
          setUser(item);
          setAuth(true);
          flag = true;
        }
      })
      if (flag === true) {
        // console.log("OK")
        toast({
  
  
  
          description: "Welcome to Juliana silva",
  
          status: "success",
          duration: 1500,
          isClosable: true,
        });
      } else {
        toast({
          description: "Incorrect Credential",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      }
    }
  
  
  
  
  
    return (
      <>
        <Link onClick={onOpen} style={{ color: '', }}>Signin</Link>
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
              height='140px'
              src={darklogo}
            />
            <Text
              marginLeft="80px"
              paddingBottom="value"
              borderBottomStyle="solid"
              fontWeight="bold"
              fontSize="14px"
            >
              Enter Email And Password
            </Text>
            <Divider borderColor={"black"}></Divider>
            <ModalCloseButton />
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'rgb(218 170 77)'}>Forgot password?</Link>
                  </Stack>
                  
                  <Button
                    onClick={HandleLogin}
                    bg={'black'}
                    color={'white'}
                    _hover={{
                      bg: 'rgb(218 170 77)'
                    }}>
                    Sign in
                  </Button>
                  
                </Stack>
                <Stack pt={10}>
                  <Text align={'center'} fontWeight={'bold'} color={'rgb(218 170 77)'}>
                    WELOCOME TO JULIANA SILVA
                  </Text>
                </Stack>
              </Stack>
            </Box>
  
  
  
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default Signin;
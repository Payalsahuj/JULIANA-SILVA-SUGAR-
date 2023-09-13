import {
    Box,
    HStack,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,
    Image
    
  } from '@chakra-ui/react';
  import React from 'react'
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon
  } from '@chakra-ui/icons';
  import {
    Modal,
    FormControl,
    FormLabel,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
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
  import darksearch from "../Image/darksearch.png"
  import lightsearch from "../Image/lightsearch.png"
  import {Authcontext} from "../authcontext/authcontext"
  import { useContext } from 'react';
  import { useNavigate, Link as Baglink} from "react-router-dom";
  import Signup from "./Signup.jsx"
  import Signin from "./Signin.jsx"
  import {  Link as LIPSlink} from "react-router-dom";
  function Navbar(){
    return (<WithSubnavigation />)
  }
  
  function WithSubnavigation() {
 
    const { isOpen, onToggle } = useDisclosure();
  
  
    const value=useContext(Authcontext)
    let {theme}=value
   
    return (
      <Box  position={"fixed"} zIndex={'2'} top={'0%'} width={'100%'} borderBottom={theme?'1px solid white':'1px solid pink'}>
        
        <Uppernav/>
         
        <Flex
          bg={theme?'black':"brand.100"}
          color={useColorModeValue('gray.600', 'white')}
         
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, lg: 'auto' }}
            ml={{ base: 2 }}
            display={{ base: 'flex', lg: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              
            </Text>
  
            <Flex display={{ base: 'none', lg: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            {/* <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button> */}
            <Signin/>
            {/* <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              
              _hover={{
                bg: 'pink.300',
              }} onClick={handelsignup}>
              Sign Up
            </Button> */}
            <Signup/>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  function Uppernav(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    

    const value=useContext(Authcontext)
    let {theme,settingtheme}=value
    const navigate=useNavigate()
    function handellogo(){
       navigate('/')     
    }
    return (
      <Flex
      bg={theme?'black':'brand.100'} color={theme?'white':'brand.100'}
          // bg='brand.100'
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderTop={0}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          justifyContent="space-around"
          
          align={'center'}>
            <Box>
               <button onClick={handellogo}> <Image src={theme?darklogo:v} w={{base:'73px',md:'95px', lg:'110px'}} h={{base:'45px',md:'65px', lg:'70px'}} alt='logo' /></button>
            </Box>
            <Box  w="40%">
            <Flex   display={{base:'none',md:'flex', lg:'flex'}} borderRadius="14px" padding="5px 10px" color={theme?'white':'black'} >
            <Input placeholder='Search products' focusBorderColor='brand.100' style={{ color:'black'}} border={"none"} size='sm' />< Image src={theme?darksearch:lightsearch} w="25px" h='24px' paddingTop={'5px'} paddingRight='5px' alt=''/>Search</Flex>
            </Box>
            <Button display={{base:'flex',md:'none', lg:'none'}} onClick={onOpen} bg={theme?'black':'brand.100'}>< Image src={theme?darksearch:lightsearch} w="25px" alt=''/><Text pl='7px' color={theme?'white':'black'}>Search</Text></Button>
    

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Search products</FormLabel>
              <Input ref={initialRef} placeholder='Search' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Search
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


            <Box display={{base:'none' ,md:'flex', lg:'flex'}} bg={theme?'black':'brand.100'} color={theme?'white':'brand.100'}>
                <Flex gap="25px" >
                  <Button bg={theme?'black':'brand.100'} color={theme?'white':'black'}  onClick={settingtheme}>
               < Image w="40px" h="35px" src={theme?darktheme:lighttheme} alt=''/></Button>

            <Image w="40px" src={theme?darkfav:lightfav} alt=''/>
            
            <Baglink to='/bag'><Button bg={theme?'black':'brand.100'} onClick={()=>console.log("ok")}><Image w="40px" src={theme?darkbag:lightbag} alt=''/></Button></Baglink>
            
            <Image w="40px" src={theme?darkadmin:lightadmin} alt=''/>
            </Flex>
            </Box>
            
          </Flex>
    )
  }
  
  const DesktopNav = () => {     //////LIPS nav
    
    const value=useContext(Authcontext)
    let {theme}=value
    const linkColor = useColorModeValue(theme?'white':'black', '#BDBDBD');
    const linkHoverColor = useColorModeValue('#BDBDBD', '#BDBDBD');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  // href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                    <LIPSlink to={navItem.href ?? '#'}>
                  {navItem.label}
                  </LIPSlink>
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'lg'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'lg'}
                  minW={'lg'}>
                  <HStack >
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </HStack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    console.log(href)
    
    return (
      <Link
        // href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <LIPSlink to={href}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            {subLabel.map((item,index)=><HStack key={index}><Text fontSize={'sm'} textAlign='left'>{item}</Text></HStack>)}
          </Box>
          </LIPSlink>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ lg: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
    
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          textAlign='left'
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200') }
           
            >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  

  
  const NAV_ITEMS = [
    {
      label: 'LIPS',
      children: [
        {
          label: 'LIPSTICKS',
          subLabel: ['TRANSFER PROOF LIPSTICKS','MATTE LIPSTICKS','LIQUID LIPSTICKS','CRAYONLIPSTICKS','POWDER LIPSTICKS','SATIN LIPSTICKS','BULLET LIPSTICKS','LIP GLOSS & LINERS'],
          href: '/product',
        },
        {
          label: 'New & Noteworthy',
          subLabel: ['LIPSTICK FIXERS & REMOVERS','LIP PRIMERS & SCRUBS','LIP BALMS'],
          href: '/product',
        },
        
      ],
      href:'/product'
    },
    {
      label: 'EYES',
      children: [
        {
          label: 'EYELINERS',
          subLabel: ['LIQUID EYELINERS','GET EYELINERS','PEN EYELINERS'],
          href: '#',
        },
        {
          label: 'EYESHADOW',
          subLabel: ['EYESHADOW PALETTES','JELLY EYESHADOW','LIQUID EYESHADOW'],
          href: '#',
        },
        {
          label: 'EYEBROW',
          subLabel: ['BROW DEFINERS','BROW POWDER','BROW SHAPER','BROW PEN'],
          href: '#',
        },
      ],
      href:'#'
    },
    {
        label: 'FACE',
        children: [
          {
            label: 'FOUNDATION & BB CREAM',
            subLabel: ['STICK FOUNDATION','LIQUID FOUNDATION','BB CREAM'],
            href: '#',
          },
          {
            label: 'COMPACT & FIXERS',
            subLabel: ['SETTING SPRAYS','LOOSE POWDER','COMPACT'],
            href: '#',
          },
        ],
        href:'#'
      },
      {
        label: 'NAILS',
        children: [
          {
            label: 'NAIL POLISH',
            subLabel: ['MATTE POLISH'],
            href: '#',
          },
          
        ],
        href:'#'
      },
      {
        label: 'SKIN CARE',
        children: [
          {
            label: 'SERUMS',
            subLabel: ['MASKS','SERUMS'],
            href: '#',
          },
          {
            label: 'MOISTURRIZERS',
            subLabel: ['MOISTURIZERS','SUNSCREENS'],
            href: '#',
          },
          {
            label:'MISTS',
            subLabel:['FACE MISTS','COOLING STICKS'],
            href:'#',
          }
        ],
        href:'#'
      },
      {
        label: 'ACCESSORIES',
        children: [
          {
            label: 'BRUSHES',
            subLabel: ['FACE BRUSHES','EYE BRUSHES'],
            href: '#',
          },
          {
            label: 'MAKEUP TOOLS',
            subLabel: [''],
            href: '#',
          },
        ],
        href:'#'
      },
      {
        label: 'GIFT & KITS',
        children: [
          {
            label: 'KITS',
            subLabel: ['LIPSTICK SETS','MAKEUP KITS','SKINCARE SETS','SUGAR MERCH','CORPORATE GIFTING','E-GIFT CARD','VALUE SETS'],
            href: '#',
          },
          
        ],
        href:'#'
      },
      {
        label: 'BESTSELLERS',
        href:'#'
      
      },
      {
        label: 'OFFERS',
        herf:'#'
      },
    
      {
        label: 'BLOG',
        href: '#',
      },

  ];



export default Navbar
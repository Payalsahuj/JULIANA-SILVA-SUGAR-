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



  function Navbar(){
    return (<WithSubnavigation />)
  }
  
  function WithSubnavigation() {
 
    const { isOpen, onToggle } = useDisclosure();
  
    
    const value=useContext(Authcontext)
    let {theme,settingtheme}=value
    return (
      <Box  position={"relative"} border={theme?'1px solid white':'1px solid pink'}>
        
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
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
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
    
    return (
      <Flex
      bg={theme?'black':'brand.100'} color={theme?'white':'brand.100'}
          // bg='brand.100'
          // color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          justifyContent="space-around"
          
          align={'center'}>
            <Box>
                <Image src={theme?darklogo:v} w={{base:'90px',md:'100px', lg:'130px'}} h={{base:'50px',md:'70px', lg:'90px'}} alt='logo' />
            </Box>
            <Box  w="40%">
            <Flex border={theme?'1px solid white':'2px solid white'}  display={{base:'none',md:'flex', lg:'flex'}} borderRadius="14px" padding="5px 10px" color={theme?'white':'black'} >
            <Input placeholder='Search products' focusBorderColor='brand.100' style={{ color:'black'}} border={"none"} size='sm' />< Image src={theme?darksearch:lightsearch} w="25px" h='24px' paddingTop={'5px'} paddingRight='5px' alt=''/>Search</Flex>
            </Box>
            

            {/* <Box   display={{base:'flex',md:'none', lg:'none'}}  >
            <Flex  > <Button display={displaysearch?"none":"flex"} bg='brand.100' borderRadius='50%' onClick={settingsearch}><Icon as={Search2Icon} /><Text pl='7px' color={'gray'}>Search</Text></Button></Flex></Box>
            
            <Box display={displaysearch?"flex":"none"} position='absolute'>
            <Flex border={"2px solid grey"}  borderRadius="14px" padding="5px 10px" >
            <Input placeholder='Search products' focusBorderColor='brand.100' border={"none"} size='sm' /></Flex></Box>
            
 */}

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
            
            <Image w="40px" src={theme?darkbag:lightbag} alt=''/>
            
            <Image w="40px" src={theme?darkadmin:lightadmin} alt=''/>
            </Flex>
            </Box>
            
          </Flex>
    )
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
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
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            {subLabel.map((item,index)=><HStack key={index}><Text fontSize={'sm'} textAlign='left'>{item}</Text></HStack>)}
          </Box>
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
          href: '#',
        },
        {
          label: 'New & Noteworthy',
          subLabel: ['LIPSTICK FIXERS & REMOVERS','LIP PRIMERS & SCRUBS','LIP BALMS'],
          href: '#',
        },
        
      ],
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
      },
      {
        label: 'SKIN CARE',
        children: [
          {
            label: 'MASKS & SERUMS',
            subLabel: ['MASKS','SERUMS'],
            href: '#',
          },
          {
            label: 'MOISTURRIZERS & SUNSCREENS',
            subLabel: ['MOISTURIZERS','SUNSCREENS'],
            href: '#',
          },
          {
            label:'MISTS & HYDRATING STICKS',
            subLabel:['FACE MISTS','COOLING STICKS'],
            href:'',
          }
        ],
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
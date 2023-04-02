import { Authcontext } from "../authcontext/authcontext"
import { useContext, useEffect, useReducer, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import { Card, CardBody, CardFooter, ButtonGroup, Button, Heading, Text, Image, Stack, Divider } from '@chakra-ui/react'
import axios from "axios";
import { Link } from "react-router-dom";
import wish from "../Image/wish.png"

function getdata(page, order, filter, type) {
  if (order === "" && filter === "") {
    return axios.get(`http://localhost:8080/lipstick`, {
      params: {
        _page: page,
        _limit: 6,

      }
    })
  }
  if (order !== "" && filter === "") {
    return axios.get(`http://localhost:8080/lipstick`, {
      params: {
        _page: page,
        _limit: 6,
        _sort: "price",
        _order: order
      }
    })
  }

  if (order === "" && filter !== "") {
    if (type === "type") {
      let arr = []
      return fetch(`http://localhost:8080/lipstick?_limit=6&_page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          data.forEach((item) => {
            for (let x = 0; x <= filter.length - 1; x++) {
              if (item.type.includes(filter[x])) {
                arr.push(item.id)
              }
            }

          })
          let filterdata = data.filter((item) => {

            if (arr.includes(item.id)) {
              return true
            }
            else {
              return false
            }

          })
          return ({ data: filterdata })
        })
    }
    else if(type==="feature"){
      let arr = []
      return fetch(`http://localhost:8080/lipstick?_limit=6&_page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          data.forEach((item) => {
            for (let x = 0; x <= filter.length - 1; x++) {
              if (item.feature.includes(filter[x])) {
                arr.push(item.id)
              }
            }

          })
          let filterdata = data.filter((item) => {

            if (arr.includes(item.id)) {
              return true
            }
            else {
              return false
            }

          })
          return ({ data: filterdata })
        })
    }
    else if(type==="finish"){
      let arr = []
      return fetch(`http://localhost:8080/lipstick?_limit=6&_page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          data.forEach((item) => {
            for (let x = 0; x <= filter.length - 1; x++) {
              if (item.finish.includes(filter[x])) {
                arr.push(item.id)
              }
            }

          })
         
          let filterdata = data.filter((item) => {

            if (arr.includes(item.id)) {
              return true
            }
            else {
              return false
            }

          })
          return ({ data: filterdata })
        })
    }
    else if(type==="formulation"){
      let arr = []
      return fetch(`http://localhost:8080/lipstick?_limit=6&_page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          data.forEach((item) => {
            for (let x = 0; x <= filter.length - 1; x++) {
              if (item.formulation.includes(filter[x])) {
                arr.push(item.id)
              }
            }

          })
         
          let filterdata = data.filter((item) => {

            if (arr.includes(item.id)) {
              return true
            }
            else {
              return false
            }

          })
          return ({ data: filterdata })
        })
    }


  }


}

const reducer = (state, action) => {
  switch (action.type) {
    case "getdata": {
      return state = action.payload
    }
    case "hightolow": {
      return state = action.payload
    }

    default: throw new Error('Something wrong')
  }
}

function Product() {
  const value = useContext(Authcontext)
  const { theme, settingtheme } = value
  const [state, dispatch] = useReducer(reducer, [])
  const [order, setorder] = useState("")
  const [page, setpage] = useState(1)
  const [filter, setfilter] = useState("")
  const [totalpage, settotalpage] = useState(0)
  const [type, settype] = useState("")
  const [cart,setcart]=useState([])
  const fetchandrender = async (page, order, filter) => {
    try {
      let data = await getdata(page, order, filter, type)
      if (filter === "") {
        settotalpage(data.headers["x-total-count"])
      }
      else {
        settotalpage(data.data.length)
      }

      dispatch({ type: 'getdata', payload: data.data })

    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchandrender(page, order, filter)
  }, [page, order, filter])

  function handelrelevance() {
    setorder("")
    fetchandrender(page, order, filter)
  }
  function handelhightolow() {
    setorder('desc')
    fetchandrender(page, order, filter)
  }
  function handellowtohigh() {
    setorder('asc')
    fetchandrender(page, order, filter)
  }
  function handelcheckboxtype(e) {
    settype("type")
    if (e.target.checked) {
      setfilter([...filter, e.target.name])

    }
    else {
      let arr = filter.filter((item) => {
        if (item !== e.target.name) {
          return true
        }
        return false
      })
      setfilter(arr)
      if (arr.length === 0) {
        setfilter("")
      }
    }
  }

  function handelcheckboxfeature(e) {
    settype("feature")
    if (e.target.checked) {
      setfilter([...filter, e.target.name])
    }
    else {
      let arr = filter.filter((item) => {
        if (item !== e.target.name) {
          return true
        }
        return false
      })
      setfilter(arr)
      if (arr.length === 0) {
        setfilter("")
      }
    }
  }

  function handelcheckboxfinish(e){
    settype("finish")
    if (e.target.checked) {
      setfilter([...filter, e.target.name])
    }
    else {
      let arr = filter.filter((item) => {
        if (item !== e.target.name) {
          return true
        }
        return false
      })
      setfilter(arr)
      if (arr.length === 0) {
        setfilter("")
      }
    }
  }

  function handelcheckboxformulation(e){
    settype("formulation")
    if (e.target.checked) {
      setfilter([...filter, e.target.name])
    }
    else {
      let arr = filter.filter((item) => {
        if (item !== e.target.name) {
          return true
        }
        return false
      })
      setfilter(arr)
      if (arr.length === 0) {
        setfilter("")
      }
    }
  }
  
  function handelcart(item){
    
  
    
  }

  return (
    <div style={{ backgroundColor: theme ? 'black' : '#ECEFF1' }}>
      <div><img style={{ display: 'block', height: '300px', width: '100%' }} src="https://sugar-mobile-application.s3.amazonaws.com/collection-web-banner/Lips.jpg" alt="" />
        <div style={{ margin: 'auto', padding: '0px 30px' }}><div style={{ display: 'flex', padding: '10px 20px', border: theme ? '1px solid #E1F5FE' : '', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '20px 0px', borderRadius: '10px', color: theme ? 'white' : 'black', backgroundColor: theme ? 'black' : "#E1BEE7" }}><h1>Home</h1><b style={{ padding: '0px 10px' }}>{" > "}</b><h1><b>LIPS</b></h1></div></div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '20%', borderRadius: '7px', padding: '20px 20px', paddingBottom: '10px', textAlign: 'left', marginBottom: '60px' }}>

          <Accordion allowToggle>
            <AccordionItem style={{ backgroundColor: theme ? "black" : 'white', color: theme ? 'white' : 'black', borderRadius: '7px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <b>Short By:</b>  Relevance
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <label><input type="radio" name='price' onClick={handelrelevance} style={{ marginRight: '20px' }} /><b>Relevance</b></label>

              </AccordionPanel>
              <AccordionPanel pb={4}>
                <label><input type="radio" name='price' onClick={handelhightolow} style={{ marginRight: '20px' }} /><b>Price:</b> High to Low</label>

              </AccordionPanel>
              <AccordionPanel pb={4}>
                <label><input type="radio" name='price' onClick={handellowtohigh} style={{ marginRight: '20px' }} /><b>Price: </b>Low to High</label>

              </AccordionPanel>
            </AccordionItem>

          </Accordion>



          <div style={{ borderTop: '1px solid #E1F5FE', borderRadius: '15px', marginTop: '30px', textAlign: 'left', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: theme ? "black" : 'white', color: theme ? 'white' : 'black' }}>
            <div style={{ display: 'flex', borderRadius: '15px 15px 0px 0px', justifyContent: 'space-between', padding: '15px 15px' }}><div><b>Filters </b></div><div style={{ color: theme ? 'white' : 'blue' }}><button ><b>Reset</b></button></div></div>
            <Accordion allowToggle>
              <AccordionItem style={{ padding: '10px 0px', }}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      <b>Product type</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} style={{ display: 'flex', flexDirection: 'column' }}>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='crayon' />Crayon Lipstick</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='liquid lipstick' />Liquid Lipstick</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='lip primer' />Lip Primer</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='lip liner' />
                    Lip Liner</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='matte lipstick' />
                    Matte Lipstick</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='lip gloss' />
                    Lip Gloss</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='scrub' />SCRUB</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='tint remover' />Tint Remover</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='gifts & sets' />Gifts & Sets</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='lipstick' />Lipstick</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='lip cream' />
                    Lip Cream</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxtype(e)} name='lip balm' />
                    Lip Balm</label>

                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={{ padding: '10px 0px' }}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      <b>Feature</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} style={{ display: 'flex', flexDirection: 'column' }}>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxfeature(e)} name='crayon' />Crayon</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxfeature(e)} name='long lasting' />
                    Long Lasting</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxfeature(e)} name='smudge proof' />Smudge Proof</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxfeature(e)} name='waterproof' />Waterproof</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxfeature(e)} name='liquid' />Liquid</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxfeature(e)} name='lip primer' />Lip Primer</label>


                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={{ padding: '10px 0px' }}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      <b>Finish</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} style={{ display: 'flex', flexDirection: 'column' }}>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxfinish(e)} name='matte'/>Matte</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxfinish(e)} name='gloss'/>Gloss</label>


                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={{ padding: '10px 0px', borderRadius: '0px 0px 15px 15px' }}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      <b>Formulation</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} style={{ display: 'flex', flexDirection: 'column' }}>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxformulation(e)} name='crayon' />Crayon</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxformulation(e)} name='liquid'/>Liquid</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxformulation(e)} name='bullet'/>Bullet</label>
                  <label><input type="checkbox" style={{ marginRight: '20px' }} onChange={(e) => handelcheckboxformulation(e)} name='matte'/>Matte</label>


                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>




        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '35px', width: '80%', padding: '17px 10px', marginBottom: '60px' }}>
          {state.map((item) =>

            <Card maxW='300px' key={item.id} style={{ border: theme ? '1px solid #E1F5FE' : '', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '15px', backgroundColor: theme ? 'black' : 'white', color: theme ? 'white' : 'blue' }}>
              <Link to={`/product/${item.id}`}>
                <CardBody >
                  <Image
                    src={item.image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    style={{ margin: 'auto', height: '270px' }}
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{item.name}</Heading>
                    <Text>
                      {item.shade} Shades
                    </Text>
                    <Text color='white' fontSize='2xl'>
                      Rs. {item.price}
                    </Text>
                  </Stack>
                </CardBody>
              </Link>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2' style={{ margin: 'auto' }}>
                  <Button variant='solid' colorScheme='pink'>
                    <img style={{display:'block',width:'20px'}} src={wish} alt="" />
                  </Button>
                  <Button variant='solid' colorScheme='blue' onClick={()=>handelcart(item)}>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

          )}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', gap: '10px', paddingBottom: '30px' }}>
        <button disabled={page === 1} onClick={() => setpage(page - 1)} style={{ backgroundColor: '#4299E1', padding: '5px 20px', color: 'white', borderRadius: '7px' }}>{"<<  Prev"}</button>
        <p style={{ backgroundColor: '#D53F8C', padding: '5px 20px', color: 'white', borderRadius: '7px' }}>Page: {page}</p>
        <button disabled={page === Math.ceil(totalpage / 4)} onClick={() => setpage(page + 1)} style={{ backgroundColor: '#4299E1', padding: '5px 20px', color: 'white', borderRadius: '7px' }}>{"Next  >>"}</button></div>
    </div>
  )
}
export default Product
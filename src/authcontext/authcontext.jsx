import { createContext,useState,useRef } from "react";


import { useToast } from "@chakra-ui/react";

export const Authcontext=createContext()
export const AuthcontextProvider=(props)=>{
    const [bag, setBag] = useState([])
    const [price, setPrice] = useState(0);
    const [user, setUser] = useState({});
    const [ auth, setAuth]=useState(false)
    const toast = useToast();

  
    // console.log("Context", user)
    const handlePrice = () => {
      let ans = 0;
      bag.map((item) => (ans += +item.price * +item.amount));
      setPrice(ans);
    };
    const HandleAddToBag = (item) => {
      // bag.push(item)
      // console.log(bag)
      if (bag.indexOf(item) !== -1){
        toast({
          title: "Already Added",
          description: "",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      } else{
        toast({
          title: "Added To Bag",
          description: "",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
        setBag([...bag, item])
      }
    }
// console.log(bag)

    const HandleChange = (item, d) => {
      const ind = bag.indexOf(item);
      const arr = bag;
      arr[ind].amount += d;
  
      if (arr[ind].amount === 0) arr[ind].amount
        = 1;
      setBag([...arr])
    }
  
  console.log(auth)
    const [theme,settheme]=useState(true)
    function settingtheme(){
        settheme(!theme)
    }
    return <Authcontext.Provider value={{theme:theme,settingtheme:settingtheme ,HandleAddToBag, bag, setBag ,HandleChange,handlePrice,price,user,setUser,auth,setAuth}}>
        {props.children}
    </Authcontext.Provider>

}
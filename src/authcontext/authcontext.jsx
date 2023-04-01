import { createContext,useState,useRef } from "react";
export const Authcontext=createContext()
export const AuthcontextProvider=(props)=>{
    const [theme,settheme]=useState(true)
    const val=useRef()
    console.log(val)
    function settingtheme(){
        settheme(!theme)
    }
    return <Authcontext.Provider value={{theme:theme,settingtheme:settingtheme }}>
        {props.children}
    </Authcontext.Provider>

}
import { createContext,useState } from "react";
export const Authcontext=createContext()
export const AuthcontextProvider=(props)=>{
    const [theme,settheme]=useState(false)
    function settingtheme(){
        settheme(!theme)
    }
    return <Authcontext.Provider value={{theme:theme,settingtheme:settingtheme }}>
        {props.children}
    </Authcontext.Provider>

}
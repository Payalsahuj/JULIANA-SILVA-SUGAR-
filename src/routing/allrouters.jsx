import { Route,Routes } from "react-router-dom"
import Landpage from "../component/landpage"
import Addtobag from "../component/addtobag"
import Admin from "../component/admin"
import Login from "../component/login"
import Wishlist from "../component/wishlist"
function Allrouter(){
    return (
        <Routes>
            <Route path="/" element={<Landpage/>}/>
            <Route path="/addtobag" element={<Addtobag/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
        </Routes>
    )
}

export default Allrouter
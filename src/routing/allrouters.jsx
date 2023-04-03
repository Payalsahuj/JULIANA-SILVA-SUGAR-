import { Route,Routes } from "react-router-dom"
import Landpage from "../component/landpage"
import Bag from "../component/Bag"
import Admin from "../component/admin"
import Signup from "../component/Signup"
import Wishlist from "../component/wishlist"
import Product from "../component/product"
import Singlepage from "../component/singlepage"
import CheckOut from "../component/Address"
import PrivateRoute from "../authcontext/Privateroute"
function Allrouter(){
    
    return (
        <Routes>
            <Route path="/" element={<Landpage/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/product/:id' element={<Singlepage/>}/>
            <Route path="/bag" element={<Bag/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path='/address' element={<PrivateRoute><CheckOut/></PrivateRoute>}/>
        </Routes>
    )
}

export default Allrouter
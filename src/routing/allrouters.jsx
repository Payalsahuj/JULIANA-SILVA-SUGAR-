import { Route,Routes } from "react-router-dom"
import Landpage from "../component/landpage"
import Bag from "../component/Bag"
import Admin from "../component/admin"
import Signup from "../component/Signup"
import Signin from "../component/Signin"
import Wishlist from "../component/wishlist"
import Product from "../component/product"
import Singlepage from "../component/singlepage"
import CheckOut from "../component/Address"
import PrivateRoute from "../authcontext/Privateroute"
import Orderdetail from "../component/orderdetail"
function Allrouter(){
    
    return (
        <Routes>
            <Route path="/" element={<Landpage/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/product/:id' element={<Singlepage/>}/>
            <Route path="/bag" element={<PrivateRoute><Bag/></PrivateRoute>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path='/orderdetail' element={<Orderdetail/>}/>
            <Route path="/wishlist" element={<PrivateRoute><Wishlist/></PrivateRoute>}/>
            <Route path='/address' element={<PrivateRoute><CheckOut/></PrivateRoute>}/>
        </Routes>
    )
}

export default Allrouter
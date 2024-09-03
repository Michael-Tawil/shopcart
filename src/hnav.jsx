import { Link } from "react-router-dom"
function Hnav(){
    return(
        <div className="hed">
            <h1>MA Clothing</h1>
            <div className="hnav">
                <Link to ="/">Home</Link>
                <Link to ="/Shop">Shop</Link>
            </div>
            <Link to ="/Cart"><img src="/cart.png" className="carticon" alt="Cart" /></Link>
        </div>
    )
}
export default Hnav
import { Link } from "react-router-dom"
function Hnav(){
    return(
        <div className="hnav">
            <h1>M&A Clothing</h1>
            <Link to ="/">Home</Link>
            <Link to ="/Shop">Shop</Link>
            <Link to ="/Cart">Cart</Link>
        </div>
    )
}
export default Hnav
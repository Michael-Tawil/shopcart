import { Link } from "react-router-dom"
function Hnav(props){
    const {modal} = props
    return(
        <div className="hed">
            <h1>MA Clothing</h1>
            <div className="hnav">
                <Link to ="/">Home</Link>
                <Link onClick={()=>modal()} to ="/Shop">Shop</Link>
            </div>
            <button onClick={()=>modal()}><img src="/cart.png" className="carticon" alt="Cart" /></button>
        </div>
    )
}
export default Hnav
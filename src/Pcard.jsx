function Pcard(props){
    const {srcimg,altext,plusbtn,minusbtn,addcart,hamch,amount} = props
    return(
        
        <div className="pcard">
                <img 
                    src={srcimg} 
                    alt={altext} />
            <div className="indiv">
                <button onClick={plusbtn}>+</button>
                <input type="text" placeholder="Enter desired amount" onChange={hamch} value={amount}/>
                <button onClick={minusbtn}>-</button> 
            </div>
            <button onClick={addcart}>Add To Cart</button>
        </div>
    )
}
export default Pcard
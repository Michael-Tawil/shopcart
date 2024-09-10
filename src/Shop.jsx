import Hnav from "./hnav"
import Pcard from "./Pcard"
import { useEffect, useState } from "react"
function Shop(){
    const [amount,Setamount] = useState({0:0,1:0,2:0,3:0,4:0});
    const [prodatas,Setprodatas] = useState([]);

    function hamch(e,index){
        let count = parseInt(e.target.value)
        !isNaN(count) && count >= 0 ? Setamount((prevamount)=>({
            ...prevamount,
            [index]:count

        })) : Setamount((prevamount)=>({
            ...prevamount,
            [index]:0

        }))
    }
    function pbtn(index){
        Setamount((prevamount)=>({
            ...prevamount,
            [index]:(prevamount[index])+1
        }))
    }
    function mbtn(index){
        Setamount((prevamount)=>({
            ...prevamount,
            [index]:(prevamount[index])-1
        }))
    }
    function Acart(){

    }
    useEffect(()=>{
        async function Getproducts() {
        let parary = []
        for (let i = 1; i <= 5; i++){
        let fetchpro = await fetch(`https://fakestoreapi.com/products/${i}/`);
        let prodata = await fetchpro.json();
        let pimg = prodata.image
        let ptitle = prodata.title
        parary.push([pimg,ptitle])

        }
        Setprodatas(parary)
        }
        Getproducts()
    },[])
    
    useEffect(() => {
        if (prodatas.length > 1) {
            console.log("this is the state "+ prodatas); // Now it will only log when data is available
        }
    }, [prodatas]);

    return(
        <>
            <Hnav/>
            <div className="hdiv">
                {prodatas.map((item,index)=>{
                    return(
                    <Pcard
                    key = {index}
                    srcimg = {item[0]}
                    altext = {item[1]}
                    plusbtn = {()=>pbtn(index)}
                    minusbtn = {()=>mbtn(index)}
                    addcart ={Acart}
                    hamch = {(e)=>hamch(e,index)}
                    amount = {amount[index]}/>
                    )
                })}
                
            </div>
        </>
    )
    }
    export default Shop
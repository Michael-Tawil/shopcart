import Cart from "./Cart";
import Hnav from "./hnav"
import Pcard from "./Pcard"
import { useEffect, useState } from "react"
function Shop(){
    const [amount,Setamount] = useState({0:0,1:0,2:0,3:0,4:0})
    const [prodatas,Setprodatas] = useState([])
    const [iname, Setiname] = useState("")
    const [isopen,Setisopen] = useState(false)

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
    function Acart(index,count,altext){
        let temparray = [...iname]
        temparray[index] = [altext,count]
        Setiname(temparray)
        console.log(iname)
    }

    function modal(){
        Setisopen(!isopen)
        console.log(isopen)
    }
    function clear(){
        Setiname("")
    }
    useEffect(()=>{
        async function Getproducts() {
        let parary = []
        for (let i = 1; i <= 5; i++){
        let fetchpro = await fetch(`https://fakestoreapi.com/products/${i}/`);
        let prodata = await fetchpro.json();
        let pimg = prodata.image
        let ptitle = prodata.title
        parary.push({"proimg":pimg,"protitle":ptitle})

        }
        Setprodatas(parary)
        }
        Getproducts()
    },[])

    useEffect(()=>{
        console.log(prodatas)
    },[prodatas])
    
    return(
    <> 
        <Hnav modal={()=>modal()}/>
        {isopen ? (<Cart clear ={()=>clear()} modal={()=>modal()} iname={iname}/>) :(
            <>
            <div className="hdiv">
    
                {prodatas.map((item,index)=>{
                    return(
                    <Pcard
                    key = {index}
                    srcimg = {item.proimg}
                    altext = {item.protitle}
                    plusbtn = {()=>pbtn(index)}
                    minusbtn = {()=>mbtn(index)}
                    addcart ={()=>Acart(index,amount[index],item.protitle)}
                    hamch = {(e)=>hamch(e,index)}
                    amount = {amount[index]}/>
                    )
                })}
            </div>
            </>
        )}
    </>
    )}
    export default Shop
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function ListCategory () {  
    // const [dataCategories, setDataCategories] = useState([])
  
    // untuk memanggil kategory
    // const state = category
    // const { categories } = this.state

    useEffect((sumCategories) => {
        fetch("https://6247d3b64bd12c92f4041c17.mockapi.io/Categories")
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            // if(sumCategories) {
            //     const categorys = data?.slice(0, sumCategories)
            //     setDataCategories(categorys)
            // }else{
            //     setDataCategories(data)
            // }
        })
    },[])
    
    return(
        <div>
            <h2>aoifdjqoaw</h2>
        </div>
    )
}

export default ListCategory
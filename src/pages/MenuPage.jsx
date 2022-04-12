import React from 'react'
// import { Container, Row, Col} from "react-bootstrap"
import Products from '../components/Products'

function MenuPage (){
    return (
        <div  style={{
            marginTop: "2px",
            paddingTop: "6px",
            cursor: "pointer"
        }}>
            <h1 style={{ margin: "30px 0", textAlign: "center" }}> Menu </h1>
            <Products />
        </div>
    )
}

export default MenuPage
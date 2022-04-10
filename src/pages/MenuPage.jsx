import React from 'react'
import { Container, Row, Col} from "react-bootstrap"

function MenuPage (){
    return (
        <div  style={{
            marginTop: "2px",
            paddingTop: "6px",
            cursor: "pointer"
        }}>
            <Container>
                <Row>
                    <Col><strong>Makanan</strong></Col>
                    <Col><strong>Minuman</strong></Col>
                    <Col><strong>Cemilan</strong></Col>
                    <Col><strong>Oleh-Oleh</strong></Col>
                </Row>
            </Container>
        </div>
    )
}

export default MenuPage
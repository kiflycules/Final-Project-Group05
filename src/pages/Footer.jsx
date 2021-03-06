import React from "react";
import { useNavigate} from 'react-router-dom'
import AboutUs from "./AboutUs";

function Footer() {
    const navigate = useNavigate()
    return (
        <div className="main-footer">
            <div className="container">
            <div className="row" >
                    {/* column 1 */}
                    <div className="col">
                        <h4 className="d-flex justify-content-center">Tentang Kami</h4>
                        <ul style={{cursor: "pointer"}} onClick={() => {
                            navigate("/aboutus")
                        }}>
                            Kenapa Belanja di <strong>FooS. ?</strong>                      
                        </ul>
                    </div>
                    {/* column 2 */}
                    <div className="col">
                        <h4 className="d-flex justify-content-center">Informasi</h4>
                        <ul style={{cursor: "pointer"}}>
                            (+62) 823 3945 6907
                        </ul>
                        <ul style={{cursor: "pointer"}}>foodofsumbawa@gmail.com</ul>
                    </div>
                    {/* column 3 */}
                    <div className="col">
                        <h4 className="d-flex justify-content-center">Alamat</h4>
                        <ul>Jln. Garuda 148 Sumbawa Besar, LEMPEH, Kec. Sumbawa</ul>
                        <ul>Kab. Sumbawa, Prov. Nusa Tenggara Barat</ul>
                        <ul>Indonesia</ul>
                    </div>

                    {/* column 4 */}
                    <div className="col">
                        <h4 className="d-flex justify-content-center">Ikuti Kami</h4>
                        <ul style={{cursor: "pointer"}}>Instagram | Facebook | Twitter</ul>
                    </div>

                    
                </div>
                    <hr />
            </div>
            <div className="d-flex justify-content-center">
                <p className="d-flex justify-content-center" >
                    Copyright &copy; {new Date().getFullYear()} by   <strong> FooS.</strong> Inc
                </p>

            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import '../assets/css/navbar.css'
import '../assets/css/result.css'
import Navbar from '../components/Navbar'

function ResultPage() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid pt-5">
                <div className="container cards-container">
                    <div className="result-card row">
                        <div className="col-3">
                            <img src="https://s4.bukalapak.com/img/4798892882/large/Bunga_Mawar_Merah.jpg" alt="" />
                        </div>
                        <div className="details col-9 pt-2">
                            <h5>Bunga Mawar</h5>
                            <h6>Rosa</h6>
                            <p>Tanaman Hias</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPage


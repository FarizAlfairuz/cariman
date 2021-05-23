import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

function DetailPage(props) {
    const { id } = props.match.params
    const [tanaman, setTanaman] = useState()

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/cariman/${id}`)
            .then((response) => {
                setTanaman(response.data.data)
                console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    console.log(tanaman)

    return (
        <div style={{ backgroundColor: "#f0f0f0", height: "100%", width: "100%", minHeight: "100vh" }}>
            <Navbar></Navbar>
            <div className="result-card row" style={{ marginLeft: "10%", marginRight: "10%" }}>
                {tanaman ? (
                    <div className="p-5">
                        <div className="col d-flex">
                            <img src={tanaman.urlFoto} alt="gambar-tanaman" />
                            <div className="ml-5">
                                <h2>{tanaman.nama}</h2>
                                <h5>{tanaman.nama_ilmiah}</h5>
                                <h6 style={{color: "grey"}}>{tanaman.kategori}</h6>
                            </div>
                        </div>
                        <div className="details col pt-5">
                            <p>{tanaman.deskripsi}</p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default DetailPage

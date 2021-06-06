import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import ResultCard from '../components/ResultCard'

function DetailPage(props) {
    const { id } = props.match.params
    const [tanaman, setTanaman] = useState(false)
    const [rekom, setRekom] = useState([])

    useEffect(() => {
        axios
            .get(`https://cariman-backend.herokuapp.com/api/cariman/${id}`)
            .then((response) => {
                setTanaman(response.data.data)
                console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`https://cariman-backend.herokuapp.com/api/rekomendasi/?kategori=${tanaman.kategori}`)
            .then((response) => {
                setRekom(response.data.data)
                console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id, tanaman.kategori])

    return (
        <div style={{ backgroundColor: "#f0f0f0", height: "100%", width: "100%", minHeight: "100vh" }}>
            <Navbar></Navbar>
            <div className="result-card" style={{ marginLeft: "10%", marginRight: "10%" }}>
                {tanaman ? (
                    <div>
                        <div className="container">
                            <div className="row ">
                                <div className="col-sm ">
                                    <img src={tanaman.urlFoto} alt="gambar-tanaman" />
                                </div>

                                <div className="col-sm align-self-center ml-3">
                                    <h2>{tanaman.nama}</h2>
                                    <h5>{tanaman.nama_ilmiah}</h5>
                                    <h6 style={{ color: "grey" }}>{tanaman.kategori}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="details col pt-5">
                            <p className="text-justify">{tanaman.deskripsi}</p>
                        </div>
                        <div className="my-5">
                            <a href={`https://tanamart.herokuapp.com/search/?query=${tanaman.nama.toLowerCase()}`} className="btn btn-about">Beli di Tanamart</a>
                        </div>
                    </div>
                ) : null}
            </div>

            <div className="card-container mt-5">
                <h3>Menampilkan {tanaman.kategori} lainnya</h3>
                {rekom ? (
                    <div>
                        {rekom.map((hasil) => (
                            <ResultCard id={hasil.id} gambar={hasil.urlFoto} nama={hasil.nama} namaIlmiah={hasil.nama_ilmiah} kategori={hasil.kategori} />
                        ))}
                    </div>
                ) : null}
            </div>


        </div>
    )
}

export default DetailPage

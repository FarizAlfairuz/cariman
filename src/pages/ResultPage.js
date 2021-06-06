import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/result.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'

function ResultPage(props) {
    const { search } = props.match.params
    const [nama, setNama] = useState([])
    const [kategori, setKategori] = useState([])
    const [nIlmiah, setNIlmiah] = useState([])

    useEffect(() => {
        axios
            .get(`https://cariman-backend.herokuapp.com/api/search?search=${search}`)
            .then((response) => {
                console.log(response)
                setNama(response.data.data)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [search])

    return (
        <div className="body">
            <Navbar></Navbar>
            <div className="container-fluid pt-3 pb-3">
                <div className="card-container">
                    <h5>Menampilkan pencarian {search}</h5>
                    <div>
                        {nama.length || kategori.length || nIlmiah.length !== 0 ? (
                            <div>
                                <div>
                                    {nama.length !== 0 ? (
                                        <div className="pb-5">
                                            <p>Menampilkan {search} dalam nama tanaman</p>
                                            {nama.map((hasil) => (
                                                <ResultCard id={hasil.id} gambar={hasil.urlFoto} nama={hasil.nama} namaIlmiah={hasil.nama_ilmiah} kategori={hasil.kategori} ></ResultCard>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                                <div>
                                    {kategori.length !== 0 ? (
                                        <div className="pb-5">
                                            <p>Menampilkan {search} dalam kategori</p>
                                            {kategori.map((hasil) => (
                                                <ResultCard id={hasil.id} gambar={hasil.urlFoto} nama={hasil.nama} namaIlmiah={hasil.nama_ilmiah} kategori={hasil.kategori} ></ResultCard>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                                <div>
                                    {nIlmiah.length !== 0 ? (
                                        <div className="pb-5">
                                            <p>Menampilkan {search} dalam nama ilmiah tanaman</p>
                                            {nIlmiah.map((hasil) => (
                                                <ResultCard id={hasil.id} gambar={hasil.urlFoto} nama={hasil.nama} namaIlmiah={hasil.nama_ilmiah} kategori={hasil.kategori} ></ResultCard>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p>Data tidak ditemukan</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPage
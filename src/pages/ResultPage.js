import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/result.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'

function ResultPage(props) {
    const { search } = props.match.params
    const [query, setQuery] = useState([])

    useEffect(() => {
        axios
            .get(`https://cariman-backend.herokuapp.com/api/search?search=${search}`)
            .then((response) => {
                console.log(response)
                setQuery(response.data.data)

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
                    <h5>Menampilkan hasil pencarian "{search}"</h5>
                    <div>
                        {query.length !== 0 ? (
                            <div>
                                <div>
                                    {query.length !== 0 ? (
                                        <div className="pb-5">
                                            {query.map((hasil) => (
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
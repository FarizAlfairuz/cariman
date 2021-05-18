import React, { useState } from 'react'
import '../assets/css/searchpage.css'
import { Link } from 'react-router-dom'


function SearchPage() {
    // let history = useHistory();
    // const [nama, setNama] = useState(null)
    const [search, setSearch] = useState(null)
    // const [kategori, setKategori] = useState(null)
    // const [nIlmiah, setNIlmiah] = useState(null)
    // const [query, setQuery] = useState({
    //     name: "",
    //     category: "",
    //     nama_ilmiah: "",
    // })


    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     setQuery({
    //         name: nama,
    //         category: kategori,
    //         nama_ilmiah: nIlmiah
    //     })
        

        // axios
        //     .get(`http://localhost:5000/api/cariman/?nama=${query.nama}`)
        //     .then((response) => {
        //         console.log(response.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })

        // axios
        //     .get(`http://localhost:5000/api/cariman/?kategori=${query.kategori}`)
        //     .then((response) => {
        //         console.log(response.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })

        // axios
        //     .get(`http://localhost:5000/api/cariman/?nama_ilmiah=${query.nama_ilmiah}`)
        //     .then((response) => {
        //         console.log(response.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })

        // history.push("/result")
    // }

    

    return (
        <div id="search-page">
            <div className="main-container">
                <h1>CariMan</h1>
                <h6>Mesin Pencarian Tanaman</h6>
                <form className="form-inline w-100 my-lg-0" >
                    <div className="form-group w-100 input-group has-search">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cari tanaman"
                            value={search}
                            onChange={inputHandler}
                            style={{ borderRadius: "50px", fontSize: "22px", padding: "20px" }}
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                        <Link to={`/result/${search}`} style={{marginBottom: "2.375rem"}} >
                            <button type="submit" className="btn-search">
                                <i className="fa fa-search"></i>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchPage

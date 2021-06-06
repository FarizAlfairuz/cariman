import React, { useState } from 'react'
import '../assets/css/searchpage.css'
import { Link } from 'react-router-dom'


function SearchPage() {
    const [search, setSearch] = useState(null)

    const inputHandler = (e) => {
        setSearch(e.target.value)
        console.log(setSearch)
    }

    return (
        <div id="search-page">
            <div className="main-container">
                <h1>CariMan</h1>
                <h6>Mesin Pencarian Tanaman</h6>
                <form className="form-inline w-100 my-lg-0" >
                    <div className="form-group w-100 input-group has-search">
                        <input
                            type="text"
                            className="form-control search-bar"
                            placeholder="Cari tanaman"
                            value={search}
                            onChange={inputHandler}
                            style={{ borderRadius: "50px", fontSize: "22px", padding: "20px" }}
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                        <Link to={`/result/${search}`} style={{ marginBottom: "2.375rem" }} >
                            <button type="submit" className="btn-search">
                                <i className="fa fa-search"></i>
                            </button>
                        </Link>
                    </div>
                    <div className="d-flex mt-3 w-100 justify-content-center"><h5>Kategori tanaman</h5></div>
                    <div className="d-flex row w-100 justify-content-center ml-1">
                        <div className="col-sm">
                            <Link to={`/result/Tanaman`} style={{ marginBottom: "2.375rem" }} >
                                <button className="btn-kategori">Semua</button>
                            </Link>
                        </div>
                        <div className="col-sm">
                            <Link to={`/result/Tanaman%20Hias`} style={{ marginBottom: "2.375rem" }} >
                                <button className="btn-kategori">Hias</button>
                            </Link>
                        </div>
                        <div className="col-sm">
                            <Link to={`/result/Tanaman%20Obat`} style={{ marginBottom: "2.375rem" }} >
                                <button className="btn-kategori">Obat</button>
                            </Link>
                        </div>
                        <div className="col-sm">
                            <Link to={`/result/Tanaman%20Buah`} style={{ marginBottom: "2.375rem" }} >
                                <button className="btn-kategori">Buah</button>
                            </Link>
                        </div>
                        <div className="col-sm">
                            <Link to={`/result/Tanaman%20Hias`} style={{ marginBottom: "2.375rem" }} >
                                <button className="btn-kategori">Pangan</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default SearchPage

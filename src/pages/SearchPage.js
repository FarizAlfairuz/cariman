import React, { useState } from 'react'
import '../assets/css/searchpage.css'
import { Link } from 'react-router-dom'


function SearchPage() {
    const [search, setSearch] = useState(null)

    const inputHandler = (e) => {
        setSearch(e.target.value)
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

import React from 'react'
import '../assets/css/searchpage.css'
import { Link } from 'react-router-dom'

function SearchPage() {
    return (
        <div id="search-page">
            <div className="main-container">
                <h1>CariMan</h1>
                <h6>Mesin Pencarian Tanaman</h6>
                <form className="form-inline w-100 my-lg-0">
                    <div className="form-group w-100 input-group has-search">
                        <input
                            type="sumbit"
                            className="form-control"
                            placeholder="Cari tanaman"
                            style={{ borderRadius: "50px", fontSize: "24px", padding: "20px" }}
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            onSubmit={<Link to="/result"></Link>}
                        />
                        <span className=" fa fa-search form-control-feedback"></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchPage

import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [search, setSearch] = useState(null)
    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <nav
            className="navbar navbar-desktop navbar-expand mb-3"
            style={{ zIndex: "2" }}
        >
            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                <ul className=" navbar-nav d-flex row align-items-center">
                    <li className="nav-item cariman col-lg-1 col-md-2 col-sm-3">
                        <Link className="navbar-brand nav-link" to="/">
                            CariMan
                        </Link>
                    </li>
                    
                    <li className="ml-3 col-lg-8 col-md-8 col-sm-8">
                        <form className="form-inline w-100 my-lg-0" >
                            <div className="form-group w-100 input-group has-search">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cari tanaman"
                                    value={search}
                                    onChange={inputHandler}
                                    style={{ borderRadius: "50px", fontSize: "16px", padding: "20px" }}
                                    aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                                <Link to={`/result/${search}`} style={{ marginBottom: "1.75rem" }} >
                                    <button type="submit" className="btn-search" style={{ fontSize: "18px" }}>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

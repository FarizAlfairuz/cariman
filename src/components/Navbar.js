import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav
            className="navbar navbar-desktop navbar-expand"
            style={{ zIndex: "2" }}
        >
            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                <ul className=" navbar-nav d-flex align-items-center">
                    <li className="nav-item ">
                        <Link className="navbar-brand nav-link" to="/">
                            CariMan
                            </Link>
                    </li>
                    <li>
                        <form className="form-inline w-100 my-lg-0">
                            <div className="form-group w-100 input-group has-search">
                                <input
                                    type="sumbit"
                                    className="form-control"
                                    placeholder="Cari tanaman"
                                    style={{ borderRadius: "50px", fontSize: "16px", padding: "20px", width: "746px" }}
                                    aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm"
                                    onSubmit={<Link to="/result"></Link>}
                                />
                                <span className=" fa fa-search form-control-feedback"></span>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

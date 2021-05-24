import React from 'react'
import { Link } from 'react-router-dom'

function ResultCard(props) {
    return (
        <div>
            <Link className="link" to={`/detail/${props.id}`}>
                <div class="card">
                    <div class="row">
                        <div class="col-sm-5">
                            <img class="d-block w-100" src={props.gambar} alt="gambar-tanaman"></img>
                        </div>
                        <div class="col-sm-7">
                            <div class="card-block details">
                                <h5>{props.nama}</h5>
                                <h6>{props.namaIlmiah}</h6>
                                <p>{props.kategori}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ResultCard

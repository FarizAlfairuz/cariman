import React from 'react'
import { Link } from 'react-router-dom'

function ResultCard(props) {
    return (
        <div className="d-flex">
            <Link className="link" to={`/detail/${props.id}`}>
                <div className="result-card row">
                    <div className="col">
                        <img src={props.gambar} alt="gambar-tanaman" />
                    </div>
                    <div className="details col pt-2">
                        <h5>{props.nama}</h5>
                        <h6>{props.namaIlmiah}</h6>
                        <p>{props.kategori}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ResultCard

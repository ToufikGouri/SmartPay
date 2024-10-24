import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, name, image, disc }) => {

    const navigate = useNavigate()

    const handleBuy = () => {
        navigate(`/checkout/${id}`)
    }

    return (
        <>
            <div className="card card-compact bg-base-100 h-96 w-80 md:w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}<span className="badge badge-secondary">{disc}% off</span></h2>
                    <div className="card-actions justify-around">
                        <button className="w-2/5 btn btn-neutral">Save</button>
                        <button onClick={handleBuy} className="w-2/5 btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
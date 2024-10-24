import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../components/Footer'

const Checkout = () => {

    const productData = [
        {
            id: 1,
            name: "Nike Air 2",
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            disc: 23,
            price: 49,
        },
        {
            id: 2,
            name: "JBL Headphones pro G",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
            disc: 40,
            price: 24,
        },
        {
            id: 3,
            name: "Firebolt Thunder",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
            disc: 10,
            price: 18,
        },
        {
            id: 4,
            name: "N'S Channel vol2",
            image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
            disc: 35,
            price: 9.9,
        },
        {
            id: 5,
            name: "Queen Heels Cute Beauty",
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
            disc: 18,
            price: 19,
        },
        {
            id: 6,
            name: "Airpods pro 1",
            image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
            disc: 7,
            price: 69,
        },
    ]

    const params = useParams()
    const pageId = parseInt(params?.id)
    const product = productData[pageId - 1] || productData[0]

    const [quantity, setQuantity] = useState(1)

    return (
        <>
            <section className='flex flex-col items-center mb-10'>
                <div className='md:w-4/5 md:flex md:space-x-10 mx-4'>
                    <img src={product.image} alt={product.name} className='md:w-2/5 h-96 md:h-screen object-cover' />

                    <div className='md:w-3/5 max-md:mt-4 space-y-4'>
                        <h1 className='text-2xl'>{product.name}</h1>
                        <h3 className='text-yellow-500 text-xl'><span className='text-4xl'>${product.price}</span> ({product.disc}% off)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores numquam repellat laborum voluptate suscipit, rerum ipsum! Doloribus obcaecati minima, magni iusto illo ducimus praesentium aspernatur aliquid. Assumenda dolorem vel odit, facere eos labore a culpa perferendis alias dicta recusandae magni rem cum sit modi obcaecati veritatis dolor consectetur repudiandae quis!</p>

                        <div className='h-[1px] my-6 border'></div>

                        <div className='space-x-4'>
                            <span>Quantity:</span>
                            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className='btn btn-outline'>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className='btn btn-outline'>+</button>
                        </div>

                        <h1 className='text-2xl text-green-500'>Sub Total : ${(product.price * quantity).toFixed(2)}/-</h1>
                        <button className='btn btn-success'>Proceed to buy</button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Checkout
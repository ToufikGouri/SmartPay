import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

const Home = () => {

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

    return (
        <>
            <main className='flex flex-col'>
                <Carousel />

                <h1 className='text-2xl text-center underline decoration-yellow-500 my-10'>Explore The Trends</h1>

                <div className='grid place-items-center md:grid-cols-3'>
                    {productData.map(val =>
                        <Card key={val.id} id={val.id} name={val.name} image={val.image} disc={val.disc} />
                    )}
                </div>

                <Footer />
            </main>
        </>
    )
}

export default Home
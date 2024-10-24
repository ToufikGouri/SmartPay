import React from 'react'

const Carousel = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://img.freepik.com/premium-psd/shoe-social-media-banner-template-design_515691-32.jpg?ga=GA1.1.1710472353.1729767676&semt=ais_hybrid"
                        className="h-60 md:h-96 w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.freepik.com/premium-photo/dress-hangs-hanger-with-number-50_943617-39976.jpg?w=1060"
                        className="h-60 md:h-96 w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_120329-1094.jpg?ga=GA1.1.1710472353.1729767676&semt=ais_hybrid"
                        className="h-60 md:h-96 w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel
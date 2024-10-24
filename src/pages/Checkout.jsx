import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

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
    const [paymentMethod, setPaymentMethod] = useState("")
    const [modalMsg, setModalMsg] = useState("")
    const [isPaymentMethodRight, setIsPaymentMethodRight] = useState(false)

    const payCards = [
        {
            name: "Visa",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"></path><path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"></path>
            </svg>,
        },
        {
            name: "MasterCard",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <linearGradient id="NgmlaCv2fU27PJOuiUvQVa_Sq0VNi1Afgmj_gr1" x1="20.375" x2="28.748" y1="1365.061" y2="1394.946" gradientTransform="translate(0 -1354)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#00b3ee"></stop><stop offset="1" stopColor="#0082d8"></stop></linearGradient><path fill="url(#NgmlaCv2fU27PJOuiUvQVa_Sq0VNi1Afgmj_gr1)" d="M43.125,9H4.875C3.287,9,2,10.287,2,11.875v24.25C2,37.713,3.287,39,4.875,39h38.25	C44.713,39,46,37.713,46,36.125v-24.25C46,10.287,44.713,9,43.125,9z"></path><circle cx="17.053" cy="24.053" r="10.053" fill="#cf1928"></circle><linearGradient id="NgmlaCv2fU27PJOuiUvQVb_Sq0VNi1Afgmj_gr2" x1="20" x2="40.107" y1="24.053" y2="24.053" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fede00"></stop><stop offset="1" stopColor="#ffd000"></stop></linearGradient><circle cx="30.053" cy="24.053" r="10.053" fill="url(#NgmlaCv2fU27PJOuiUvQVb_Sq0VNi1Afgmj_gr2)"></circle><path fill="#d97218" d="M20,24.053c0,3.072,1.382,5.818,3.553,7.662c2.172-1.844,3.553-4.59,3.553-7.662	s-1.382-5.818-3.553-7.662C21.382,18.235,20,20.981,20,24.053z"></path>
            </svg>,
        },
        {
            name: "American Express",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <path fill="#1976D2" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFF" d="M22.255 20l-2.113 4.683L18.039 20h-2.695v6.726L12.341 20h-2.274L7 26.981h1.815l.671-1.558h3.432l.682 1.558h3.465v-5.185l2.299 5.185h1.563l2.351-5.095v5.095H25V20H22.255zM10.135 23.915l1.026-2.44 1.066 2.44H10.135zM37.883 23.413L41 20.018h-2.217l-1.994 2.164L34.86 20H28v6.982h6.635l2.092-2.311L38.767 27h2.21L37.883 23.413zM33.728 25.516h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234.012 1.693 1.897L33.728 25.516z"></path>
            </svg>,
        },
    ]

    const payUpi = [
        {
            name: "GooglePay",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <path fill="#e64a19" d="M42.858,11.975c-4.546-2.624-10.359-1.065-12.985,3.481L23.25,26.927	c-1.916,3.312,0.551,4.47,3.301,6.119l6.372,3.678c2.158,1.245,4.914,0.506,6.158-1.649l6.807-11.789	C48.176,19.325,46.819,14.262,42.858,11.975z"></path><path fill="#fbc02d" d="M35.365,16.723l-6.372-3.678c-3.517-1.953-5.509-2.082-6.954,0.214l-9.398,16.275	c-2.624,4.543-1.062,10.353,3.481,12.971c3.961,2.287,9.024,0.93,11.311-3.031l9.578-16.59	C38.261,20.727,37.523,17.968,35.365,16.723z"></path><path fill="#43a047" d="M36.591,8.356l-4.476-2.585c-4.95-2.857-11.28-1.163-14.137,3.787L9.457,24.317	c-1.259,2.177-0.511,4.964,1.666,6.22l5.012,2.894c2.475,1.43,5.639,0.582,7.069-1.894l9.735-16.86	c2.017-3.492,6.481-4.689,9.974-2.672L36.591,8.356z"></path><path fill="#1e88e5" d="M19.189,13.781l-4.838-2.787c-2.158-1.242-4.914-0.506-6.158,1.646l-5.804,10.03	c-2.857,4.936-1.163,11.252,3.787,14.101l3.683,2.121l4.467,2.573l1.939,1.115c-3.442-2.304-4.535-6.92-2.43-10.555l1.503-2.596	l5.504-9.51C22.083,17.774,21.344,15.023,19.189,13.781z"></path>
            </svg>,
        },
        {
            name: "Paytm",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <path fill="#0d47a1" d="M5.446 18.01H.548c-.277 0-.502.167-.503.502L0 30.519c-.001.3.196.45.465.45.735 0 1.335 0 2.07 0C2.79 30.969 3 30.844 3 30.594 3 29.483 3 28.111 3 27l2.126.009c1.399-.092 2.335-.742 2.725-2.052.117-.393.14-.733.14-1.137l.11-2.862C7.999 18.946 6.949 18.181 5.446 18.01zM4.995 23.465C4.995 23.759 4.754 24 4.461 24H3v-3h1.461c.293 0 .534.24.534.535V23.465zM13.938 18h-3.423c-.26 0-.483.08-.483.351 0 .706 0 1.495 0 2.201C10.06 20.846 10.263 21 10.552 21h2.855c.594 0 .532.972 0 1H11.84C10.101 22 9 23.562 9 25.137c0 .42.005 1.406 0 1.863-.008.651-.014 1.311.112 1.899C9.336 29.939 10.235 31 11.597 31h4.228c.541 0 1.173-.474 1.173-1.101v-8.274C17.026 19.443 15.942 18.117 13.938 18zM14 27.55c0 .248-.202.45-.448.45h-1.105C12.201 28 12 27.798 12 27.55v-2.101C12 25.202 12.201 25 12.447 25h1.105C13.798 25 14 25.202 14 25.449V27.55zM18 18.594v5.608c.124 1.6 1.608 2.798 3.171 2.798h1.414c.597 0 .561.969 0 .969H19.49c-.339 0-.462.177-.462.476v2.152c0 .226.183.396.422.396h2.959c2.416 0 3.592-1.159 3.591-3.757v-8.84c0-.276-.175-.383-.342-.383h-2.302c-.224 0-.355.243-.355.422v5.218c0 .199-.111.316-.29.316H21.41c-.264 0-.409-.143-.409-.396v-5.058C21 18.218 20.88 18 20.552 18c-.778 0-1.442 0-2.22 0C18.067 18 18 18.263 18 18.594L18 18.594z"></path><path fill="#00adee" d="M27.038 20.569v-2.138c0-.237.194-.431.43-.431H28c1.368-.285 1.851-.62 2.688-1.522.514-.557.966-.704 1.298-.113L32 18h1.569C33.807 18 34 18.194 34 18.431v2.138C34 20.805 33.806 21 33.569 21H32v9.569C32 30.807 31.806 31 31.57 31h-2.14C29.193 31 29 30.807 29 30.569V21h-1.531C27.234 21 27.038 20.806 27.038 20.569L27.038 20.569zM42.991 30.465c0 .294-.244.535-.539.535h-1.91c-.297 0-.54-.241-.54-.535v-6.623-1.871c0-1.284-2.002-1.284-2.002 0v8.494C38 30.759 37.758 31 37.461 31H35.54C35.243 31 35 30.759 35 30.465V18.537C35 18.241 35.243 18 35.54 18h1.976c.297 0 .539.241.539.537v.292c1.32-1.266 3.302-.973 4.416.228 2.097-2.405 5.69-.262 5.523 2.375 0 2.916-.026 6.093-.026 9.033 0 .294-.244.535-.538.535h-1.891C45.242 31 45 30.759 45 30.465c0-2.786 0-5.701 0-8.44 0-1.307-2-1.37-2 0v8.44H42.991z"></path>
            </svg>,
        },
        {
            name: "Paypal",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <path fill="#1565C0" d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"></path><path fill="#039BE5" d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z"></path><path fill="#283593" d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z"></path>
            </svg>,
        },
    ]

    const handleCheckout = () => {
        document.getElementById('my_modal_2').showModal()   // showing up modal
        const upiServices = ["GooglePay", "Paytm", "Paypal"]

        if (!paymentMethod) {
            setModalMsg("Please select a payment method !")
            setIsPaymentMethodRight(false)
        } else if (!upiServices.includes(paymentMethod)) {
            setModalMsg("Only UPI payment available right now")
            setIsPaymentMethodRight(false)
        } else {
            setIsPaymentMethodRight(true)
            setModalMsg("")
        }
    }

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

                        <p>Choose payment method:</p>

                        <div>
                            <p>Pay via card (not available right now)</p>
                            <div className='flex space-x-2'>
                                {payCards.map(val =>
                                    <div key={val.name}
                                        onClick={() => setPaymentMethod(val.name)}
                                        className={`${paymentMethod === val.name && "outline"} rounded-full p-2`}>
                                        {val.icon}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <p>Pay via UPI</p>
                            <div className='flex space-x-2'>
                                {payUpi.map(val =>
                                    <div key={val.name}
                                        onClick={() => setPaymentMethod(val.name)}
                                        className={`${paymentMethod === val.name && "outline"} rounded-full p-2`}>
                                        {val.icon}
                                    </div>
                                )}
                            </div>
                        </div>

                        <button className='btn btn-success' onClick={handleCheckout}>Proceed to buy</button>
                    </div>
                </div>
            </section>

            <Modal msg={modalMsg} isPaymentMethodRight={isPaymentMethodRight} />
            <Footer />
        </>
    )
}

export default Checkout
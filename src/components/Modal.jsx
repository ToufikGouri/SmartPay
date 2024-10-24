import React, { useEffect, useState } from 'react'

const Modal = ({ msg, isPaymentMethodRight }) => {

    const [upiId, setUpiId] = useState("")
    useEffect(() => {
        if (!isPaymentMethodRight) setUpiId("")
    }, [msg])

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box min-h-40">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {
                        isPaymentMethodRight && <div className='flex flex-col items-center space-y-2 my-6'>
                            <input value={upiId} onChange={(e) => setUpiId(e.target.value)} type="text" placeholder="Enter UPI Id" className="input input-bordered w-full max-w-xs" />
                            <button className='w-full max-w-xs btn btn-outline' onClick={() => upiId && alert("Your order is completed, Thank You !")}>Submit</button>
                        </div>
                    }
                    <h3 className="font-bold text-lg">{msg}</h3>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default Modal
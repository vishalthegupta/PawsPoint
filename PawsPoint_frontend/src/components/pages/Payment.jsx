import React, { useEffect, useState } from 'react'
import Wrapper from '../Wrapper/wrapper'
import { useNavigate, useParams } from 'react-router-dom'
import { backend_url } from '../../utils/Config'
import { useAuth } from '../../context/AuthContext'
import PaymentImage from '../../images/payment.png'

const Payment = () => {
    const { pID } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [discount,setDiscount]=useState(20)
    const [error, setError] = useState(null)
    const [address, setAddress] = useState('')
    const [selectedPayment, setSelectedPayment] = useState('cash');
    const [showResellPrompt, setShowResellPrompt] = useState(false);
    const [auth] = useAuth()
    const navigate=useNavigate()

    const total_price=product?.price-(((product?.price)*discount)/100)

    // console.log(total_price)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${backend_url}/api/v1/products/p/${pID}`)
                if (!response.ok) throw new Error('Product not found')
                const data = await response.json()
                setProduct(data.data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [pID])

    if (loading) return <Wrapper><div className="text-center py-8">Loading...</div></Wrapper>
    if (error) return <Wrapper><div className="text-center py-8 text-red-500">{error}</div></Wrapper>

    return (
        <Wrapper current={"Payment Page"}>
            <div className='w-full bg-night flex flex-col p-2'>
 
                 <div className='w-full flex flex-row justify-center'>
                  <img src={PaymentImage} className='w-full md:w-1/2 h-40 object-cover rounded-lg' />
                 </div>

           <div className="w-full md:w-1/2 mx-auto bg-green-200 p-4 font-sans rounded-md">
      <h1 className="text-2xl font-bold mb-6">Select Payment Method</h1>

      <div className="space-y-4 mb-8">
        {/* Cash on Delivery */}
        <div 
          className={`p-4 border-2 rounded-lg cursor-pointer ${selectedPayment === 'cash' ? 'border-amber-500 bg-amber-300' : 'border-gray-400'}`}
          onClick={() => setSelectedPayment('cash')}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Cash on Delivery</p>
            </div>
            <p className="text-lg font-bold">₹{product?.price}</p>
          </div>
        </div>

        {/* Pay Online */}
        <div 
          className={`p-4 border-2 rounded-lg cursor-pointer ${selectedPayment === 'online' ? 'border-amber-500 bg-amber-300' : 'border-gray-400'}`}
          onClick={() => setSelectedPayment('online')}
        >
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="font-semibold">Pay Online</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">₹{product?.price}</p>
              <p className="text-green-600 text-sm">Save $9</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">Extra discount with bank offers</p>
        </div>
      </div>


      {/* Price Details */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Price Details (1 Items)</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Total Product Price</span>
            <span>+ ₹{product?.price}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Discounts</span>
            <span className="text-green-600">- {((product?.price)*discount)/100}</span>
          </div>
        </div>
        <div className="border-t mt-4 pt-4 flex justify-between font-bold">
          <span>Order Total</span>
          <span>₹{total_price}</span>
        </div>
      </div>

      {/* Discount Message */}
      <p className="text-green-600 mb-6">Yay! Your total discount is {((product?.price)*discount)/100}</p>

      {/* Place Order Button */}
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        {
            selectedPayment === 'online' ? "Pay Now" : "Place Order"
        }
      </button>
    </div>
    </div>
        </Wrapper>
    )
}

export default Payment
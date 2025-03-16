import React, { useEffect, useState } from 'react'
import Wrapper from '../Wrapper/wrapper'
import { useNavigate, useParams } from 'react-router-dom'
import { backend_url } from '../../utils/Config'
import { useAuth } from '../../context/AuthContext'
import Review from '../../images/review.png'

const OrderPage = () => {
    const { pID } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [discount,setDiscount]=useState(20)
    const [error, setError] = useState(null)
    const [address, setAddress] = useState('')
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
        <Wrapper>
            <div className=" mx-auto w-full px-4 pb-8 bg-night">

                <div className='w-full flex flex-row justify-center'>
                 <img src={Review} className='w-full md:w-1/2 h-40 object-cover rounded-lg' />
                </div>
                <div className=" flex flex-col md:flex-row gap-8 bg-night">
                    {/* Left Side - Product Image */}
                    <div className="md:w-1/3">
                        <div className="bg-yellow-50 p-4 content-center rounded-lg shadow-lg shadow-amber-400">
                            <img
                                src={product.product_Images[0]}
                                alt={product.name}
                                className="w-full h-60 object-contain rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Right Side - Product Details */}
                    <div className="md:w-1/2 space-y-6 bg-night">
                        <h1 className="text-3xl font-bold text-amber-400">{product.name}</h1>
                        <div className="text-lg font-semibold text-white">
                            Brand: <span className="text-blue-600">{product.brand}</span>
                        </div>
                        <div className="text-2xl font-bold text-green-400">
                            ₹{product.price}
                        </div>

                        <div className='w-full p-2 flex flex-col'>
                       <div className='flex flex-row justify-between'>
                          <h1 className='text-gray-200'>Product Price </h1>
                          <h1 className='text-green-400'>{product?.price}/-</h1>
                       </div>
                       <div className='flex flex-row justify-between'>
                          <h1 className='text-gray-200'>Discount </h1>
                          <h1 className='text-green-400'>-{((product?.price)*discount)/100}/-</h1>
                       </div>
                       <div className='flex flex-row justify-between border-t-2 border-teal-200'>
                          <h1 className='text-gray-200'>Total </h1>
                          <h1 className='text-green-400 font-extrabold'>-------- ₹{total_price}</h1>
                       </div>
                        </div>


                        
                        {/* form details  */}
                        <div className='w-full flex-col justify-start items-center'>
                         <h1 className='text-white text-xl font-bold' >Fill the details to continue shopping....</h1>
                        {/* Address Section */}
                        <div>
                        <label for='house' className='text-white w-full'>House/Flat No</label>
                        <input type='text' placeholder='Enter House/Flat no' id='house' className="text-black w-full" />
                        </div>

                        <div>
                        <label for='Street' className='text-white w-full'>Street name</label>
                        <input type='text' placeholder='Enter your street name' id='Street' className="text-black w-full" />
                        </div>

                        <div>
                        <label for='landmark' className='text-white w-full'>Landmark</label>
                        <input type='text' placeholder='Enter Land mark' id='landmark' className="text-black w-full" />
                        </div>

                        <div>
                        <label for='add' className='text-white w-full'>Full Address</label>
                        <input type='text' placeholder='Enter Address' id='add' className="text-black w-full" />
                        </div>
                        
                        <div>
                        <label for='pin' className='text-white w-full'>Pincode</label>
                        <input type='number' placeholder='Enter Pincode' id='pin' className="text-black w-full" />
                        </div>
                   
                        
                        </div>

                        



                        {/* Action Buttons */}
                        {
                            auth?.user ?
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-200 transition-colors flex-1"
                                    onClick={()=>navigate(`/pay/${pID}`)}
                                    >
                                        Select Payment Method 
                                    </button>
                                </div> :
                                <div>
                                    <h1>You have to login before continue</h1>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default OrderPage
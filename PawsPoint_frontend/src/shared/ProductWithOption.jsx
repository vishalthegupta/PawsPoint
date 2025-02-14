import React from 'react'
import { Link } from 'react-router-dom'

const ProductWithOption = ({pID,urls,product_name,price}) => {
  return (
        <Link to={`/p/${pID}`} >
        <div className='bg-black h-60 w-36 md:h-70 md:w-50 p-1 flex flex-col rounded-md hover:shadow-[0px_6px_32px_0px_#f7fafc] hover:animate-pulse'>
        <img src={urls} className='h-2/4'></img>
        <h1 className='text-amber-400  font-bold text-sm'>{product_name.length>14? product_name.substring(0,14)+"....":product_name}</h1>
        <h2 className='text-green-400'>Rs.{price}</h2>
        <button title="Save" class="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2">
  <span class="text-sm text-lime-400 font-bold pr-1">Buy Now</span>


</button>

<button
  class="bg-purple-500 m-1 text-white px-4 py-0.5 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
>
 Add to cart
</button>
        </div>
        </Link>
  )
}

export default ProductWithOption
import React, { useEffect, useState } from 'react'
import Wrapper from '../Wrapper/wrapper'
import DropDownHeader from '../../shared/DropDownHeader'
import axios from 'axios'
import { backend_url } from '../../utils/Config'
import ProductWithOption from '../../shared/ProductWithOption'
import ProductCard from '../../shared/ProductCard'

const Shop = () => {
   const [products,setProducts]=useState([])

   const getAllProducts=async()=>{
    try{
      const response=await axios.get(`${backend_url}/api/v1/products`)
      console.log(response.data.data)
      setProducts(response.data.data)
    }catch(error){
        console.log(error)
    }
   }

   useEffect(()=>{
    getAllProducts()
   },[])

    return (
        <Wrapper current={'shop'}>
            <div className='w-full flex flex-col p-2 bg-night'>
                <img src='https://supertails.com/cdn/shop/files/Big_sale_562b1227-ffb9-48e4-96fb-c5c866b149b9_1600x.png?v=1737615716' className='w-full h-64' />


                {/* product and filter section  */}
                <div className='flex flex-col md:flex-row w-full bg-yellow-200'>
                    {/* ======filter and Price Range========== */}
                    <div className='w-full md:w-1/5 bg-gray-800'>
                        <ul className="flex flex-col w-full justify-center items-center md:justify-start md:items-start gap-2">

                            <li>
                                <details className="group">
                                    <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                                        <span className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 72 72"><path fill="#facf55" d="M36 10.979H11v5.042L31.5 34.25v21.771l9 4.958V34.25L61 16.021v-5.042z"/><path fill="#f0295d" d="m36 57.193l3.268 1.682V33.908l20.5-18.325v-3.412h-10.25v3.854l-13.5 16.833z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36 10.979H11v5.042L31.5 34.25v21.771l9 4.958V34.25L61 16.021v-5.042z"/></svg>
                                            <span className='text-amber-300'>
                                              Categories
                                            </span>
                                        </span>
                                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                            </path>
                                        </svg>
                                    </summary>
                                    <article className="px-4 pb-4 bg-white">
                                        <ul className="flex flex-col gap-1 pl-2">
                                            <li>
                                                <label className="label cursor-pointer flex flex-row justify-between items-center hover:bg-slate-400">
                                                    <span className="label-text">Remember me</span>
                                                    <input type="checkbox" defaultChecked className="checkbox" />
                                                </label>
                                            </li>
                                            <li>
                                                <label className="label cursor-pointer flex flex-row justify-between items-center hover:bg-slate-400">
                                                    <span className="label-text">Remember me</span>
                                                    <input type="checkbox" defaultChecked className="checkbox" />
                                                </label>
                                            </li>
                                            <li>   
                                               <label className="label cursor-pointer flex flex-row justify-between items-center hover:bg-slate-400">
                                                <span className="label-text">Remember me</span>
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                            </label></li>
                                        </ul>
                                    </article>
                                </details>
                            </li>
                            <li>
                                <details className="group">
                                    <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                                        <span className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 14 4"><path fill="#edc128" d="M2.31 2.5H.5C.22 2.5 0 2.28 0 2s.22-.5.5-.5h1.81c-.04.16-.07.33-.07.5s.03.34.07.5m11.19-1H6.17c.04.16.07.33.07.5s-.03.34-.07.5h7.33c.28 0 .5-.22.5-.5s-.22-.5-.5-.5m-7.33 1c-.22.86-1 1.5-1.93 1.5s-1.71-.64-1.93-1.5c-.04-.16-.07-.33-.07-.5s.03-.34.07-.5C2.53.64 3.31 0 4.24 0s1.71.64 1.93 1.5c.04.16.07.33.07.5s-.03.34-.07.5M5.24 2c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1"/></svg>
                                            <span className='text-amber-300'>
                                                Price range
                                            </span>
                                        </span>
                                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                            </path>
                                        </svg>
                                    </summary>
                                    <article className="px-4 pb-4 bg-white">
                                        <ul className="flex flex-col gap-1 pl-2">
                                            <li><a href>Course title</a></li>
                                            <li><a href>Course title</a></li>
                                            <li><a href>Course title</a></li>
                                        </ul>
                                    </article>
                                </details>
                            </li>
                        </ul>
                    </div>
                    {/* =======Products======== */}
                    <div className='w-full md:h-4/5 flex flex-col  bg-night'>
                    <h1 className='text-amber-300 text-center m-3'>Happy Cuddle</h1>

                    <div className='w-full flex flex-row flex-wrap gap-5 bg-night p-3 justify-evenly'>
    {
        products?.length > 0 ? (
            products.map((product, id) => (
                <ProductWithOption key={id} pID={product?._id} urls={product?.product_Images[0]} product_name={product?.name} price={product?.price}/>
            ))
        ) : (
            <h1>No Product Available</h1>
        )
    }
    </div>
</div>


                </div>
            </div>

        </Wrapper>
    )
}

export default Shop
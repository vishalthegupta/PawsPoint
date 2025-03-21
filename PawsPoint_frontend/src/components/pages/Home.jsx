import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../shared/Navbar'
import Wrapper from '../Wrapper/wrapper'
import HeaderCarousel from '../../shared/HeaderCarousel'
import CategoriesCard from '../../shared/CategoriesCard'
import ProductCard from '../../shared/ProductCard'
import { useAuth } from '../../context/AuthContext'

const Home = () => {
  const navigate=useNavigate()
  const [auth,setAuth]=useAuth()
  return (
    <>
    <Wrapper current={'home'}>
    <div className='text-2xl cursor-custom w-full h-auto bg-gray-800'>
    
      {/* <div className='w-full h-auto'>
        <img src='https://supertails.com/cdn/shop/files/Frame_1405176767-min_6855ee30-6ea4-48ef-96f0-13d809ed6f4d_1600x.png?v=1731579835'></img>
      </div> */}
      {/* corousal */}
      <HeaderCarousel/>
      {/* corousal end */}



      {/* popular categories  */}
     <div className='flex flex-col w-full h-fit my-6 bg-gray-900 py-8 px-20'>
      <div className='flex justify-center items-center'>
        <h1 className='font-extrabold font-title_font tracking-wider text-3xl text-amber-400 drop-shadow-[0px_0px_20px_rgba(192,33,110,1)] p-3'>
          Popular Categories
        </h1>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-6 md:gap-8'>
        <CategoriesCard categoryName={"Dogs"} ur={'https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D'} />
        <CategoriesCard categoryName={"Cats"} ur={'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHN8ZW58MHx8MHx8fDA%3D'} />
        <CategoriesCard categoryName={"Rabbits"} ur={'https://media.istockphoto.com/id/173893247/photo/rabbit.webp?a=1&b=1&s=612x612&w=0&k=20&c=lLEYLC7Tlkb2PyIDda5Zi2kmpaRN8PmCSfuYDCJe2lY='} />
        <CategoriesCard categoryName={"Fishes"} ur={'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D'} />
        <CategoriesCard categoryName={"Birds"} ur={'https://plus.unsplash.com/premium_photo-1664543649513-c21242431e6e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxCaXJkc3xlbnwwfHwwfHx8MA%3D%3D'} />
        <CategoriesCard categoryName={"Reptiles"} ur={'https://media.istockphoto.com/id/1081594106/photo/green-iguana.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqkbdhmpmkq3-UjzXZVp2ED2SaMsx9CNMD-DSwBl9EU='} />
      </div>
    </div>
      {/* popular categories end */}



     {/* bank offer start  */}
      <div className='w-full px-5 my-2'>
        <img src='https://supertails.com/cdn/shop/files/Homepage_desk-min_34987ee0-64bf-417a-b4f8-9af815c22588.png?v=1732992049'></img>
      </div>
     {/* bank offer end  */}



     {/* Popular products  */}
     <div className='flex flex-col w-full h-fit my-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-10'>
      <div className='flex justify-center items-center mb-6'>
        <h1 className='font-extrabold font-title_font tracking-wider text-3xl text-yellow-300 drop-shadow-lg'>
         Best Selling Products
        </h1>
      </div>
      <div className='flex flex-wrap justify-center gap-8 md:gap-10'>
        <ProductCard 
          ur={'https://supertails.com/cdn/shop/files/Frame_1405178184-min.png?v=1732537085'} 
          title="Dog Toy" 
        />
        <ProductCard 
          ur={'https://supertails.com/cdn/shop/files/Frame_1405180467-min.png?v=1733377612'} 
          title="Cat Food" 
        />
        <ProductCard 
          ur={'https://supertails.com/cdn/shop/files/Frame_1405180047.png?v=1733205957'} 
          title="Bird Cage" 
        />
        <ProductCard 
          ur={'https://supertails.com/cdn/shop/files/Frame_1405178183-min.png?v=1732537526'} 
          title="Pet Bed" 
        />
        <ProductCard 
          ur={'https://supertails.com/cdn/shop/files/Frame_1405180472-min_800x.png?v=1733379910'} 
          title="Rabbit Toy" 
        />
        <ProductCard 
          ur={'https://supertails.com/cdn/shop/files/SKATRSTOYS_19.png?v=1714715536'} 
          title="Fish Tank" 
        />
      </div>
    </div>
     {/* Popular products end  */}



    </div>
    {/* <button onClick={()=>navigate('/')}>Go back</button> */}
    </Wrapper>
    </>
  )
}

export default Home
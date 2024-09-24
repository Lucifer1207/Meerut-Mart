import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod]=useState("cod");
  const {navigate}=useContext(ShopContext);



  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-[500px] sm:max-w-[480p]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='FirstName' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='LastName' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="email" placeholder='Email Address' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='Street' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='State' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
        </div><div className='flex gap-3'>
          <input type="number" placeholder='ZipCode' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Country' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="number" placeholder='Phone' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHODS'} />
          {/* Payment Methods Selction/Options */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=> setMethod("stripe")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer h-6'>
              <p className={`min-w-3.5 border h-3.5 rounded-full ${method === 'stripe' ? 'bg-black':''}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=> setMethod("razorpay")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer h-6'>
              <p className={`min-w-3.5 border h-3.5 rounded-full ${method === 'razorpay' ? 'bg-black':''}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=> setMethod("cod")} className='flex items-center gap-3 border  p-2 px-3 cursor-pointer h-6'>
              <p className={`min-w-3.5 border h-3.5 rounded-full ${method === 'cod' ? 'bg-black':''}`}></p>
              <p className='text-gray-600 text-xs font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button className='bg-black text-white px-16 py-3 text-sm rounded-md mr-40' onClick={()=> navigate('/orders')}>Place Order</button>
          </div>



        </div>
      </div>
    </div>
  )
}

export default PlaceOrder

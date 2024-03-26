import React from 'react'

const Page1 = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 px-12 py-6 mt-[4vw] '>
      <div className="w-1/2 h-[58%] bg-red-500   ">

        <div className=" font-bold tracking-tight ">
        <h1 className=" md:text-9xl text-5xl  font-custom ">WE CREATE</h1>
        </div>

        <div className=" font-bold tracking-tight flex  gap-3 items-center ">
            <img  className='h-23 w-28 object-cover px-1  rounded-[10px]'    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
            <h1 className='md:text-9xl text-5xl  font-custom leading-[4vw]'>EYE-OPENING</h1>
        </div>
        <div className="font-bold tracking-tight  ">
            <h1 className='md:text-9xl text-5xl font-custom '>PRESENTATIONS</h1>
        </div>
        
      </div>
     
    </div>
  )
}

export default Page1

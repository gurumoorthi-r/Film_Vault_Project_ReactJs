import React from 'react'

function Pagination({pageNo,goToPrevPage,goToNextPage}) {
  return (
    <div className='bg-gray-500/60 flex gap-4 justify-center mt-4 p-2' >
        <div onClick={goToPrevPage} className='hover:bg-white hover:rounded-full w-[45px] text-center {pageNo!=1?hover:cursor-pointer} '>
        <i class="bi bi-arrow-left"></i>
        </div>
        <div className='font-semibold'>
            {pageNo}
        </div>
        <div onClick={goToNextPage} className='hover:bg-white hover:rounded-full w-[45px] text-center hover:cursor-pointer'>
        <i class="bi bi-arrow-right"></i>
        </div>
    </div>
  )
}

export default Pagination
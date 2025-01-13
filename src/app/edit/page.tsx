import React from 'react'
import Headers from '../components/utils/headers/Headers'
import Box from '../components/box/Box'

const page = () => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
        <div className=" flex  mt-20 flex-col gap-7">
          <div className="flex mx-20">
            <Headers title="EDIT"/>
          </div>
        <div className="flex justify-center items-center">
            <Box/>  
        </div>
        </div>
    </div>
  )
}

export default page
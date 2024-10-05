import React, { useContext, useEffect } from 'react'
import { LoadingContext } from '../context'
import { useSelector } from 'react-redux'

const Loading = () => {
    // const { loading, setLoading } = useContext(LoadingContext)
    // const loading = useSelector((state) => state.auth.isLoading)


    return (
        <>
            {/* {
                loading ? */}
            <div className='bg-primary-loading-bg z-40 w-screen h-screen fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm'>
                <div className='flex flex-col justify-center items-center gap-2 fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50  '>
                    <div className='w-16 h-16 rounded-full border-[10px] border-white border-t-[10px] border-t-blue-500 animate-spin'>

                    </div>
                    {/* icon ends  */}
                    <div className='text-lg lg:text-3xl font-bold'>
                        Loading . . .
                    </div>
                </div>
            </div>
            {/* :
                    <div className='hidden'>

                    </div>
            } */}
        </>
    )
}

export default Loading
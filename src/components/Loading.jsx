import React, { useContext, useEffect } from 'react'
import { LoadingContext } from '../context'
import { useDispatch, useSelector } from 'react-redux'
import { stopLoading } from '../app/features/authSlice'

const Loading = () => {

    const loading = useSelector((state) => state.auth.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(stopLoading())
        }, 800);
        return () => clearTimeout(timer)
    }, [loading])

    if (loading) {
        return (
            <>
                <div className='bg-primary-loading-bg z-40 w-screen h-screen fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm'>
                    <div className='flex flex-col justify-center items-center gap-2 fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50  '>
                        <div className='w-16 h-16 rounded-full border-[10px] border-white border-t-[10px] border-t-blue-500 animate-spin-fast'>

                        </div>
                        {/* icon ends  */}
                        <div className='text-lg lg:text-3xl font-bold'>
                            Loading . . .
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Loading
import React, { useState } from 'react'
import LoadingContext from './LoadingContext'

const LoadingContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}
export default LoadingContextProvider
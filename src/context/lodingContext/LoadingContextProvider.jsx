import React, { useState } from 'react'
import LoadingContext from './LoadingContext'

const LoadingContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}
export default LoadingContextProvider
import React, { useState } from 'react'

const Input = ({ id, name, label, type, placeholder, value, setValue, index, className }) => {
    // const [value, setValue] = useState()
    return (

        <label
            // htmlFor={name}
            className={`block ${className}`}

        >
            <span className='mb-1 block'>{label}</span>
            {
                type === 'textarea'
                    ?
                    <textarea
                        id={id}
                        name={name}
                        type={type}
                        value={value}
                        required
                        key={index}
                        placeholder={placeholder}
                        rows={2}
                        onChange={(e) => setValue(e.target.value)}
                        className='w-full px-4 py-2 dark:bg-primarydark dark:text-gray-200 outline outline-1 outline-gray-300 dark:outline-gray-700 focus-visible:outline-primary focus-visible:outline-double dark:focus-visible:outline-primary dark:focus-visible:outline-double rounded-md'
                    />
                    :
                    <input
                        id={id}
                        name={name}
                        type={type}
                        value={value}
                        required
                        key={index}
                        placeholder={placeholder}
                        onChange={(e) => setValue(e.target.value)}
                        className='w-full px-4 py-2 dark:bg-primarydark dark:text-gray-200 outline outline-1 outline-gray-300 dark:outline-gray-700 focus-visible:outline-primary focus-visible:outline-double dark:focus-visible:outline-primary dark:focus-visible:outline-double  rounded-md'
                    />
            }

        </label>

    )
}

export default Input
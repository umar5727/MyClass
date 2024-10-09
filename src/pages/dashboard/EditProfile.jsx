// import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
// import { baseUrl } from '../../../../../constant/constant'
import toast from 'react-hot-toast'
import { base_url } from '../../constants/constant'
import { login } from '../../app/features/authSlice'
// images import 
import dummyUser from '/user/user-dummy.webp'


const EditProfile = () => {
    const userData = useSelector((state) => state.auth.userData)
    const dispatch = useDispatch()
    // const [avatar, setAvatar] = useState(userData?.avatar)
    const [updatedUser, setUpdatedUser] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [toggleName, setToggleName] = useState(false)
    const [toggleEmail, setToggleEmail] = useState(false)
    const [toggleContact, setToggleContact] = useState(false)
    const [toggleImage, setToggleImage] = useState(false)
    const [image, setImage] = useState(null)
    console.log('user data redux ', userData)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = userData._id
        const fullName = firstName + " " + lastName
        const accessToken = localStorage.getItem('accessToken')
        try {
            if (firstName || lastName || email || contactNumber || image) {
                const data = { userId, fullName, email, contactNumber, profileImage: image }
                console.log("image:", image)
                const formdata = new FormData();
                formdata.append("userId", userId);
                formdata.append("accessToken", accessToken);
                if (image) {
                    formdata.append("avatar", image);
                }
                if (fullName) {
                    formdata.append("fullName", fullName);
                }
                if (email) {
                    formdata.append("email", email);
                }
                if (contactNumber) {
                    formdata.append("contactNumber", contactNumber);
                }

                const res = await fetch(`${base_url}/users/updateProfile`, {
                    mode: "cors",
                    method: 'POST',
                    credentials: "include",
                    body: formdata
                })
                if (res.ok) {
                    const response = await res.json()
                    console.log('response: ', response)
                    console.log('res data : ', response.user)
                    dispatch(login({ userData: response.user })); //dispatching
                    sessionStorage.setItem('user', JSON.stringify(response.user))
                    toast.success('update Success');
                    setUpdatedUser(response.user)

                    setContactNumber('')
                    setFirstName('')
                    setLastName('')
                    setImage('')
                    setEmail('')
                    setToggleName(false)
                    setToggleEmail(false)
                    setToggleContact(false)
                    setToggleImage(false)

                }
                else {
                    toast.error("Can't update right now ");

                }
            }
        } catch (error) {
            toast.error("Can't update right now ");
            console.log(error)
        }

    }



    return (
        <div >

            <div>
                <div className='flex flex-col gap-10 relative'>
                    <form onSubmit={handleSubmit} className='text-black absolute right-0 top-0 w-28 '>
                        <div className='w-full h-full flex flex-col gap-[0.5rem]'>
                            <div className='w-28 !h-28 overflow-hidden rounded-md'>
                                <label
                                    htmlFor="profileImage"
                                    className='group/label relative w-28 h-28 cursor-pointer'
                                    onClick={() => setToggleImage(true)}
                                >
                                    {/* filter starts  */}
                                    <div className='opacity-0 group-hover/label:opacity-100 duration-300 absolute top-0 left-0 bg-black/40 w-full h-28 flex justify-center items-center'>
                                        <div className='text-white text-lg text-center w-fit px-4 py-1 font-bold bg-primary-dark rounded-md'>Edit</div>
                                    </div>
                                    {/* filter ends  */}
                                    <input
                                        type="file"
                                        id='profileImage'
                                        className='hidden'
                                        onChange={(e) => e.target.value ? setImage(e.target.files[0]) : ''}
                                    />
                                    {image
                                        ?
                                        <img src={URL.createObjectURL(image)} alt="profile" className='w-full h-full hover:scale-125 duration-300' />
                                        :
                                        <div className=' bg-gray-100 aspect-square  duration-300 hover:bg-white hover:text-gray-500'>
                                            <img src={userData?.avatar || dummyUser} alt="dummy" className='w-full ' />
                                        </div>
                                    }
                                </label>
                            </div>
                            <div className={`w-full ${toggleImage ? "block" : 'hidden'} flex flex-col gap-[0.5rem]`}>
                                <button
                                    type='submit'
                                    className={` w-full bg-blue-700 px-10 py-[.3rem] rounded-md text-lg text-white font-medium uppercase`}
                                    onClick={() => setToggleImage(false)}
                                >
                                    Save</button>
                                <button
                                    type='reset'
                                    className={`text-blue-500 font-bold bg-transparent`}
                                    onClick={() => { setToggleImage(false); setImage(null) }}
                                >Cancel</button>
                            </div>
                        </div>
                    </form>
                    {/* image section ends  */}

                    <div className='flex flex-col gap-[1rem]'>
                        <div className='flex gap-[26px] items-center'>
                            <h4>Personal Information</h4>
                            <button
                                className={`${toggleName ? "hidden" : 'block'} text-blue-500 font-bold bg-transparent`}
                                onClick={() => { setToggleName(!toggleName); setFirstName(userData?.fullName?.split(' ')[0]); setLastName(userData?.fullName?.split(' ')[1]) }}
                            >Edit</button>
                            <button
                                type='reset'
                                className={`${toggleName ? "block" : 'hidden'} text-blue-500 font-bold bg-transparent`}
                                onClick={() => { setToggleName(!toggleName); setFirstName(''); setLastName('') }}
                            >
                                Cancel
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className=' flex gap-[1.5rem]'>
                                <input
                                    type="text"
                                    name='firstName'
                                    placeholder='First Name'
                                    className='h-fit text-lg px-[20px] py-[10px] rounded-md  outline-none focus-visible:outline-blue-700 focus-visible:outline-[2px] outline-offset-0 text-black capitalize disabled:cursor-not-allowed disabled:bg-gray-200 dark:disabled:bg-[rgba(239,239,239,0.3)] outline-1 outline-gray-400 dark:outline-[rgba(239,239,239,0.3)] dark:focus-visible:outline-blue-700 dark:focus-visible:outline-[2px]'
                                    value={toggleName ? firstName : userData?.fullName?.split(' ')[0]}
                                    disabled={!toggleName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    name='lastName'
                                    placeholder='Last Name'
                                    className='h-fit text-lg px-[20px] py-[10px] rounded-md  outline-none focus-visible:outline-blue-700 focus-visible:outline-[2px] outline-offset-0 text-black capitalize disabled:cursor-not-allowed disabled:bg-gray-200 dark:disabled:bg-[rgba(239,239,239,0.3)] outline-1 outline-gray-400 dark:outline-[rgba(239,239,239,0.3)] dark:focus-visible:outline-blue-700 dark:focus-visible:outline-[2px]'
                                    value={toggleName ? lastName : userData?.fullName?.split(' ')[1]}
                                    onChange={(e) => setLastName(e.target.value)}
                                    disabled={!toggleName}
                                />
                                <button type='submit' className={`${toggleName ? "block" : 'hidden'} bg-blue-700 px-10 py-[.5rem] rounded-md text-lg text-white font-medium uppercase`}>Save</button>
                            </div>
                        </form>

                    </div>
                    {/* personal info ends  */}

                    <div className='flex flex-col gap-[1rem]'>
                        <div className='flex gap-[26px] items-center'>
                            <h4>Email Address</h4>
                            <button
                                className={`${toggleEmail ? "hidden" : 'block'} text-blue-500 font-bold bg-transparent`}
                                onClick={() => setToggleEmail(!toggleEmail)}
                            >Edit</button>
                            <button
                                className={`${toggleEmail ? "block" : 'hidden'} text-blue-500 font-bold bg-transparent`}
                                onClick={() => { setToggleEmail(!toggleEmail); setEmail('') }}
                            >Cancel</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='flex gap-10'>
                                <input
                                    type="text"
                                    name='email'
                                    placeholder='Email'
                                    className='text-lg px-[20px] py-[10px] rounded-md  outline-none focus-visible:outline-blue-700 focus-visible:outline-[2px] outline-offset-0 text-black disabled:cursor-not-allowed disabled:bg-gray-200 dark:disabled:bg-[rgba(239,239,239,0.3)] outline-1 outline-gray-400 dark:outline-[rgba(239,239,239,0.3)] dark:focus-visible:outline-blue-700 dark:focus-visible:outline-[2px]'
                                    value={toggleEmail ? email : userData.email}
                                    disabled={!toggleEmail}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type='submit' className={`${toggleEmail ? "block" : 'hidden'} bg-blue-700 px-10 py-[.5rem] rounded-md text-lg text-white font-medium uppercase`}>Save</button>
                            </div>
                        </form>
                    </div>
                    {/* email ends  */}
                    <div className='flex flex-col gap-[1rem]'>
                        <div className='flex gap-[26px] items-center'>
                            <h4>Mobile Number</h4>
                            <button
                                className={`${toggleContact ? "hidden" : 'block'} text-blue-500 font-bold bg-transparent`}
                                onClick={() => setToggleContact(!toggleContact)}
                            >Edit</button>
                            <button
                                className={`${toggleContact ? "block" : 'hidden'} text-blue-500 font-bold bg-transparent`}
                                onClick={() => { setToggleContact(!toggleContact); setContactNumber('') }}
                            >Cancel</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='flex gap-10'>
                                <input
                                    type="tel"
                                    name='number'
                                    placeholder='Contact Number'
                                    className='removeArrow text-lg px-[20px] py-[10px] rounded-md  outline-none focus-visible:outline-blue-700 focus-visible:outline-[2px] outline-offset-0 text-black disabled:cursor-not-allowed disabled:bg-gray-200 dark:disabled:bg-[rgba(239,239,239,0.3)] outline-1 outline-gray-400 dark:outline-[rgba(239,239,239,0.3)] dark:focus-visible:outline-blue-700 dark:focus-visible:outline-[2px]'
                                    maxLength={10}
                                    value={toggleContact ? contactNumber : userData.contactNumber}
                                    disabled={!toggleContact}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                />
                                <button type='submit' className={`${toggleContact ? "block" : 'hidden'} bg-blue-700 px-10 py-[.5rem] rounded-md text-lg text-white font-medium uppercase`}>Save</button>
                            </div>
                        </form>
                    </div>
                    {/* email ends  */}




                </div>
            </div>

        </div>
    )
}

export default EditProfile
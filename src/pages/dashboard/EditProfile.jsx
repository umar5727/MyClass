// import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
// import { baseUrl } from '../../../../../constant/constant'
import toast from 'react-hot-toast'
import { base_url } from '../../constants/constant'

const EditProfile = () => {
    const userData = useSelector((state) => state.auth.userData)
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = updatedUser._id
        const fullName = firstName + " " + lastName

        try {
            if (firstName || lastName || email || contactNumber || image) {
                const data = { userId, fullName, email, contactNumber, profileImage: image }
                console.log("image:", image)
                const formdata = new FormData();
                formdata.append("userId", userId);
                if (image) {
                    formdata.append("profileImage", image);
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

                const res = await fetch(`${baseUrl}/users/updatePersonalInfo`, {
                    method: 'POST',
                    body: formdata

                })
                if (res.ok) {

                    const response = await res.json()
                    console.log('response: ', response)
                    toast.success('update Success');
                    setUpdatedUser(response.updatedUser)
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
                    toast.error("Can't update right now");

                }
            }
        } catch (error) {
            toast.error("Can't update right now");

        }

    }

    // useEffect(() => {
    //     const fetchuser = async () => {
    //         try {
    //             const userId = sessionStorage.getItem('user_id')
    //             const data = { userId }

    //             const res = await fetch(`${base_url}/users/getUser`, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify(data)
    //             })
    //             const response = await res.json()
    //             if (!res.ok) {
    //                 console.error(' error fetching user : ', response.message)
    //                 return response.message
    //             }
    //             const fullName = response.user.fullName.split(' ')
    //             setUpdatedUser(response.user)

    //         } catch (error) {
    //             console.error('error fetching user ', error)
    //         }
    //     }
    //     fetchuser()
    //     console.log("updated user ", updatedUser)
    // }, [!updatedUser])

    return (
        <div >

            <div>
                <div className='flex flex-col gap-10 relative'>
                    <form onSubmit={handleSubmit} className='text-black absolute right-0 top-0 w-28 '>
                        <div className={`  flex flex-col gap-[0.5rem]`}>
                            <div className='w-full overflow-hidden rounded-md'>
                                <label
                                    htmlFor="profileImage"
                                    className='w-full aspect-square cursor-pointer'
                                    onClick={() => setToggleImage(true)}
                                >
                                    <input
                                        type="file"
                                        id='profileImage'
                                        className='hidden'
                                        onChange={(e) => e.target.value ? setImage(e.target.files[0]) : ''}
                                    />
                                    {image
                                        ?
                                        <img src={URL.createObjectURL(image)} alt="profile" className='w-full aspect-square hover:scale-125 duration-300' />
                                        :
                                        <div className=' bg-gray-100 aspect-square  duration-300 hover:bg-white hover:text-gray-500'>
                                            <img src={updatedUser.profileImage || '../user/user-dummy.webp'} alt="dummy" className='w-full ' />
                                        </div>
                                    }
                                </label>
                            </div>
                            <div className={`w-full ${toggleImage ? "block" : 'hidden'} flex flex-col gap-[0.5rem]`}>
                                <button
                                    type='submit'
                                    className={` w-full bg-blue-700 px-10 py-[.3rem] rounded-sm text-white text-lg font-medium uppercase`}
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
                                    className='h-fit text-lg px-[20px] py-[10px] rounded-md  outline-none focus-visible:outline-blue-700 focus-visible:outline-[2px] outline-offset-0 text-black capitalize'
                                    value={toggleName ? firstName : userData?.fullName?.split(' ')[0]}
                                    disabled={!toggleName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    name='lastName'
                                    placeholder='Last Name'
                                    className='h-fit text-lg px-[20px] py-[10px] rounded-md  outline-none focus-visible:outline-blue-700 focus-visible:outline-[2px] outline-offset-0 text-black capitalize'
                                    value={toggleName ? lastName : userData?.fullName?.split(' ')[1]}
                                    onChange={(e) => setLastName(e.target.value)}
                                    disabled={!toggleName}
                                />
                                <button type='submit' className={`${toggleName ? "block" : 'hidden'} bg-blue-700 px-10 py-[.5rem] rounded-sm text-lg font-medium uppercase`}>Save</button>
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
                                    className='text-lg px-[20px] py-[10px] rounded-md  outline-none focus-visible:outline-blue-700 focus-visible:outline-[2px] outline-offset-0 text-black'
                                    value={toggleEmail ? email : userData.email}
                                    disabled={!toggleEmail}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type='submit' className={`${toggleEmail ? "block" : 'hidden'} bg-blue-700 px-10 py-[.5rem] rounded-sm text-lg font-medium uppercase`}>Save</button>
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
                                    type="number"
                                    name='number'
                                    placeholder='Contact Number'
                                    className='removeArrow text-lg px-[20px] py-[10px] rounded-md  outline-none focus-visible:outline-blue-700 focus-visible:outline-[2px] outline-offset-0 text-black '
                                    maxLength={10}
                                    value={toggleContact ? contactNumber : userData.contactNumber}
                                    disabled={!toggleContact}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                />
                                <button type='submit' className={`${toggleContact ? "block" : 'hidden'} bg-blue-700 px-10 py-[.5rem] rounded-sm text-lg font-medium uppercase`}>Save</button>
                            </div>
                        </form>
                    </div>
                    {/* email ends  */}

                    {/* <div>
              <h4>FAQs</h4>
              <div>
                <strong>What happens when I update my email address (or mobile number)?
                </strong>
                <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
  
                </p>
              </div>
              <div>
                <strong>What happens when I update my email address (or mobile number)?
                </strong>
                <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
  
                </p>
              </div>
              <div>
                <strong>What happens when I update my email address (or mobile number)?
                </strong>
                <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
  
                </p>
              </div>
              <div>
                <strong>What happens when I update my email address (or mobile number)?
                </strong>
                <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
  
                </p>
              </div>
            </div> */}

                </div>
            </div>

        </div>
    )
}

export default EditProfile
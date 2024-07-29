import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../../components'

const EditProfile = () => {
    const userData = useSelector((state) => state.auth.userData)
    const [avatar, setAvatar] = useState(userData?.avatar)
    return (
        <div>
            <form action="">
                <div className="flex gap-4 items-center ">
                    <div className="w-14 h-14 rounded-full  overflow-hidden">
                        {avatar ? (
                            <img src={URL.createObjectURL(avatar)} className="w-full h-full" />
                        ) : (
                            <img src="../userDemo.jpg" />
                        )}
                    </div>
                    <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        onChange={(event) => setAvatar(event.target.files[0])}
                        className="hidden"
                    />
                    <label
                        htmlFor="avatar"
                        className={!avatar ? "" : "flex flex-col gap-1"}
                    >
                        {

                            avatar ? <span>{avatar.name} </span> : <></>
                        }
                        <span className="cursor-pointer dark:bg-primary-dark  hover:bg-primary hover:text-white dark:hover:bg-primary py-1 px-4 rounded-md font-semibold border border-primary transition-colors duration-300">Choose Photo</span>

                    </label>
                </div>
                {/* image ends  */}
                <div>

                </div>
                {/* fullName ends  */}
                <div>

                </div>
                {/* password ends  */}

            </form>
        </div>
    )
}

export default EditProfile
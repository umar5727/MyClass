import { useState } from "react";
import Button from "../Button";

function Step2({ onSubmit }) {

    const [courseImage, setCourseImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ courseImage }); // Pass collected data to parent component
    };



    return (
        <form onSubmit={handleSubmit}>
            <div className=" pb-14">
                <div className="font-bold text-3xl pb-5 mb-5 border-b border-gray-300 dark:border-gray-700 ">
                    Course media
                </div>

                <div className="flex flex-col gap-2 items-center justify-center rounded-md outline-1 outline-dashed outline-gray-300 dark:outline-gray-700 ">
                    <div className="w-64 rounded-md  overflow-hidden pt-10">
                        {courseImage ? (
                            <img src={URL.createObjectURL(courseImage)} className="w-full h-full" />
                        ) : (
                            <img src="../public/userDemo.jpg" />
                        )}
                    </div>
                    <div className="">Upload course image here, or <strong className="text-primary">Browse</strong></div>
                    <input
                        type="file"
                        id="courseImage"
                        name="courseImage"
                        onChange={(event) => setCourseImage(event.target.files[0])}
                        className="hidden"
                    />
                    <label
                        htmlFor="courseImage"
                        className={!courseImage ? "cursor-pointer dark:bg-primary-dark  hover:bg-primary hover:text-white dark:hover:bg-primary pt-2 px-6 rounded-md font-semibold border border-primary transition-colors duration-300" : "cursor-pointer pb-10"}
                    >
                        {

                            courseImage ? <span>{courseImage.name} </span> : <span>Choose Image</span>
                        }

                    </label>
                </div>
                <Button type="submit" className="absolute right-0 bottom-0">Next</Button>
            </div>
        </form>
    );
}

export default Step2;

import { useSelector } from "react-redux";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../constants/constant";

function Step3({ formData }) {
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const handleClick = async () => {
        const reqData = new FormData()
        reqData.append('title', formData.title)
        reqData.append('shortDescription', formData.shortDescription)
        reqData.append('department', formData.selectCategory)
        reqData.append('difficulty', formData.courseLevel)
        reqData.append('totalLectures', formData.totalLecture)
        reqData.append('duration', formData.courseTime)
        reqData.append('price', formData.coursePrice)
        reqData.append('discountPrice', formData.discountPrice)
        reqData.append('thumbNail', formData.courseImage)
        reqData.append('instructor', userData._id)

        // console.log('reqData : ', reqData)
        const createCourses = await fetch(base_url + "/courses/createCourse", {
            mode: 'cors',
            method: 'POST',
            // headers: { "Content-Type": "multipart/form-data" },
            body: reqData
        })
        const response = await createCourses.json();
        // console.log(response + "\n" + response.message + "\n" + response.course)
        if (response.course) {
            // console.log('this is from response ')
            navigate("/MyClass/InstructorDashboard")
        }

    }
    // console.log(formData)
    return (

        <div className="pb-14">
            <div className="grid grid-cols-2 gap-6">

                <div className="col-span-2 bg-primary-light dark:bg-primarydark p-2">
                    <div className="text-gray-500">Course Title</div>
                    <div className="italic">{formData.title}</div>
                </div>
                <div className="col-span-2 bg-primary-light dark:bg-primarydark p-2">
                    <div className="text-gray-500">Short Discription</div>
                    <div className="italic">{formData.shortDescription}</div>
                </div>
                <div className=" bg-primary-light dark:bg-primarydark p-2">
                    <div className="text-gray-500">Course Category</div>
                    <div className="italic">{formData.selectCategory}</div>
                </div>
                <div className=" bg-primary-light dark:bg-primarydark p-2">
                    <div className="text-gray-500">Course Level</div>
                    <div className="italic">{formData.courseLevel}</div>
                </div>
                <div className=" bg-primary-light dark:bg-primarydark p-2">
                    <div className="text-gray-500">Course Time</div>
                    <div className="italic">{formData.courseTime}</div>
                </div>
                <div className=" bg-primary-light dark:bg-primarydark p-2">
                    <div className="text-gray-500">Total Lecture</div>
                    <div className="italic">{formData.totalLecture}</div>
                </div>
                <div className=" bg-primary-light dark:bg-primarydark p-2">
                    <div className="text-gray-500">Course Price</div>
                    <div className="italic">{formData.coursePrice}</div>
                </div>
                <div className=" bg-primary-light dark:bg-primarydark p-2">
                    <div className="text-gray-500">Discount Price</div>
                    <div className="italic">{formData.discountPrice}</div>
                </div>

                <div className=" bg-primary-light dark:bg-primarydark p-2">
                    <div className="text-gray-500">Course Image</div>
                    <div className="italic">{formData.courseImage.name}</div>
                </div>

            </div>
            {/* Display other collected data */}
            <Button
                type="button"
                className="absolute right-0 bottom-0"
                onClick={handleClick}
            >
                Submit
            </Button>
        </div>
    );
}

export default Step3;

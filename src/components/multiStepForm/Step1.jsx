import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Select from "react-select";


function Step1({ onSubmit }) {


    const [title, setTitle] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [selectCategory, setSelectCategory] = useState('')
    const [courseLevel, setCourseLevel] = useState('')
    const [courseTime, setCourseTime] = useState('')
    const [totalLecture, setTotalLecture] = useState('')
    const [coursePrice, setCoursePrice] = useState('')
    const [discountPrice, setDiscountPrice] = useState('')




    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, shortDescription, selectCategory, courseLevel, courseTime, totalLecture, coursePrice, discountPrice }); // Pass collected data to parent component
    };
    // label, name, type, placeholder
    const categoryOptions = [

        { value: 'Web Design', label: 'Web Design' },
        { value: 'Development', label: 'Development' },
        { value: 'Graphic Design', label: 'Graphic Design' },
        { value: 'Marketing', label: 'Marketing' },
    ]
    const levelOptions = [
        { value: 'Beginner', label: 'Beginner' },
        { value: 'Intermediate', label: 'Intermediate' },
        // { value: 'Advance', label: 'Advance' },
        { value: 'All Level', label: 'All Level' },
    ]



    // const className;
    const fields = [
        { name: 'title', label: 'Course title', type: 'text', placeholder: 'Enter course title', value: title, setValue: setTitle },
        { name: 'shortDescription', label: 'Short description', type: 'textarea', placeholder: 'Enter keywords', value: shortDescription, setValue: setShortDescription },
        {
            name: 'courseCategory', label: 'Course category', type: 'text', placeholder: 'Select category',

        },

        { name: 'courseLevel', label: 'Course level', type: 'text', placeholder: 'Select Course level', },
        { name: 'courseTime', label: 'Course time', type: 'text', placeholder: 'Enter course time', value: courseTime, setValue: setCourseTime },
        { name: 'totalLecture', label: 'Total lecture', type: 'text', placeholder: 'Enter total lecture', value: totalLecture, setValue: setTotalLecture },
        { name: 'coursePrice', label: 'Course price', type: 'text', placeholder: 'Enter Course price', value: coursePrice, setValue: setCoursePrice },
        { name: 'discountPrice', label: 'Discount price', type: 'text', placeholder: 'Enter Discount price', value: discountPrice, setValue: setDiscountPrice },

    ]
    return (

        <div className="pb-10">
            {/* form top */}
            <div className="font-bold text-3xl pb-5 mb-5 border-b border-gray-300 dark:border-gray-700 ">
                Course details
            </div>
            {/* form top end  */}
            <form onSubmit={handleSubmit} >
                <div className="grid grid-cols-2 gap-6 pb-6 mb-6 border-b border-gray-300 dark:border-gray-700">
                    {
                        fields.map((field, index) => {
                            let className;
                            if (field.name === 'title' || field.name === 'shortDescription') {
                                className = "col-span-2"
                            }
                            if (field.name === 'courseCategory') {
                                return (
                                    <div>
                                        <span>Course Category</span>
                                        <div className='w-full  dark:bg-primarydark dark:text-gray-200 outline outline-1 outline-gray-300 dark:outline-gray-700 focus-visible:outline-primary focus-visible:outline-double dark:focus-visible:outline-primary dark:focus-visible:outline-double rounded-md mt-2'>
                                            <Select
                                                id={field.name}
                                                defaultValue={selectCategory}
                                                onChange={(state) => setSelectCategory(state.value)}
                                                options={categoryOptions}
                                                required
                                                name={field.name}
                                                styles={{
                                                    singleValue: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        // color: state.isSelected ? 'orange' : 'red',
                                                        color: 'text-gray-200'
                                                    }),
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        backgroundColor: 'dark:bg-primarydark',
                                                        color: '#EEEEEE',
                                                        border: "0px"

                                                    }
                                                    ),
                                                    menu: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        color: "gray"
                                                        ,

                                                    })
                                                }}

                                            />
                                        </div>
                                    </div>
                                )
                            } else if (field.name === 'courseLevel') {
                                return (
                                    <div>
                                        <span className="mb-2">Course Level</span>
                                        <div className='w-full  dark:bg-primarydark dark:text-gray-200 outline outline-1 outline-gray-300 dark:outline-gray-700 focus-visible:outline-primary focus-visible:outline-double dark:focus-visible:outline-primary dark:focus-visible:outline-double rounded-md mt-2'>
                                            <Select
                                                id={field.name}

                                                defaultValue={courseLevel}
                                                onChange={(state) => setCourseLevel(state.value)}
                                                options={levelOptions}
                                                required
                                                key={index}
                                                name={field.name}
                                                styles={{
                                                    singleValue: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        // color: state.isSelected ? 'orange' : 'red',
                                                        color: 'text-gray-200'
                                                    }),
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        backgroundColor: 'dark:bg-primarydark',
                                                        color: '#EEEEEE',
                                                        border: "0px ",
                                                        // outline: '0px'

                                                    }
                                                    ),
                                                    menu: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        color: "gray"
                                                        ,

                                                    })
                                                }}

                                            />
                                        </div>
                                    </div>
                                )
                            }

                            return (

                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    label={field.label}
                                    placeholder={field.placeholder}
                                    value={field.title}
                                    setValue={field.setValue}
                                    index={index}
                                    className={className}
                                // required
                                />
                            )
                        })
                    }
                </div>

                <Button type="submit" className="absolute right-10 bottom-0 hover:text-white">Next</Button>
            </form >
        </div>
    );
}

export default Step1;

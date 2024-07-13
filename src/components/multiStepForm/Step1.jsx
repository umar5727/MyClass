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

        { value: 'Web Design', label: 'Web Design', id: 0 },
        { value: 'Development', label: 'Development', id: 1 },
        { value: 'Graphic Design', label: 'Graphic Design', id: 2 },
        { value: 'Finance', label: 'Finance', id: 3 },
    ]
    const levelOptions = [
        { value: 'Beginner', label: 'Beginner', id: 4 },
        { value: 'Intermediate', label: 'Intermediate', id: 5 },
        { value: 'All Level', label: 'All Level', id: 6 },
    ]



    // const className;
    const fields = [
        { name: 'title', label: 'Course title', type: 'text', placeholder: 'Enter course title', value: title, setValue: setTitle, id: 7 },
        { name: 'shortDescription', label: 'Short description', type: 'textarea', placeholder: 'Enter keywords', value: shortDescription, setValue: setShortDescription, id: 8 },
        {
            name: 'courseCategory', label: 'Course category', type: 'text', placeholder: 'Select category', id: 9,

        },

        { name: 'courseLevel', label: 'Course level', type: 'text', placeholder: 'Select Course level', id: 10 },
        { name: 'courseTime', label: 'Course time ', type: 'number', placeholder: 'Enter course time in Hours', value: courseTime, setValue: setCourseTime, id: 11 },
        { name: 'totalLecture', label: 'Total lecture', type: 'number', placeholder: 'Enter total lecture', value: totalLecture, setValue: setTotalLecture, id: 12 },
        { name: 'coursePrice', label: 'Course price', type: 'number', placeholder: 'Enter Course price in ₹', value: coursePrice, setValue: setCoursePrice, id: 13 },
        { name: 'discountPrice', label: 'Discount price', type: 'number', placeholder: 'Enter Discount price', value: discountPrice, setValue: setDiscountPrice, id: 14 },

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
                        fields.map((field) => {
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
                                                key={field.id}
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
                                                key={field.id}
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
                                    key={field.id}
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

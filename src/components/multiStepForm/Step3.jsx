import Button from "../Button";

function Step3({ formData }) {
    console.log(formData)
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
            <Button type="button" className="absolute right-0 bottom-0">Submit</Button>
        </div>
    );
}

export default Step3;

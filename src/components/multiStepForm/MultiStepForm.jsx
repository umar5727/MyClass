import React, { lazy, useState } from 'react';
import Button from '../Button';

const Step1 = lazy(() => import('./Step1'));
const Step2 = lazy(() => import('./Step2'));
const Step3 = lazy(() => import('./Step3'));


function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({}); // State for form data

    const handleNext = (data) => {
        setFormData({ ...formData, ...data }); // Update form data
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 onSubmit={handleNext} />;
            case 2:
                return <Step2 onSubmit={handleNext} />;
            case 3:
                return <Step3 formData={formData} />; // Pass form data to Step3
            default:
                return <div>Error: Invalid Step</div>;
        }
    };

    return (
        <div className="multi-step-form  relative">
            <div>
                {renderStep()}
            </div>
            <div className=''>

                {/* // )} */}
                {currentStep > 1 && ( // Show previous button except on first step
                    <div className='absolute left-0 bottom-0'>

                        <Button type="button" onClick={handlePrev}>
                            Previous
                        </Button>
                    </div>
                )}
                {/* <Button type="button" onClick={handleNext} className='absolute right-0'>
                    {currentStep === 3 ? 'Submit' : 'Next'}

                </Button> */}
            </div>
        </div>
    );
}

export default MultiStepForm;

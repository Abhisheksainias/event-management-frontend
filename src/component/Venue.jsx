import React, { useRef, useState } from 'react'

function Venue() {


    const [uservalue, setUservalue] = useState({})

    const [isSubmitted, setIsSubmitted] = useState(false)
    const refname = useRef("")
    const reflocation = ("")
    const reftype = ("")
    const refcapacity = ("")
    const refsession = ("")

    function handleValue(e) {
        setUservalue({ ...uservalue, [e.target.name]: e.target.value })
    }

    const uservalidate = () => {
        if (uservalue.capacity__c?.length < 0) {

        }
    }


    // useEffect(() => {
    //     uservalidate()
    // }, [uservalue])


    function handlesubmit() {
        if (
            uservalue.Name?.length >= 2 && uservalue.Location?.length >= 3 && uservalue.Type__c?.length >= 3 && uservalue.capacity__c?.length >= 1 && uservalue.No_Of_Sessions__c?.length >= 1
        ) {
            alert("Successfull submit ")
            setUservalue({
                Name: "",
                Location: "",
                Type__c: "",
                capacity__c: "",
                No_Of_Sessions__c: "",
            })
        } else {
            alert("please enter valid input")
        }
    }
    return (
        <>
            <div className='grid grid-cols-2 gap-1 bg-gray-100'>
                <div className=' flex items-center justify-center h-full min-h-screen '>
                    <img src="/images/register.png" className='w-full max-w-md   m-auto items-center justify-center' alt="" />
                </div>

                <div className='flex items-center justify-center min-h-screen '>
                    <form className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
                        <h2 className='text-center text-3xl font-bold mb-4 text-gray-800 '>Venue</h2>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-1'>Name</label>
                            <input type="text"
                                name="Name"
                                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Enter your name'
                                value={uservalue.Name}
                                onChange={handleValue}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-1'>Location</label>
                            <input type="text"
                                name="Location"
                                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Enter your location'
                                value={uservalue.Location}
                                onChange={handleValue}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-1'>Type</label>
                            <input type="text"
                                name="Type__c"
                                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Enter type '
                                value={uservalue.Type__c}
                                onChange={handleValue}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-1'>Capacity</label>
                            <input type="number"
                                name="capacity__c"
                                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                min={1}
                                max={20}
                                placeholder='Enter capacity '
                                value={uservalue.capacity__c}
                                onChange={handleValue}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-1'>Number of Session</label>
                            <input type="number"
                                name=" No_Of_Sessions__c"
                                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                min={1}
                                max={5}
                                placeholder='Enter number of sessions '
                                value={uservalue.No_Of_Sessions__c}
                                onChange={handleValue}
                            />
                        </div>
                        <br />
                        <button
                            type="submit" onClick={handlesubmit} className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Venue


// import React, { useState } from "react";

// function Venue() {
//     const [formValues, setFormValues] = useState({});

//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const handleInputChange = (e) => {
//         setFormValues({ ...formValues, [e.target.name]: e.target.value });
//     };

//     const validateForm = () => {
//         const errors = {};

//         if (!formValues.Name || formValues.Name.length < 2) {
//             errors.Name = "Name must be at least 2 characters long.";
//         }

//         if (!formValues.Location || formValues.Location.length < 3) {
//             errors.Location = "Location must be at least 3 characters long.";
//         }

//         if (!formValues.Type__c || formValues.Type__c.length < 3) {
//             errors.Type__c = "Type must be at least 3 characters long.";
//         }

//         if (!formValues.capacity__c || formValues.capacity__c > 20) {
//             errors.capacity__c = "Capacity must be a lessthen to 21.";
//         }

//         if (!formValues.No_Of_Sessions__c || formValues.No_Of_Sessions__c > 5) {
//             errors.No_Of_Sessions__c = "Number of sessions must be lessthen 6.";
//         }

//         return errors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const errors = validateForm();
//         setFormErrors(errors);

//         if (Object.keys(errors).length === 0) {
//             setIsSubmitted(true);
//             alert("Form submitted successfully!");
//             setFormValues({
//                 Name: "",
//                 Location: "",
//                 Type__c: "",
//                 capacity__c: "",
//                 No_Of_Sessions__c: "",
//             });
//         } else {
//             setIsSubmitted(false);
//         }
//     };

//     return (
//         <div className="grid grid-cols-2 gap-1 bg-gray-100">
//             <div className="flex items-center justify-center h-full min-h-screen">
//                 <img
//                     src="/images/register.png"
//                     className="w-full max-w-md m-auto items-center justify-center"
//                     alt="Venue Registration"
//                 />
//             </div>

//             <div className="flex items-center justify-center min-h-screen">
//                 <form
//                     className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
//                     onSubmit={handleSubmit}
//                 >
//                     <h2 className="text-center text-3xl font-bold mb-4 text-gray-800">Venue</h2>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-1">Name</label>
//                         <input
//                             type="text"
//                             name="Name"
//                             className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.Name ? "border-red-500" : "border-gray-300"
//                                 }`}
//                             placeholder="Enter your name"
//                             value={formValues.Name}
//                             onChange={handleInputChange}
//                         />
//                         {formErrors.Name && <p className="text-red-500 text-sm">{formErrors.Name}</p>}
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-1">Location</label>
//                         <input
//                             type="text"
//                             name="Location"
//                             className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.Location ? "border-red-500" : "border-gray-300"
//                                 }`}
//                             placeholder="Enter your location"
//                             value={formValues.Location}
//                             onChange={handleInputChange}
//                         />
//                         {formErrors.Location && <p className="text-red-500 text-sm">{formErrors.Location}</p>}
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-1">Type</label>
//                         <input
//                             type="text"
//                             name="Type__c"
//                             className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.Type__c ? "border-red-500" : "border-gray-300"
//                                 }`}
//                             placeholder="Enter type"
//                             value={formValues.Type__c}
//                             onChange={handleInputChange}
//                         />
//                         {formErrors.Type__c && <p className="text-red-500 text-sm">{formErrors.Type__c}</p>}
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-1">Capacity</label>
//                         <input
//                             type="number"
//                             name="capacity__c"
//                             className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.capacity__c ? "border-red-500" : "border-gray-300"
//                                 }`}
//                             placeholder="Enter capacity"
//                             value={formValues.capacity__c}
//                             onChange={handleInputChange}
//                             min={1}
//                         />
//                         {formErrors.capacity__c && (
//                             <p className="text-red-500 text-sm">{formErrors.capacity__c}</p>
//                         )}
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-1">Number of Sessions</label>
//                         <input
//                             type="number"
//                             name="No_Of_Sessions__c"
//                             className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.No_Of_Sessions__c ? "border-red-500" : "border-gray-300"
//                                 }`}
//                             placeholder="Enter number of sessions"
//                             value={formValues.No_Of_Sessions__c}
//                             onChange={handleInputChange}
//                             min={1}
//                         />
//                         {formErrors.No_Of_Sessions__c && (
//                             <p className="text-red-500 text-sm">{formErrors.No_Of_Sessions__c}</p>
//                         )}
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                     >
//                         Submit
//                     </button>

//                     {isSubmitted && (
//                         <p className="text-green-500 text-center mt-4">Form submitted successfully!</p>
//                     )}
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Venue;

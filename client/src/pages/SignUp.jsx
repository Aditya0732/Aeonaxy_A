import React from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
    return (
        // <div className='flex justify-center items-center h-screen bg-pink-200'>
        //     <div className='w-5/6 h-5/6'>
        //         <div className='flex justify-center items-center'>
        //             <div className='block'>
        //                 <div className='flex bg-white'>
        //                     {/* Conditional rendering for large screens */}
        //                     <div className='hidden md:flex justify-start w-2/5'>
        //                         <img src='/main.jpg' alt='main' className='lg:w-5/6 md:w-full  max-h-[1000px] min-h-[500px] object-cover' />
        //                     </div>
        //                     <div className='w-full md:w-3/5 h-full p-6 font-[Mona-Sans,Helvetica-Neue,Helvetica,Arial,sans-serif]'>
        //                         <div className='flex justify-end'>
        //                             <h1 className='text-sm'>Already a member ? <span className='text-[#4F3CC9]'>Sign In</span></h1>
        //                         </div>

        //                         <div className='flex justify-center p-10'>
        //                             <div className='xl:w-1/2 lg:w-full md:w-full sm:w-full'>
        //                                 <div className='flex flex-col gap-6'>
        //                                     <h1 className='font-[700] font-[Mona-Sans,Helvetica-Neue,Helvetica,Arial,sans-serif] text-2xl text-[#0D0C22]'>Sign up to Dribbble</h1>
        //                                     <SignUpForm />
        //                                 </div>
        //                             </div>
        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='w-full h-screen flex items-start font-[Mona-Sans,Helvetica-Neue,Helvetica,Arial,sans-serif]'>
            <div className='lg:flex hidden h-full'>
                <img src='/main.jpg' alt='main' className='w-full h-full object-cover' />
            </div>
            <div className='fixed top-2 right-2'>
                <h1 className='text-sm'>Already a member ? <span className='text-[#4F3CC9] cursor-pointer'>Sign In</span></h1>
            </div>
            <div className='flex justify-center p-10 font-[Mona-Sans,Helvetica-Neue,Helvetica,Arial,sans-serif]'>
                <div className='xl:w-1/2 lg:w-1/2 md:w-2/3 w-full'>
                    <div className='flex flex-col gap-6'>

                        <h1 className='font-[700] text-3xl text-[#0D0C22]'>Sign up to Dribbble</h1>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

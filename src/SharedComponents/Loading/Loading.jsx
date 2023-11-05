import Lottie from 'lottie-react';
import React from 'react';
import loading from './Loader.json'

const Loading = () => {

    return (
        <div className="h-[90vh] flex justify-center items-center">
            <div className='flex justify-center items-center w-20 h-20'>
                <Lottie animationData={loading} autoPlay={true} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Loading;
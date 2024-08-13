import React from 'react';

const LoadingPage = () => {
    return (
        <div className="conatiner mx-auto">
            {/* <div className="margin-auto"> */}
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-purple border-opacity-75 mb-8"></div>
            <h1 className="text-2xl font-semibold text-gray-700">Loading...</h1>
            <p className="text-gray-700 text-opacity-80 mt-2">Please wait while we prepare everything for you.</p>
            {/* </div> */}
        </div>
    );
};
export default LoadingPage;
import React from 'react';

function Loader() {
    return (
        <div className="flex justify-center items-center h-full pt-5">
            <div className="border-t-4 border-b-4 border-red-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
    );
}

export default Loader;
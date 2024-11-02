import React from 'react';

function Loader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-t-4 border-b-4 border-red-500 rounded-full w-20 h-20 animate-spin"></div>
        </div>
    );
}

export default Loader;
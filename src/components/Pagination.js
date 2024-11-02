import React from 'react'

export const Pagination = ({handleNextGeneration,currentGeneration, loading, handlePreviousGeneration, generations}) => {
    return (
        <div className="flex justify-center my-5">
            <button
                onClick={handlePreviousGeneration}
                className="mx-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
                disabled={currentGeneration === 1 || loading}
            >
                Previous Generation
            </button>
            <button
                onClick={handleNextGeneration}
                className="mx-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                disabled={currentGeneration === Object.keys(generations).length || loading}
            >
                Next Generation
            </button>
        </div>
    )
}

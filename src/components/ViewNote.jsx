import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export const ViewNote = () => {

    const { id } = useParams();

    const allNotes = useSelector((state) => state.note.notes);

    const note = allNotes.find((p) => p._id === id);

    if (!note) {
        return <h2 className="text-center text-gray-400 mt-10">Note not found</h2>;
    }

    return (
        <div className="max-w-screen-xl mx-auto px-12 my-10">   

         
            <div className="flex items-center gap-4">
                <input
                    className="w-full p-4 text-lg rounded-md bg-[#1a1a1a] border border-gray-700 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    value={note.title}
                    disabled
                />
            </div>

            
            <div className="mt-6">
                <textarea
                    className="w-full p-4 text-md rounded-md bg-[#1a1a1a] border border-gray-700 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={note.content}
                    disabled
                    rows={6}  
                />
            </div>

        </div>
    );
}

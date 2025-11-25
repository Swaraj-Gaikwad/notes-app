import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromNotes } from '../redux/noteSlice';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";

export const Note = () => {

    const notes = useSelector((state) => state.note.notes);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = React.useState("");

    const filteredData = notes.filter(
        (note) => note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleDelete(noteId) {
        dispatch(removeFromNotes(noteId));
    }

    return (
        <div className="max-w-7xl mx-auto mt-6">

           
            <div className="mb-6">
                <input
                    className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 
                               border border-gray-700 focus:border-indigo-500 
                               focus:ring-2 focus:ring-indigo-600 transition"
                    type="text"
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {filteredData.length > 0 ? (
                    filteredData.map((note) => (
                        <div
                            key={note?._id}
                            className="border border-gray-700 rounded-xl p-4 bg-gray-900 
                                       shadow-lg hover:shadow-2xl transition-shadow"
                        >

                            <h2 className="text-xl font-semibold text-white mb-2">
                                {note.title}
                            </h2>

                            <p className="text-gray-300 text-sm mb-4">
                                {note.content.length > 150
                                    ? note.content.slice(0,150) + "..."
                                    : note.content}
                            </p>


        
                            <div className="flex flex-wrap gap-3">

     
                                <Link to={`/?noteId=${note?._id}`}>
                                    <button className="px-4 py-2 rounded 
                                                       text-white text-sm transition">
                                        Edit
                                    </button>
                                </Link>

                          
                                <Link to={`/notes/${note?._id}`}>
                                    <button className="px-4 py-2 rounded 
                                                       text-white text-sm transition">
                                        View
                                    </button>
                                </Link>

                                <button
                                    onClick={() => handleDelete(note?._id)}
                                    className="px-4 py-2 rounded
                                               text-white text-sm transition"
                                >
                                    Delete
                                </button>

                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(note.content);
                                        toast.success("Copied to clipboard");
                                    }}
                                    className="px-4 py-2 rounded 
                                               text-white text-sm transition"
                                >
                                    Copy
                                </button>

                            </div>

                            <div className="text-gray-400 text-xs mb-4 mt-4">
                                {new Date(note.createdAt).toLocaleString()}
                            </div>

                        </div>
                    ))
                ) : (
                    <p className="text-gray-400 text-center text-lg">No notes found.</p>
                )}

            </div>
        </div>
    )
}

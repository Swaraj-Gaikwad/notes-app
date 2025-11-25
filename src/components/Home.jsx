import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { addToNotes, updateToNotes } from '../redux/noteSlice.js';


export const Home = () => {

  const [title, setTitle] = React.useState('');
  const [value, setValue] = React.useState('');
  const [searchParam, setSearchParam] = useSearchParams('');
  const noteId = searchParam.get("noteId");
  const dispatch = useDispatch();
  const allNotes = useSelector((state) => state.note.notes);

  useEffect(() => {
    if (noteId) {
      const note = allNotes.find((p) => p._id === noteId);
      setTitle(note.title);
      setValue(note.content);

    }
  }, [noteId]
  )

  function createNote() {
    const note = {
      title: title,
      content: value,
      _id: noteId || Date.now().toString(36),
      createdAt: new Date().toISOString()
    }

    if (noteId) {
      dispatch(updateToNotes(note));
    }
    else {
      dispatch(addToNotes(note));
    }

    setTitle('');
    setValue('');
    setSearchParam('');

  }

  return (
    <div className="max-w-7xl mx-auto px-4 my-6">

      <div className="flex items-center gap-4">
        <input
          className="flex-1 p-3 rounded-md bg-[#1a1a1a] border border-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter Note Title…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700 
                   transition-all text-white font-semibold shadow-md"
          onClick={createNote}
        >
          {noteId ? "Update Note" : "Add Note"}
        </button>
      </div>

      <div className="mt-4">
        <textarea
          className="w-full p-4 rounded-md bg-[#1a1a1a] border border-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          placeholder="Enter Note Content…"
          onChange={(e) => setValue(e.target.value)}
          rows={7}
        />
      </div>

    </div>
  );

}

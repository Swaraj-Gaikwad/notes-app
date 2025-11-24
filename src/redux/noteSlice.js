import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [],
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addToNotes: (state, action) => {
      const note = action.payload;
      state.notes.push(note);
      localStorage.setItem('notes', JSON.stringify(state.notes));
      toast.success('Note Added Successfully' );
    },
    updateToNotes: (state, action) => {
      const note = action.payload;
      const index = state.notes.findIndex((note) => note._id === note._id);

      if(index >= 0){
        state.notes[index] = note;
        localStorage.setItem('notes', JSON.stringify(state.notes));
        toast.success('Note Updated Successfully' );
      }  
    },
    ResetAllNotes: (state, action) => {
      state.notes = [];
      localStorage.removeItem('notes');
    },
    removeFromNotes: (state, action) => {
      const noteId = action.payload;

      console.log("noteId: ", noteId);
      const index = state.notes.findIndex((note) => note._id === noteId);

      if(index >= 0){
        state.notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(state.notes));
        toast.success('Note Removed Successfully' );
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToNotes, updateToNotes, ResetAllNotes, removeFromNotes } = noteSlice.actions

export default noteSlice.reducer
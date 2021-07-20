import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDos) => toDos.id !== action.payload);
    },
  },
});

export const { add, remove } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });

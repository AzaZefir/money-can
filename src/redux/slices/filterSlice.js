import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort:{
    name: 'популярности',
    type: 'rating',
  },
}

export const filterSlices = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state,action) => {
      state.categoryId = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setCategoryId} = filterSlices.actions

export default filterSlices.reducer
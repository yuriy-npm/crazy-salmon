import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchCategory = createAsyncThunk(
  
    "category/fetchCategory",

    async () => {
         const { data } = await axios.get(
        `http://localhost:5000/api/category`
        )
        return data;
    }
)


const initialState = {
    categoryItems: [],
  
   
  };
  
  export const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
    
    },
    extraReducers: {
      [fetchCategory.pending]: (state) => {

      },
      [fetchCategory.fulfilled]: (state, action) => {
        state.categoryItems = action.payload
      },
      [fetchCategory.rejected]: (state) => {

      }

    }
  });
  
  // Action creators are generated for each case reducer function
  export const {  } = CategorySlice.actions;
  
  export default CategorySlice.reducer;
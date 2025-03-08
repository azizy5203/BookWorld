import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "@/vendors/axios";
import router from "@/router";
import { toast } from "react-toastify";

const showToast = (msg, type = "success") => {
  toast(msg, {
    draggable: true,
    type: type,
    theme: localStorage.getItem("vite-ui-theme"),
    autoClose: 1300,
  });
};



export const userSlice = createSlice({
  name: "user",
  initialState: {
    appUser: localStorage.getItem("USER")? JSON.parse(localStorage.getItem("USER")) : null,
    isLoading: false,
  },
  reducers: {
    getUser: (state) => state.appUser,
    setUser: (state, { payload }) => {
      state.appUser = payload;
      localStorage.setItem("USER", JSON.stringify(payload));
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
 
});



export const { getUser,setUser, setLoading } =
  userSlice.actions;
export default userSlice.reducer;

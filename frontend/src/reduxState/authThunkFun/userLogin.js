import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "auth/loginUser",
  async (credential, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          token: credential.credential,
        },
        {
          withCredentials: true,
        },
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed",
      );
    }
  },
);

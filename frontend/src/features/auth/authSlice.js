import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  filter: "All",
};
let filter;

//registerSlice
export const registerSlice = createAsyncThunk(
  "auth/registerSlice",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//loginSlice
export const loginSlice = createAsyncThunk(
  "auth/loginSlice",
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// FILTER TICKETS
export const filterTickets = createAsyncThunk(
  "tickets/filter",
  async (selectedCategory) => {
    try {
      filter = selectedCategory;
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.filter = "All";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(loginSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.filter = "All";
      })
      .addCase(loginSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(filterTickets.fulfilled, (state, action) => {
        state.filter = filter;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

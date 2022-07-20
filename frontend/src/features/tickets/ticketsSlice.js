import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from "./ticketsService";

const initialState = {
  ticketList: [],
  isFiltered: false,
  isAddingWorknote: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//CREATE

export const createTicket = createAsyncThunk(
  "tickets/create",
  async (ticketData, thunkAPI) => {
    const user = thunkAPI.getState().auth.user;
    const userType = thunkAPI.getState().auth.user.userType;

    try {
      const token = thunkAPI.getState().auth.user.token;

      //Assigns ticket customer name to username if user is a customer
      if (userType === "Customer") {
        let userSubmitter = { submittedBy: user.name };
        ticketData = { ...userSubmitter, ...ticketData };
      }

      return await ticketService.createTicket(ticketData, token);
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

//DELETE

export const deleteTicket = createAsyncThunk(
  "tickets/delete",
  async (ticketData, thunkAPI) => {
    const userType = thunkAPI.getState().auth.user.userType;

    if (userType === "Admin") {
      try {
        const token = thunkAPI.getState().auth.user.token;

        return await ticketService.deleteTicket(ticketData, token);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    } else {
      throw new Error("cannot proceed - not admin");
    }
  }
);

//CREATE WORKNOTE
let worknoteTarget;
export const createWorknote = createAsyncThunk(
  "tickets/createWorknote",
  async (ticketData, thunkAPI) => {
    const userType = thunkAPI.getState().auth.user.userType;
    const userID = thunkAPI.getState().auth.user._id;
    const ticketID = ticketData;
    worknoteTarget = userID + ticketID;

    if (userType === "Admin") {
      try {
        return worknoteTarget;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    } else {
      throw new Error("Cannot proceed - not Admin");
    }
  }
);

//SUBMIT WORKNOTE
export const addWorknote = createAsyncThunk(
  "tickets/addWorknote",
  async (ticketData, thunkAPI) => {
    let worknotes = ticketData.worknotes;
    let ticketID = ticketData.ticketID;
    const userType = thunkAPI.getState().auth.user.userType;

    if (userType === "Admin") {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await ticketService.addWorknote(ticketID, worknotes, token);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    } else {
      throw new Error("Cannot proceed - not Admin");
    }
  }
);

//RESOLVE TICKET

export const resolveTicket = createAsyncThunk(
  "tickets/resolve",
  async (ticketData, thunkAPI) => {
    const userType = thunkAPI.getState().auth.user.userType;

    if (userType === "Admin") {
      try {
        const token = thunkAPI.getState().auth.user.token;

        return await ticketService.resolveTicket(ticketData, token);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    } else {
      throw new Error("Cannot proceed - not Admin");
    }
  }
);

//GET TICKETS

export const getTickets = createAsyncThunk(
  "tickets/getAll",
  async (_, thunkAPI, state) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await ticketService.getTickets(token);
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

export const ticketsSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ticketList.push(action.payload);
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ticketList = action.payload;
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.ticketList = state.ticketList.filter((ticket) => {
          return ticket._id !== action.payload.id; //needed to remove ticket from UI without reload
        });
      })
      .addCase(deleteTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(resolveTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resolveTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.isAddingWorknote = false;
      })
      .addCase(resolveTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createWorknote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createWorknote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAddingWorknote = worknoteTarget;
      })
      .addCase(createWorknote.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addWorknote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addWorknote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        // state.worknotes.push(action.payload);
        state.isAddingWorknote = false;
      })
      .addCase(addWorknote.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = ticketsSlice.actions;
export default ticketsSlice.reducer;

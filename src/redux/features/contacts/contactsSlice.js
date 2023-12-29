import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async () => {
    const response = await fetch("https://contact.mediusware.com/api/contacts/");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
);

export const fetchUSContacts = createAsyncThunk(
  'contacts/fetchUSContacts',
  async () => {
    const response = await fetch("https://contact.mediusware.com/api/country-contacts/united%20states/");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    allContacts: [],
    usContacts: [],
    loadingAll: false,
    loadingUS: false,
    errorAll: null,
    errorUS: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, (state) => {
        state.loadingAll = true;
        state.errorAll = null;
      })
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.loadingAll = false;
        state.allContacts = action.payload;
      })
      .addCase(fetchAllContacts.rejected, (state, action) => {
        state.loadingAll = false;
        state.errorAll = action.error.message;
      })
      .addCase(fetchUSContacts.pending, (state) => {
        state.loadingUS = true;
        state.errorUS = null;
      })
      .addCase(fetchUSContacts.fulfilled, (state, action) => {
        state.loadingUS = false;
        state.usContacts = action.payload;
      })
      .addCase(fetchUSContacts.rejected, (state, action) => {
        state.loadingUS = false;
        state.errorUS = action.error.message;
      });
  },
});

export default contactsSlice.reducer;

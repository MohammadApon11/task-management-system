import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import contactsReducer from "./features/contacts/contactsSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    contacts: contactsReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialTasks = [
  { id: 1, name: "Development of Mediusware", status: "active" },
  { id: 2, name: "Services of Mediusware", status: "active" },
  { id: 3, name: "MediusWare Task", status: "completed" },
  { id: 4, name: "Problem 1	", status: "completed" },
  { id: 5, name: "Problem 2", status: "completed" },
  { id: 6, name: "MCQ TEST", status: "completed" },
  { id: 7, name: "Coding Test", status: "completed" },
  { id: 8, name: "My opportunity to work with mediusware", status: "pending" },
  { id: 9, name: "A chance to prove yourself", status: "pending" },
  { id: 10, name: "MediusWare in my heart", status: "archive" },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: initialTasks,
    filteredTasks: initialTasks,
  },
  reducers: {
    filterTasks: (state, action) => {
      const { status } = action.payload;

      if (status === 'all') {
        state.filteredTasks = state.tasks;
      } else {
        state.filteredTasks = state.tasks.filter(task => task.status === status);
      }

      // Custom sorting logic based on status order
      state.filteredTasks.sort((a, b) => {
        const statusOrder = {
          active: 1,
          completed: 2,
          pending: 3,
          archive: 4,
        };

        return statusOrder[a.status] - statusOrder[b.status];
      });
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      state.filteredTasks = state.tasks.slice();
    },
  },
});

export const { addTask, filterTasks } = tasksSlice.actions;
export default tasksSlice.reducer;

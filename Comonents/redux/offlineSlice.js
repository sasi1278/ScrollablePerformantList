import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offlineData: [],
};

const offlineSlice = createSlice({
  name: 'offline',
  initialState,
  reducers: {
    storeOfflineData(state, action) {
      state.offlineData = action.payload;
    },
    filterOfflineData(state, action) {
      const { id, toggled } = action.payload;
      if (toggled) {
        state.offlineData = state.offlineData.filter((item) => item.id !== id);
      }
    },
  },
});

export const { storeOfflineData, filterOfflineData } = offlineSlice.actions;
export default offlineSlice.reducer;

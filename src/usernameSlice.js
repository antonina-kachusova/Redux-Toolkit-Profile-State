import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
    name: 'username',
    initialState: '',
    reducers: {
        write (state, action) {
            let username = action.payload.trim();
            username = username.toLowerCase();
            state = username;
            return state;
}
    }
});

export const { write } = usernameSlice.actions;
export default usernameSlice.reducer;





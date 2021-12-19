import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json());

        return res;
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        entities: [],
        loading: false
    },
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.loading = true;
        },
        [getPosts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.entities = payload;
        },
        [getPosts.rejected]: (state) => {
            state.loading = false;
        }
    }
});

export default postsSlice.reducer;
export {getPosts}

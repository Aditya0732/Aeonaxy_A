import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedImage: null,
    location: "",
    avatar:"",
    selectedCards:[],
};

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setSelectedImage: (state, action) => {
            state.selectedImage = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        setSelectedCards: (state, action) => {
            state.selectedCards = action.payload;
        },
    },
});

export const { setSelectedImage, setLocation, setSelectedCards, setAvatar } = infoSlice.actions;

export default infoSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

interface UiState {
    modal: {
        isOpen: boolean
    }
}
const initialState: UiState = {
    modal: {
        isOpen: false,
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: { 
        openModal: (state) => {
            state.modal.isOpen = true
        },

        closeModal: (state) => {
            state.modal.isOpen = false
        },

        toggleModal: (state) => {
            state.modal.isOpen = !state.modal.isOpen
        }
    },
});

export const { openModal, closeModal, toggleModal } = uiSlice.actions;
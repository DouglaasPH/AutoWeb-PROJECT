import { createSlice } from "@reduxjs/toolkit";

interface interfaceState {
    animar_componente: boolean;
}

const initialState: interfaceState = {
    animar_componente: false,
}

const ANIMAR_COMPONENTE_SLICE = createSlice({
    name: "animar_barra",
    initialState,
    reducers: {
        animar_componente: (state, action) => {
            state.animar_componente = action.payload;
        }
    }
})

export const { animar_componente } = ANIMAR_COMPONENTE_SLICE.actions;
export default ANIMAR_COMPONENTE_SLICE.reducer;
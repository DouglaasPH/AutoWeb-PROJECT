import { createSlice } from "@reduxjs/toolkit";

interface interfaceState {
    email: string;
    user: string;
}

const initialState: interfaceState = {
    email: "",
    user: "",
}

const entradaRegistrar = createSlice({
    name: "criar-conta",
    initialState,
    reducers: {
        emailParaCriarConta: (state, action) => {
            console.log(state, action.payload);
            state.email = action.payload;
        },
        nomeDeUserParaCriarConta: (state, action) => {
            console.log(state, action.payload);
            state.user = action.payload;
        }
    }
});

export default entradaRegistrar.reducer;
export const { emailParaCriarConta } = entradaRegistrar.actions;
export const { nomeDeUserParaCriarConta } = entradaRegistrar.actions;
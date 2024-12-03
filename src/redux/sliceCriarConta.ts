import { createSlice } from "@reduxjs/toolkit";

interface interfaceState {
    email: string;
}

const initialState: interfaceState = {
    email: "",
}

const entradaRegistrar = createSlice({
    name: "criar-conta",
    initialState,
    reducers: {
        emailParaCriarConta: (state, action) => {
            console.log(state, action.payload);
            state.email = action.payload;
        }
    }
});

export default entradaRegistrar.reducer;
export const { emailParaCriarConta } = entradaRegistrar.actions;
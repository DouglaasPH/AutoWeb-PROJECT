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
    name: "CRIAR_CONTA",
    initialState,
    reducers: {
        EMAIL_PARA_CRIAR_CONTA: (state, action) => {
            console.log(state, action.payload);
            state.email = action.payload;
        },
        USER_PARA_CRIAR_CONTA: (state, action) => {
            console.log(state, action.payload);
            state.user = action.payload;
        }
    }
});

export default entradaRegistrar.reducer;
export const { EMAIL_PARA_CRIAR_CONTA } = entradaRegistrar.actions;
export const { USER_PARA_CRIAR_CONTA } = entradaRegistrar.actions;
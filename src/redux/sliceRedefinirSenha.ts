import { createSlice } from "@reduxjs/toolkit";

interface interfaceState {
    email: string;
}

const initialState: interfaceState = {
    email: "",
}

const redefinirSenha = createSlice({
    name: "redefinir-senha",
    initialState,
    reducers: {
        emailParaRedefinirSenha: (state, action) => {
            state.email = action.payload;
        }
    }
})

export const { emailParaRedefinirSenha } = redefinirSenha.actions;
export default redefinirSenha.reducer;
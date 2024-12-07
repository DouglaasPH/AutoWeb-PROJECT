import { createSlice } from "@reduxjs/toolkit";

interface interfaceState {
    email: string;
}

const initialState: interfaceState = {
    email: "",
}

const redefinirSenha = createSlice({
    name: "REDEFINIR_SENHA",
    initialState,
    reducers: {
        EMAIL_PARA_REDEFINICAO_DE_SENHA: (state, action) => {
            state.email = action.payload;
        }
    }
})

export const { EMAIL_PARA_REDEFINICAO_DE_SENHA } = redefinirSenha.actions;
export default redefinirSenha.reducer;
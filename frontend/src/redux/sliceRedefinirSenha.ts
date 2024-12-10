import { createSlice } from "@reduxjs/toolkit";

interface interfaceState {
    email: string;
    id: undefined | number
}

const initialState: interfaceState = {
    email: "",
    id: undefined,
}

const redefinirSenha = createSlice({
    name: "REDEFINIR_SENHA",
    initialState,
    reducers: {
        EMAIL_PARA_REDEFINICAO_DE_SENHA: (state, action) => {
            state.email = action.payload;
        },
        ID_DO_USUARIO_PARA_REDEFINICAO_DE_SENHA: (state, action) => {
            state.id = action.payload;
        }
    }
})

export const { EMAIL_PARA_REDEFINICAO_DE_SENHA, ID_DO_USUARIO_PARA_REDEFINICAO_DE_SENHA } = redefinirSenha.actions;
export default redefinirSenha.reducer;
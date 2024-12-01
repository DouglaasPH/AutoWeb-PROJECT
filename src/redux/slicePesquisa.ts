import { createSlice } from "@reduxjs/toolkit";

interface interfaceState {
    tipoDoAutomovelParaPesquisa: string;
    marca: string;
    modelo: string;
}

const initialState: interfaceState = {
    tipoDoAutomovelParaPesquisa: "",
    marca: "",
    modelo: "",
};

const entradaDePesquisa = createSlice({
    name: "pesquisar",
    initialState,
    reducers: {
        tipoDoAutomovelParaPesquisa: (state, action) => {
            console.log(state, action.payload);
            state.tipoDoAutomovelParaPesquisa = action.payload;
        },

        marca: (state, action) => {
            console.log(state, action.payload);
            state.marca = action.payload;
        },

        modelo: (state, action) => {
            console.log(state, action.payload);
            state.modelo = action.payload;
        },

    },
});

export const { tipoDoAutomovelParaPesquisa } = entradaDePesquisa.actions;
export const { marca } = entradaDePesquisa.actions;
export const { modelo } = entradaDePesquisa.actions;
export default entradaDePesquisa.reducer;
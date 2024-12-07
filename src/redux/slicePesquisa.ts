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
    name: "PESQUISAR",
    initialState,
    reducers: {
        TIPO_DO_AUTOMOVEL: (state, action) => {
            console.log(state, action.payload);
            state.tipoDoAutomovelParaPesquisa = action.payload;
        },

        TIPO_DA_MARCA: (state, action) => {
            console.log(state, action.payload);
            state.marca = action.payload;
        },

        TIPO_DO_MODELO: (state, action) => {
            console.log(state, action.payload);
            state.modelo = action.payload;
        },

    },
});

export const { TIPO_DO_AUTOMOVEL } = entradaDePesquisa.actions;
export const { TIPO_DA_MARCA } = entradaDePesquisa.actions;
export const { TIPO_DO_MODELO } = entradaDePesquisa.actions;
export default entradaDePesquisa.reducer;
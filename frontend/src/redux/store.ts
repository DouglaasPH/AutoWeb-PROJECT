import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const initialState = {
    tipoDoAutomovelParaPesquisaAtual: "",
    marcaAtual: "",
    modeloAtual: "",
    email: "",
    user: "",
    id_de_usuario: "",
}


const rootReducer = (state = initialState, action: { type: string; payload: string; }) => {
    switch (action.type) {
        // SISTEMA DE LOGIN
        case "REDEFINIR_SENHA/EMAIL_PARA_REDEFINICAO_DE_SENHA":
            return { ...state, email: action.payload };
        case "REDEFINIR_SENHA/ID_DO_USUARIO_PARA_REDEFINICAO_DE_SENHA":
            return { ...state, id_de_usuario: action.payload };
        case "CRIAR_CONTA/EMAIL_PARA_CRIAR_CONTA":
            return { ...state, email: action.payload };
        case "CRIAR_CONTA/USER_PARA_CRIAR_CONTA":
            return { ...state, user: action.payload };

        // PESQUISA DE AUTOMÓVEIS
        case "PESQUISAR/TIPO_DO_AUTOMOVEL":
            return { ...state, tipoDoAutomovelParaPesquisaAtual: action.payload };
        case "PESQUISAR/TIPO_DA_MARCA":
            return { ...state, marcaAtual: action.payload };
        case "PESQUISAR/TIPO_DO_MODELO":
            return { ...state, modeloAtual: action.payload };        
        default:
            return state;
    }
}


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export { store, rootReducer };
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const initialState = {
    tipoDoAutomovelParaPesquisaAtual: "",
    marcaAtual: "",
    modeloAtual: "",
}


const rootReducer = (state = initialState, action: { type: string; payload: string; }) => {
    switch (action.type) {
        case "pesquisar/tipoDoAutomovelParaPesquisa":
            return { ...state, tipoDoAutomovelParaPesquisaAtual: action.payload };
        case "pesquisar/marca":
            return { ...state, marcaAtual: action.payload };
                case "pesquisar/modelo":
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
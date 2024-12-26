import axios from "axios";

const API_URL = "http://localhost:3000";

async function consultarMarcas() {
    try {
        const response = await axios.get(`${API_URL}/vender-carro/consultar-marcas`);
        return response.data;
    } catch (error) {
        return error;
    }
};

async function consultarModelos(marca: string) {
    const params = { marca };
    try {
        const response = await axios.get(`${API_URL}/vender-carro/consultar-modelos`, { params });
        return response.data;
    } catch (error) {
        return error;
    }
};

async function consultarAnosDoModelo(modelo: string) {
    const params = { modelo };
    try {
        const response = await axios.get(`${API_URL}/vender-carro/consultar-ano`, { params });
        return response.data;
    } catch (error) {
        return error;
    }
};

async function consultarVersoesDoModelo(modelo: string, anos: string) {
    const params = { modelo, anos };
    try {
        const response = await axios.get(`${API_URL}/vender-carro/consultar-versao`, { params });
        return response.data;
    } catch (error) {
        return error;
    }
};

export { consultarMarcas, consultarModelos, consultarAnosDoModelo, consultarVersoesDoModelo };
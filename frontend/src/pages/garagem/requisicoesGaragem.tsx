import axios from "axios";

//const API_URL = "http://localhost:3000";
const API_URL_CEP = "https://viacep.com.br/ws";

async function buscarCep(cep: string) {
    try {
        const response = await axios.get(`${API_URL_CEP}/${cep}/json/`);
        return { estado: response.data.estado, cidade: response.data.localidade };
    } catch (error) {
        console.log(error)
    }
};

export { buscarCep };
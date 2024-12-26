import { LOGGINED } from "../../dados da conta/dados_da_conta";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


// PÁGINA DE REDIRECIONAMENTO

function VenderCarroPage() {
    const navigate = useNavigate();


    useEffect(() => {
        if (LOGGINED) {
            navigate("vender-carro/especificacoes")
        } else {
            navigate("/login");
        };   
    })


    return null;
}

export default VenderCarroPage;
import styles from "./garagemMinhaConta.module.css";
import "../../../../../App.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { faAngleDown, faAngleUp, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DADOS_DO_USUARIO from "../../../../../dados da conta/dados_da_conta";
import { buscarCep, requisicaoConsultarDados, requisicaoSalvarAlteracoes } from "../../../requisicoesGaragem";
import Spinner from "../../../../../components/spinner/spinner";
import ModalErroGaragemMinhaConta from "./modal/modal-erro/ModalErroGaragemMinhaConta";
import ModalSucessoGaragemMinhaConta from "./modal/moda-sucesso/ModalSucessoGaragemMinhaConta";

function GaragemMinhaConta() {
    // FUNCIONALIDADE DE COMPONENTES
    const [mudarArrow, setMudarArrow] = useState(false);
    const [aparecerSpinner, setAparecerSpinner] = useState(false);
    const [aparecerModalError, setAparecerModalError] = useState(false);
    const [aparecerModalSucesso, setAparecerModalSucesso] = useState(false);

    // OBJETO DE MANIPULAÇÃO E CONTROLE DOS INPUTS/DADOS
    interface CampoControle {
        valor: string;
        validarInput: boolean;
        mensagemNaoValido: string;
        valorJaExiste: boolean;
    }
    interface ControleDosInputs {
        email: CampoControle;
        user: CampoControle;
        genero: CampoControle;
        dataDeNascimento: CampoControle;
        cpf: CampoControle;
        cep: CampoControle;
        estado: CampoControle;
        cidade: CampoControle;
        telefone: CampoControle;
    }


    const [controleDosInputs, setControleDosInputs] = useState<ControleDosInputs>({
        email: {
            valor: "",
            validarInput: false,
            mensagemNaoValido: "",
            valorJaExiste: false,
        },
        user: {
            valor: "",
            validarInput: false,
            mensagemNaoValido: "",
            valorJaExiste: false,
        },
        genero: {
            valor: "",
            validarInput: false,
            mensagemNaoValido: "",
            valorJaExiste: false,
        },
        dataDeNascimento: {
            valor: "",
            validarInput: false,
            mensagemNaoValido: "",
            valorJaExiste: false,
        },
        cpf: {
            valor: "",
            validarInput: false,
            mensagemNaoValido: "",
            valorJaExiste: false,
        },
        cep: {
            valor: "",
            validarInput: false,
            mensagemNaoValido: "",
            valorJaExiste: false,
        },
        estado: {
            valor: "",
            validarInput: false,
            mensagemNaoValido: "",
            valorJaExiste: false,
        },
        cidade: {
            valor: "",
            validarInput: false,
            mensagemNaoValido: "",
            valorJaExiste: false,
        },
        telefone: {
            valor: "",
            validarInput: false,
            mensagemNaoValido: "",
            valorJaExiste: false,
        },
    })

    //PODER ENVIAR ALTERAÇÕES AO BANCO DE DADOS E SALVÁ-LAS
    const [enviarAlteracoes, SetEnviarAlteracoes] = useState(false);
    // VERIFICA SE TODOS OS VALORES NÃO PREENCHIDOS JÁ ESTÃO PREENCHIDOS, PARA PODER SALVAR AS ALTERAÇÕES
    useEffect(() => {
        if (controleDosInputs.email.validarInput && controleDosInputs.user.validarInput && controleDosInputs.dataDeNascimento.validarInput && controleDosInputs.cpf.validarInput && controleDosInputs.cep.validarInput && controleDosInputs.estado.validarInput && controleDosInputs.cidade.validarInput && controleDosInputs.telefone.validarInput) {
            SetEnviarAlteracoes(true)
        } else {
            SetEnviarAlteracoes(false)
        };
    }, [controleDosInputs.email.validarInput, controleDosInputs.user.validarInput, controleDosInputs.dataDeNascimento.validarInput, controleDosInputs.cpf.validarInput, controleDosInputs.cep.validarInput, controleDosInputs.estado.validarInput, controleDosInputs.cidade.validarInput, controleDosInputs.telefone.validarInput])

    // ESTA FUNÇÃO ATUALIZA O OBJETO DE MANEIRA SIMPLES, RÁPIDO E PRÁTICO... DEIXANDO O CÓDIGO MAIS LIMPO
    function atualizarCampo(campo: string, novosValores: Partial<typeof controleDosInputs[keyof typeof controleDosInputs]>) {
        setControleDosInputs((prevState) => ({
            ...prevState,
            [campo]: {
                ...prevState[campo],
                ...novosValores,
            },
        }));
    };


    // VERIFICAR SE APÓS O LOGIN O BANCO DE DADOS RETORONOU DADOS PARA A UTILIZAÇÃO DO USER
    function verificarDados() {
        if (DADOS_DO_USUARIO.email !== null) {
            atualizarCampo("email", { valor: DADOS_DO_USUARIO.email, validarInput: true, valorJaExiste: true })
        } else {
            atualizarCampo("email", { valor: "", validarInput: false, valorJaExiste: false })
        }
        if (DADOS_DO_USUARIO.user !== null) {
            atualizarCampo("user", { valor: DADOS_DO_USUARIO.user, validarInput: true, valorJaExiste: true })
        } else {
            atualizarCampo("user", { valor: "", validarInput: false, valorJaExiste: false })
        }
        if (DADOS_DO_USUARIO.genero !== null) {
            atualizarCampo("genero", { valor: DADOS_DO_USUARIO.genero, validarInput: true, valorJaExiste: true })
        } else {
            atualizarCampo("genero", { valor: "", validarInput: false, valorJaExiste: false })
        }
        if (DADOS_DO_USUARIO.data_de_nascimento !== null) {
            atualizarCampo("dataDeNascimento", { valor: DADOS_DO_USUARIO.data_de_nascimento, validarInput: true, valorJaExiste: true })
        } else {
            atualizarCampo("dataDeNascimento", { valor: "", validarInput: false, valorJaExiste: false })
        }
        if (DADOS_DO_USUARIO.cpf !== null) {
            atualizarCampo("cpf", { valor: DADOS_DO_USUARIO.cpf, validarInput: true, valorJaExiste: true })
        } else {
            atualizarCampo("cpf", { valor: "", validarInput: false, valorJaExiste: false })
        }
        if (DADOS_DO_USUARIO.cep !== null) {
            atualizarCampo("cep", { valor: DADOS_DO_USUARIO.cep, validarInput: true, valorJaExiste: true })
        } else {
            atualizarCampo("cep", { valor: "", validarInput: false, valorJaExiste: false })
        }
        if (DADOS_DO_USUARIO.cidade !== null) {
            atualizarCampo("cidade", { valor: DADOS_DO_USUARIO.cidade, validarInput: true, valorJaExiste: true })
        } else {
            atualizarCampo("cidade", { valor: "", validarInput: false, valorJaExiste: false })
        }
        if (DADOS_DO_USUARIO.estado !== null) {
            atualizarCampo("estado", { valor: DADOS_DO_USUARIO.estado, validarInput: true, valorJaExiste: true })
        } else {
            atualizarCampo("estado", { valor: "", validarInput: false, valorJaExiste: false })
        }
        if (DADOS_DO_USUARIO.telefone !== null) {
            atualizarCampo("telefone", { valor: DADOS_DO_USUARIO.telefone, validarInput: true, valorJaExiste: true })
        } else {
            atualizarCampo("telefone", { valor: "", validarInput: false, valorJaExiste: false })
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { verificarDados() }, [])

    function selectMudarArrow() {
        setMudarArrow(!mudarArrow);
    };

    function inputGenero(event: { target: { value: string; }; }) {
        const generoAtual = event.target.value;
        atualizarCampo("genero", { valor: generoAtual, validarInput: true });
    };

    function inputDataDeNascimento(event: { target: { value: string; }; }) {
        const valueAtual = event.target.value;
        let novoValor = valueAtual;
        const regex = /^[\d/]+$/;
        if (regex.test(valueAtual)) {

            if (valueAtual.length === 3) {
                if (valueAtual.length < controleDosInputs.dataDeNascimento.valor.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 2) + "/" + valueAtual.slice(2, 3);
            } else if (valueAtual.length === 6) {
                if (valueAtual.length < controleDosInputs.dataDeNascimento.valor.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 5) + "/" + valueAtual.slice(5, 6);
            } else if (valueAtual.length === 11) {
                return
            } else {
                novoValor = valueAtual;
            }
        } else {
            if (valueAtual.length < controleDosInputs.dataDeNascimento.valor.length && valueAtual.length === 0) novoValor = "";
            else return;
        }

        const dataDeNascimentoEValido = validarDataDeNascimento(valueAtual);

        if (dataDeNascimentoEValido[0] && typeof dataDeNascimentoEValido[1] === "string") {
            atualizarCampo("dataDeNascimento", { valor: novoValor, validarInput: true, mensagemNaoValido: dataDeNascimentoEValido[1] });
        } else {
            if (typeof dataDeNascimentoEValido[1] === "string") atualizarCampo("dataDeNascimento", { valor: novoValor, validarInput: false, mensagemNaoValido: dataDeNascimentoEValido[1] });
        };

    };

    function validarDataDeNascimento(data: string) {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;

        if (data.length === 0) {
            return [false, "Campo obrigatório"];
        }

        if (!regex.test(data)) {
            return [false, "Data de nascimento inválida"]; // Data inválida
        }

        // Extrai dia, mês e ano
        const [dia, mes, ano] = data.split("/").map(Number);

        // Constrói a data de nascimento
        const dataNascimento = new Date(ano, mes - 1, dia);

        // Data inválida (ex: 31/02/2023)
        if (dataNascimento.getDate() !== dia || dataNascimento.getMonth() + 1 !== mes || dataNascimento.getFullYear() !== ano) {
            return [false, "Data de nascimento inválida"];
        }

        // Calcula idade
        const hoje = new Date();
        const idade = hoje.getFullYear() - ano;

        if (
            idade > 18 ||
            (idade === 18 &&
                (hoje.getMonth() > mes - 1 || (hoje.getMonth() === mes - 1 && hoje.getDate() >= dia)))
        ) {
            return [true, ""]; // Maior de 18 anos
        }
        return [false, "Não é permitido a criação do anúncio por menor de 18 anos"]; // Menor de 18 anos
    }



    function inputCpf(event: { target: { value: string; }; }) {
        const valueAtual = event.target.value;
        let novoValor = valueAtual;
        const regex = /^[\d.-]+$/;
        const cpfEValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/;

        if (regex.test(valueAtual)) {
            if (valueAtual.length === 4) {
                if (valueAtual.length < controleDosInputs.cpf.valor.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 3) + "." + valueAtual.slice(3, 4);
            } else if (valueAtual.length === 8) {
                if (valueAtual.length < controleDosInputs.cpf.valor.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 7) + "." + valueAtual.slice(7, 8);
            } else if (valueAtual.length === 12) {
                if (valueAtual.length < controleDosInputs.cpf.valor.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 11) + "-" + valueAtual.slice(11, 12);
            } else {
                if (novoValor.length <= 14) {
                    novoValor = valueAtual;
                } else {
                    novoValor = valueAtual.slice(0, 13) + valueAtual.slice(14, 15)
                }
            }
        } else if (novoValor.length < controleDosInputs.cpf.valor.length) {
            atualizarCampo("cpf", { valor: novoValor, validarInput: false, mensagemNaoValido: "Digite um CPF válido" })
        } else return;

        if (novoValor.length === 14 && cpfEValido.test(novoValor)) {
            atualizarCampo("cpf", { valor: novoValor, validarInput: true, mensagemNaoValido: "" })
        } else if (novoValor.length < 14) {
            atualizarCampo("cpf", { valor: novoValor, validarInput: false, mensagemNaoValido: "Digite um CPF válido" })
        } else return;
    }

    async function inputCep(event: { target: { value: string; }; }) {
        const valueAtual = event.target.value;
        let novoValor = valueAtual;
        const regex = /^[0-9-]+$/;

        if (regex.test(valueAtual)) {
            if (valueAtual.length === 6) {
                if (valueAtual.length < controleDosInputs.cep.valor.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 5) + "-" + valueAtual.slice(5, 6);
                atualizarCampo("cep", { valor: novoValor, validarInput: false, mensagemNaoValido: "Campo obrigatório" });
            } else if (valueAtual.length === 10) {
                return
            } else {
                novoValor = valueAtual;
                atualizarCampo("cep", { valor: novoValor, validarInput: false, mensagemNaoValido: "CEP inválido" })
            }
        } else {
            if (valueAtual.length < controleDosInputs.cep.valor.length && valueAtual.length === 0) {
                novoValor = ""
                atualizarCampo("cep", { valor: novoValor, validarInput: false, mensagemNaoValido: "Campo obrigatório" });
            } else return;
        }

        if (novoValor.length === 9) {
            let buscarCepDados: { estado: string; cidade: string; } | undefined;
            try {
                buscarCepDados = await buscarCep(novoValor.slice(0, 5) + novoValor.slice(6, 9))
            } finally {
                if (typeof buscarCepDados === "undefined") {
                    atualizarCampo("cep", { validarInput: false, mensagemNaoValido: "CEP inexistente" });
                    atualizarCampo("estado", { valor: "", validarInput: false });
                    atualizarCampo("cidade", { valor: "", validarInput: false });
                } else {
                    atualizarCampo("cep", { validarInput: true, mensagemNaoValido: "" });
                    atualizarCampo("estado", { valor: buscarCepDados.estado, validarInput: true })
                    atualizarCampo("cidade", { valor: buscarCepDados.cidade, validarInput: true })
                }
            }
        } else {
            atualizarCampo("estado", { valor: "", validarInput: false });
            atualizarCampo("cidade", { valor: "", validarInput: false });
        }
    }

    function inputTelefone(event: { target: { value: string; }; }) {
        const valueAtual = event.target.value;
        let novoValor = valueAtual;
        const regex = /^[\d\-()\s]+$/;
        const regexNumeroValido = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

        if (regex.test(valueAtual)) {
            if (valueAtual.length === 1) {
                if (valueAtual.length < controleDosInputs.telefone.valor.length) novoValor = valueAtual
                else novoValor = "(" + valueAtual;
            } else if (valueAtual.length === 4) {
                if (valueAtual.length < controleDosInputs.telefone.valor.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 3) + ") " + valueAtual.slice(3, 4);
            } else if (valueAtual.length === 11) {
                if (valueAtual.length < controleDosInputs.telefone.valor.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 10) + "-" + valueAtual.slice(10, 11);
            } else if (valueAtual.length === 16) {
                return
            } else {
                novoValor = valueAtual;
            }
        } else {
            if (valueAtual.length < controleDosInputs.telefone.valor.length && valueAtual.length === 0) novoValor = "";
            else return;
        }

        if (regexNumeroValido.test(valueAtual)) {
            atualizarCampo("telefone", { valor: novoValor, validarInput: true, mensagemNaoValido: "" });
        } else if (!regexNumeroValido.test(valueAtual) && valueAtual.length > 0) {
            atualizarCampo("telefone", { valor: novoValor, validarInput: false, mensagemNaoValido: "Telefone inválido" });
        } else {
            atualizarCampo("telefone", { valor: novoValor, validarInput: false, mensagemNaoValido: "Campo obrigatório" });
        }

    };

    function editarTelefone() {
        atualizarCampo("telefone", { valorJaExiste: !controleDosInputs.telefone.valorJaExiste, validarInput: !controleDosInputs.telefone.validarInput });
    }

    async function salvarAlteracoes() {
        setAparecerSpinner(true);

        const dadosParaAlterar: { [key: string]: string | null } = { id: DADOS_DO_USUARIO.id, };
        let requestSalvarAlteracoes: { data: { sucesso: boolean } } | undefined;
        let requestConsultarDados: { data: { encontrado: boolean } } | undefined;

        Object.entries(DADOS_DO_USUARIO).forEach(([chave, valor]) => {
            if (valor === null) {
                switch (chave) {
                    case "genero":
                        if (controleDosInputs.genero.valor == "") {
                            dadosParaAlterar[chave] = null;
                        } else {
                            dadosParaAlterar[chave] = controleDosInputs.genero.valor;
                        }
                        break;
                    case "data_de_nascimento":
                        if (controleDosInputs.dataDeNascimento.valor == "") {
                            dadosParaAlterar[chave] = null;
                        } else {
                            dadosParaAlterar[chave] = controleDosInputs.dataDeNascimento.valor;
                        }
                        break;
                    case "cpf":
                        if (controleDosInputs.cpf.valor == "") {
                            dadosParaAlterar[chave] = null;
                        } else {
                            dadosParaAlterar[chave] = controleDosInputs.cpf.valor;
                        }
                        break;
                    case "cep":
                        if (controleDosInputs.cep.valor == "") {
                            dadosParaAlterar[chave] = null;
                        } else {
                            dadosParaAlterar[chave] = controleDosInputs.cep.valor;
                        }
                        break;
                    case "estado":
                        if (controleDosInputs.estado.valor == "") {
                            dadosParaAlterar[chave] = null;
                        } else {
                            dadosParaAlterar[chave] = controleDosInputs.estado.valor;
                        }
                        break;
                    case "cidade":
                        if (controleDosInputs.cidade.valor == "") {
                            dadosParaAlterar[chave] = null;
                        } else {
                            dadosParaAlterar[chave] = controleDosInputs.cidade.valor;
                        }
                        break;
                    case "telefone":
                        if (controleDosInputs.telefone.valor == "") {
                            dadosParaAlterar[chave] = null;
                        } else {
                            dadosParaAlterar[chave] = controleDosInputs.telefone.valor;
                        }
                        break;
                    default:
                        break;
                }
            }
        });

        try {
            requestSalvarAlteracoes = await requisicaoSalvarAlteracoes(dadosParaAlterar);
        } catch (error) {
            console.log(error);
            setAparecerSpinner(false);
            setAparecerModalError(true);

            setTimeout(() => {
                setAparecerModalError(false);
            }, 1500);
        } finally {
            if (requestSalvarAlteracoes !== undefined && requestSalvarAlteracoes.data.sucesso) {
                try {
                    requestConsultarDados = await requisicaoConsultarDados(String(dadosParaAlterar.id));
                } catch (error) {
                    console.log(error);
                    setAparecerSpinner(false);
                    setAparecerModalError(true);

                    setTimeout(() => {
                        setAparecerModalError(false);
                    }, 1500);
                } finally {
                    if (requestConsultarDados !== undefined && requestConsultarDados.data.encontrado) {
                        setAparecerSpinner(false);
                        setAparecerModalSucesso(true);

                        setTimeout(() => {
                            setAparecerModalSucesso(false);
                        }, 1500);
                    } else {
                        setAparecerSpinner(false);
                        setAparecerModalError(true);

                        setTimeout(() => {
                            setAparecerModalError(false);
                        }, 1500);
                    }
                }

            } else {
                setAparecerSpinner(false)
                setAparecerModalError(true);

                setTimeout(() => {
                    setAparecerModalError(false)
                }, 1500);
            }

        }
    };

    return (
        <>
            {aparecerSpinner ? <Spinner /> : null}
            {aparecerModalError ? <ModalErroGaragemMinhaConta /> : null}
            {aparecerModalSucesso ? <ModalSucessoGaragemMinhaConta /> : null}
            <div className={styles.containerMinhaConta}>
                <div className={styles.containerTituloMinhaConta}>
                    <h2 className={classNames("fonte", styles.tituloMinhaConta)}>Minha Conta</h2>
                </div>

                <div className={styles.containerDuasDiv}>
                    <div className={styles.containerMeusDados}>
                        <div className={styles.containerTituloMeusDados}>
                            <h3 className={classNames("fonte", styles.tituloMeusDados)}>Meus dados</h3>
                            <p className={classNames("fonte", styles.paragrafoCampoObrigatorio)}>Campos com asterisco (*) são obrigatórios</p>
                        </div>

                        <div className={styles.containerInputMeusDados}>
                            <div className={styles.containerInput} >
                                <label className={controleDosInputs.email.valorJaExiste ? classNames("fonte", styles.labelEmail, styles.labelComValueDefinido) : classNames("fonte", styles.labelEmail)}
                                >Email*</label>
                                <input type="text"
                                    placeholder={controleDosInputs.email.valorJaExiste ? DADOS_DO_USUARIO.email : ""}
                                    disabled={controleDosInputs.email.valorJaExiste}
                                    className={controleDosInputs.email.valorJaExiste ? classNames("fonte", styles.input, styles.inputComValueDefinido) : classNames("fonte", styles.input)} />
                            </div>
                            <div className={styles.containerInput}>
                                <label className={controleDosInputs.user.valorJaExiste ? classNames("fonte", styles.labelNomeCompleto, styles.labelComValueDefinido) : classNames("fonte", styles.labelNomeCompleto)}>Nome completo*</label>
                                <input type="text"
                                    placeholder={controleDosInputs.user.valorJaExiste ? DADOS_DO_USUARIO.user : ""}
                                    disabled={controleDosInputs.user.valorJaExiste}
                                    className={controleDosInputs.user.valorJaExiste ? classNames("fonte", styles.input, styles.inputComValueDefinido) : classNames("fonte", styles.input)} />
                            </div>
                            <div className={styles.containerInput}>
                                <label className={controleDosInputs.genero.valorJaExiste ? classNames("fonte", styles.labelGenero, styles.labelComValueDefinido) : classNames("fonte", styles.labelGenero)}
                                >Gênero*</label>
                                {mudarArrow ? <FontAwesomeIcon icon={faAngleUp} className={styles.fontArrowGenero} /> : <FontAwesomeIcon icon={faAngleDown} className={styles.fontArrowGenero} />}
                                <select name="Gênero"
                                    onClick={selectMudarArrow}
                                    onChange={inputGenero}
                                    disabled={controleDosInputs.genero.valorJaExiste}
                                    value={controleDosInputs.genero.valor}
                                    className={controleDosInputs.genero.valorJaExiste ? classNames("fonte", styles.inputSelect, styles.inputComValueDefinido) : classNames("fonte", styles.inputSelect)}>
                                    <option value="" selected disabled></option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Não binário">Não binário</option>
                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                </select>
                            </div>
                            <div className={styles.containerInput}>
                                <label className={controleDosInputs.dataDeNascimento.valorJaExiste ? classNames("fonte", styles.labelDataDeNascimento, styles.labelComValueDefinido) : classNames("fonte", styles.labelDataDeNascimento)}>Data de nascimento*</label>
                                {controleDosInputs.dataDeNascimento.validarInput ? null : <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconDataDeNascimento} />}
                                <input type="text"
                                    onChange={inputDataDeNascimento}
                                    placeholder={controleDosInputs.genero.valorJaExiste ? DADOS_DO_USUARIO.data_de_nascimento : "00/00/0000"}
                                    value={controleDosInputs.genero.valorJaExiste ? DADOS_DO_USUARIO.data_de_nascimento : controleDosInputs.dataDeNascimento.valor}
                                    disabled={controleDosInputs.genero.valorJaExiste}
                                    className={controleDosInputs.genero.valorJaExiste ? classNames("fonte", styles.input, styles.inputComValueDefinido) : classNames("fonte", styles.input)} />
                                <p className={classNames("fonte", styles.pAlertaDataDeNascimento)}>
                                    {controleDosInputs.dataDeNascimento.mensagemNaoValido}
                                </p>
                            </div>
                            <div className={styles.containerInput}>
                                <label className={controleDosInputs.cpf.valorJaExiste ? classNames("fonte", styles.labelCpf, styles.labelComValueDefinido) : classNames("fonte", styles.labelCpf)}>CPF*</label>
                                {controleDosInputs.cpf.validarInput ? null : <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconCpf} />}
                                <input type="text"
                                    onChange={inputCpf}
                                    placeholder={controleDosInputs.cpf.valorJaExiste ? DADOS_DO_USUARIO.cpf : "000.000.000-00"}
                                    value={controleDosInputs.cpf.valorJaExiste ? DADOS_DO_USUARIO.cpf : controleDosInputs.cpf.valor}
                                    disabled={controleDosInputs.cpf.valorJaExiste}
                                    className={controleDosInputs.cpf.valorJaExiste ? classNames("fonte", styles.input, styles.inputComValueDefinido) : classNames("fonte", styles.input)} />
                                <p className={classNames("fonte", styles.pAlertaCpf)}>
                                    {controleDosInputs.cpf.mensagemNaoValido}
                                </p>
                            </div>
                        </div>

                        <div className={styles.containerAviso}>
                            <p className={classNames("fonte", styles.paragrafoAviso)}>Ao prosseguir, eu declaro ter ciência de que este cadastro é somente para maiores de 18 anos.</p>
                        </div>
                    </div>

                    <div className={styles.containerMeuEnderecoEContato}>
                        <div className={styles.containerTituloMeuEnderecoEContato}>
                            <h3 className={classNames("fonte", styles.tituloMeuEnderecoEContato)}>Meu endereço e contato</h3>
                            <p className={classNames("fonte", styles.paragrafoCampoObrigatorio)}>Campos com asterisco (*) são obrigatórios</p>
                        </div>

                        <div className={styles.containerInputMeuEnderecoEContato}>
                            <div className={styles.containerInput}>
                                <label className={controleDosInputs.cep.valorJaExiste ? classNames("fonte", styles.labelCep, styles.labelComValueDefinido) : classNames("fonte", styles.labelCep)}>Cep*</label>
                                {controleDosInputs.cep.validarInput ? null : <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconCep} />}
                                <input type="text"
                                    onChange={inputCep}
                                    placeholder={controleDosInputs.cep.valorJaExiste ? DADOS_DO_USUARIO.cep : "00000-000"}
                                    value={controleDosInputs.cep.valorJaExiste ? DADOS_DO_USUARIO.cep : controleDosInputs.cep.valor}
                                    disabled={controleDosInputs.cep.valorJaExiste}
                                    className={controleDosInputs.cep.valorJaExiste ? classNames("fonte", styles.input, styles.inputComValueDefinido) : classNames("fonte", styles.input)} />
                                <p className={classNames("fonte", styles.pAlertaCep)}>
                                    {controleDosInputs.cep.mensagemNaoValido}
                                </p>
                            </div>
                            <div className={styles.containerInputMeuEnderecoEContatoDuasDiv}>
                                <label className={classNames("fonte", styles.labelCidade, styles.labelComValueDefinido)}>Estado*</label>
                                <input type="text"
                                    placeholder={controleDosInputs.estado.valorJaExiste ? DADOS_DO_USUARIO.estado : controleDosInputs.estado.valor}
                                    disabled={true}
                                    className={classNames("fonte", styles.inputDuasDiv, styles.inputComValueDefinido)} />
                                <label className={classNames("fonte", styles.labelEstado, styles.labelComValueDefinido)}>Cidade*</label>
                                <input type="text"
                                    placeholder={controleDosInputs.cidade.valorJaExiste ? DADOS_DO_USUARIO.cidade : controleDosInputs.estado.valor}
                                    disabled={true}
                                    className={classNames("fonte", styles.inputDuasDiv, styles.inputComValueDefinido)} />
                            </div>
                            <div className={styles.containerInput}>
                                <label className={controleDosInputs.telefone.valorJaExiste ? classNames("fonte", styles.labelTelefone, styles.labelComValueDefinido) : classNames("fonte", styles.labelTelefone)}>Telefone*</label>
                                {controleDosInputs.telefone.validarInput ? null : <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconTelefone} />}
                                {controleDosInputs.telefone.valorJaExiste ? <label className={classNames("fonte", styles.labelEditar)} onClick={editarTelefone}>Editar</label> : null}
                                <input type="text"
                                    placeholder={controleDosInputs.telefone.valorJaExiste ? DADOS_DO_USUARIO.telefone : "(00) 00000-0000"}
                                    disabled={controleDosInputs.telefone.valorJaExiste}
                                    className={controleDosInputs.telefone.valorJaExiste ? classNames("fonte", styles.input, styles.inputComValueDefinido) : classNames("fonte", styles.input)}
                                    onChange={inputTelefone}
                                    value={controleDosInputs.telefone.valor}
                                />
                                <p className={classNames("fonte", styles.pAlertaTelefone)}>
                                    {controleDosInputs.telefone.mensagemNaoValido}
                                </p>
                            </div>
                        </div>

                        <div className={styles.containerAvisoMeuEnderecoEContato}>
                            <p className={classNames("fonte", styles.paragrafoAvisoMeuEnderecoEContatoSemChecklist)}>
                                Uma vez alterado o número de celular, a próxima alteração só poderá ser feita após 24 horas.
                            </p>
                            <div className={styles.containerParagrafoComChecklist}>
                                <input type="checkbox" className={classNames("fonte", styles.inputCheckedAviso)} />
                                <p className={classNames("fonte", styles.paragrafoAvisoMeuEnderecoEContatoComChecklist)}>Exibir meu telefone no anúncio</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.containerButtonSalvarAlteracao}>
                    <button className={enviarAlteracoes ? classNames("fonte", styles.buttonSalvarAlteracao, styles.buttonAtivarButton) : classNames("fonte", styles.buttonSalvarAlteracao)} onClick={enviarAlteracoes ? salvarAlteracoes : undefined}>Salvar alterações</button>
                </div>
            </div >
        </>

    )
}

export default GaragemMinhaConta;
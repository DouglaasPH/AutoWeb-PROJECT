import styles from "./garagemMinhaConta.module.css";
import "../../../../../App.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { faAngleDown, faAngleUp, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DADOS_DO_USUARIO from "../../../../../dados da conta/dados_da_conta";
import { buscarCep } from "../../../requisicoesGaragem";

function GaragemMinhaConta() {
    const [valueInputGenero, setValueInputGenero] = useState("");
    const [valueInputDataDeNascimento, setValueInputDataDeNascimento] = useState("");
    const [valueInputCpf, setValueInputCpf] = useState("");
    const [valueInputTelefone, setValueInputTelefone] = useState("");
    const [valueInputCep, setValueInputCep] = useState("");
    const [valueInputEstado, setValueInputEstado] = useState("");
    const [valueInputCidade, setValueInputCidade] = useState("");
    const [mudarArrow, setMudarArrow] = useState(false);
    const [emailDoUsuario, setEmailDoUsuario] = useState(false);
    const [nomeDoUsuario, setNomeDoUsuario] = useState(false);
    const [generoDoUsuario, setGeneroDoUsuario] = useState(false);
    const [dataDeNascimentoDoUsuario, setDataDeNascimentoDoUsuario] = useState(false);
    const [cpfDoUsuario, setCpfDoUsuario] = useState(false);
    const [cepDoUsuario, setCepDoUsuario] = useState(false);
    const [cidadeDoUsuario, setCidadeDoUsuario] = useState(false);
    const [estadoDoUsuario, setEstadoDoUsuario] = useState(false);
    const [telefoneDoUsuario, setTelefoneDoUsuario] = useState(false);
    const [dataDeNascimentoValido, setDataDeNascimentoValido] = useState([true, ""]);
    const [cpfValido, setCpfValido] = useState([true, ""]);
    const [cepValido, setCepValido] = useState([true, ""]);
    const [estadoValido, setEstadoValido] = useState([true, ""]);
    const [cidadeValido, setCidadeValido] = useState([true, ""]);
    const [telefoneValido, setTelefoneValido] = useState([true, ""]);

    function selectMudarArrow() {
        setMudarArrow(!mudarArrow);
    };

    function inputGenero(event: { target: { value: string; }; }) {
        const generoAtual = event.target.value;
        setValueInputGenero(generoAtual);
    };

    function inputDataDeNascimento(event: { target: { value: string; }; }) {
        const valueAtual = event.target.value;
        let novoValor = valueAtual;
        const regex = /^[\d/]+$/;
        if (regex.test(valueAtual)) {

            if (valueAtual.length === 3) {
                if (valueAtual.length < valueInputDataDeNascimento.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 2) + "/" + valueAtual.slice(2, 3);
            } else if (valueAtual.length === 6) {
                if (valueAtual.length < valueInputDataDeNascimento.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 5) + "/" + valueAtual.slice(5, 6);
            } else if (valueAtual.length === 11) {
                console.log(valueAtual)
                return
            } else {
                novoValor = valueAtual;
            }
        } else {
            if (valueAtual.length < valueInputDataDeNascimento.length && valueAtual.length === 0) novoValor = "";
            else return;
        }

        setValueInputDataDeNascimento(novoValor);
        const dataDeNascimentoEValido = validarDataNascimento(valueAtual);

        if (dataDeNascimentoEValido[0]) {
            setDataDeNascimentoValido(dataDeNascimentoEValido);
        } else setDataDeNascimentoValido(dataDeNascimentoEValido);

    };

    function validarDataNascimento(data: string) {
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
                if (valueAtual.length < valueInputCpf.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 3) + "." + valueAtual.slice(3, 4);
            } else if (valueAtual.length === 8) {
                if (valueAtual.length < valueInputCpf.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 7) + "." + valueAtual.slice(7, 8);
            } else if (valueAtual.length === 12) {
                if (valueAtual.length < valueInputCpf.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 11) + "-" + valueAtual.slice(11, 12);
            } else if (valueAtual.length === 15) {
                return
            } else {
                novoValor = valueAtual;
            }
        } else {
            if (valueAtual.length < valueInputCpf.length && valueAtual.length === 0) {
                novoValor = ""
            } else return;
        }

        setValueInputCpf(novoValor);

        if (cpfEValido.test(valueAtual)) {
            setCpfValido([true, ""]);
        } else if (!cpfEValido.test(valueAtual) && valueAtual.length === 0) {
            setCpfValido([false, "Campo obrigatório"]);
        } else setCpfValido([false, "Digite um CPF válido"]);
    }

    async function inputCep(event: { target: { value: string; }; }) {
        const valueAtual = event.target.value;
        let novoValor = valueAtual;
        const regex = /^[0-9-]+$/;

        if (regex.test(valueAtual)) {
            if (valueAtual.length === 6) {
                if (valueAtual.length < valueInputCep.length) novoValor = valueAtual
                else novoValor = valueAtual.slice(0, 5) + "-" + valueAtual.slice(5, 6);
            } else if (valueAtual.length === 10) {
                return
            } else {
                novoValor = valueAtual;
                setCepValido([false, "CEP inválido"]);
            }
        } else {
            if (valueAtual.length < valueInputCep.length && valueAtual.length === 0) {
                novoValor = ""
                setCepValido([false, "Campo obrigatório"]);
            } else return;
        }

        // Atualiza o estado
        setValueInputCep(novoValor);
        // Lógica pós-atualização do estado
        if (novoValor.length === 9) {
            let buscarCepDados: { estado: string; cidade: string; } | undefined;
            try {
                buscarCepDados = await buscarCep(novoValor.slice(0, 5) + novoValor.slice(6, 9))
                if (buscarCepDados) {
                    setValueInputEstado(buscarCepDados.estado);
                    setValueInputCidade(buscarCepDados.cidade);
                }
            } finally {
                console.log(typeof buscarCepDados.estado);
                if (typeof buscarCepDados.estado === "undefined") {
                    setValueInputEstado("");
                    setValueInputCidade("");
                    setCepValido([false, "CEP inexistente"]);
                } else {
                    setCepValido([true, ""]);
                }
            }
        } else {
            setValueInputEstado("");
            setValueInputCidade("");
        }
    }

    function inputTelefone(event: { target: { value: string; }; }) {
        const valueAtual = event.target.value;
        const regex = /^[\d\-()\s]+$/;
        const regexNumeroValido = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

        if (regex.test(valueAtual)) {
            if (valueAtual.length === 1) {
                if (valueAtual.length < valueInputTelefone.length) setValueInputTelefone(valueAtual)
                else setValueInputTelefone("(" + valueAtual);
            } else if (valueAtual.length === 4) {
                if (valueAtual.length < valueInputTelefone.length) setValueInputTelefone(valueAtual)
                else setValueInputTelefone(valueAtual.slice(0, 3) + ") " + valueAtual.slice(3, 4));
            } else if (valueAtual.length === 11) {
                if (valueAtual.length < valueInputTelefone.length) setValueInputTelefone(valueAtual)
                else setValueInputTelefone(valueAtual.slice(0, 10) + "-" + valueAtual.slice(10, 11));
            } else if (valueAtual.length === 16) {
                return
            } else {
                setValueInputTelefone(valueAtual);
            }
        } else {
            if (valueAtual.length < valueInputTelefone.length && valueAtual.length === 0) setValueInputTelefone("")
            else return;
        }

        if (regexNumeroValido.test(valueAtual)) {
            setTelefoneValido([true, ""]);
        } else if (!regexNumeroValido.test(valueAtual) && valueAtual.length > 0) {
            setTelefoneValido([false, "Telefone inválido"]);
        } else {
            setTelefoneValido([false, "Campo obrigatório"]);
        }

    };


    function verificarDados() {
        if (DADOS_DO_USUARIO.email !== null) {
            setEmailDoUsuario(true);
        } else setEmailDoUsuario(false);
        if (DADOS_DO_USUARIO.user !== null) {
            setNomeDoUsuario(true);
        } else setNomeDoUsuario(false);
        if (DADOS_DO_USUARIO.genero !== null) {
            setValueInputGenero(DADOS_DO_USUARIO.genero);
            setGeneroDoUsuario(true);
        } else setGeneroDoUsuario(false);
        if (DADOS_DO_USUARIO.data_de_nascimento !== null) {
            console.log(DADOS_DO_USUARIO);
            setDataDeNascimentoDoUsuario(true);
        } else setDataDeNascimentoDoUsuario(false);
        if (DADOS_DO_USUARIO.cpf !== null) {
            setCpfDoUsuario(true);
        } else setCpfDoUsuario(false);
        if (DADOS_DO_USUARIO.cep !== null) {
            setCepDoUsuario(true);
        } else setCepDoUsuario(false);
        if (DADOS_DO_USUARIO.cidade !== null) {
            setCidadeDoUsuario(true);
        } else setCidadeDoUsuario(false);
        if (DADOS_DO_USUARIO.estado !== null) {
            setEstadoDoUsuario(true);
        } else setEstadoDoUsuario(false);
        if (DADOS_DO_USUARIO.telefone !== null) {
            setTelefoneDoUsuario(true);
        } else setTelefoneDoUsuario(false);
    }

    useEffect(() => verificarDados());

    function enviarAlteracoes() {
        // TODO
    };

    return (
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
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.labelEmail)}>Email*</label>
                            <input type="text" placeholder={emailDoUsuario ? DADOS_DO_USUARIO.email : ""} disabled={emailDoUsuario ? true : false} className={classNames("fonte", styles.input)} />
                        </div>
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.labelNomeCompleto)}>Nome completo*</label>
                            <input type="text" placeholder={nomeDoUsuario ? DADOS_DO_USUARIO.user : ""} disabled={nomeDoUsuario ? true : false} className={classNames("fonte", styles.input)} />
                        </div>
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.labelGenero)}>Gênero*</label>
                            {mudarArrow ? <FontAwesomeIcon icon={faAngleUp} className={styles.fontArrowGenero} /> : <FontAwesomeIcon icon={faAngleDown} className={styles.fontArrowGenero} />}
                            <select name="Gênero"
                                onClick={selectMudarArrow}
                                onChange={inputGenero}
                                disabled={generoDoUsuario}
                                value={valueInputGenero ? valueInputGenero : ""}
                                className={classNames("fonte", styles.inputSelect)}>
                                <option value="" selected disabled></option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Não binário">Não binário</option>
                                <option value="Prefiro não informar">Prefiro não informar</option>
                            </select>
                        </div>
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.labelDataDeNascimento)}>Data de nascimento*</label>
                            {dataDeNascimentoValido[0] ? null : <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconDataDeNascimento} />}
                            <input type="text"
                                onChange={inputDataDeNascimento}
                                placeholder={dataDeNascimentoDoUsuario ? DADOS_DO_USUARIO.data_de_nascimento : "00/00/0000"}
                                value={dataDeNascimentoDoUsuario ? DADOS_DO_USUARIO.data_de_nascimento : valueInputDataDeNascimento}
                                disabled={dataDeNascimentoDoUsuario ? true : false}
                                className={classNames("fonte", styles.input)} />
                            <p className={classNames("fonte", styles.pAlertaDataDeNascimento)}>
                                {dataDeNascimentoValido[1]}
                            </p>
                        </div>
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.labelCpf)}>CPF*</label>
                            {cpfValido[0] ? null : <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconCpf} />}
                            <input type="text"
                                onChange={inputCpf}
                                placeholder={cpfDoUsuario ? DADOS_DO_USUARIO.cpf : "000.000.000-00"}
                                value={cpfDoUsuario ? DADOS_DO_USUARIO.cpf : valueInputCpf}
                                disabled={cpfDoUsuario}
                                className={classNames("fonte", styles.input)} />
                            <p className={classNames("fonte", styles.pAlertaCpf)}>
                                {cpfValido[1]}
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
                            <label className={classNames("fonte", styles.labelCep)}>Cep*</label>
                            {cepValido[0] ? null : <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconCep} />}
                            <input type="text"
                                onChange={inputCep}
                                placeholder={cepDoUsuario ? DADOS_DO_USUARIO.cep : "00000-000"}
                                value={cepDoUsuario ? DADOS_DO_USUARIO.cep : valueInputCep}
                                disabled={cepDoUsuario}
                                className={classNames("fonte", styles.input)} />
                            <p className={classNames("fonte", styles.pAlertaCep)}>
                                {cepValido[1]}
                            </p>
                        </div>
                        <div className={styles.containerInputMeuEnderecoEContatoDuasDiv}>
                            <label className={classNames("fonte", styles.labelCidade)}>Estado*</label>
                            <input type="text"
                                placeholder={estadoDoUsuario ? DADOS_DO_USUARIO.estado : valueInputEstado}
                                disabled={true}
                                className={classNames("fonte", styles.inputDuasDiv)} />
                            <label className={classNames("fonte", styles.labelEstado)}>Cidade*</label>
                            <input type="text"
                                placeholder={cidadeDoUsuario ? DADOS_DO_USUARIO.cidade : valueInputCidade}
                                disabled={true}
                                className={classNames("fonte", styles.inputDuasDiv)} />
                        </div>
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.labelTelefone)}>Telefone*</label>
                            {telefoneValido[0] ? null : <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconTelefone} />}
                            {telefoneDoUsuario ? <label className={classNames("fonte", styles.labelEditar)}>Editar</label> : null}
                            <input type="text"
                                placeholder={telefoneDoUsuario ? DADOS_DO_USUARIO.telefone : "(00) 00000-0000"}
                                disabled={telefoneDoUsuario}
                                className={classNames("fonte", styles.input)}
                                onChange={inputTelefone}
                                value={valueInputTelefone}
                            />
                            <p className={classNames("fonte", styles.pAlertaTelefone)}>
                                {telefoneValido[1]}
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
                <button className={classNames("fonte", styles.buttonSalvarAlteracao)} onclick={enviarAlteracoes}>Salvar alterações</button>
            </div>
        </div>
    )
}

export default GaragemMinhaConta;

/* 
                            <input type="text" className={classNames("fonte", styles.input)} />
*/
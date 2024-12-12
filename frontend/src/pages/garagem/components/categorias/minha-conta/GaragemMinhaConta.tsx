import styles from "./garagemMinhaConta.module.css";
import "../../../../../App.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DADOS_DO_USUARIO from "../../../../../dados da conta/dados_da_conta";

function GaragemMinhaConta() {
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

    console.log(DADOS_DO_USUARIO)

    function mudarArrowGenero() {
        setMudarArrow(!mudarArrow);
    };

    function verificarDados() {
        if (DADOS_DO_USUARIO.email !== null) {
            setEmailDoUsuario(true);
        } else setEmailDoUsuario(false);
        if (DADOS_DO_USUARIO.user !== null) {
            setNomeDoUsuario(true);
        } else setNomeDoUsuario(false);
        if (DADOS_DO_USUARIO.genero !== null) {
            setGeneroDoUsuario(true);
        } else setGeneroDoUsuario(false);
        if (DADOS_DO_USUARIO.dataDeNascimento !== null) {
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
        if (DADOS_DO_USUARIO.telefone !== null || DADOS_DO_USUARIO.telefone !== undefined) {
            console.log(typeof DADOS_DO_USUARIO.telefone)
            setTelefoneDoUsuario(true);
        } else setTelefoneDoUsuario(false);
    }

    useEffect(() => verificarDados());

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
                            <label className={classNames("fonte", styles.labelEmail)}>Email</label>
                            <input type="text" placeholder={emailDoUsuario ? DADOS_DO_USUARIO.email : ""} disabled={emailDoUsuario ? true : false} className={classNames("fonte", styles.input)} />
                        </div>
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.labelNomeCompleto)}>Nome completo</label>
                            <input type="text" placeholder={nomeDoUsuario ? DADOS_DO_USUARIO.user : ""} disabled={nomeDoUsuario ? true : false} className={classNames("fonte", styles.input)} />
                        </div>
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.labelGenero)}>Gênero</label>
                            {mudarArrow ? <FontAwesomeIcon icon={faAngleUp} className={styles.fontArrowGenero} /> : <FontAwesomeIcon icon={faAngleDown} className={styles.fontArrowGenero} />}
                            <select name="Gênero" disabled={generoDoUsuario ? true : false} value={generoDoUsuario ? DADOS_DO_USUARIO.genero : ""} className={classNames("fonte", styles.inputSelect)}>
                                <option value="" selected disabled></option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Não binário">Não binário</option>
                                <option value="Prefiro não informar">Prefiro não informar</option>
                            </select>
                        </div>
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.labelDataDeNascimento)}>Data de nascimento</label>
                            <input type="text" placeholder={dataDeNascimentoDoUsuario ? DADOS_DO_USUARIO.data_de_nascimento : ""} disabled={dataDeNascimentoDoUsuario ? true : false} className={classNames("fonte", styles.input)} />
                        </div>
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.labelCpf)}>CPF</label>
                            <input type="number" placeholder={cpfDoUsuario ? DADOS_DO_USUARIO.cpf : ""} disabled={cpfDoUsuario ? true : false} className={classNames("fonte", styles.input)} />
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
                            <label className={classNames("fonte", styles.labelCep)}>Cep</label>
                            <input type="text" placeholder={cepDoUsuario ? DADOS_DO_USUARIO.cep : ""} disabled={cepDoUsuario ? true : false} className={classNames("fonte", styles.input)} />
                        </div>
                        <div className={styles.containerInputMeuEnderecoEContatoDuasDiv}>
                            <label className={classNames("fonte", styles.labelEstado)}>Cidade</label>
                            <input type="text" placeholder={cidadeDoUsuario ? DADOS_DO_USUARIO.cidade : ""} disabled={cidadeDoUsuario ? true : false} className={classNames("fonte", styles.inputDuasDiv)} />
                            <label className={classNames("fonte", styles.labelCidade)}>Estado</label>
                            <input type="text" placeholder={estadoDoUsuario ? DADOS_DO_USUARIO.estado : ""} disabled={estadoDoUsuario ? true : false} className={classNames("fonte", styles.inputDuasDiv)} />
                        </div>
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.labelTelefone)}>Telefone</label>
                            {telefoneDoUsuario ? <label className={classNames("fonte", styles.labelEditar)}>Editar</label> : null}
                            <input type="text" placeholder={telefoneDoUsuario ? DADOS_DO_USUARIO.telefone : ""} disabled={telefoneDoUsuario ? true : false} className={classNames("fonte", styles.input)} />
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
                <button className={classNames("fonte", styles.buttonSalvarAlteracao)}>Salvar alterações</button>
            </div>
        </div>
    )
}

export default GaragemMinhaConta;

/* 
                            <input type="text" className={classNames("fonte", styles.input)} />
*/
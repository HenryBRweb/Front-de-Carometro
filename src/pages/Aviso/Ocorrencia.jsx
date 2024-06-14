import React from "react";
import "./Ocorrencia.css";
import { Link } from "react-router-dom";
import Seta from "../img/seta-esquerda.png";
import Button from 'react-bootstrap/Button';

function Ocorrencia() {
    return (

        <>

            <div class="geral-forms">
                <div class="formulario">
                    <Link to="/tela1">
                        <img className="seta" src={Seta} />
                    </Link>
                    <div class="geral-aluno">
                        <div class="ocorrencia-aluno">
                            <h2>Formulário de Ocorrência do Aluno</h2>
                            <label class="nome">Nome do Aluno:</label>
                            <input type="text" id="nome" />
                            <label class="matricula">Matrícula:</label>
                            <input type="text" id="matricula" />
                            <label class="turma">Turma:</label>
                            <input type="text" id="turma" />
                            <label class="data">Data:</label>
                            <input type="date" id="data" />

                            <label class="tipo">Tipo de Ocorrência:</label>
                            <select id="tipo">
                                <option value="">Selecione o tipo</option>
                                <option value="Indisciplina">Indisciplina</option>
                                <option value="Atraso">Atraso</option>
                                <option value="Comportamento">Comportamento</option>
                                <option value="Outro">Outro</option>
                            </select>

                            <label class="descricao">Descrição detalhada da ocorrência:</label>
                            <textarea id="descricao"></textarea>

                            <button type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}

export default Ocorrencia;

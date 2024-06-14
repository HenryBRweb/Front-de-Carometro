import "./tela1.css"
import { Link } from "react-router-dom";
import Seta from "../img/seta-esquerda.png";
import Button from 'react-bootstrap/Button';
import Fausto from "../img/fastocrack.jpg";


function Tela1(){
    return (
        <>
            <div className="geral-tela1">
                <div class="meio">
                    <Link to="/idev2">
                        <img className="seta" src={Seta} />
                    </Link>
                    <div className="img-fausto">
                        <img src={Fausto} className="fausto" />
                    </div>
                    <div className="infos">
                        <div className="infos-child">
                            <div className="nome">
                                <h4>Nome:</h4>
                                <p className="nome-1">Fausto crack</p>
                            </div>
                            <div className="tel-resp">
                                <h4>Tel. responsável:</h4>
                                <p className="cell">xxxxx-xxxx</p>
                            </div>
                            <div className="nome-resp">
                                <h4>Nome do responsável:</h4>
                                <p className="nome-resp-p">Jubileu</p>
                            </div>
                            <div className="buttons-tela1">
                                <Button href="/ocorrencia" id="button-tela1">Ocorrência</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tela1;
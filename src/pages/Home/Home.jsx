import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Navbar";

import Idev1 from "../img/idev1.jpeg";
import Idev2 from "../img/idev2.jpeg";
import Null from "../img/null.jpeg";
import Elec1 from "../img/elecmec1.jpeg";
import Elec2 from "../img/elecmec2.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <>
      <Header />
      <div className="geral-home">
        {/*IDEV*/}

        <div class="flex_titulo">
          <h4 id="titulo_design">
            <strong className="strong">Indíce de Desenvolvimento de Sistemas</strong>
          </h4>
        </div>

        <div class="img_flex">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Idev1} />
            <Card.Body>
              <Card.Title>IDEV-1</Card.Title>
              <Card.Text className="strong">
                Terceiro ano do curso técnico de Desenvolvimento de Sistemas.
                Para saber mais dessa turma clique no botão abaixo.
              </Card.Text>
              <Button href="/idev1" variant="btn btn-dark">Visitar Turma</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Idev2} />
            <Card.Body>
              <Card.Title>IDEV-2</Card.Title>
              <Card.Text className="strong">
                Segundo ano do curso técnico de Desenvolvimento de Sistemas.
                Para saber mais dessa turma clique no botão abaixo.
              </Card.Text>
              <Button href="/idev2" variant="btn btn-dark">Visitar Turma </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Null}/>
            <Card.Body>
              <Card.Title>IDEV-3</Card.Title>
              <Card.Text className="strong">
                Primeiro ano do curso técnico de Desenvolvimento de Sistemas.
                Para saber mais dessa turma clique no botão abaixo.
              </Card.Text>
              <Button href="/idev3" variant="btn btn-dark">Visitar Turma</Button>
            </Card.Body>
          </Card>
        </div>

        {/*ELEC-MEC*/}

        <div class="flex_titulo">
          <h4 id="titulo_design">
            <strong className="strong">EletroEletrônica e Mecânica</strong>
          </h4>
        </div>

        <div class="img_flex">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Elec1} />
            <Card.Body>
              <Card.Title>IELE-IMEC1</Card.Title>
              <Card.Text className="strong">
                Terceiro ano do curso técnico de EletroEletrônica e Mecânica.
                Para saber mais dessa turma clique no botão abaixo.
              </Card.Text>
              <Button href="/elec1" variant="btn btn-dark">Visitar Turma</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Elec2} />
            <Card.Body>
              <Card.Title>IELE-IMEC2</Card.Title>
              <Card.Text className="strong">
                Segundo ano do curso técnico de EletroEletrônica e Mecânica.
                Para saber mais dessa turma clique no botão abaixo.
              </Card.Text>
              <Button href="/elec2" variant="btn btn-dark">Visitar Turma</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Null} />
            <Card.Body>
              <Card.Title>IELE-IMEC3</Card.Title>
              <Card.Text className="strong">
                Primeiro ano do curso técnico de EletroEletrônica e Mecânica.
                Para saber mais dessa turma clique no botão abaixo.
              </Card.Text>
              <Button href="/elec3" variant="btn btn-dark">Visitar Turma</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;

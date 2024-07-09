import React from "react";
import { Link } from "react-router-dom";
import diegoImage from './assets/diego.jpeg';
import diegoCurri from './assets/curriculum-diego.pdf';
import manzaImage from './assets/manza.jpeg';
import manzaCurri from './assets/curriculum-manza.pdf';
import jonaImage from './assets/jona.jpeg';
import jonaCurri from './assets/curriculum Vitae-jona.pdf';

const Alumnos = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <p className="navbar-brand">Administración de proyectos</p>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/conceptos"
                                >
                                    Conceptos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/alumnos">
                                    Alumnos
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="/calculadoras"
                                >
                                    Calculadoras
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center border-dark">
                            <img
                                src={diegoImage}
                                className="card-img-top"
                                alt="Diego Gonzalez Herrera"
                            />
                            <div className="card-header border-dark">
                                Diego Gonzalez Herrera
                            </div>
                            <a
                                href={diegoCurri}
                                className="btn btn-primary"
                            >
                                Curriculum
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center border-dark">
                            <img
                                src={manzaImage}
                                className="card-img-top"
                                alt="Miguel Angel Manzanilla Castro"
                            />
                            <div className="card-header border-dark">
                                Miguel Angel Manzanilla Castro
                            </div>
                            <a
                                href={manzaCurri}
                                className="btn btn-primary"
                            >
                                Curriculum
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center border-dark">
                            <img
                                src={jonaImage}
                                className="card-img-top"
                                alt="Jonathan Esau Gurrola Antuna"
                            />
                            <div className="card-header border-dark">
                                Jonathan Esau Gurrola Antuna
                            </div>
                            <a
                                href={jonaCurri}
                                className="btn btn-primary"
                            >
                                Curriculum
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alumnos;

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Conceptos = () => {
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
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/conceptos"
                                >
                                    Conceptos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/alumnos">
                                    Alumnos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/calculadoras">
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
                            <div className="card-header border-dark">
                                ADMINISTRACIÓN
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-dark">
                                    La administración es una ciencia social,
                                    cuyo interés se centra en las organizaciones
                                    humanas, así como las técnicas y
                                    procedimientos disponibles para su
                                    planificación, organización, dirección y
                                    control de sus recursos, en pro de obtener
                                    de ellos el mayor beneficio posible.
                                </li>
                                <li className="list-group-item border-dark">
                                    El proceso administrativo aplicado al
                                    acrecentamiento y conservación del esfuerzo,
                                    los conocimientos, la experiencia, las
                                    habilidades, la salud, etc.; del elemento
                                    humano para el bien de la organización, de
                                    él mismo y del país en general.
                                </li>
                                <li className="list-group-item">
                                    La administración es una de las «actividades
                                    humanas» más importantes encargada de
                                    organizar y dirigir el trabajo individual y
                                    colectivo efectivo en términos de objetivos.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center border-dark">
                            <div className="card-header border-dark">
                                ADMINISTRACIÓN DE PROYECTOS
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-dark">
                                    La administración de proyectos es una
                                    técnica utilizada con el fin de poder
                                    alcanzar diversos objetivos dentro de un
                                    período de tiempo establecido.
                                </li>
                                <li className="list-group-item border-dark">
                                    La gestión de proyectos se conforma por
                                    todas las acciones que se deben realizar
                                    para alcanzar un propósito definido dentro
                                    de un período de tiempo determinado. Cumple
                                    con un enfoque metódico que se orienta a la
                                    estimación, administración y cumplimiento de
                                    objetivos específicos, medibles, alcanzables
                                    y realistas planteados por una organización.
                                </li>
                                <li className="list-group-item">
                                    La administración de proyectos implica
                                    planificar, coordinar y supervisar todos los
                                    aspectos del plan para garantizar que se
                                    cumplan los objetivos y se alcancen los
                                    resultados esperados, lo que se reflejará en
                                    un aumento de la satisfacción del cliente,
                                    una mejora en la rentabilidad y una ventaja
                                    competitiva en el mercado.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center border-dark">
                            <div className="card-header border-dark">
                                NEGOCIACIÓN
                            </div>
                            <ul className="list-group list-group-flush border-dark">
                                <li className="list-group-item border-dark">
                                    La negociación se puede definir como un
                                    proceso de comunicación entre al menos dos
                                    partes dirigido a alcanzar un acuerdo sobre
                                    intereses que se perciben como divergentes.
                                    Esta habilidad se basa en la capacidad de un
                                    individuo para participar en el proceso de
                                    forma cooperativa, usando habilidades de
                                    comunicación respetuosa y asertiva, con el
                                    fin de llegar a acuerdos beneficiosos y
                                    aceptables para todas las partes
                                    involucradas.
                                </li>
                                <li className="list-group-item">
                                    La negociación es un proceso de intercambio
                                    de información y compromisos en el cuál dos
                                    o más partes, que tienen intereses comunes y
                                    otros divergentes, intentan llegar a un
                                    acuerdo.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center border-dark">
                            <div className="card-header border-dark">
                                PROCESO ADMINISTRATIVO
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-dark">
                                    El proceso administrativo es un conjunto de
                                    funciones administrativas dentro de una
                                    organización u empresa que buscan aprovechar
                                    al máximo los recursos existentes de forma
                                    correcta, rápida y eficaz. El proceso
                                    administrativo se compone de cuatro etapas
                                    elementales: planeación, organización,
                                    ejecución y control. A través de ellas, los
                                    miembros de una empresa buscan alcanzar las
                                    metas u objetivos propuestos.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center border-dark">
                            <div className="card-header border-dark">
                                MANIPULAR
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-dark">
                                    Intervenir con medios hábiles y, a veces,
                                    arteros, en la política, en el mercado, en
                                    la información, etc., con distorsión de la
                                    verdad o la justicia, y al servicio de
                                    intereses particulares.
                                </li>
                                <li className="list-group-item border-dark">
                                    Manipulación es la acción y efecto de
                                    manipular (operar con las manos o con un
                                    instrumento, manosear algo, intervenir con
                                    medios hábiles para distorsionar la realidad
                                    al servicio de intereses particulares).
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center border-dark">
                            <div className="card-header border-dark">
                                EFICACIA
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-dark">
                                    La eficacia se refiere a la capacidad de
                                    lograr un objetivo o resultado deseado. En
                                    otras palabras, es hacer lo que se debe
                                    hacer para alcanzar una meta específica.
                                    Ejemplo de eficacia: Si una empresa se
                                    propone aumentar sus ventas en un 20% en un
                                    año y logra ese objetivo, es eficaz, sin
                                    importar cómo haya logrado ese aumento.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center border-dark">
                            <div className="card-header border-dark">
                                EFICIENCIA
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-dark">
                                    La eficiencia, por otro lado, se refiere a
                                    la capacidad de lograr un objetivo
                                    utilizando la menor cantidad de recursos
                                    posible. Esto incluye tiempo, dinero,
                                    esfuerzo, materiales, etc. Se trata de
                                    optimizar el uso de los recursos para lograr
                                    el resultado deseado. Ejemplo de eficiencia:
                                    Si una empresa no solo aumenta sus ventas en
                                    un 20%, sino que también lo hace reduciendo
                                    sus costos operativos, es tanto eficaz como
                                    eficiente.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center border-dark">
                            <div className="card-header border-dark">
                                RIESGOS
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-dark">
                                    Riesgo como Incertidumbre: Un riesgo es
                                    cualquier evento o condición incierta que
                                    puede afectar los objetivos del proyecto. La
                                    incertidumbre puede ser positiva
                                    (oportunidades) o negativa (amenazas).
                                </li>
                                <li className="list-group-item border-dark">
                                    Riesgo como Potencial de Pérdida: Un riesgo
                                    es la posibilidad de que ocurra una pérdida
                                    o daño. Esto implica que algo puede salir
                                    mal, resultando en un impacto negativo en
                                    los objetivos del proyecto.
                                </li>
                                <li className="list-group-item">
                                    Riesgo como Variabilidad: Un riesgo es la
                                    variabilidad que afecta los resultados
                                    esperados. Esto incluye cualquier desviación
                                    de los resultados previstos debido a eventos
                                    o condiciones inciertas.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center border-dark">
                            <div className="card-header border-dark">
                                RIESGOS EN PROYECTOS
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-dark">
                                    Riesgos Técnicos: Fallos tecnológicos,
                                    problemas de integración, cambios en los
                                    requisitos técnicos.
                                </li>
                                <li class="list-group-item border-dark">
                                    Riesgos de Gestión: Mala planificación,
                                    falta de recursos, errores de estimación,
                                    deficiencias en la comunicación.
                                </li>
                                <li class="list-group-item">
                                    Riesgos Externos: Cambios en la normativa,
                                    desastres naturales, condiciones económicas,
                                    cambios en el mercado.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div></div>
                    </div>
                    <div class="col-md-12">
                        <div class=" card text-center border-dark">
                            <div class="card-header border-dark">
                                MODELO DE CREACIÓN PROPIA
                            </div>
                            <ul class="list-group list-group-flush">
                                <li className="list-group-item border-dark">
                                    <img
                                        src="./images/image.png"
                                        alt="Imagen del mapa conceptual de riesgos expuesto en clase"
                                        className="img-fluid"
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class=" card text-center border-dark">
                            <div class="card-header border-dark">
                                LINK DIRECTO DE GESTOR DE PROYECTOS
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item border-dark">
                                    <a href="https://www.canva.com/design/DAFYruI3OCA/A0yCIvBx2tk1gNperSOXFA/edit">
                                        LINK DEL GESTOR
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conceptos;

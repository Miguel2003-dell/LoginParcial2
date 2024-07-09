import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calculadoras.css';

const Calculadoras = () => {
    const [efectividadVida, setEfectividadVida] = useState(null);
    const [efectividadEficacia, setEfectividadEficacia] = useState(null);
    const [produccion, setProduccion] = useState({ eficiencia: null, efectividad: null });
    const [roi, setRoi] = useState(null);

    const calcularEfectividadVida = (event) => {
        event.preventDefault();
        const realizados = parseFloat(event.target.realizados.value);
        const total = parseFloat(event.target.total.value);
        if (realizados > total) {
            alert('El número de logros alcanzados no puede ser mayor que el número total de objetivos.');
            return;
        }
        const efectividad = (realizados / total) * 100;
        setEfectividadVida(efectividad.toFixed(2));
    };

    const calcularEfectividadEficacia = (event) => {
        event.preventDefault();
        const eficacia = parseFloat(event.target.eficacia.value);
        const eficiencia = parseFloat(event.target.eficiencia.value);
        if (eficacia > 100 || eficiencia > 100) {
            alert('Los valores de eficacia y eficiencia no pueden ser mayores que 100%.');
            return;
        }
        const efectividad = (eficacia * eficiencia) / 100;
        setEfectividadEficacia(efectividad.toFixed(2));
    };

    const calcularProduccion = (event) => {
        event.preventDefault();
        const unidadesProducidas = parseFloat(event.target.unidades_producidas.value);
        const tiempoPlaneado = parseFloat(event.target.tiempo_planeado.value);
        const tiempoReal = parseFloat(event.target.tiempo_real.value);
        if (tiempoReal <= 0) {
            alert('El tiempo real no puede ser menor o igual a cero.');
            return;
        }
        const eficiencia = (tiempoPlaneado / tiempoReal) * 100;
        const efectividad = (unidadesProducidas / tiempoPlaneado) * 100;
        setProduccion({ eficiencia: eficiencia.toFixed(2), efectividad: efectividad.toFixed(2) });
    };

    const calcularRoi = (event) => {
        event.preventDefault();
        const inversion = parseFloat(event.target.inversion.value);
        const beneficio = parseFloat(event.target.beneficio.value);
        const roi = (beneficio - inversion) / inversion * 100;
        setRoi(roi.toFixed(2));
    };

    return (
        <div className="calculadoras-container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <p className="navbar-brand">Administración de proyectos</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/conceptos">Conceptos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/alumnos">Alumnos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/calculadoras">Calculadoras</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <h1>Calculadoras</h1>

                <section>
                    <h2>Calculadora de Efectividad en la vida cotidiana</h2>
                    <form onSubmit={calcularEfectividadVida}>
                        <label htmlFor="realizados">Logros alcanzados:</label>
                        <input type="number" id="realizados" name="realizados" min="0" required />

                        <label htmlFor="total">Total de objetivos:</label>
                        <input type="number" id="total" name="total" min="1" required />

                        <button type="submit">Calcular</button>
                    </form>
                    {efectividadVida !== null && <div className="resultado">Efectividad: {efectividadVida}%</div>}
                </section>

                <section>
                    <h2>Calculadora de Efectividad a partir de Eficacia y Eficiencia</h2>
                    <form onSubmit={calcularEfectividadEficacia}>
                        <label htmlFor="eficacia">Eficacia:</label>
                        <input type="number" id="eficacia" name="eficacia" min="0" max="100" step="0.01" required />

                        <label htmlFor="eficiencia">Eficiencia:</label>
                        <input type="number" id="eficiencia" name="eficiencia" min="0" max="100" step="0.01" required />

                        <button type="submit">Calcular</button>
                    </form>
                    {efectividadEficacia !== null && <div className="resultado">Efectividad: {efectividadEficacia}%</div>}
                </section>

                <section>
                    <h2>Calculadora de Efectividad en la Producción</h2>
                    <form onSubmit={calcularProduccion}>
                        <label htmlFor="unidades_producidas">Unidades producidas:</label>
                        <input type="number" id="unidades_producidas" name="unidades_producidas" min="0" required />

                        <label htmlFor="tiempo_planeado">Tiempo planeado:</label>
                        <input type="number" id="tiempo_planeado" name="tiempo_planeado" min="0" step="0.01" required />

                        <label htmlFor="tiempo_real">Tiempo real:</label>
                        <input type="number" id="tiempo_real" name="tiempo_real" min="0" step="0.01" required />

                        <button type="submit">Calcular</button>
                    </form>
                    {produccion.eficiencia !== null && (
                        <div className="resultado">
                            <p>Eficiencia: {produccion.eficiencia}%</p>
                            <p>Efectividad: {produccion.efectividad}%</p>
                        </div>
                    )}
                </section>

                <section>
                    <h2>Calculadora de Retorno de Inversión</h2>
                    <form onSubmit={calcularRoi}>
                        <label htmlFor="inversion">Inversión:</label>
                        <input type="number" id="inversion" name="inversion" min="0" required />

                        <label htmlFor="beneficio">Beneficio:</label>
                        <input type="number" id="beneficio" name="beneficio" min="0" required />

                        <button type="submit">Calcular</button>
                    </form>
                    {roi !== null && <div className="resultado">ROI: {roi}%</div>}
                </section>
            </div>
        </div>
    );
};

export default Calculadoras;

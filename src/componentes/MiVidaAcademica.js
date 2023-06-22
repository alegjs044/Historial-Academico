import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import NivelBasico from './NivelBasico'; // Importa el componente para el nivel básico
import NivelMediaSuperior from './NivelMedia'; // Importa el componente para el nivel de educación media superior
import NivelSuperior from './NivelSuperior'; // Importa el componente para el nivel de educación superior

function MiVidaAcademica() {
    return (
        <Router>
            <div>
                <header>
                    <h1>PLAN DE ESTUDIOS</h1>
                </header>
                <main>
                    <div className="contenedor">
                        <div className="tabla">
                            <h2 style={{ color: 'rgb(117, 15, 117)' }}>Nivel de educación básica</h2>
                            <Link to="./NivelBasico.js">
                                <img id="uno" src="./Imagenes/pizarra.gif" alt="" width="150" height="150" />
                            </Link>
                            <p>Preescolar</p>
                            <p>Primaria</p>
                            <p>Secundaria</p>
                        </div>
                        <div className="tabla">
                            <h2 style={{ color: 'rgb(117, 15, 117)' }}>Nivel de educación media superior</h2>
                            <Link to="../componentes/NivelMedia.js">
                                <img id="dos" src="./Imagenes/libros.gif" alt="" width="150" height="150" />
                            </Link>
                            <p>Preparatoria</p>
                        </div>
                        <div className="tabla">
                            <h2 style={{ color: 'rgb(117, 15, 117)' }}>Nivel de educación superior</h2>
                            <Link to="./NivelSuperior.js">
                                <img id="tres" src="./Imagenes/birrete.gif" alt="" width="150" height="150" />
                            </Link>
                            <p>Universidad</p>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/NivelBasico" component={NivelBasico} />
                        <Route path="/NivelMedia" component={NivelMediaSuperior} />
                        <Route path="/NivelSuperior" component={NivelSuperior} />
                    </Routes>
                </main>
                <footer>Copyright <i>Alejandra Guzmán Jiménez</i> &copy;2022 </footer>
            </div>
        </Router>
    );
}

export default MiVidaAcademica;

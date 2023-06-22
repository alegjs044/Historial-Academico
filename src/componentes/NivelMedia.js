import React from 'react';

import Foto from '../Imagenes/Foto.jpg'; 

const datosPreparatoria = [
    {
        categoria: "Algunas materias cursadas en ordinario",
        primerNivel: "Álgebra, Computación Básica, Expresión Oral y Escrita, Ingles",
        segundoNivel: "Geometria y Trigonometria, Filosofía II, Biología Basica",
        tercerNivel: "Geometría Analitica, Comunicación Cientifica",
        cuartoNivel: "Calculo Diferencial, Fisica II, Quimica II",
        quintoNivel: "Ingles V",
        sextoNivel: "Probabilidad y Estadistica, Fisica"
    },
    {
        categoria: "Algunas materias cursadas en ordinario",
        primerNivel: "Filosofía, Desarrollo Personal, Desarrollo de Habilidades, Historia, Orientación Juvenil",
        segundoNivel: "Expresión Oral y Escrita, Ingles",
        tercerNivel: "Dibujo Tecnico, Ingles III",
        cuartoNivel: "Dibujo Tecnico II",
        quintoNivel: "Calculo Integral, Quimica III, Fisica III",
        sextoNivel: "Ingles, OJP"
    },
    {
        categoria: "Extras cursados",
        primerNivel: "Ninguno",
        segundoNivel: "Ninguno",
        tercerNivel: "Quimica I",
        cuartoNivel: "Quimica II",
        quintoNivel: "Ninguno",
        sextoNivel: "Ninguno"
    },
    {
        categoria: "Examenes de Titulo Suficiente que se hayan cursado",
        primerNivel: "Ninguno",
        segundoNivel: "Ninguno",
        tercerNivel: "Fisica I",
        cuartoNivel: "Calculo Diferencial, Fisica II, Ingles IV Y Dibujo Técnico",
        quintoNivel: "Calculo Integral",
        sextoNivel: "Fisica IV"
    },
    {
        categoria: "Materias de la carrera",
        primerNivel: "No hay",
        segundoNivel: "No hay",
        tercerNivel: "Electrotencia de C.C., Instalaciones Electricas Residenciales y Mediciones Electricas",
        cuartoNivel: "Electrotecnia de C.A., Instalaciones Electricas Comerciales, Mantenimiento a generadores y Electronica de Potencia",
        quintoNivel: "Motores Electricos, Instalaciones Industriales",
        sextoNivel: "Subestaciones Electricas, Mantenimiento a sistemas electricos"
    }
];

const MiVidaAcademica = () => {
    return (
        <div>
            <header>
                <h1>PLAN DE ESTUDIOS</h1>
            </header>
            <body>
                <h2 className="clasif">Preparatoria</h2>
                <table className="table2">
                    <thead>
                        <tr>
                            <th></th>
                            <th scope="col" abbr="Starter">Primer Nivel</th>
                            <th scope="col" abbr="Medium">Segundo Nivel</th>
                            <th scope="col" abbr="Business">Tercer Nivel</th>
                            <th scope="col" abbr="Deluxe">Cuarto Nivel</th>
                            <th scope="col" abbr="Deluxe">Quinto Nivel</th>
                            <th scope="col" abbr="Deluxe">Sexto Nivel</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th scope="row">Promedio obtenido por nivel</th>
                            <td>7.1</td>
                            <td>7.7</td>
                            <td>7.9</td>
                            <td>7.3</td>
                            <td>7</td>
                            <td>7.7</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {datosPreparatoria.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{item.categoria}</th>
                                <td>{item.primerNivel}</td>
                                <td>{item.segundoNivel}</td>
                                <td>{item.tercerNivel}</td>
                                <td>{item.cuartoNivel}</td>
                                <td>{item.quintoNivel}</td>
                                <td>{item.sextoNivel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3 style={{ marginLeft: '700px' }}>Promedio General: 7.38</h3>
                <img src={Foto} id="foto" alt="Foto de estudiante" />
            </body>
        </div>
    );
}

export default MiVidaAcademica;

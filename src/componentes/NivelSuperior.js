import React from 'react';

const datosUniversidad = [
    {
        categoria: "Extras cursados",
        primerNivel: "Ninguno",
        segundoNivel: "Ninguno",
        tercerNivel: "Ninguno",
        cuartoNivel: "Ninguno"
    },
    {
        categoria: "Examenes de Titulo Suficiente que se hayan cursado",
        primerNivel: <span className="check"></span>,
        segundoNivel: "Algoritmo y Estructura de Datos",
        tercerNivel: <span className="check"></span>,
        cuartoNivel: <span className="check"></span>
    },
    {
        categoria: "Materias que se esten recursando",
        primerNivel: <span className="check"></span>,
        segundoNivel: <span className="check"></span>,
        tercerNivel: "Analisis y Diseño de algoritmos, Base de Datos",
        cuartoNivel: "Fundamentos de Diseño Digital"
    }
];

const MiVidaAcademica = () => {
    return (
        <div>
            <header>
                <h1>PLAN DE ESTUDIOS</h1>
            </header>
            <body>
                <h2 className="clasif">Universidad</h2>
                <table className="table3">
                    <thead>
                        <tr>
                            <th></th>
                            <th scope="col" abbr="Starter">Primer Nivel</th>
                            <th scope="col" abbr="Medium">Segundo Nivel</th>
                            <th scope="col" abbr="Business">Tercer Nivel</th>
                            <th scope="col" abbr="Deluxe">Cuarto Nivel</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th scope="row">Promedio obtenido por nivel</th>
                            <td>7.6</td>
                            <td>7.6</td>
                            <td>6.4</td>
                            <td>Cursando...</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {datosUniversidad.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{item.categoria}</th>
                                <td>{item.primerNivel}</td>
                                <td>{item.segundoNivel}</td>
                                <td>{item.tercerNivel}</td>
                                <td>{item.cuartoNivel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3 style={{ marginLeft: '700px' }}>Sigue en proceso...</h3>
            </body>
        </div>
    );
}

export default MiVidaAcademica;

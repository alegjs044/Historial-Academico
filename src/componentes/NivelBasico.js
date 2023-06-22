import React from 'react';

const PrimariaSecundaria = () => {
    return (
        <div>
            <header>
                <h1>PLAN DE ESTUDIOS</h1>
            </header>
            <body>
                <h2 className="clasif">Kinder</h2>
                <h2 style={{ marginLeft: '630px' }}>Primaria</h2>
                <table id="Tabla1">
                    <tr>
                        <td style={{ fontSize: 'medium' }}>Primaria "Lic. Alfredo del Mazo" y "Rafael Ramirez Castañeda"</td>
                        <td>Calificaciones</td>
                        <td>
                            <table>
                                <tr>
                                    <td style={{ background: 'radial-gradient(circle, rgba(238,174,202,0.804359243697479) 0%, rgba(233,159,148,0.7931547619047619) 100%)' }}>Español</td>
                                    <td style={{ background: 'radial-gradient(circle, rgba(238,174,202,0.804359243697479) 0%, rgba(233,159,148,0.7931547619047619) 100%)' }}>Educación Física</td>
                                    <td style={{ background: 'radial-gradient(circle, rgba(238,174,202,0.804359243697479) 0%, rgba(233,159,148,0.7931547619047619) 100%)' }}>Educacion Artistica</td>
                                </tr>
                                <tr>
                                    <td style={{ background: 'radial-gradient(circle, rgba(238,174,202,0.804359243697479) 0%, rgba(233,159,148,0.7931547619047619) 100%)' }}>Ciencias Naturales</td>
                                    <td style={{ background: 'radial-gradient(circle, rgba(238,174,202,0.804359243697479) 0%, rgba(233,159,148,0.7931547619047619) 100%)' }}>Historia y Geografía</td>
                                    <td style={{ background: 'radial-gradient(circle, rgba(238,174,202,0.804359243697479) 0%, rgba(233,159,148,0.7931547619047619) 100%)' }}>Formación Cívica y Ética</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>Primer Grado: 9.9</td>
                        <td>
                            <table>
                                <tr>
                                    <td>Tercer Grado</td>
                                    <td>Cuarto Grado</td>
                                    <td>Quinto Grado</td>
                                </tr>
                            </table>
                        </td>
                        <td style={{ background: 'radial-gradient(circle, rgba(238,174,202,0.804359243697479) 0%, rgba(233,159,148,0.7931547619047619) 100%)' }}>Matemáticas</td>
                    </tr>
                    <tr>
                        <td>Segundo Grado: 9.8</td>
                        <td>
                            <table>
                                <tr>
                                    <td>9.1</td>
                                    <td>8.9</td>
                                    <td>9.2</td>
                                </tr>
                            </table>
                        </td>
                        <td>Sexto Grado: 9.2</td>
                        <td>Promedio General: 9.2</td>
                    </tr>
                </table>

                <h2 className="id">Secundaria</h2>

                <table className="table1">
                    <thead>
                        <tr>
                            <th></th>
                            <th scope="col" abbr="Starter">Escuela Secundaria Técnica No.52 "Luis Alvarez Barret"</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th scope="row">Promedio</th>
                            <td>9.3</td>
                            <td>8.6</td>
                            <td>8.5</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <th scope="row">Grado Cursado</th>
                            <td>Primer Grado</td>
                            <td>Segundo Grado</td>
                            <td>Tercer Grado</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Español I</td>
                            <td>Español II</td>
                            <td>Español III</td>
                        </tr>
                        <tr>
                            <th scope="row">Estudios del año 2012-2015</th>
                            <td>Ingles I</td>
                            <td>Ingles II</td>
                            <td>Ingles III</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Matemáticas I</td>
                            <td>Matemáticas II</td>
                            <td>Matemáticas III</td>
                        </tr>
                        <tr>
                            <th scope="row">Promedio General: 8.6</th>
                            <td><span className="check"></span>Ciencias I</td>
                            <td><span className="check"></span>Ciencias II</td>
                            <td><span className="check"></span>Ciencias III</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td><span className="check"></span>Tecnología I</td>
                            <td><span className="check"></span>Tecnología II</td>
                            <td><span className="check"></span>Tecnología III</td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </div>
    );
}

export default PrimariaSecundaria;

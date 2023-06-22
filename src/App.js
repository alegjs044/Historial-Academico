import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MiVidaAcademica from './componentes/MiVidaAcademica';
import NivelBasico from './componentes/NivelBasico';
import NivelMediaSuperior from './componentes/NivelMedia';
import NivelSuperior from './componentes/NivelSuperior';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/MiVidaAcademica" element={<MiVidaAcademica />} />
          <Route path="/NivelBasico" element={<NivelBasico />} />
          <Route path="/NivelMedia" element={<NivelMediaSuperior />} />
          <Route path="/Superior" element={<NivelSuperior />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

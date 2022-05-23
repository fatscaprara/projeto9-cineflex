import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Filme from './components/Filme';
import Sessao from './components/Sessao';
import Sucesso from './components/Sucesso';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/filme" element={<Filme />} />
        <Route path="/sessao" element={<Sessao />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </Routes>
    </BrowserRouter>
  );
}

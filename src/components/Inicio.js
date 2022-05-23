import { Link } from 'react-router-dom';
import Filme from './Filme';
import Topo from './Topo';

export default function Inicio() {
  const filmes = [
    'filme267',
    'filmeEnolaHolmes',
    'filme267',
    'filmeEnolaHolmes',
    'filme267',
    'filmeEnolaHolmes',
  ];

  return (
    <>
      <Topo />
      <h2>Selecione o filme</h2>
      {filmes.map((filme) => (
        <Link to="/filme">
          <Filme name={filme} />
        </Link>
      ))}
    </>
  );
}

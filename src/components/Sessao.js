import { Link } from 'react-router-dom';
import Topo from './Topo';

export default function Sessao() {
  return (
    <>
      <Topo />
      <h1>Sessao</h1>
      <Link to="/sucesso">Sucesso</Link>
    </>
  );
}

import { Link } from 'react-router-dom';
import Topo from './Topo';

export default function Filme() {
  return (
    <>
      <Topo />
      <h1>Filme</h1>
      <Link to="/sessao">Sessao</Link>
    </>
  );
}

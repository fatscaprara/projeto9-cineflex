import { Link } from 'react-router-dom';
import Topo from './Topo';

export default function Sucesso() {
  return (
    <>
      <Topo />
      <h1>Sucesso</h1>
      <Link to="/">Início</Link>
    </>
  );
}

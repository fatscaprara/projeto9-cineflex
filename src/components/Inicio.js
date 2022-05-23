import { Link } from 'react-router-dom';
import Topo from './Topo';

export default function Inicio() {
  return (
    <>
      <Topo />
      <h1>Inicio</h1>
      <Link to="/filme">Filme</Link>
    </>
  );
}

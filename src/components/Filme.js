import { Link } from 'react-router-dom';
import Topo from './Topo';
import filme267 from '../assets/img/filme-267.png';
import filmeEnolaHolmes from '../assets/img/filme-enola-holmes.png';

export default function Filme({ name }) {
  return (
    <div className="container-filme">
      <img src={filme267} alt="" />
      <h1>{name}</h1>
    </div>
  );
}

import { useState } from "react";

import Header from "./layout/Header";

function App() {
  const [reserva, setReserva] = useState(null);

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;

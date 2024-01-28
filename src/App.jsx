import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const originalColaboradores = [
    {
      id: "1",
      nombre: "Juan Soto",
      correo: "juans@colaborador.com",
      edad: "23",
      cargo: "Desarrollador FrontEnd",
      telefono: "99887766",
    },
    {
      id: "2",
      nombre: "Lucas Pailamilla",
      correo: "lucasp@colaborador.com",
      edad: "31",
      cargo: "Desarrollador Backend",
      telefono: "88779955",
    },
    {
      id: "3",
      nombre: "Diego Riquelme",
      correo: "diegor@colaborador.com",
      edad: "28",
      cargo: "Ingeniero DevOps",
      telefono: "99226644",
    },
  ];
  const [filteredColaboradores, setFilteredColaboradores] = useState(
    originalColaboradores
  );

  const onAddColaborador = (newColaborador) => {
    setColaboradores((prevColaboradores) => [
      ...prevColaboradores,
      newColaborador,
    ]);
    setFilteredColaboradores((prevFilteredColaboradores) => [
      ...prevFilteredColaboradores,
      newColaborador,
    ]);
  };

  const onSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredColaboradores([...originalColaboradores, ...colaboradores]);
      return;
    }
    const filtered = filteredColaboradores.filter((colaborador) =>
      colaborador.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredColaboradores(filtered);
  };

  useEffect(() => {
    setFilteredColaboradores(originalColaboradores);
  }, []);

  return (
    <>
      <div className="app">
        <h1>Lista de Colaboradores</h1>
        <div className="container">
          <div className="caja">
            <Buscador onSearch={onSearch} />
            <Listado
              key={filteredColaboradores.join("_")}
              colaboradores={filteredColaboradores}
              onAddColaborador={onAddColaborador}
            />
          </div>
          <div>
            <h2>Agregar colaborador</h2>
            <Formulario onAddColaborador={onAddColaborador} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

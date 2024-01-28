import React from "react";
import { useState } from "react";
import "./Buscador.css";

const Buscador = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Busca un colaborador"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Buscador;

import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import "./Listado.css";

const Listado = ({ colaboradores, onAddColaborador }) => {
  return (
    <>
      <Table striped bordered hover className="listado-table">
        <thead>
          <tr>
            <th>ID</th> <th>NOMBRE</th> <th>CORREO</th> <th>EDAD</th>
            <th>CARGO</th> <th>TELEFONO</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores &&
            colaboradores.map((colaborador) => (
              <tr key={colaborador.id} className="listado-row">
                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listado;

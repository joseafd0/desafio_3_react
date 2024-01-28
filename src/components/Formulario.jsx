import React, { useState } from "react";
import Alert from "./Alert";
import "./Formulario.css";

const Formulario = ({ onAddColaborador }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const onSubmit = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const correo = e.target.correo.value;
    const edad = e.target.edad.value;
    const cargo = e.target.cargo.value;
    const telefono = e.target.telefono.value;

    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      edad.trim() === "" ||
      cargo.trim() === "" ||
      telefono.trim() === ""
    ) {
      setShowAlert(true);
      setAlertMessage("Completa todos los campos!");
      setAlertType("error");
      return;
    }

    const timestamp = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    const newColaborador = {
      id: timestamp,
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };

    onAddColaborador(newColaborador);

    setShowAlert(true);
    setAlertMessage("Colaborador agregado!");
    setAlertType("success");

    e.target.nombre.value = "";
    e.target.correo.value = "";
    e.target.edad.value = "";
    e.target.cargo.value = "";
    e.target.telefono.value = "";
  };

  return (
    <>
      <form onSubmit={onSubmit} className="formulario">
        <div className="mb-3 form-field">
          <label className="form-label" htmlFor="nombre"></label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Nombre del colaborador"
          />
        </div>
        <div className="mb-3 form-field">
          <label className="form-label" htmlFor="correo"></label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            placeholder="Email del colaborador"
          />
        </div>
        <div className="mb-3 form-field">
          <label className="form-label" htmlFor="edad"></label>
          <input
            type="number"
            className="form-control"
            id="edad"
            name="edad"
            placeholder="Edad del colaborador"
          />
        </div>
        <div className="mb-3 form-field">
          <label className="form-label" htmlFor="cargo"></label>
          <input
            type="text"
            className="form-control"
            id="cargo"
            name="cargo"
            placeholder="Cargo del colaborador"
          />
        </div>
        <div className="mb-3 form-field">
          <label className="form-label" htmlFor="telefono"></label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            name="telefono"
            placeholder="Teléfono del colaborador"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-purple">
          Agregar colaborador
        </button>
      </form>
      {showAlert && <Alert message={alertMessage} type={alertType} />}
    </>
  );
};

export default Formulario;

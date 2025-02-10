import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Registro() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [repetirContrasena, setRepetirContrasena] = useState("");

  const registrar = () => {
    if (email.trim() === '' || contrasena.trim() === '' || repetirContrasena.trim() === '') {
        alert('Debe completar todos los campos.')
    } else if (contrasena.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.')
        return false;
    } else if (contrasena.trim() !== repetirContrasena.trim()){
        alert('Las contraseñas no coinciden.')
        return false;
    } else {
        alert('Registro completado!');
    }
  }

  return (
    <div className="registro-contenedor">
      <div className="formulario-registro">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Email"
              onChange={(el) => setEmail(el.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(el) => setContrasena(el.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repetir contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(el) => setRepetirContrasena(el.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={registrar}>
            Registrar
          </Button>
        </Form>
      </div>
    </div>
  );
}

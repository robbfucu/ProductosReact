import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    if (username === 'usuario' && password === 'contrasena') {
      // Autenticación exitosa
      alert('Inicio de sesión exitoso');
    } else {
      // Autenticación fallida
      alert('Inicio de sesión fallido');
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <div>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
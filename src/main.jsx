// Importar React para poder usar JSX
import React from 'react';
// Importar ReactDOM para renderizar la aplicación en el DOM
import ReactDOM from 'react-dom/client';
// Importar el componente principal de la aplicación
import App from './App';
// Importar los estilos globales
import './index.css';

// Crear la raíz de React y renderizar el componente App dentro de <React.StrictMode>
// Usar StrictMode para ayudar a detectar problemas potenciales en la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

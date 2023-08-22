import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [vehiculos, setVehiculos] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener vehículos
    axios.get('/api/vehiculos')
      .then(response => setVehiculos(response.data))
      .catch(error => console.error(error));

    // Llamada a la API para obtener productos
    axios.get('/api/productos')
      .then(response => setProductos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Vehículos</h1>
      <ul>
        {vehiculos.map(vehiculo => (
          <li key={vehiculo.id}>{`${vehiculo.marca} ${vehiculo.modelo}`}</li>
        ))}
      </ul>

      <h1>Productos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{`${producto.nombre} - $${producto.precio}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

.App {
    text-align: center;
    margin: 2rem;
    font-family: Arial, sans-serif;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  h1 {
    margin-bottom: 1rem;
  }
  
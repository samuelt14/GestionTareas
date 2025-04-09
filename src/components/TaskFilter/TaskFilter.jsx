// Importar React para poder utilizar JSX y componentes funcionales
import React from 'react';

// Definir el componente funcional TaskFilter que recibe las props `filter` y `setFilter`
const TaskFilter = ({ filter, setFilter }) => {
  // Definir un array con las opciones de filtro disponibles
  const filters = ['all', 'active', 'completed'];

  // Retornar el JSX que representa el componente
  return (
    // Mostrar los botones centrados con espacio entre ellos y margen vertical
    <div className="flex justify-center gap-4 my-4">
      {/* Iterar sobre cada filtro disponible para renderizar un botón */}
      {filters.map(f => (
        <button
          // Asignar una key única por cada filtro (requisito en listas de React)
          key={f}
          // Asignar una función que actualiza el filtro al hacer clic
          onClick={() => setFilter(f)}
          // Asignar clases condicionales para estilizar el botón activo diferente
          className={`px-4 py-2 rounded transition ${filter === f ? 'bg-blue-300 text-black' : 'bg-gray-200 hover:bg-blue-300'}`}
        >
          {/* Mostrar texto en español según el valor del filtro */}
          {f === 'all' ? 'Todas' : f === 'active' ? 'Activas' : 'Completadas'}
        </button>
      ))}
    </div>
  );
};

// Exportar el componente TaskFilter para que pueda ser usado en otros archivos
export default TaskFilter;

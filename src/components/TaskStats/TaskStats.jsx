// Importar React para poder usar JSX y componentes funcionales
import React from 'react';

// Definir el componente funcional TaskStats que recibe la lista de tareas como prop
const TaskStats = ({ tasks }) => {
  // Calcular el total de tareas
  const total = tasks.length;

  // Calcular la cantidad de tareas que no están completadas
  const pending = tasks.filter(t => !t.completed).length;

  // Retornar una vista con estadísticas de las tareas
  return (
    <div className="mt-6 text-center text-sm text-gray-600">
      {/* Mostrar el número total de tareas */}
      <p>Total de tareas: {total}</p>

      {/* Mostrar el número de tareas pendientes */}
      <p>Tareas pendientes: {pending}</p>
    </div>
  );
};

// Exportar el componente TaskStats para que pueda ser utilizado en otros componentes
export default TaskStats;

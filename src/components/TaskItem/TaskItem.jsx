// Importar React para poder utilizar JSX y componentes funcionales
import React from 'react';

// Definir el componente funcional TaskItem que recibe una tarea y funciones para manejar acciones
const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    // Contenedor principal de la tarea, con estilos condicionales si está completada
    <div className={`p-4 border rounded-lg shadow mb-2 flex justify-between items-start ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
      {/* Sección izquierda con la información de la tarea */}
      <div className="flex-1">
        {/* Mostrar el título, tachado si está completada */}
        <h3 className={`font-semibold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
        {/* Mostrar la descripción, también tachada si está completada */}
        <p className={`${task.completed ? 'line-through' : ''}`}>{task.description}</p>
        {/* Mostrar la fecha y hora de creación en formato legible */}
        <small className="text-gray-500">{new Date(task.createdAt).toLocaleString()}</small>
      </div>

      {/* Sección derecha con botones de acción */}
      <div className="ml-4 flex flex-col gap-2">
        {/* Botón para marcar o desmarcar la tarea como completada */}
        <button 
          onClick={() => onToggle(task.id)} 
          className="text-sm bg-green-400 px-2 py-1 rounded hover:bg-green-500 transition"
        >
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>

        {/* Botón para activar el modo de edición */}
        <button 
          onClick={() => onEdit(task)} 
          className="text-sm bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500 transition"
        >
          Editar
        </button>

        {/* Botón para eliminar la tarea */}
        <button 
          onClick={() => onDelete(task.id)} 
          className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-800 transition"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

// Exportar el componente TaskItem para poder usarlo en otros componentes
export default TaskItem;

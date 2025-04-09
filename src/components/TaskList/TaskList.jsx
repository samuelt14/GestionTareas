// Importar React para usar JSX y componentes funcionales
import React from 'react';
// Importar el componente TaskItem que se encargará de mostrar cada tarea individualmente
import TaskItem from '../TaskItem/TaskItem';

// Definir el componente funcional TaskList que recibe la lista de tareas, el filtro, y funciones para modificar el estado
const TaskList = ({ tasks, setTasks, filter, setEditingTask }) => {

  // Filtrar las tareas según el filtro seleccionado (activo, completado o todos)
  const filteredTasks = tasks.filter(task =>
    filter === 'active' ? !task.completed :         // Mostrar solo tareas activas
    filter === 'completed' ? task.completed : true  // Mostrar solo tareas completadas o todas
  );

  // Alternar el estado de completado de una tarea al hacer clic en el botón correspondiente
  const toggleTask = (id) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Eliminar una tarea de la lista usando su ID
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Establecer una tarea en modo de edición para cargarla en el formulario
  const editTask = (task) => {
    setEditingTask(task);
  };

  // Retornar la lista de tareas filtradas
  return (
    <div className="mt-4">
      {/* Si hay tareas después de aplicar el filtro, mostrarlas usando TaskItem */}
      {filteredTasks.length > 0 ? filteredTasks.map(task => (
        <TaskItem
          key={task.id}         // Asignar una clave única por tarea
          task={task}           // Pasar el objeto de tarea al componente
          onToggle={toggleTask} // Pasar la función para marcar como completado
          onDelete={deleteTask} // Pasar la función para eliminar tarea
          onEdit={editTask}     // Pasar la función para editar tarea
        />
      )) : (
        // Mostrar mensaje si no hay tareas
        <p className="text-center text-gray-500">No hay tareas</p>
      )}
    </div>
  );
};

// Exportar el componente TaskList para usarlo en otros módulos
export default TaskList;

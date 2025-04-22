// Importar React y los hooks useState y useEffect para manejar estado y efectos secundarios
import React, { useState, useEffect } from 'react';

// Componente funcional TaskForm que recibe como props funciones para actualizar tareas
// y el objeto de la tarea que se está editando (si existe)
const TaskForm = ({ setTasks, editingTask, setEditingTask }) => {
  // Estado local para el título de la tarea
  const [title, setTitle] = useState('');
  // Estado local para la descripción de la tarea
  const [description, setDescription] = useState('');

  // useEffect que se ejecuta cuando cambia el valor de editingTask
  // Si hay una tarea en edición, se cargan sus datos en el formulario
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir recarga de página

    // Si el título está vacío, no hacer nada
    if (!title.trim()) return;

    // Si estamos editando una tarea existente
    if (editingTask) {
      // Actualizar la tarea en la lista de tareas
      setTasks(prev => prev.map(task =>
        task.id === editingTask.id ? { ...task, title, description } : task
      ));
      // Limpiar el estado de edición
      setEditingTask(null);
    } else {
      // Si es una nueva tarea, agregarla al estado de tareas
      setTasks(prev => [
        ...prev,
        {
          id: crypto.randomUUID(), // Generar ID único
          title,
          description,
          completed: false, // Por defecto no completada
          createdAt: new Date() // Fecha actual
        }
      ]);
    }

    // Limpiar el formulario después de agregar o actualizar
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow mb-4 space-y-3">
      <h2 className="text-lg font-semibold text-gray-700">
        {/* Cambia el título del formulario según si se está editando o creando una tarea */}
        {editingTask ? 'Editar Tarea' : 'Nueva Tarea'}
      </h2>

      {/* Campo para el título */}
      <label className="block text-sm font-medium text-black-600">Título</label>
      <input
        type="text"
        className="w-full border p-2 rounded"
        autoFocus
        pattern='[A-Za-z0-9 ]{3,50}' // Validación de 3 a 50 caracteres alfanuméricos y espacios
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={50} // Límite máximo de caracteres
      />
      <p className="text-sm text-gray-500 text-right mt-1">
        {/* Indicador de longitud del título */}
        {title.length}/50
      </p>

      {/* Campo para la descripción */}
      <label className="block text-sm font-medium text-black-600">Descripción</label>
      <textarea
        className="w-full border p-2 rounded"
        value={description}
        placeholder="Descripción para tu tarea (puede ser opcional)"
        onChange={(e) => setDescription(e.target.value)}
        maxLength={200} // Límite de caracteres para la descripción
      />
      <p className="text-sm text-gray-500 text-right mt-1">
        {/* Indicador de longitud de la descripción */}
        {description.length}/200
      </p>

      {/* Botón de envío alineado a la derecha */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {/* Texto del botón cambia según si es edición o creación */}
          {editingTask ? 'Actualizar' : 'Agregar'} Tarea
        </button>
      </div>
    </form>
  );
};

// Exportar el componente para poder usarlo en otros archivos
export default TaskForm;
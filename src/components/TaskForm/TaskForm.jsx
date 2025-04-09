// Importar React y los hooks useState y useEffect para manejar estado y efectos secundarios
import React, { useState, useEffect } from 'react';

// Definir el componente funcional TaskForm que recibe funciones para actualizar tareas y editar una existente
const TaskForm = ({ setTasks, editingTask, setEditingTask }) => {
  // Declarar el estado local para el título y la descripción de la tarea
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Ejecutar efecto secundario cuando `editingTask` cambie
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingTask) {
      setTasks(prev => prev.map(task =>
        task.id === editingTask.id ? { ...task, title, description } : task
      ));
      setEditingTask(null);
    } else {
      setTasks(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          title,
          description,
          completed: false,
          createdAt: new Date()
        }
      ]);
    }

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow mb-4 space-y-3">
      <h2 className="text-lg font-semibold text-gray-700">
        {editingTask ? 'Editar Tarea' : 'Nueva Tarea'}
      </h2>

      {/* Campo del título */}
      <label className="block text-sm font-medium text-black-600">Título</label>
      <input
        type="text"
        className="w-full border p-2 rounded"
        autoFocus
        pattern='[A-Za-z0-9 ]{3,50}'
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Campo de la descripción */}
      <label className="block text-sm font-medium text-black-600">Descripción</label>
      <textarea
        className="w-full border p-2 rounded"
        value={description}
        placeholder="Descripción para tu tarea"
        onChange={(e) => setDescription(e.target.value)}
        maxLength={200}
      />
      <p className="text-sm text-gray-500 text-right mt-1">
        {description.length}/200
      </p>
      {/* Botón alineado a la derecha */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {editingTask ? 'Actualizar' : 'Agregar'} Tarea
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
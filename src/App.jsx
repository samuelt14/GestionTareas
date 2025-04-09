// Importar React y los hooks useState y useEffect para manejar estado y efectos secundarios
import React, { useState, useEffect } from 'react';
// Importar la función uuidv4 para generar identificadores únicos
import { v4 as uuidv4 } from 'uuid';
// Importar los componentes hijos que forman la aplicación
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskStats from './components/TaskStats/TaskStats';

// Definir el componente principal de la aplicación
function App() {
  // Declarar estado para las tareas, cargándolas desde localStorage si existen
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks'); // Obtener tareas guardadas
    return savedTasks ? JSON.parse(savedTasks) : initialTasks; // Parsear o usar iniciales
  });

  // Declarar estado para el filtro de tareas (all, active, completed)
  const [filter, setFilter] = useState('all');

  // Declarar estado para la tarea que se está editando actualmente
  const [editingTask, setEditingTask] = useState(null);

  // Guardar las tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // Ejecutar el efecto cada vez que cambie `tasks`

  // Retornar el contenido de la aplicación
  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Título principal */}
      <h1 className="text-3xl font-bold mb-4">Gestión de Tareas</h1>

      {/* Componente para agregar o editar tareas */}

      {/* Componente que muestra estadísticas de las tareas */}

      <TaskForm 
        setTasks={setTasks} 
        editingTask={editingTask} 
        setEditingTask={setEditingTask} 
      />

      {/* Componente para filtrar tareas (todas, activas, completadas) */}
      <TaskFilter 
        filter={filter} 
        setFilter={setFilter} 
      />

      <TaskStats 
        tasks={tasks} 
      />

      {/* Componente que muestra la lista de tareas según el filtro */}
      <TaskList 
        tasks={tasks} 
        setTasks={setTasks} 
        filter={filter} 
        setEditingTask={setEditingTask} 
      />

      <footer className="mt-8 text-center text-sm text-black-500">
        &copy; {new Date().getFullYear()} Gestión de Tareas. Todos los derechos reservados a Samuel Torres.
      </footer>
    </div>
  );
}

// Exportar el componente App como componente principal de la aplicación
export default App;

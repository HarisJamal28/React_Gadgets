import React, { useState, useEffect } from 'react';

export default function ToDoList() {
  const [inputValue, setInputValue] = useState('');
  const [todoContainers, setTodoContainers] = useState([{ todos: [] }]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingContainerIndex, setEditingContainerIndex] = useState(null);
  const [isEditingMode, setIsEditingMode] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodoContainers(savedTodos);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const updatedContainers = [...todoContainers];

      if (editingIndex !== null) {
        updatedContainers[editingContainerIndex].todos[editingIndex].text = inputValue;
        setEditingIndex(null);
        setEditingContainerIndex(null);
        setIsEditingMode(false);
      } else {
        const currentContainer = updatedContainers[updatedContainers.length - 1];
        if (currentContainer.todos.length < 6) {
          currentContainer.todos.push({ text: inputValue, completed: false });
        } else {
          updatedContainers.push({ todos: [{ text: inputValue, completed: false }] });
        }
      }

      setTodoContainers(updatedContainers);
      setInputValue('');
    }
  };

  const toggleCompletion = (containerIndex, todoIndex) => {
    const updatedContainers = [...todoContainers];
    const todo = updatedContainers[containerIndex].todos[todoIndex];
    todo.completed = !todo.completed;
    setTodoContainers(updatedContainers);
  };

  const addNewContainer = () => {
    setTodoContainers([...todoContainers, { todos: [] }]);
  };

  const deleteLastTodo = () => {
    const updatedContainers = [...todoContainers];
    const lastContainer = updatedContainers[updatedContainers.length - 1];

    if (lastContainer.todos.length > 0) {
      lastContainer.todos.pop();
    }

    if (lastContainer.todos.length === 0 && updatedContainers.length > 1) {
      updatedContainers.pop();
    }

    setTodoContainers(updatedContainers);
  };

  const startEditing = (containerIndex, todoIndex) => {
    if (isEditingMode) {
      setEditingContainerIndex(containerIndex);
      setEditingIndex(todoIndex);
      setInputValue(todoContainers[containerIndex].todos[todoIndex].text);
    }
  };

  const toggleEditingMode = () => {
    setIsEditingMode(!isEditingMode);
    if (isEditingMode) {
      setEditingIndex(null);
      setEditingContainerIndex(null);
      setInputValue('');
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todoContainers));
  };

  return (
    <div className='todo'>
      <section className='main'>

        <br />
        <div className='Create'>
          <form onSubmit={handleSubmit}>
            <input type="text"               
              value={inputValue} 
              onChange={handleInputChange} 
            />
            <button type='submit'><i className='fa-solid fa-paper-plane fa-lg'></i></button>
          </form>
        </div>
        <br />
        <br />
        <div className='tools'>
          <button onClick={addNewContainer}><i className='fa-solid fa-lg fa-plus'></i></button>
          <button onClick={toggleEditingMode} 
            style={{
              backgroundColor: isEditingMode ? '#1e6f4b' : '#3cb371',
              color: isEditingMode ? 'white' : 'black',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <i className={`fa-solid fa-lg fa-pen ${isEditingMode ? 'active' : ''}`}></i>
          </button>
          <button onClick={saveToLocalStorage}>
            <i className='fa-solid fa-lg fa-save'></i>
          </button>
          <button onClick={deleteLastTodo}><i className='fa-solid fa-lg fa-trash'></i></button>
        </div>

        <aside className='Two'>
          {todoContainers.map((container, containerIndex) => (
            <div className='one' key={containerIndex}>
              <br />
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {container.todos.map((todo, todoIndex) => (
                  <li 
                    key={todoIndex} 
                    style={{ 
                      textDecoration: todo.completed ? 'line-through' : 'none', 
                      cursor: isEditingMode ? 'pointer' : 'default', 
                      filter: todo.completed ? 'brightness(50%)' : 'brightness(100%)',
                      cursor: !todo.completed && isEditingMode ? 'pointer' : 'default',
                    }}
                    onClick={() => isEditingMode && startEditing(containerIndex, todoIndex)}
                    onDoubleClick={() => toggleCompletion(containerIndex, todoIndex)}
                    onMouseOver={(e) => e.currentTarget.style.cursor = 'pointer'}
                  >
                    {todo.text}
                  </li>
                ))}
              </ul>
              <br />
            </div>
          ))}
        </aside>
      </section>
    </div>
  )
}

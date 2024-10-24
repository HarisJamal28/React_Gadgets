import './App.css';
import Navbar from './Components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter
import Quiz from './Components/Quiz';
import ToDoList from './Components/ToDoList';
import Weather from './Components/Weather';
import Calculator from './Components/Calculator';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <main className='App'>
        <Navbar />
        <Routes>
          <Route path='/todolist' element={<ToDoList />}></Route>
          <Route path='/quiz' element={<Quiz />}></Route>
          <Route path='/weather' element={<Weather />}></Route>
          <Route path='/calculator' element={<Calculator />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;

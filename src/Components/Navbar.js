import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to="/todolist">ToDoList</Link></li>
            <li><Link to="/quiz">QuizApp</Link></li>
            <li><Link to="/weather">WeatherApp</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
        </ul>
    </nav>
  )
}

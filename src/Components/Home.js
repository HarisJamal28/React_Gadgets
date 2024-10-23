import React from 'react'

export default function Home() {
  return (
    <div className='Home'>
        <h1>REACT GADGETS</h1>
        <div className='Gadgets'>
          <ul>
          <li><button><i class="fa-solid fa-clipboard fa-2x"></i></button></li>
          <li><button><i class="fa-solid fa-list-check fa-2x"></i></button></li>
          <li><button><i class="fa-solid fa-cloud fa-2x"></i></button></li>
          <li><button><i class="fa-solid fa-calculator fa-2x"></i></button></li>
          </ul>
        </div>
    </div>
  )
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import AddButton from './components/AddButton/AddButton'
import Counter from './components/Counter/Counter'
import Searchbar from './components/Searchbar/Searchbar'
import TodoItem from './components/TodoItem/TodoItem'

function App() {
  return (
    <div className='app'>
      <Counter total={0} completed={0} />

      <Searchbar />

      <ul className='todoList'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>

      <AddButton />
    </div>
  )
}

export default App

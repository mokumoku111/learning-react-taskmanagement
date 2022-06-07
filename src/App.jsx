import React from 'react'
//import Show from './layouts/Show'
import Main from './layouts/Main'
import Header from './components/Header'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header/>
      <Main/>
    </DndProvider>
  )
}

export default App;
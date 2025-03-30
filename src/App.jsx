import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Content />

    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import quotes from './json/quotes.json'


const arrayColors =[
  '#B9BB84', '#516F09', '#689FD4', '#040546', '#98320A'
]


function App() {

  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }
  
  const getElementRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }
  
  const [quoteRandom, setquoteRandom] = useState(getElementRandom(quotes))
  const [colorRandom, setcolorRandom] = useState(getElementRandom(arrayColors))
  
  const clickButton = () => {
    setquoteRandom(getElementRandom(quotes))
    setcolorRandom(getElementRandom(arrayColors))
  }

  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <Card 
      quoteRandom={quoteRandom}
      colorRandom={colorRandom}
      clickButton={clickButton}
      />
    </div>
  )
}

export default App

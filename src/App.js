import { useEffect } from 'react'
import React from 'react'

import './App.css'

function App() {
  const ref = React.createRef()

  useEffect(() => {
    console.log('sending DOM event loading to the document')

    const loadingEvent = new CustomEvent('loading', {
      detail: {
        message: 'Loading...',
      },
    })
    document.dispatchEvent(loadingEvent)
  })

  const onButtonClick = () => {
    console.log('sending DOM event loading to the ref element')

    const myEvent = new CustomEvent('clicked', {
      detail: {
        message: 'Button clicked',
      },
    })
    ref.current.dispatchEvent(myEvent)
  }

  return (
    <div className="App">
      <div>Text here</div>
      <input data-cy="ref" type="text" ref={ref} />
      <button onClick={() => onButtonClick()}>Send event to the input</button>
    </div>
  )
}

export default App

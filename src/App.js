import { useEffect } from 'react'
import React from 'react'

import './App.css'

function App() {
  useEffect(() => {
    console.log('sending DOM event loading to the document')

    const loadingEvent = new CustomEvent('loading', {
      detail: {
        message: 'Loading...',
      },
    })
    document.dispatchEvent(loadingEvent)
  })

  return (
    <div className="App">
      <div data-cy="ref">Text here</div>
    </div>
  )
}

export default App

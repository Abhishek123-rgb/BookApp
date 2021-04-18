import React from 'react'
import ThemeContextProvider from './contexts/ThemeContext'
import Main from './Main'

const App = () => {
    return (
        <div>
            <ThemeContextProvider>
                
                <Main/>
            </ThemeContextProvider>
        </div>
    )
}

export default App

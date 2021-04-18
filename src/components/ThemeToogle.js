import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
const ThemeToogle = () => {
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <button onClick={toggleTheme}>
                Toggle The Theme
            </button>
        </div>
    )
}

export default ThemeToogle

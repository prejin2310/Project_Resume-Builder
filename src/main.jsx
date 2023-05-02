import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StatesProvider } from './Context/StatesProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StatesProvider>
        <App />
    </StatesProvider>

)

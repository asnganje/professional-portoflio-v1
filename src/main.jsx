import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context.jsx'

const el = document.getElementById('root')
const root = createRoot(el)
root.render(
    <AppProvider>
        <App />
    </AppProvider>
)

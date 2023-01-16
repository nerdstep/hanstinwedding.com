import '@fontsource/montserrat'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

const root = document.getElementById('root')

if (root) {
  ReactDOM.createRoot(root).render(<App />)
}

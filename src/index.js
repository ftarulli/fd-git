import { createRoot } from 'react-dom/client';
import App from './App'; // Asegúrate de que esta ruta es correcta
import './index.css'; // Opcional, si tienes un archivo CSS global

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

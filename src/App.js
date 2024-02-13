import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { HomePage } from "./pages/HomePage"

function App() {
  return (
    <>
    <QueryClientProvider>
    <HomePage />
    </QueryClientProvider>
    </>
  )
}

export default App;

import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { HomePage } from "./pages/HomePage"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <>
    <QueryClientProvider>
    <HomePage />
    <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
    </>
  )
}

export default App;

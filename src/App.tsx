import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { Header } from './component/Header'
import { Main } from './component/Main'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        retryDelay: 1000,
        throwOnError: true
      },
    },
  })

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          <div>
            <Header />
          </div>
          <div>
            <Main />
          </div>
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App

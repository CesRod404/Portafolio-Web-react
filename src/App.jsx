import Home from './pages/Home'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Home />
    </ThemeProvider>
  )
}

export default App

import { Background } from './components/Background'
import { ViewConteiner } from './components/ViewConteiner'
import { TaskContextProvider } from './contexts/task'

function App() {
  return (
    <Background>
      <TaskContextProvider>
        <ViewConteiner />
      </TaskContextProvider>
    </Background>
  )
}

export default App

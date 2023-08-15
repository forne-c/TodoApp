import { TaskAdder } from './components/TaskAdder'
import { TaskList } from './components/TaskList'
import { TaskContextProvider } from './contexts/task'

function App() {
  return (
    <TaskContextProvider>
      <section className='todoapp'>
        <header className='header'>
          <h1>Todos</h1>
        </header>
        <TaskAdder />
        <section className='main'>
          <TaskList />
        </section>
      </section>
    </TaskContextProvider>
  )
}

export default App

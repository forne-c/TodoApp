import { createContext, useContext } from 'react'
import { Todo } from '../types'
import { TaskDispatcher, useTaskReducer } from '../reducers/task'
import ls from '../tools/LocalStorage'

const TasksContext = createContext<Todo[] | null>(null)
const TasksDispatchContext = createContext<TaskDispatcher | null>(null)

export function useTasks() {
  return useContext(TasksContext)
}
export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

export const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { tasks, dispatcher } = useTaskReducer(ls.get())

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatcher}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

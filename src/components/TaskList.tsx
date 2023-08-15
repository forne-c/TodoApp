import { useTasks } from '../contexts/task'
import { Task } from './Task'

export const TaskList = () => {
  const tasks = useTasks()
  return (
    <ul className='todo-list'>
      {tasks?.map(todo => (
        <Task key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

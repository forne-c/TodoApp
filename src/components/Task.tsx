import { useTasksDispatch } from '../contexts/task'
import { type Todo as TodoType } from '../types'

export const Task: React.FC<TodoType> = ({ id, completed, title }) => {
  const controller = useTasksDispatch()

  return (
    <li className={completed ? 'completed' : ''}>
      <input className='toggle' type='checkbox' checked={completed} onChange={() => controller?.toggle(id)} />
      <label>{title}</label>
      <button className='destroy' onClick={() => controller?.deleted(id)} />
    </li>
  )
}

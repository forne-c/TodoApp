import { useTasksDispatch } from '../contexts/task'
import { type Todo as TodoType } from '../types'

export const Task: React.FC<TodoType> = ({ id, completed, title }) => {
  const controller = useTasksDispatch()

  const handleDelete = () => {
    const deleteTask = window.confirm(`Do you really want to delete the task: "${title}`)
    if (deleteTask) controller?.deleted(id)
  }

  const stylesClass = completed
    ? {
        li: 'bg-lime-50',
        span: 'bg-green-600 ',
        p: 'line-through decoration-wavy decoration-gray-400 text-gray-600'
      }
    : {
        li: 'outline-1 outline-gray-200',
        span: 'border',
        p: 'text-gray-600'
      }

  return (
    <li className={`border-b flex  px-3 py-1 gap-3 justify-between ${stylesClass.li}`}>
      <input
        className='rounded-full peer relative appearance-none shrink-0 w-6 h-6 border-2 border-green-200  mt-1 bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
        checked:bg-green-500 checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400'
        type='checkbox'
        checked={completed}
        onChange={() => controller?.toggle(id)}
      />
      <label className={`w-full text-lg overflow-ellipsis ${stylesClass.p}`}>{title}</label>
      <button className='col-span-1 place-self-center text-red-500' onClick={handleDelete}>
        x
      </button>
    </li>
  )
}

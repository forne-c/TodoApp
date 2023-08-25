import { useTasksDispatch } from '../contexts/task'
import { type Todo as TodoType } from '../types'

export const Task: React.FC<TodoType> = ({ id, completed, title }) => {
  const controller = useTasksDispatch()

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
    <li className={`border-b flex px-3 py-1 gap-3 justify-between ${stylesClass.li}`}>
      <input type='checkbox' checked={completed} onChange={() => controller?.toggle(id)} />
      <label className={`w-full text-lg overflow-ellipsis whitespace-nowrap ${stylesClass.p}`}>{title}</label>
      <button className='col-span-1 place-self-center text-red-500' onClick={() => controller?.deleted(id)}>
        x
      </button>
    </li>
  )
}

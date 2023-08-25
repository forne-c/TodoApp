import { TaskAdder } from './TaskAdder'
import { TaskList } from './TaskList'
import Today from './Today'

export const ViewConteiner = () => {
  return (
    <main className='rounded-3xl shadow-lg bg-emerald-50 max-w-7xl m-auto overflow-hidden'>
      <section className='px-5 pt-5 pb-2'>
        <Today />
      </section>
      <TaskAdder />
      <section className='main'>
        <TaskList />
      </section>
    </main>
  )
}

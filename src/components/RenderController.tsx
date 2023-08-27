// import useFilter from 'src/hooks/useFilter'

export default function RenderController() {
  // const { filter, setFilter } = useFilter()
  const filter = 'Active'
  const setFilter = (algo: string) => undefined

  const activeStyle = 'text-slate-100 bg-slate-500'
  const desactiveStyle = 'text-slate-500'

  const f1 = () => setFilter('All')
  const f2 = () => setFilter('Active')
  const f3 = () => setFilter('Completed')

  return (
    <div className='flex gap-1'>
      <button onClick={f1} className={`rounded-full px-2 ${filter === 'All' ? activeStyle : desactiveStyle}`}>
        All
      </button>
      <button onClick={f2} className={`rounded-full px-2 ${filter === 'Active' ? activeStyle : desactiveStyle}`}>
        Active
      </button>
      <button onClick={f3} className={`rounded-full px-2 ${filter === 'Completed' ? activeStyle : desactiveStyle}`}>
        Completed
      </button>
    </div>
  )
}

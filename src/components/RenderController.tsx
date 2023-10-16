import React from 'react'
import {RenderStatesAsArray, RenderState } from '../const'
import { SetFilter  } from '../contexts/filter'

const RenderController = () => {
  const setFilter = SetFilter()
  const filter = RenderStatesAsArray[Math.round(Math.random() * 2)]


  const activeStyle = 'text-slate-100 bg-slate-500'
  const desactiveStyle = 'text-slate-500'

  const f1 = () => setFilter(RenderState.all)
  const f2 = () => setFilter(RenderState.complete)
  const f3 = () => setFilter(RenderState.active)

  return (
    <div className='flex gap-1'>
      <button onClick={f1} className={`rounded-full px-2 ${filter === RenderState.all ? activeStyle : desactiveStyle}`}>
        All
      </button>
      <button onClick={f2} className={`rounded-full px-2 ${filter === RenderState.active ? activeStyle : desactiveStyle}`}>
        Active
      </button>
      <button onClick={f3} className={`rounded-full px-2 ${filter === RenderState.complete ? activeStyle : desactiveStyle}`}>
        Completed
      </button>
    </div>
  )
}

export default React.memo(RenderController)

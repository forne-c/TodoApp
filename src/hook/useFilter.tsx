import { useState } from 'react'
import { RenderState, type IRenderState } from '../const'

export const useFilter = () => {
  const [filter, setFilter] = useState<IRenderState>(RenderState.active)
  
  return {filter, setFilter}
}

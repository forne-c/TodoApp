export const RenderState = {
  complete :'Completed',
  active :'Active',
  all :'All'
} as const

export type IRenderState = typeof RenderState[keyof typeof RenderState] 
// const a:values = 'Active' 
export const RenderStatesAsArray = Object.values(RenderState)  
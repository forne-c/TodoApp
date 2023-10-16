import { SetStateAction, createContext, useContext } from "react"
import { IRenderState } from "../const"
import { useFilter } from "../hook/useFilter"

const {filter, setFilter} = useFilter()
const FilterContext = createContext<IRenderState | null>(null)
const SetFilterContext = createContext<React.Dispatch<SetStateAction<IRenderState>>>(setFilter)

export const Filter = () => {
  return useContext(FilterContext)
}

export const SetFilter = () => {
  return useContext(SetFilterContext)
}

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  return (
  <FilterContext.Provider value={filter}>
    <SetFilterContext.Provider value={setFilter}>
      {children}
    </SetFilterContext.Provider>
  </FilterContext.Provider>
  )
}

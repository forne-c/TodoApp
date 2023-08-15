import React, { useRef } from 'react'
import { useTasksDispatch } from '../contexts/task'

export const TaskAdder = () => {
  const controller = useTasksDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const inputName = 'NewTodo'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputRef.current === null) return
    const inputValue = inputRef.current.value
    if (inputValue.trim() === '') return
    controller?.added(inputValue.trim())
    inputRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name={inputName} ref={inputRef} className='new-todo' autoFocus placeholder='What needs to be done' />
      <button></button>
    </form>
  )
}

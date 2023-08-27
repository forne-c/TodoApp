import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Is rendering "App"', async () => {
  test('App', () => {
    render(<App />)
    expect(screen.getByText('df')).toBeDefined()
  })
  // test('sumar dos numeros', () => {
  //   render(
  //     <Algo title='Titulo'>
  //       <p>No se que es esto</p>
  //     </Algo>
  //   )
  //   expect(screen.getByText('Titulo')).toBeDefined()
  // })
  // test('Is rendering Task component', () => {
  //   render(
  //     <TaskContextProvider>
  //       <Task id='1-2-3-4-5' completed title='Tarea' />
  //     </TaskContextProvider>
  //   )
  //   expect(screen.queryByText(/tarea/i)).toBeDefined()
  // })
})

export default function Today() {
  const date = new Date()
  const today = date.toDateString()

  return <h2 className='font-medium text-gray-600 text-3xl'>{today}</h2>
}

type Props = {
  children: React.ReactNode
}

export const Background: React.FC<Props> = ({ children }) => {
  return (
    <div className='justify-center pt-4 min-h-screen font-sans bg-gradient-to-r from-orange-300 via-yellow-200 to-teal-200'>{children}</div>
  )
}

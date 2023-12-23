import StarSVG from 'src/components/StarSVG'

export default function App() {
  return (
    <div className='container bg-gray-300'>
      <h1 className='text-center text-3xl font-bold text-white'>App</h1>
      <StarSVG />
      <StarSVG color={'yellow'} size={9} />
    </div>
  )
}

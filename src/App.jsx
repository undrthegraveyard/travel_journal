import './App.scss'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

export default function App() {
  const arr = data.map(item => (
    <Card 
      key={item.id}
      item={item}
    />
  ))

  return (
    <>
      <Navbar />
      <div className="card-container">
      {arr}
      </div>
    </>
  )
}
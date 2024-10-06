import Globeicon from '../assets/globe-icon.svg'
import '../App.scss'

export default function Navbar() {
  return (
     <section className="navbar">
      <img src={Globeicon} alt="A white colored globe icon representing the earth" />
      <p>my travel journal</p>
     </section>
  )
}

import '../App.scss'
import Locationpinicon from '../assets/location-pin-icon.svg'
// Import all images
import eiffelTower from '../assets/eiffel-tower.jpg'
import greatWall from '../assets/great-wall-of-china.jpg'
import colosseum from '../assets/colosseum.jpg'
import sydneyOpera from '../assets/sydney-opera-house.jpg'

// Create an object to map image names to their imports
const images = {
  'eiffel-tower.jpg': eiffelTower,
  'great-wall-of-china.jpg': greatWall,
  'colosseum.jpg': colosseum,
  'sydney-opera-house.jpg': sydneyOpera,
}

export default function Card(props){
    return(
        <div className="card">
            <div className="card-image">
              <img src={images[props.item.imageUrl]} alt={props.item.title} />
            </div>
            <div className="card-content">
              <div className="card-content-location">
                <img src={Locationpinicon} alt="A red colored globe icon representing the location" />
                <p>{props.item.location}</p>
                <button><a href={props.item.googleMapsUrl}>View on Google Maps</a></button>
              </div>
              <h1>{props.item.title}</h1>
              <h2>{props.item.startDate} - {props.item.endDate}</h2>
              <p>{props.item.description}</p>
            </div>
        </div>
    )
}


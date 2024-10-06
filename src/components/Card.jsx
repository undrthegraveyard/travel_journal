import '../App.scss'
import Locationpinicon from '../assets/location-pin-icon.svg'

export default function Card(props){
    return(
        <div className="card">
            <div className="card-image">
              <img src={`/src/assets/${props.item.imageUrl}`} />
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


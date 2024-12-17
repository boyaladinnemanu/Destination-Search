// Write your code here
import './index.css'

const DestinationItem = props => {
  const {searchresult} = props
  const {name, imgUrl} = searchresult
  return (
    <li className="list-item">
      <img src={imgUrl} className="image" alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem

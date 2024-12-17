// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {userdetails: ''}

  searchInput = event => {
    this.setState({
      userdetails: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {userdetails} = this.state

    const results = destinationsList.filter(each =>
      each.name.toLowerCase().includes(userdetails.toLowerCase()),
    )

    return (
      <div className="main-bg">
        <h1 className="heading">Destination Search</h1>
        <div className="search">
          <input
            type="search"
            onChange={this.searchInput}
            value={userdetails}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="sub-cont">
          {results.map(eachuser => (
            <DestinationItem searchresult={eachuser} key={eachuser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

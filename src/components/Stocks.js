import React from 'react'
import axios from 'axios'
import _ from 'lodash'

const URL = 'https://qiita.com/api/v2/users/nskij/stocks'

class Stocks extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stock: []
    }
    this.getStocks()
  }

  getStocks(){
    axios
      .get(URL)
      .then((response) => {
        const data = _.map(response.data)
        console.log(data)
        this.setState({
          stock : [...this.state.stock, data[0].title]
        })
      } )
      .catch(() => {
        console.log('error!')
      })
  }

render(){
  return(
    <div className="stocks">
      <p>test</p>
      <div className='title'>{this.state.stock[0]}</div>
    </div>
  )
}

}

export default Stocks
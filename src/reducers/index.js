import _ from 'lodash'
import { GET_QIITA_STOCKS } from '../actions/getstock'

export default (items = {}, action) => {
  switch (action.type){
    case GET_QIITA_STOCKS:
      return _.map(action.response)
    default: 
      return items
  }
}
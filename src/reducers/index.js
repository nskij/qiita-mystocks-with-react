import { GET_QIITA_STOCKS } from '../actions/getstock'

export default (items = {}, action) => {
  switch (action.type){
    case GET_QIITA_STOCKS:
      return action.response
    default: 
      return items
  }
}
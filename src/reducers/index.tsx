import combineReducers from './combineReducer'

import homeReducer, { IHomeState } from '../containers/Home/Home.reducer'

const reducer = combineReducers({ home: homeReducer })

export interface IStore {
  home: IHomeState
}

export default reducer

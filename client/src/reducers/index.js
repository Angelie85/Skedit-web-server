import { combineReducers } from 'redux'
import mainCalendarReducer from './main-calendar'
import ajaxStatusReducer from './common/ajaxStatus'

const MainReducer = combineReducers({
  ajaxStatus: ajaxStatusReducer,
  mainCalendar: mainCalendarReducer
})
export default MainReducer
import { connect } from 'react-redux'
import { setTitle } from "../actions/main-calendar";
import MainCalender from '../components/main-calendar'


function mapStateToProps(state){
  return{
    modalTitle: state.mainCalendar.modalTitle,
  }
}

function mapDispatchToProps(dispatch){
  return{
    setTitle: title=>{dispatch(setTitle(title))}
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(MainCalender)
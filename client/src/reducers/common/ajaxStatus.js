import * as actions from '../../constants/actions'

const init_state={
  ajaxCallCount:'',
  loadingCount:0
}

export default function (state=init_state, action){
  switch(action.type){
    case actions.BEGIN_AJAX_CALL:
      return{...state, loadingCount:state.loadingCount+1}
    case actions.END_AJAX_CALL:
      return{...state, loadingCount:state.loadingCount-1}
    case actions.AJAX_CALL_ERROR:
      return{...state, ajaxError:action.error}
    default:
      return state
  }
}
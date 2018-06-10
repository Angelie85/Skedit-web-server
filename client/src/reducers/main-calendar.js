import * as actions from '../constants/actions'

const init_state={
  modalTitle :''
}

export default function (state=init_state, action){
  switch(action.type){
    case actions.SET_MODAL_TITLE:
      return{...state, modalTitle:action.title}
    default:
      return state
  }
}
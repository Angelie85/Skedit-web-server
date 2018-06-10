import { BEGIN_AJAX_CALL,END_AJAX_CALL,  AJAX_CALL_ERROR } from '../../constants/actions';

export const beginAjaxCall = () => ({ type: BEGIN_AJAX_CALL });
export const endAjaxCall = () =>({type: END_AJAX_CALL})
export const ajaxCallError = () => ({ type: AJAX_CALL_ERROR });


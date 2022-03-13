import mainApi from '../../utils/checkResponse';
import { IIngredient } from '../../utils/types';
import {
  getCreatedOrder,
  getCreatedOrderSuccess,
  getDeleteCreatedOrder,
  getCreatedOrderFailed,
} from '../reducers/ingredient';
import { openCreatedOrder } from '../reducers/modal';
import { AppDispatch } from '../store';


export function sendOrder(ingredientsId) {
  return function (dispatch) {
    dispatch(getCreatedOrder())
    mainApi.sendIngredients(ingredientsId)
      .then(res => {
        if (res && res.success) {
          dispatch(getCreatedOrderSuccess(res))
        } else {
          dispatch(getCreatedOrderFailed())
        }
      })
      .then(res => {
        dispatch(getDeleteCreatedOrder())
      })
      .then(res => {
        dispatch(openCreatedOrder())
      })
      .catch(err =>
        dispatch(getCreatedOrderFailed())
      )
  }
}

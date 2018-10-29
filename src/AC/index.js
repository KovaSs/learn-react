import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION
} from '../constans'

export const increment = () => ({ 
  type: INCREMENT
})

export const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  payload: {id}
})

export const changeDateRange = dateRange => {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}
export const changeSelection = selected => {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}
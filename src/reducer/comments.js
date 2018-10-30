import {normalizedComments as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constans'

export default (commentsState = defaultArticles, action) => {
  const {type, payload} = action
  switch (type) {
    
  }
  return commentsState
}

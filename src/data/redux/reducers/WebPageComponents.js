import {ADD_PAGE_COMPONENTS,LIST_PAGE_COMPONENTS}  from '../constants'
const WebPageComponetns = (state = [], action) => {
       
    switch (action.type) {
      case ADD_PAGE_COMPONENTS:
        return [
          ...state,
        ]
      case LIST_PAGE_COMPONENTS:
        return{
            ...state
        }
      default:
        return state
    }
  }
  
  export default WebPageComponetns
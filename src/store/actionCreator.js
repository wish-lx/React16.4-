import {TYPE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM} from './actiontypes'

export const typeItem = (value) => ({
      type: TYPE_INPUT_VALUE,
      value
})
export const addItem = () => ({
    type: ADD_ITEM
})
export const deleteItem = (index) => ({
    type: DELETE_ITEM,
    index
})
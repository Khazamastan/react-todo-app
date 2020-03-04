import Actions from '../../constants/actions'

export const changeSelectedUser = dispatch => (payload: Object) => {
  return dispatch({
    type: Actions.HOME.CHANGE_SELECTED_USER,
    payload
  })
}



export const deleteUserTask = dispatch => (payload: Object) => {
  return dispatch({
    type: Actions.HOME.DELETE_USER_TASK,
    payload
  })
}


export const completeTask = dispatch => (payload: Object) => {
  return dispatch({
    type: Actions.HOME.DONE_USER_TASK,
    payload
  })
}

export const editTaskDesc = dispatch => (payload: Object) => {
  return dispatch({
    type: Actions.HOME.EDIT_USER_TASK,
    payload
  })
}

export const addNewTodo = dispatch => (payload: Object) => {
  return dispatch({
    type: Actions.HOME.ADD_USER_TASK,
    payload
  })
}


export const setTaskEditing = dispatch => (payload: Object) => {
  return dispatch({
    type: Actions.HOME.SAVING_USER_TASK,
    payload
  })
}


export const setUserDataFetching = dispatch => (payload: Object) => {
  return dispatch({
    type: Actions.HOME.FETCHING_USER_DATA,
    payload
  })
}

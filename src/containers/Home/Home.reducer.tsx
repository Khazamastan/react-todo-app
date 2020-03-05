import Actions from '../../constants/actions'
import _ from "lodash"
import produce from 'immer';
import {users, todos} from "./constants"
interface IAction {
  type: string
  payload: any
}

export interface IHomeState {
  title: string,
  users: any,
  todos: any,
  selectedUser: any,
  userTodos: object,
  userActions:object,
  usersById: object,
  fetchingUserData: boolean
}

let state:any =  {usersById: null, userTodos: null, userActions: null, selectedUser: null};
if(localStorage.getItem("home")){
  try{
    state = JSON.parse(localStorage.getItem("home") || '').home;
  }
  catch(e){
    console.error(e);
  }
}
const initialState = {
  title: 'Home',
  users: users,
  todos: todos,
  selectedUser: state.selectedUser || null,
  usersById: state.usersById || _.keyBy(users,'id'),
  userTodos: state.userTodos || _.groupBy(todos,'userId'),
  userActions: state.userActions || {},
  fetchingUserData: false
}
const getupdatedUserActions = (state, user, task, change) => {
  let userActions = {...state.userActions};
  userActions[user] = userActions[user] || [];
  userActions[user].push({
    user: 1,
    id: new Date().getTime(),
    task,
    change,
    date : new Date().getTime()
  });

  return userActions;
}
const HomeReducer = (state: IHomeState = initialState, action: IAction) => produce(state, draft => {
  switch (action.type) {
    case Actions.HOME.CHANGE_SELECTED_USER: {
      draft.selectedUser = action.payload;
      draft.fetchingUserData = false;
      break;
    }
    case Actions.HOME.FETCHING_USER_DATA: {
      draft.fetchingUserData = true;
      break;
    }
    case Actions.HOME.ADD_USER_TASK: {
      let selectedUser = action.payload;
      let {todos} = state;
      let todo = {
          "userId": parseInt(selectedUser),
          "id": todos.length,
          "title": "",
          saving: false,
          "completed": false
        };
      todos.push(todo);
      draft.userTodos[selectedUser].push(todo);
      draft.userActions = getupdatedUserActions(state,selectedUser, todo, 'created');
      break;
    }
    case Actions.HOME.DONE_USER_TASK: {
      let {task, selectedUser} = action.payload;
      let userTodo = _.find(draft.userTodos[selectedUser], {id : task.id});
      userTodo.completed = !userTodo.completed;
      const text = userTodo.completed ? 'completed' :  'opened';
      draft.userActions = getupdatedUserActions(state,selectedUser, task, text);
      break;
    }
    case Actions.HOME.SAVING_USER_TASK: {
      let {task, selectedUser, saving} = action.payload;
      let userTodo = _.find(draft.userTodos[selectedUser], {id : task.id});
      userTodo.saving = saving;
      break;
    }
    
    case Actions.HOME.DELETE_USER_TASK: {
      let {task, selectedUser} = action.payload;
      let userTodo = _.find(draft.userTodos[selectedUser], {id : task.id});
      draft.userTodos[selectedUser] = _.reject(state.userTodos[selectedUser], (todo) => todo.id === parseInt(task.id));
      draft.userActions = getupdatedUserActions(state,selectedUser, task, 'deleted');
      userTodo.saving = false;
      break;
    }

    case Actions.HOME.EDIT_USER_TASK: {
      let {task, selectedUser, text} = action.payload;
      let userTodo = _.find(draft.userTodos[selectedUser], {id : task.id});
      userTodo.title = text;
      draft.userActions = getupdatedUserActions(state,selectedUser, task, 'edited');
      userTodo.saving = false;
      break;
    }

    default: {

    }
  }
});

export default HomeReducer

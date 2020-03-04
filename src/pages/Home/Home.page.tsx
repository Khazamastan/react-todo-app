import { compose } from 'recompose'

import connect from '../../context/connect'
import HomeView from './Home.view'
import { IStore } from '../../reducers'
import { 
  changeSelectedUser,
  deleteUserTask,
  completeTask,
  editTaskDesc,
  addNewTodo,
  setTaskEditing,
  setUserDataFetching
} from './Actions'

const mapStateToProps = (store: IStore) => ({
  title: store.home.title,
  userTodos: store.home.userTodos,
  users: store.home.users,
  selectedUser: store.home.selectedUser,
  userActions: store.home.userActions,
  usersById: store.home.usersById,
  fetchingUserData: store.home.fetchingUserData
})

const mapDispatchToProps = {
  changeSelectedUser,
  deleteUserTask,
  completeTask,
  onEditTask: editTaskDesc,
  addNewTodo,
  setTaskEditing,
  setUserDataFetching
}

const enhance = compose<any, any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(HomeView)

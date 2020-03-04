import React, {useState} from 'react'
import Select from "../../components/Select"
import {SelectWrapper, ActionWrapper} from "./Wrapper";
import ListView from "./ListView.view";
const buttonClass = 'bg-orange-600 hover:bg-orange-500 text-white text-sm hover:text-white py-1 px-4 border border-orange-500 hover:border-transparent rounded-md mr-3'
const TIMEOUT = 1000;
const HomeView = ({ 
  users,
  userTodos,
  userActions,
  selectedUser,
  changeSelectedUser,
  deleteUserTask,
  completeTask,
  onEditTask,
  addNewTodo,
  usersById,
  setTaskEditing,
  fetchingUserData,
  setUserDataFetching
}) => {
  let options = [{id: '', name: 'Select User'},...users];
  let [view, setView] = useState('list');
  const isActive = 'bg-orange-900'
  const onRemoveTask= (task) => {
    setTaskEditing({task, selectedUser, saving: true});
    setTimeout(() => {
      deleteUserTask({task, selectedUser});
    },TIMEOUT);
  }
  const onDoneTask = (task) => {
    setTaskEditing({task, selectedUser, saving: true});
    completeTask({task, selectedUser});
    setTimeout(() => {
      setTaskEditing({task, selectedUser, saving: false});
    }, TIMEOUT)
  }

  const onEditTaskDesc = (task,text) => {
    setTaskEditing({task, selectedUser, saving: true});
    setTimeout(() => {
      onEditTask({task, text, selectedUser});
    }, TIMEOUT)
  }

  const fetchNewUser = (e) => {
    setUserDataFetching(true);
    setTimeout(() => {
      changeSelectedUser(e);
    }, TIMEOUT)
  }

  const addNewTask = () => {
    addNewTodo(selectedUser);
  }

  let listViewRender:any = '';
  if(selectedUser){
    listViewRender = (<ListView
      view={view}
      usersById={usersById}
      onRemoveTask={onRemoveTask}
      onDoneTask={onDoneTask}
      selectedUser={selectedUser}
      onEditTaskDesc={onEditTaskDesc}
      userTodos={userTodos}
      userActions={userActions}
   />)
  }

  return (
    <div>
      <SelectWrapper>
        <Select options={options} onChange={fetchNewUser} selected={selectedUser}></Select>
      </SelectWrapper>
      {(selectedUser && !fetchingUserData) ? 
      <ActionWrapper>
          <p>
            <button  className={`${buttonClass} ${(view == 'list' ? isActive : '')}`} onClick={() => setView('list')}>
              Todos
            </button>
            <button className={`${buttonClass} ${(view == 'history' ? isActive : '')}`} onClick={() => setView('history')}>
              History
            </button>
          </p>
          {view == 'list' ? <button className={`${buttonClass}`} onClick={() => addNewTask()}>
              Add TODO
          </button> : null
        }
      </ActionWrapper> : null
    }
    <div className="pt-5">
      {!fetchingUserData ? listViewRender : <div className="loader large"></div>}
    </div>
    </div>
  )
}

export default HomeView

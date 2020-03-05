import React from 'react';
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import HistoryItem from '../../components/HistoryItem'

export default ({onEditTaskDesc,onDoneTask, onRemoveTask,userActions,selectedUser, view, userTodos, usersById}) => {
    switch(view){
        case 'list':{
            return <List  
                    component={ListItem}
                    onEditTask={onEditTaskDesc}
                    completeTask={onDoneTask}
                    onDelete={onRemoveTask}
                    items={userTodos[selectedUser]}/>
        }
        case 'history':{
            if(!userActions[selectedUser] || !userActions[selectedUser].length) {return <p>No History found</p>}
            return <List component={HistoryItem}
                        onDelete={onRemoveTask}
                        usersById={usersById}
                        items={userActions[selectedUser] || []}/>
        }
        case 'new':{
            return <p></p>
        }
        default:{
            return null;
        }
    }

    return null;
}
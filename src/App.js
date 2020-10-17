import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ListTasks from './screen/listTask/listTasks.component';
import CreateTask from './screen/createTask/createTask.component';
import BulkDelete from './screen/bulkDelete/bulkDelete.component';

const App = () => {
  const history = useHistory();
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify([]));
    history.push('/list-tasks');
  }, []);
  return (
    <div className="mainContainer">
      <Switch>
        <Route path={['/', '/list-tasks']} exact component={ListTasks} />
        <Route path="/create-task" component={CreateTask} />
        <Route path="/bulk-delete" component={BulkDelete} />
      </Switch>
    </div>
  );
};

export default App;
